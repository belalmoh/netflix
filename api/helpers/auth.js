const cryptoJs = require('crypto-js');

const encrypt = (value) => cryptoJs.AES.encrypt(value, process.env.SECRET_KEY).toString();

const decrypt = (value) => cryptoJs.AES.decrypt(value, process.env.SECRET_KEY).toString(cryptoJs.enc.Utf8);

module.exports = {
    encrypt,
    decrypt
};