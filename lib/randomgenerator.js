"use strict";

const Crypto = require("crypto");

module.exports = {
    getRandomString: () => Crypto.randomBytes(16).toString("hex")
}