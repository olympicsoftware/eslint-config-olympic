const bestPractices = require('../rules/best-practices');
const style = require('../rules/style');

module.exports = function extendRules(eslintConfig) {
    Object.assign(eslintConfig.rules, bestPractices.rules, style.rules);

    return eslintConfig;
};
