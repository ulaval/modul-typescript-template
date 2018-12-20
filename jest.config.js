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
        "^.+\\.html(\\?style=\\..+)?$": "<rootDir>/jest/vue-template-transformer.js",
        '^.+\\.js?$': 'babel-jest'
    },
    moduleNameMapper: {
        "^(.+\\.html)(\\?style=\\..+)?$": "$1",
        "\\.min\\.(css|less|sass|scss)|\\.svg$": "<rootDir>/jest/jest-ignore.js",
        "@\/(.*)": "<rootDir>/src/$1",
        "@modul\/(.*)": "<rootDir>/node_modules/@ulaval/modul-components/dist/$1",
        "@jest\/(.*)": "<rootDir>/jest/$1"
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    testMatch: [
        '**/src/**/*.spec.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    transformIgnorePatterns: [
        "node_modules/(?!(@ulaval/modul-components)/)"
    ],
    setupFiles: [
        "<rootDir>/jest/polyfills.js",
        "<rootDir>/jest/setup.ts"
    ],
};
