var data = [
	{name: 'Javascript', cat:'language', val: 50},
	{name: 'C', cat:'language', val: 33},
	{name: 'Java', cat:'language', val: 34},
	{name: 'Php', cat:'language', val: 65},
	{name: 'Python', cat:'language', val: 14},
	{name: 'Perl', cat:'language', val: 76},
	{name: 'Express', cat:'framework', val: 76},
	{name: 'Sails', cat:'framework', val: 32},
	{name: 'Laravel', cat:'framework', val: 54},
	{name: 'Django', cat:'framework', val: 87},
	{name: 'Sinatra', cat:'framework', val: 7},
	{name: 'MongoDB', cat:'database', val: 67},
	{name: 'CouchDB', cat:'database', val: 73},
	{name: 'MySQL', cat:'database', val: 54},
	{name: 'Neo4j', cat:'database', val: 23},
	{name: 'Postgres', cat:'database', val: 87}
];

function render(data, cat) {
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
				return (d.val* 10) + 'px';
			})
			.select('span')
				.text(function(d) {
					return d.name;
				});

	// Exit
	d3.select('#figure').selectAll('div.h-bar')
		.data(data)
		.exit()
			.remove();

	d3.select('#figure').selectAll('div.h-bar')
		.sort(function(a, b) {
			return a.val > b.val ? -1 : 1;
		});

	d3.select('#figure').selectAll('div.h-bar')
		.filter(function(d, i) {
			return (d.cat == cat);
		})
		.classed('selected', true);
}

render(data);

function select(s) {
	render(data, s);
}