const LanguageToolClient = require('../lib/index');
const { languagesReturnValue, checkReturnValue } = require('./__responses__');

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
    languageToolClient.languages.mockReturnValue(languagesReturnValue.DEFAULT);

    const call = await languageToolClient.languages();

    expect(languageToolClient.languages).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });

  it('should respond with "POST /check" response with valid params', async () => {
    languageToolClient.check = jest.fn();
    languageToolClient.check.mockReturnValue(checkReturnValue.CORRECT_EN_US);

    const call = await languageToolClient.check({
      text: 'London is capital of Great Britain',
      language: 'en-US',
    });

    expect(languageToolClient.check).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });

  it('should respond with "POST /check" response with valid params, incorrect text', async () => {
    languageToolClient.check = jest.fn();
    languageToolClient.check.mockReturnValue(checkReturnValue.INCORRECT_EN_US);

    const call = await languageToolClient.check({
      text: 'dasnds dasdas sadasd',
      language: 'en-US',
    });
    expect(languageToolClient.check).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });

  it('should respond with "POST /check" response (400) with invalid params, missing language param', async () => {
    languageToolClient.check = jest.fn();
    languageToolClient.check.mockReturnValue(checkReturnValue.MISSING_LANGUAGE_PARAM);

    const call = await languageToolClient.check({
      text: 'dasnds dasdas sadasd',
    });
    expect(languageToolClient.check).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });

  it('should respond with "POST /check" response (500) with no params', async () => {
    languageToolClient.check = jest.fn();
    languageToolClient.check.mockReturnValue(checkReturnValue.PARAMS_NOT_PROVIDED);

    const call = await languageToolClient.check({});

    expect(languageToolClient.check).toBeCalledTimes(1);
    expect(call).toMatchSnapshot();
  });
});
