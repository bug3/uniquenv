const encrypt = require('./encrypt');
const decrypt = require('./decrypt');
const prompt = require('prompt-sync')();
const fs = require('../lib/file-system');

const create = (file, data) => {
    fs.write(file, encrypt(data));
};

const parse = (file) => {
    if (!fs.existsSync(file)) {
        console.error(`${ file } not found`);

        return;
    }

    return decrypt(fs.read(file));
};

const input = (text) => prompt(text);

const password = (text) => prompt(text, { echo: '*' });

module.exports.create = create;
module.exports.parse = parse;
module.exports.input = input;
module.exports.password = password;
