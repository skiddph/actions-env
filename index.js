const { strToUpper } = require('./src/String');
const core = require('@actions/core');
const fs = require('fs');

const file = core.getInput('file');
const prefix = strToUpper(core.getInput('prefix'));

const env = core.getInput('env');

fs.writeFile(file, env, err => {
    if (err) {
        core.setFailed(err.message);
    }
});