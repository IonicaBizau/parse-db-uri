"use strict";

const parseDbUri = require("../lib")

console.log(parseDbUri("mysql://root:42@localhost:3306/database_name"))
// {
//   protocols: [ 'mysql' ],
//   protocol: 'mysql',
//   port: 3306,
//   resource: 'localhost',
//   host: 'localhost',
//   user: 'root',
//   password: '42',
//   pathname: '/database_name',
//   hash: '',
//   search: '',
//   href: 'mysql://root:42@localhost:3306/database_name',
//   query: {},
//   parse_failed: false,
//   uri: 'mysql://root:42@localhost:3306/database_name',
//   database: 'database_name',
//   dialect: 'mysql'
// }

console.log(parseDbUri("sqlite://data/db.sqlite3"))
// => {
//   protocols: [ 'sqlite' ],
//   protocol: 'sqlite',
//   port: 0,
//   resource: 'data',
//   host: 'data',
//   user: '',
//   password: '',
//   pathname: 'data/db.sqlite3',
//   hash: '',
//   search: '',
//   href: 'sqlite://data/db.sqlite3',
//   query: {},
//   parse_failed: false,
//   uri: 'sqlite://data/db.sqlite3',
//   dialect: 'sqlite'
// }
