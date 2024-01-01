"use strict";

const parseUrl = require("parse-url")
    , path = require("path")

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
 *    - `host` (String): The host.
 *    - `password` (String): The password.
 *    - `dialect` (String): The dialect (e.g. `mysql`)
 *
 */
module.exports = function parseDbUri (uri) {

    const parsed = parseUrl(uri)

    switch (parsed.protocol) {
        case "sqlite":
            parsed.pathname = path.join(parsed.resource, parsed.pathname)
            parsed.uri = parsed.pathname
            break;
        default:
            parsed.uri = uri
            parsed.database = parsed.pathname.slice(1)
            break;
    }

    parsed.port = +parsed.port
    parsed.dialect = parsed.protocol
    parsed.host = parsed.resource

    return parsed
};
