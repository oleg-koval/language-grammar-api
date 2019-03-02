const LanguageToolClient = require('../lib/index');
const { languagesReturnValue } = require('./__responses__');

const FAKE_URL = 'https://example.org/api/v2';

const options = {
  endpoint: FAKE_URL,
};

describe('languageToolClient:', () => {
  let languageToolClient;
  beforeEach(() => {
    languageToolClient = new LanguageToolClient(options);
  });

  afterEach(() => {
    languageToolClient = null;
  });


  it('should respond with "GET /languages" response', async () => {
    languageToolClient.languages = jest.fn();
    languageToolClient.languages.mockReturnValue(languagesReturnValue.default);

    const call = await languageToolClient.languages();

    expect(languageToolClient.languages).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });
});
