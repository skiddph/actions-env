const { isUpper, strToUpper, removePrefix } = require('./src/String');
const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

const file = core.getInput('file');
const prefix = strToUpper(core.getInput('prefix'));
const env = Object.keys(process.env)
    .filter(key => key.startsWith(prefix) && isUpper(key))
    .map(key => `${removePrefix(key, prefix)}="${process.env[key]}"`)
    .join('\n');

const workspace = process.env.GITHUB_WORKSPACE;
const filePath = path.join(workspace, file);

fs.writeFile(filePath, env, err => {
    if (err) {
        core.setFailed(err.message);
    } else {
        core.setOutput('created: ', file);
    }
});
