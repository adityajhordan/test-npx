#! /usr/bin/env node
const child = require('child_process');

const buildCommand = (command) => {
    try {
        console.log('build command in');
        const output = child.execSync(command).toString('utf-8');
        console.log('output : ', output);
        return output;
    } catch (err) {
        console.log('error : ', err);
    }
};
console.log('start process build');
buildCommand('touch test.js');
