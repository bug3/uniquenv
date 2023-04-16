const encrypt = require('./encrypt');
const decrypt = require('./decrypt');
const fs = require('../lib/file-system');

const create = (file, data) => {
    fs.write(file, encrypt(data));
};

const parse = (file) => decrypt(fs.read(file));

module.exports.create = create;
module.exports.parse = parse;
