module.exports = {
    extends: [
        'eslint-config-airbnb-base/legacy',
        './rules/best-practices',
        './rules/style',
    ].map(require.resolve),
};
