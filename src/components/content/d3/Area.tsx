import * as d3 from 'd3';
import React, { RefObject, useEffect, useRef } from 'react';

// util
import { formatBigNumbers } from '../../../utils/numberFormatter';
// types
import { openDataSwissCovidData } from '../../../utils/types/covidOpenDataSwissTypes';

// styles
import './_area.scss';

type Datum = { date: Date; value: number };
type Data = Array<Datum>;

type Props = {
  data: Array<openDataSwissCovidData>;
};

const drawAreaChart = (
  svgRef: RefObject<SVGSVGElement>,
  dataArray: Array<Datum>,
  pValueRef: RefObject<HTMLParagraphElement>,
  pDateRef: RefObject<HTMLParagraphElement>
) => {
  const svgElem = d3.select(svgRef.current);

  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 2, bottom: 2, left: 2 },
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
    const mouse = d3.pointers(event);

    const [xCoord, yCoord] = mouse[0];

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
      .attr('stroke', '#B48EAD')
      .attr('stroke-width', '3px');

    svgElem
      .selectAll('.hoverPoint')
      .attr('cx', xScale(mouseDateSnap))
      .attr('cy', yScale(mouseValue))
      .attr('r', '7')
      .attr('fill', '#B48EAD');

    const readableDate = mouseDateSnap.toLocaleDateString('de-CH', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });

    if (pValueRef.current) {
      pValueRef.current.innerText = formatBigNumbers(mouseValue);
    }

    if (pDateRef.current) {
      pDateRef.current.innerText = 'Last 60 days: ' + readableDate;
    }
  };

  const mouseOut = (event: React.MouseEvent) => {
    svgElem.selectAll('.hoverLine').attr('stroke', 'transparent');

    svgElem.selectAll('.hoverPoint').attr('fill', 'transparent');

    if (pValueRef.current) {
      pValueRef.current.innerText = formatBigNumbers(
        dataArray[dataArray.length - 1].value
      );
    }
    if (pDateRef.current) {
      pDateRef.current.innerText =
        'Last 60 days: ' +
        dataArray[dataArray.length - 1].date.toLocaleDateString('de-CH', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        });
    }
  };

  // svg
  // svgElem.attr('width', width).attr('height', height);
  svgElem
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 200 50');

  // area
  svgElem
    .append('path')
    .datum<Data>(dataArray)
    .attr('d', area)
    .attr('stroke', '#B48EAD')
    .attr('stroke-width', '3px')
    .attr('fill', '#d8bed3');

  // interactivity
  svgElem.append('line').classed('hoverLine', true);
  svgElem.append('circle').classed('hoverPoint', true);
  // svgElem.append('text').classed('hoverText', true);

  svgElem
    .append('rect')
    .attr('fill', 'transparent')
    .attr('x', 0)
    .attr('y', 0)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 200 50');
  // .attr('width', width)
  // .attr('height', height);

  svgElem.on('mousemove ' + 'touchmove', mouseMove);
  svgElem.on('mouseout touchend', mouseOut);
};

const Area: React.FC<Props> = (props) => {
  const svg = useRef<SVGSVGElement>(null);
  const pValue = useRef<HTMLParagraphElement>(null);
  const pDate = useRef<HTMLParagraphElement>(null);

  const subSet = props.data
    .slice(props.data.length - 60, props.data.length - 1)
    .map((dataPoint) => {
      return {
        date: new Date(dataPoint.datum),
        value: dataPoint.entries,
      };
    });

  useEffect(() => {
    drawAreaChart(svg, subSet, pValue, pDate);
  }, [svg]);

  return (
    <div className='area-chart-container'>
      <p className='card-label area-p-date' ref={pDate}>
        Last 60 days:{' '}
        {new Date(props.data[props.data.length - 2].datum).toLocaleDateString(
          'de-CH',
          {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          }
        )}
      </p>
      <p className='area-p-value' ref={pValue}>
        {formatBigNumbers(props.data[props.data.length - 2].entries)}
      </p>

      <svg className='area-chart' ref={svg}></svg>
    </div>
  );
};

export default Area;
