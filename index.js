'use strict';

const recommended = require('./configs/recommended');

module.exports = {
  rules: recommended.rules,
  configs: {
    recommended: Object.assign({}, recommended),
  },
};
