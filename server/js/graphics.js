var data = [];

function render(data) {
	
	d3.select('#figure').selectAll('div.h-bar')
		.data(data)
		.enter()
		.append('div')
			.attr('class', 'h-bar')
			.append('span');

	d3.select('#figure').selectAll('div.h-bar')
		.data(data)
		.exit()
		.remove();

	d3.select('#figure').selectAll('div.h-bar')
		.style('width', function(d) {
			return (d.size) + 'px';
		})
		.select('span')
			.text(function(d) {
				return d.name;
			});
}

function load() {
	d3.json('http://localhost/d3.js/data/people.json', function(err, json) {
		data = data.concat(json);
		render(data);
		setTimeout(function() {
			render(data.reverse());
		}, 500);
	})
};

load();