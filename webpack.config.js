'use strict'
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: ['./src/main.js'],
		vendors: ['jquery']
	},
	output: {
		path: BUILD_PATH,
		filename: '[name].js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
			{test: /\.(png|jpg)$/, loader: "url?limit=40000"}
		]
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),
		new webpack.ProvidePlugin({$: 'jquery'})
	],
	devtool: "source-map"
}