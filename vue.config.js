/* eslint-disable */
const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,

    configureWebpack: {
        module: {
            rules: [
                {
                    // Cette regle permet de voir les code source de modul
                    // directement dans le debugger de chrome
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre',
                    exclude: [
                        resolve('node_modules/froala-editor/js/languages'),
                    ],
                },
            ],
        },
        plugins: [
            // Pour enlever les locale inutile de moments dans le bundle final
            new ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca|fr-ca/),
        ],
    },
};
/* eslint-enable */
