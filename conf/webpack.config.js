const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const StyleLintPlugin = require('stylelint-webpack-plugin')
const path = require("path")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = function (env) {
    var isProd = !!(env && env.prod);

    var config = {
        entry: {
            app: ["./src/app/main.ts"]
        },

        output: {
            path: resolve('dist'),
            publicPath: "/",
            filename: "app.js"
        },

        resolve: {
            extensions: ['.js', '.ts', '.html'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                "@": resolve('src')
            }
        },

        devtool: 'eval-source-map',

        module: {
            rules: [
                {
                    enforce: 'post',
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    enforce: 'post',
                    test: /\.scss$/,
                    use: ['style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    ]
                },
                {
                    enforce: 'pre',
                    test: /\.scss$/,
                    loader: "sass-loader",
                    options: {
                        includePaths: ["./node_modules/@ulaval/modul-components/dist/styles"]
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'vue-template-loader',
                    exclude: resolve('src/index.html'),
                    options: {
                        scoped: true
                    }
                },
                {
                    test: /\.ts$/,
                    enforce: 'pre',
                    loader: 'tslint-loader',
                    include: [resolve('src'), resolve('tests')],
                    options: {
                        configFile: 'conf/tslint.json',
                        formatter: 'grouped',
                        formattersDirectory: 'node_modules/custom-tslint-formatters/formatters'
                    }
                },
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: resolve('tsconfig.json'),
                        useCache: true
                    }
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        removingTags: ['desc', 'defs', 'style'],
                        removeSVGTagAttrs: true
                    }
                },
                {
                    test: /\.(png|jpe?g|gif)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: resolve('src/index.html'),
                inject: 'body'
            }),
            new StyleLintPlugin({
                configFile: 'conf/stylelint.json',
                emitErrors: false
            })
        ]
    };

    if (isProd) {

        // To get good stack traces without providing source code
        config.devtool = 'nosources-source-map';

        // To generate .gz files
        config.plugins.push(new CompressionPlugin());

        // To disable caching with awesome-typescript-loader
        config.module.rules.forEach(function (rule) {
            if (rule.loader == 'awesome-typescript-loader') {
                rule.options.useCache = false;
            }
        })

    }

    return config;
}
