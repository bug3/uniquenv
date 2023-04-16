const getUniqueId = require('../lib/get-unique-id');
const CryptoJS = require('crypto-js');

module.exports = (data) => {
    const decryptedData = CryptoJS.AES.decrypt(data, getUniqueId());

    return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
};
