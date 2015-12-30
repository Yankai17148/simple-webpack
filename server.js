'use strict'

var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:9090", "webpack/hot/dev-server");

config.plugins.push(new webpack.HotModuleReplacementPlugin());


var app = new devServer(webpack(config), {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
	hot: true,
	inline: true
});
app.listen(9090, '0.0.0.0', function(err, result) {
	console.log('http://localhost:9090');
	if (err) {
		console.log(err);
	};
})