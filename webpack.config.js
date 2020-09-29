const path = require('path');
const webpack = require('webpack');
const ip = require('ip');

PLUGINS = [
    new webpack.HotModuleReplacementPlugin()
];

module.exports = {
    devServer: {
        disableHostCheck: true,
        hotOnly: true
    },
    entry: {
        build: './src/index.js'
    },
    output: {
        globalObject: 'this',
        path: __dirname,
        filename: 'build/[name].js'
    },
    plugins: PLUGINS,
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'aframe-super-hot-loader']
            },
            {
                test: /\.json/,
                exclude: /(node_modules)/,
                type: "javascript/auto",
                use: 'json-loader'
            },
            {
                test: /\.html/,
                exclude: /(node_modules)/,
                use: [
                    'aframe-super-hot-html-loader', //It is used to load html files with <require path="..."></require>
                    {
                        loader: 'super-nunjucks-loader',
                        options: {
                            globals: {
                                DEBUG_LOG: !!process.env.DEBUG_LOG,
                                DEBUG_KEYBOARD: !!process.env.DEBUG_KEYBOARD,
                                DEBUG_INSPECTOR: !!process.env.DEBUG_INSPECTOR,
                                HOST: ip.address(),
                                IS_PRODUCTION: process.env.NODE_ENV === 'production'
                            },
                            path: path.resolve(__dirname, 'src')
                        }
                    },
                    {
                        loader: 'html-require-loader',
                        options: {
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')]
    }
}