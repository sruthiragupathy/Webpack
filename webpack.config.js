const path = require('path');

const webpackConfig = {
	entry: path.resolve(__dirname, 'src', 'index.js'),

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},

	mode: 'production',
};

module.exports = webpackConfig;
