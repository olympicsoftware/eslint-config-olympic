const extendRules = require('./src/extendrules');
const airbnbEslintConfigBase = require('eslint-config-airbnb-base');

module.exports = extendRules(airbnbEslintConfigBase);
