module.exports = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    printWidth: 100,
    singleQuote: false,
    overrides: [
        {
            files: "*.vue",
            options: {
                tabWidth: 2,
                printWidth: 100,
            },
        },
    ],
};
