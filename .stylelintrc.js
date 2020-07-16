module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss', 'stylelint-prettier'],
    processors: [['@mapbox/stylelint-processor-arbitrary-tags']],
    rules: {
        'prettier/prettier': true,
        'scss/dollar-variable-pattern': '^mpo',
        'scss/selector-no-redundant-nesting-selector': true,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
            },
        ],
        'no-empty-source': null,
    },
};
