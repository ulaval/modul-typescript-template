const { jsWithBabel: tsjPreset } = require('ts-jest/presets');


module.exports = {
    testURL: 'http://localhost/',
    roots: [
        '<rootDir>/src/'
    ],
    transform: {
        ...tsjPreset.transform,
        "^.+\\.html(\\?style=\\..+)?$": "<rootDir>/jest/vue-template-transformer.js"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        "^(.+\\.html)(\\?style=\\..+)?$": "$1",
        "\\.(css|less|sass|scss)$": "<rootDir>/jest/jest-ignore.js",
        "\\.min\\.(css|less|sass|scss)|\\.svg$": "<rootDir>/jest/jest-ignore.js",
        "@\/(.*)": "<rootDir>/src/$1",
        "@modul\/(.*)": "<rootDir>/node_modules/@ulaval/modul-components/dist/$1"
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    testMatch: [
        '**/src/**/*.spec.(js|jsx|ts|tsx)'
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(@ulaval/modul-components)/)"
    ],
    setupFiles: [
        "<rootDir>/jest/polyfills.js",
        "<rootDir>/jest/setup.ts"
    ],
};
