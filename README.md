# karmapa-wrap
[![Build Status](https://travis-ci.org/karmapa17/karmapa-wrap.svg?branch=master)](https://travis-ci.org/karmapa17/karmapa-wrap)
[![Coverage Status](https://coveralls.io/repos/github/karmapa17/karmapa-wrap/badge.svg?branch=master&v=2)](https://coveralls.io/github/karmapa17/karmapa-wrap?branch=master)
[![Dependency Status](https://david-dm.org/karmapa17/karmapa-wrap.svg)](https://david-dm.org/karmapa17/karmapa-wrap)

## Installation

node:

```
$ npm i karmapa-wrap
```

```js
import app from 'express';
import wrap from 'karmapa-wrap';

const app = express();

app.get('/test', wrap(async function myAsyncController() {
  throw 'Error';
}));
```
