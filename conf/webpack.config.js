const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const path = require("path")

module.exports = {
    entry: {
        app: ["./src/app/main.ts"]
    },

    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/assets/",
        filename: "app.js"
    },

    resolve: {
        extensions: ['.js', '.ts', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CompressionPlugin()
    ]
}