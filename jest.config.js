module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx'
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.html(\\?style=\\..+)?$": "<rootDir>/tests/jest/vue-template-transformer.js",
        '^.+\\.js?$': 'babel-jest'
    },
    moduleNameMapper: {
        "^(.+\\.html)(\\?style=\\..+)?$": "$1",
        "\\.min\\.(css|less|sass|scss)|\\.svg$": "<rootDir>/tests/jest/jest-ignore.js"
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    testMatch: [
        '**/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    transformIgnorePatterns: [
        "node_modules/(?!(@ulaval/modul-components)/)"
    ],
    setupFiles: [
        "<rootDir>/tests/polyfills.js",
        "<rootDir>/tests/setup.ts"
    ],
};
