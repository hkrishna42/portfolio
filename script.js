// Update footer year automatically
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// D3 Bar Chart Demo
(function () {
  const container = document.getElementById('viz');
  if (!container || typeof d3 === 'undefined') return;

  const data = [
    { skill: 'Python', value: 95 },
    { skill: 'Spark', value: 85 },
    { skill: 'TensorFlow', value: 80 },
    { skill: 'Databricks', value: 90 },
    { skill: 'LLM Tuning', value: 88 }
  ];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = container.clientWidth - margin.left - margin.right;
  const height = container.clientHeight - margin.top - margin.bottom;

  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.skill))
    .range([0, width])
    .padding(0.2);

  const y = d3
    .scaleLinear()
    .domain([0, 100])
    .nice()
    .range([height, 0]);

  // Axes
  svg
    .append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append('g').call(d3.axisLeft(y));

  // Bars
  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => x(d.skill))
    .attr('y', (d) => y(d.value))
    .attr('width', x.bandwidth())
    .attr('height', (d) => height - y(d.value))
    .attr('fill', getComputedStyle(document.documentElement).getPropertyValue('--clr-primary'));

  const tooltip = d3
    .select(container)
    .append('div')
    .attr('class', 'tooltip');

  svg
    .selectAll('.bar')
    .on('mouseover', function (event, d) {
      d3.select(this).attr('fill', getComputedStyle(document.documentElement).getPropertyValue('--clr-secondary'));
      tooltip
        .style('opacity', 1)
        .html(`${d.skill}: ${d.value}`)
        .style('left', event.offsetX + 20 + 'px')
        .style('top', event.offsetY - 20 + 'px');
    })
    .on('mousemove', function (event) {
      tooltip.style('left', event.offsetX + 20 + 'px').style('top', event.offsetY - 20 + 'px');
    })
    .on('mouseout', function () {
      d3.select(this).attr('fill', getComputedStyle(document.documentElement).getPropertyValue('--clr-primary'));
      tooltip.style('opacity', 0);
    });
})();