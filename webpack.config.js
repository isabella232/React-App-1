const path = require('path');
const HtmlsWebpackPlugin = require('htmls-webpack-plugin')
const HappyPack = require('happypack');
const ejs = require('ejs');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
let jses = "bundle.js";
let csses = "App.css";
module.exports = smp.wrap({
    entry: './src/index.js',
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, use: ['cache-loader', 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['cache-loader','babel-loader', 'happypack/loader'],
            }
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
			     src: 'src/index.ejs',
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
});
