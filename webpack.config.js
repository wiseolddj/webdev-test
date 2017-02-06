const path = require('path');
const webpack = require('webpack');
const config = require('./config/config');

// env
const buildDirectory = './public/';

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./app/client' // Client appʼs entry point
	],
	devServer: {
		hot: true,
		inline: true,
		port: 8080,
		historyApiFallback: true,
		proxy: {
			'*': 'http://127.0.0.1:' + (config.PORT || 3000) // proxy requests to the server in dev mode
		},
		host: '127.0.0.1'
	},
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
			loader: 'babel-loader',
			options: {
				presets: ['react', 'es2015', 'stage-0'],
				babelrc: false
			}

		}]
	}
};
