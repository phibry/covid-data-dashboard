import * as d3 from 'd3';
import React, { RefObject, useEffect, useRef } from 'react';

// styles
import './_stackedBar.scss';

type Props = {
  colors: Array<string>;
  data: Array<Data>;
};

type Config = {
  margin: { top: number; right: number; bottom: number; left: number };
  width: number;
  height: number;
  barHeight: number;
  colors: Array<string>;
};

type Data = {
  label: string;
  value: number;
};

const groupData = (data: Array<Data>, total: number) => {
  const percent = d3.scaleLinear().domain([0, total]).range([0, 100]);

  let cumulative = 0;
  const _data = data
    .map((d) => {
      cumulative += d.value;
      return {
        value: d.value,
        cumulative: cumulative - d.value,
        label: d.label,
        percent: percent(d.value),
      };
    })
    .filter((d) => d.value > 0);
  return _data;
};

const drawStackedBarChart = (
  svgRef: RefObject<SVGSVGElement>,
  data: Array<Data>,
  config: Config
) => {
  const { margin, width, height, barHeight, colors } = config;
  const w = width - margin.left - margin.right;
  const h = height - margin.top - margin.bottom;
  const halfBarHeight = barHeight / 2;

  const total = d3.sum(data, (d) => d.value);
  const _data = groupData(data, total);

  const xScale = d3.scaleLinear().domain([0, total]).range([0, w]);

  // svg
  const svgElem = d3.select(svgRef.current);
  svgElem
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 300 100');
  // .append('g')
  // .attr('transform', 'translate(' + margin.left + ',' + margin.right + ')');

  const x = d3
    .scalePoint()
    .domain(['25', '50', '75'])
    .range([w - w * 0.75, w - w * 0.25]);

  svgElem
    .selectAll('rect')
    .data(_data)
    .enter()
    .append('rect')
    .attr('class', 'rect-stacked')
    .attr('x', (d) => xScale(d.cumulative))
    .attr('y', h / 2 - halfBarHeight)
    .attr('height', barHeight)
    .attr('width', (d) => xScale(d.value))
    .style('fill', (d, i) => colors[i]);

  svgElem
    .append('g')
    .attr('transform', 'translate(0, 65)')
    .call(d3.axisBottom(x))
    .call((g) => g.select('.domain').remove());
};

const StackedBar: React.FC<Props> = (props) => {
  const svg = useRef<SVGSVGElement>(null);

  const myConfig: Config = {
    margin: { top: 2, right: 0, bottom: 20, left: 0 },
    width: 300,
    height: 100,
    barHeight: 50,
    colors: props.colors,
  };

  useEffect(() => {
    drawStackedBarChart(svg, props.data, myConfig);
  }, [svg]);

  return (
    <div>
      <svg className='stacked-bar-chart' ref={svg}></svg>
    </div>
  );
};

export default StackedBar;
