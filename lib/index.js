const Trembita = require('trembita');

/** Class representing a LanguageToolClient. */
const LanguageToolClient = class LanguageToolClient extends Trembita {
  /**
   * Create a client.
   * @param {string} endpoint - LanguageTool api v2 url
   */
  constructor() {
    super(...arguments);
    /**
     * Get a list of supported languages.
     * @return {array} All supported languages
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
     * @param {object} Object with query string params
     * @param queryStringParams.text {string} Text to check
     * @param queryStringParams.language {string} Language in `en-US` locale format
     * @returns {object} Validation results
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
