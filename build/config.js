/** Node.js 環境変数宣言 **/
process.env.BASE_URL = 'src'

/** Node.js 環境変数宣言 **/

const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const PrettierPlugin = require('prettier-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const rules = [
    {
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.ts$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
    },
    // Sassファイルの読み込みとコンパイル
    {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                scss: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
        },
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                // Babel のオプションを指定する
                options: {
                    presets: [
                        // プリセットを指定することで、ES2019 を ES5 に変換
                        '@babel/preset-env',
                    ],
                },
            },
        ],
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: (resourcePath) => {
                if (/.*\\assets\\images\\/) {
                    let filePath = resourcePath.replace(/.*\\assets\\images\\/, '')
                    filePath = filePath.replace(/\\/g, '/')
                    return filePath
                }
            },
            outputPath: 'assets/images',
            publicPath: (url, resourcePath /* context */) => {
                if (/assets\\images/.test(resourcePath)) {
                    const filePath = url.replace('src/assets/images/', '')
                    if (process.env.NODE_ENV === 'development') {
                        return `/${process.env.BASE_URL}/assets/images/${filePath}`
                    }
                    return `/${process.env.BASE_URL}/dist/assets/images/${filePath}`
                }
            },
        },
    },
]

/* Basic Configurations */
module.exports = {
    entry: {
        bundle: './src/main.ts',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules,
    },
    cache: true,
    resolve: {
        // Webpackで利用するときの設定
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            '@atoms': path.resolve(__dirname, '../src/components/atoms'),
            '@molecules': path.resolve(__dirname, '../src/components/molecules'),
            '@organisms': path.resolve(__dirname, '../src/components/organisms'),
        },
        extensions: ['.js', '.ts', '.vue', '.json'],
    },
    plugins: [
        new VueLoaderPlugin(),
        new PrettierPlugin(),
        new DefinePlugin({
            'process.env': {
                BASE_URL: JSON.stringify(process.env.BASE_URL),
            },
        }),
        new CleanWebpackPlugin(),
    ],
}
