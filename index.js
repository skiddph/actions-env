const { isUpper, strToUpper, removePrefix } = require('./src/String');
const core = require('@actions/core');
const fs = require('fs');

const file = core.getInput('file');
const prefix = strToUpper(core.getInput('prefix'));
const env = Object.keys(process.env)
    .filter(key => key.startsWith(prefix) && isUpper(key))
    .map(key => `${removePrefix(key, prefix)}=${process.env[key]}`)
    .join('\n');

fs.writeFile(file, env, err => {
    if (err) {
        core.setFailed(err.message);
    }
});