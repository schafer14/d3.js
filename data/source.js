var width = 1200;
var height = 800;

var canvas = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

d3.json("data.json", function(error, graph) {
	var widthScale = d3.scale.linear()
		.domain([0, 150])
		.range([0, width])

	var colorScale = d3.scale.linear()
		.domain([50, 150])
		.range(["red", "blue"]);

	var bubble = canvas.selectAll(".bubble")
	    .data(graph.bubbles)
	    .enter().append("circle")
      		.attr("class", "bubble")
      		// .attr("r", function(d) { return widthScale(d.size) })
      		.attr("r", function(d) { return d.size })
      		.attr("cx", function(d, i) {return d.size * (i + 1)})
      		.attr("cy", 250)
      		.style("fill", function(d) { return colorScale(d.size); });

	var title = bubble.append("title")
	    .text(function(d) { return d.name; });
});


