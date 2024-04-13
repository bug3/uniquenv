const getUniqueId = require('../lib/get-unique-id');
const CryptoJS = require('crypto-js');

module.exports = (data) => {
    const decryptedData = CryptoJS.AES.decrypt(data, getUniqueId()).toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
        console.error('Failed to parse file');

        return;
    }

    return JSON.parse(decryptedData);
};
