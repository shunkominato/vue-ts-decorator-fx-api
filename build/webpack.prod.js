const config = require('./config')
const merge = require('webpack-merge')

module.exports = merge(config, {
    mode: 'production',
    output: {
        publicPath: '/dist/'
    }
})