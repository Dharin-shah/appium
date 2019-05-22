const fs = require('fs');
const path = require('path');

/**
 * Print the package version
 *
 */
function setTag () {
  const packageJson = require('../../package.json');
  packageJson.version = process.env.TAG;
  fs.writeFileSync(path.resolve('package.json'), beautify(JSON.stringify(packageJson)));
}

setTag();