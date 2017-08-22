"use strict";

const parseUrl = require("parse-url")

/**
 * parseDbUri
 * Parse database URIs
 *
 * @name parseDbUri
 * @function
 * @param {String} uri The database uri.
 * @returns {Object} The [`parse-url`](https://github.com/IonicaBizau/parse-url) result extended with:
 *
 *    - `database` (String): The database name.
 *    - `user` (String): The username.
 *    - `password` (String): The password.
 *    - `dialect` (String): The dialect (e.g. `mysql`)
 *
 */
module.exports = function parseDbUri (uri) {

    const parsed = parseUrl(uri)
        , userAndPass = parsed.user.split(":")

    parsed.uri = uri
    parsed.database = parsed.pathname.slice(1)
    parsed.user = userAndPass[0] || ""
    parsed.password = userAndPass[1] || ""
    parsed.dialect = parsed.protocol

    return parsed
};
