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
  }
};

module.exports = LanguageToolClient;
