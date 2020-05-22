module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'error',
        'prefer-object-spread': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'no-empty': 'off',
        'no-nested-ternary': 'error',
        'complexity': ['error', 23],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/typedef': [
            'error',
            {
                arrayDestructuring: true,
                arrowParameter: true,
                variableDeclaration: true,
                memberVariableDeclaration: true,
                objectDestructuring: true,
                parameter: true,
                propertyDeclaration: true,
            },
        ],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
            },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
