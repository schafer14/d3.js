var data = [];

var next = function(x) {
	return 15 + x * x;
};

var newData = function() {
	data.push(next);
	return data;
};

function render () {
	var selection = d3.select('#figure')
		.selectAll('div')
		.data(newData);
	
	selection.enter()
		.append('div')
		.append('span');

	selection.exit()
		.remove();

	// Acts as update becuase select is defined as a function
	selection.attr('class', 'v-bar')
		.style('height', function(d, i) {
			return d(i)+'px';
		})
		.select('span')
			.text(function(d, i) {
				return d(i);
			});
}

setInterval(function() {
	render();
}, 1000);

render();