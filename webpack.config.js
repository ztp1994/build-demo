const path = require('path');
const webpack = require('webpack');
const VueLoader = require('vue-loader');
const fs = require('fs');
const _ = require('lodash');
/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
const ENV = process.env.npm_lifecycle_event;
const isDev = false;
const AppDir = './app/';

const eslintLoader = {
    loader: 'eslint-loader',
    options: {
        fix: false,
        failOnError: true,
        emitWarning: true
    }
};
const babelLoader = {
    loader: 'babel-loader',
    options: _.assign({
        cacheDirectory: '.tmp'
    }, JSON.parse(fs.readFileSync('./.babelrc'), 'utf8'))
};
const lessLoader = [
    'vue-style-loader',
    {
        loader: 'css-loader',
        options: { sourceMap: isDev }
    },
    {
        loader: 'postcss-loader',
        options: { sourceMap: isDev }
    },
    {
        loader: 'less-loader',
        options: {
            sourceMap: isDev
        }
    }
];

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, AppDir, ENV + '/','main.js'),
    output: {
        // path: __dirname,
        path: path.resolve(__dirname,'./dist/' + ENV + '/'),
        filename: 'bundler.js',
        chunkFilename: '[id].js',
        publicPath: './',
        jsonpFunction: 'PJ'
    },
    resolve: {
        modules: [
          './',
          './node_modules'
        ],
        extensions: '.vue .js .styl .css'.split(' '),
        alias: {
            'core-js/library/fn/promise': 'pinkie-polyfill',
            lodash: 'lodash-es',
            underscore: 'lodash-es',
            validators: 'vuelidate/lib/validators',
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                html: 'htmlhint-loader',
                                js: [
                                    babelLoader
                                ],
                                stylus: [
                                    'vue-style-loader',
                                    {
                                        loader: 'css-loader',
                                        options: { sourceMap: isDev }
                                    },
                                    {
                                        loader: 'postcss-loader',
                                        options: { sourceMap: isDev }
                                    },
                                    'stylus-loader'
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // make sure to exclude 3rd party code in node_modules
                exclude: /node_modules/,
                use: [
                    babelLoader
                ]
            },
            {
                test: /\.less$/,
                use: lessLoader
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: isDev }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: isDev }
                    }
                ]
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    // inline files smaller then 10kb as base64 dataURL
                    limit: 10000,
                    // fallback to file-loader with this naming scheme
                    name: '[name]-[hash:8].[ext]'
                }
            },
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoEmitOnErrorsPlugin(),
        new VueLoader.VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    devServer: {
        noInfo: false
    }
};

//console.log(ENV);

module.exports = config;
