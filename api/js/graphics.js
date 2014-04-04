var dataset = [1, 2, 3, 4];

d3.edge = {};

d3.edge.table = function module() {
	var fontSize = 10;
	var fontColor = 'red';

	var dispatch = d3.dispatch('customHover');

	function exports(_selection) {
		_selection.each(function(_data) {
			d3.select(this)
				.append('div')
				.style({
                    "font-size": fontSize + "px",
                    color: fontColor
                })
				.html('HelloWorld: ' + _data)
				.on("mouseover", dispatch.customHover);
		});
	};

	exports.fontSize = function(_x) {
		if (!arguments.length) return fontSize;
		fontSize = _x;
		return this;
	}

	exports.fontColor = function(_x) {
		if (!arguments.length) return fontColor;
		fontColor = _x;
		return this;
	}

	d3.rebind(exports, dispatch, 'on');

	return exports;
};

var table = d3.edge.table().fontSize('20').fontColor('green');

table.on('customHover', function(d, i) {
	console.log('customHover' + d, i)
});

d3.select('#figure')
	.datum(dataset)
	.call(table);