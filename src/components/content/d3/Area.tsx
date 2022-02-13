import * as d3 from 'd3';
// util
import { formatBigNumbers } from '../../../utils/numberFormatter';
// types
import { openDataSwissCovidData } from '../../../utils/types/covidOpenDataSwissTypes';
import React, { RefObject, useEffect, useRef } from 'react';

type Datum = { date: Date; value: number };
type Data = Array<Datum>;

type Props = {
  data: Array<openDataSwissCovidData>;
};

const drawAreaChart = (
  svgRef: RefObject<SVGSVGElement>,
  dataArray: Array<Datum>
) => {
  const svgElem = d3.select(svgRef.current);

  // set the dimensions and margins of the graph
  const margin = { top: 20, right: 2, bottom: 2, left: 2 },
    width = 200,
    height = 50;

  // set the ranges
  const xScale = d3
    .scaleTime()
    .domain(d3.extent(dataArray, (d) => d.date) as Iterable<Date>)
    .range([margin.left, width - margin.right]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataArray, (d) => d.value) as number])
    .range([height - margin.bottom, margin.top]);

  // define the area
  const area = d3
    .area<Datum>()
    .x((d: Datum) => xScale(d.date))
    .y0(height)
    .y1((d: Datum) => yScale(d.value));

  // interactivity
  const mouseMove = (event: React.MouseEvent) => {
    event.preventDefault();
    const mouse = d3.pointer(event);
    const [xCoord, yCoord] = mouse;

    const mouseDate = xScale.invert(xCoord);
    const mouseDateSnap = d3.timeDay.floor(mouseDate);

    if (
      xScale(mouseDateSnap) < margin.left ||
      xScale(mouseDateSnap) > width - margin.right
    ) {
      return;
    }

    const bisectDate = d3.bisector((d: Datum) => d.date).right;
    const xIndex = bisectDate(dataArray, mouseDateSnap, 1);
    const mouseValue = dataArray[xIndex].value;

    svgElem
      .selectAll('.hoverLine')
      .attr('x1', xScale(mouseDateSnap))
      .attr('y1', margin.top)
      .attr('x2', xScale(mouseDateSnap))
      .attr('y2', height)
      .attr('stroke', '#147F90')
      .attr('stroke-width', '2px');

    svgElem
      .selectAll('.hoverPoint')
      .attr('cx', xScale(mouseDateSnap))
      .attr('cy', yScale(mouseValue))
      .attr('r', '7')
      .attr('fill', '#147F90');

    const readableDate = mouseDateSnap.toLocaleDateString('de-CH', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    svgElem
      .selectAll('.hoverText')
      .attr('x', 0)
      .attr('y', 15)
      .text(formatBigNumbers(mouseValue) + ' ' + readableDate);
  };

  // svg
  svgElem.attr('width', width).attr('height', height);

  // area
  svgElem
    .append('path')
    .datum<Data>(dataArray)
    .attr('d', area)
    .attr('stroke', '#147F90')
    .attr('stroke-width', '2px')
    .attr('fill', '#A6E8F2');

  // interactivity
  svgElem.append('line').classed('hoverLine', true);
  svgElem.append('circle').classed('hoverPoint', true);
  svgElem.append('text').classed('hoverText', true);

  svgElem
    .append('rect')
    .attr('fill', 'transparent')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height);

  svgElem.on('mousemove', mouseMove);
};

const Area: React.FC<Props> = (props) => {
  const svg = useRef<SVGSVGElement>(null);

  const subSet = props.data
    .slice(props.data.length - 60, props.data.length - 1)
    .map((dataPoint) => {
      return {
        date: new Date(dataPoint.datum),
        value: dataPoint.entries,
      };
    });

  useEffect(() => {
    drawAreaChart(svg, subSet);
  }, [svg]);

  return <svg id='area-chart' ref={svg}></svg>;
};

export default Area;
