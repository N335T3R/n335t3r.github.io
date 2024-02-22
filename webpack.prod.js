const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanHtmlPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].[contentHash].css'
    }),
    new CleanHtmlPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, //Extract css into files
                    "css-loader", //translates css to JS
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            `...`, //preserves JS minimizer (terser)
            new CssMinimizerPlugin(),
        ],
    },
});