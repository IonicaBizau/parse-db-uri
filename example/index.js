"use strict";

const parseDbUri = require("../lib")

console.log(parseDbUri("mysql://root:42@localhost:3306/database_name"))
// { protocols: [ 'mysql' ],
//   protocol: 'mysql',
//   port: 3306,
//   resource: 'localhost',
//   user: 'root',
//   pathname: '/database_name',
//   hash: '',
//   search: '',
//   href: 'mysql://root:42@localhost:3306/database_name',
//   query: {},
//   uri: 'mysql://root:42@localhost:3306/database_name',
//   database: 'database_name',
//   password: '42',
//   dialect: 'mysql' }
