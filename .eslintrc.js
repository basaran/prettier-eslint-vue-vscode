module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/base"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "space-in-parens": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "no-unexpected-multiline": ["off"],
        "no-unused-vars": ["off"],
        quotes: ["error", "double"],

        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "before"],

        indent: ["error", 4, { SwitchCase: 1 }],

        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: true,
                },
            },
        ],
        "vue/html-quotes": ["error", "double", { avoidEscape: true }],
        "vue/html-indent": [
            "error",
            12,
            {
                attribute: 1,
                baseIndent: 0,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],

        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
