const config = require('./config')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(config, {
    mode: 'development',
    output: {
        publicPath: `/${process.env.BASE_URL}/`,
    },
    devtool: 'inline-source-map',
    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        index: 'index.html',
        inline: true,
        hot: true,
        compress: true,
        progress: true,
        port: 8080,
        before: function (app /* server */) {
            app.get('/', function (req, res) {
                res.redirect(`/${process.env.BASE_URL}/`)
            })
        },
        historyApiFallback: {
            rewrites: [{ from: `/${process.env.BASE_URL}/*`, to: `/${process.env.BASE_URL}/` }],
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
})
