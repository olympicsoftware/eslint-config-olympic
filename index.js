const airbnbEslintConfigBase = require('eslint-config-airbnb-base');

const bestPractices = require('./rules/best-practices');
const style = require('./rules/style');

Object.assign(airbnbEslintConfigBase.rules, bestPractices.rules, style.rules);

module.exports = airbnbEslintConfigBase;
