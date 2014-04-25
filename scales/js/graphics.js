var max = 11;
var data = [];

for (var i = 1; i < max; ++i) {
	data.push(i);
}

var linear = d3.scale.linear()
	.domain([1, 10])
	.range([1, 10]);

var linearCapped = d3.scale.linear()
	.domain([1, 10])
	.range([1, 20]);

var pow = d3.scale.pow().exponent(2);

var powCapped = d3.scale.pow()
	.exponent(2)
	.domain([1, 10])
	.range([1, 10]);

var log = d3.scale.log();

var logCapped = d3.scale.log()
	.domain([1, 10])
	.range([1, 10]);

function render(data, scale, selector) {
	d3.select(selector).selectAll('div.cell')
		.data(data)
		.enter()
		.append('div')
		.classed('cell', true);

	d3.select(selector).selectAll('div.cell')
		.data(data)
		.exit()
		.remove();

	d3.select(selector).selectAll('div.cell')
		.data(data)
		.style('display', 'inline-block')
		.text(function(d) {
			return d3.round(scale(d), 2);
		});
}

render(data, linear, '#linear');
render(data, linearCapped, '#linear-capped');
render(data, pow, '#pow');
render(data, powCapped, '#pow-capped');
render(data, log, '#log');
render(data, logCapped, '#log-capped');