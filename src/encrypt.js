const getUniqueId = require('../lib/get-unique-id');
const CryptoJS = require('crypto-js');

module.exports = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), getUniqueId()).toString();

    return Buffer.alloc(ciphertext.length, ciphertext, 'utf8');
};
