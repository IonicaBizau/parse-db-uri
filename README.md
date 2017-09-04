
# parse-db-uri

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/parse-db-uri.svg)](https://www.npmjs.com/package/parse-db-uri) [![Downloads](https://img.shields.io/npm/dt/parse-db-uri.svg)](https://www.npmjs.com/package/parse-db-uri)

> Parse database URIs

## :cloud: Installation

```sh
$ npm i --save parse-db-uri
```


## :clipboard: Example



```js
const parseDbUri = require("parse-db-uri")

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
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `parseDbUri(uri)`
Parse database URIs

#### Params
- **String** `uri`: The database uri.

#### Return
- **Object** The [`parse-url`](https://github.com/IonicaBizau/parse-url) result extended with:
   - `database` (String): The database name.
   - `user` (String): The username.
   - `password` (String): The password.
   - `dialect` (String): The dialect (e.g. `mysql`)



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2017#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md