const extendRules = require('./src/extendrules');
const airbnbEslintConfigLegacy = require('eslint-config-airbnb-base/legacy');

module.exports = extendRules(airbnbEslintConfigLegacy);
