const packages = require('../package.json');

function getShare() {
  let obj = {};
  Object.keys(packages.dependencies).forEach((key) => {
    obj[key] = {};
    if (/vue(.+)?/.test(key) || ['vue', 'zone.js', 'lodash', 'axios'].includes(key)) {
      obj[key].eager = true;
      obj[key].singleton = true;
    }
    obj[key].requiredVersion = false;
  });
  obj['core-js'] = {
    eager: true,
    requiredVersion: false,
  };
  return obj;
}

module.exports = {
  getShare,
};
