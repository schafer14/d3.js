var width = 500;
var height = 500;

var canvas = d3.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

var circle = canvas.append('circle')
	.attr('cx', 250)
	.attr('cy', 250)
	.attr('r', 50)
	.attr('fill', 'red');

var rectangle = canvas.append('rect')
	.attr('x', 400)
	.attr('y', 50)
	.attr('width', 100)
	.attr('height', 50)
	.attr('fill', 'blue');
