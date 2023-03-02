module.exports = {
    root: true,
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    ignorePatterns: ['static/sw.js'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'space-before-function-paren': ['error'],
        'no-debugger': ['error'],
        'no-unused-expressions': ['error'],
        'no-trailing-spaces': ['error'],
        'no-unused-labels': ['error'],
        'no-undef': ['error'],
        eqeqeq: 'error',
        indent: 'off',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1
        }],
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never'
        }],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'template-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': ['warn']
    }
}
