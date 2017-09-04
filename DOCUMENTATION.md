## Documentation

You can see below the API reference of this module.

### `parseDbUri(uri)`
Parse database URIs

#### Params

- **String** `uri`: The database uri.

#### Return
- **Object** The [`parse-url`](https://github.com/IonicaBizau/parse-url) result extended with:
   - `database` (String): The database name.
   - `user` (String): The username.
   - `host` (String): The host.
   - `password` (String): The password.
   - `dialect` (String): The dialect (e.g. `mysql`)

