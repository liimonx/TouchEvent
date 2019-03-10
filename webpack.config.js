const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src/script');
const dirAssets = path.join(__dirname, 'docs');


/**
 * Webpack Configuration
 */
module.exports = {
    entry: {

        bundle: path.join(dirApp, 'TouchEvent ')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV,
            VERSION: JSON.stringify(require("./package.json").version)
        }),

        new HtmlWebpackPlugin({
            template: './docs/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },
        ]
    }
};
