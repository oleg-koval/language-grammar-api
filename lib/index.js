const Trembita = require('trembita');

const LanguageToolClient = class LanguageToolClient extends Trembita {
  constructor() {
    super(...arguments);

    /**
     * Get a list of supported languages.
     */
    this.languages = () => {
      const params = {
        url: '/languages',
        expectedCodes: [200],
        headers: {
          Accept: 'application/json',
        },
      };
      return this.request(params);
    };

    /**
     * The main feature - check a text with LanguageTool for possible style and grammar issues.
     */
    this.check = queryStringParams => {
      const params = {
        url: '/check',
        method: 'POST',
        expectedCodes: [200, 400, 500],
        qs: queryStringParams,
        headers: {
          Accept: 'application/json',
        },
      };
      return this.request(params);
    };
  }
};

module.exports = LanguageToolClient;
