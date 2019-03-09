const Trembita = require('trembita');

const LanguageToolClient = class LanguageToolClient extends Trembita {
  constructor() {
    super(...arguments);
    /**
     * Get a list of supported languages.
     */
    this.languages = () => {
      return this.request({
        url: '/languages',
        expectedCodes: [200],
        headers: {
          Accept: 'application/json',
        },
      });
    };

    /**
     * The main feature - check a text with LanguageTool for possible style and grammar issues.
     */
    this.check = queryStringParams => {
      return this.request({
        url: '/check',
        method: 'POST',
        expectedCodes: [200, 400, 500],
        qs: queryStringParams,
        headers: {
          Accept: 'application/json',
        },
      });
    };
  }
};

module.exports = LanguageToolClient;
