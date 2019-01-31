const StyleLintPlugin = require('stylelint-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    lintOnSave: true,

    chainWebpack: config => {
        config.module.rules.delete("svg");
        config.module.rules.delete("scss");
    },

    configureWebpack: {
        resolve: {
            alias: {
                "@modul": require("path").resolve(__dirname, "node_modules/@ulaval/modul-components/dist")
            }
        },
        plugins: [
            new StyleLintPlugin({
                configFile: '.stylelintrc',
                emitErrors: true
            }),
            new CompressionPlugin()
        ],
        module: {
            rules: [{
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                enforce: 'pre',
                test: /\.scss$/,
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    includePaths: ["./node_modules/@ulaval/modul-components/dist/styles"]
                }
            },
            {
                enforce: 'post',
                test: /\.scss$/,
                use: ['style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
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
                test: /.html$/,
                loader: "vue-template-loader",
                include: [
                    /node_modules/,
                    /src/
                ],
                options: {
                    scoped: true
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
            }
            ]
        },
    },
    baseUrl: undefined,
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: true,
    productionSourceMap: false,
    parallel: undefined,
    css: undefined
};
