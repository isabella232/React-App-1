const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlsWebpackPlugin = require('htmls-webpack-plugin')
const HappyPack = require('happypack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: ['babel-loader', 'happypack/loader'] }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 8080,
    },
    plugins: [
        //new HtmlWebpackPlugin({filename: 'index.html',template: 'src/index.html', inject: true}),
		new HappyPack({
			 loaders: [{
                loader: 'babel-loader',
                options: {cacheDirectory: true }
            }]
		}),
		 new HtmlsWebpackPlugin({
			 htmls: [{
	            src: 'src/index.html',
	            filename: 'index.html',
	        }],
		 }),
		 new HardSourceWebpackPlugin()
    ],
	optimization: {
        minimize: true,
        minimizer: [
		    new TerserPlugin({
				include: /\/includes/,
				test: /\.js(\?.*)?$/i,
			})
		],
    },
	performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}
