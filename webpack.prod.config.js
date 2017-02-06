const path = require('path');
const webpack = require('webpack');
const config = require('./config/config');

// env
const buildDirectory = './public/';

module.exports = {
	entry: [
		'./app/client' // Client appʼs entry point
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		path: path.resolve(buildDirectory),
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'

	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules|bower_components/,
			loader: 'babel-loader'


		}]
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
			},
			output: {
				comments: false,
			}
		})
	]
};
