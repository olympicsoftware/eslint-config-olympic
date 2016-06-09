module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/best-practices',
        './rules/style',
    ].map(require.resolve),
};
