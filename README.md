node.js grammar / language tool
===============================

[![codecov](https://codecov.io/gh/oleg-koval/language-grammar-api/branch/master/graph/badge.svg)](https://codecov.io/gh/oleg-koval/language-grammar-api) [![CircleCI](https://circleci.com/gh/oleg-koval/language-grammar-api/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/language-grammar-api/tree/master)

# Install

```sh
npm i -S language-grammar-api
```

# Usage

```js
const LanguageToolApi = require('../lib/index');

const options = {
  endpoint: 'https://languagetool.org/api/v2'
};

const languageToolClient = new LanguageToolApi(options);

const languages = await languageToolClient.languages();
```

You will receive a response from Languagetool API
