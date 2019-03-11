node.js grammar / language tool api
===================================

[![codecov](https://codecov.io/gh/oleg-koval/language-grammar-api/branch/master/graph/badge.svg)](https://codecov.io/gh/oleg-koval/language-grammar-api) [![CircleCI](https://circleci.com/gh/oleg-koval/language-grammar-api/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/language-grammar-api/tree/master)

# About

API wrapper for https://languagetool.org/ service (LanguageTool HTTP JSON API)

# Install

```sh
npm i -S language-grammar-api
```

# Usage

1. Create client
```js
const LanguageToolApi = require('language-grammar-api');

const options = {
  endpoint: 'https://languagetool.org/api/v2'
};

const languageToolClient = new LanguageToolApi(options);
```

2. Get list of supported languages:
```js
const languages = await languageToolClient.languages();
```

3. Check your text for specific language:
```js
const check = await languageToolClient.check({
  text: 'Amazing text to check', // required
  language: 'en-US' // required (you can use .languages call to get language)
});
```

More details about api: http://wiki.languagetool.org/public-http-api


