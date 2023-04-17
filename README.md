# [Uniquenv](https://github.com/bug3/uniquenv) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bug3/uniquenv/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/uniquenv)

Uniquenv is a tool for safe environment files.

* **Quick:** You can use environment variables safely without using any password.
* **Unique:** Your environment files are unique. Even if your files are stolen, they cannot be used on another computer.

## Installation

```bash
npm install uniquenv
```

## Usage

-   **Create environment file**:

```javascript
const uniquenv = require('uniquenv');

const data = {
    host: uniquenv.input('Host: '),
    username: uniquenv.input('Username: '),
    password: uniquenv.password('Password: ')
};

const file = 'db.uniquenv';

uniquenv.create(file, data);
```

-   **Use environment variables**:

```javascript
const uniquenv = require('uniquenv');

const file = 'db.uniquenv';

const db = uniquenv.parse(file);

console.log(
    db.host,
    db.username,
    db.password
);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
