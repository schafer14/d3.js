var data = [10, 20, 30, 50, 65, 50, 20, 25, 15, 35, 45, 20, 60, 15];

var colorScale = d3.scale.linear()
	.domain([0, 50]).range(['#00E9FA', '#7D00FA'])

function render(data) {

	// Enter
	d3.select("#figure").selectAll("div.h-bar")
		.data(data)
		.enter()
			.append('div')
				.attr('class', 'h-bar')
			.append('span');

	// Update
	d3.select('#figure').selectAll('div.h-bar')
		.data(data)
			.style('width', function(d) {
				return (d * 3) + 'px';
			})
			.style('background-color', function(d, i) {
				if (data.length - i == 5) return 'red';
				return colorScale(d);
			})
			.select('span')
				.text(function(d) {
					return d;
				});

	// Exit
	d3.select('#figure').selectAll('div.h-bar')
		.data(data)
		.exit()
			.remove();
} 

setInterval(function() {
	if (data.length >25) data.shift();
	data.push(Math.floor(Math.random() * 50));
	render(data);
}, 1000);

render(data);
