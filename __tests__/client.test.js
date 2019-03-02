const LanguageToolClient = require('../lib/index');

describe('LanguageToolClient:', () => {
  it('should have required functionality', () => {
    const dummyClient = new LanguageToolClient({ endpoint: 'https://example.com' });
    expect(dummyClient).toMatchSnapshot();
  });

  it('should be equal to function', () => {
    const dummyClient = new LanguageToolClient({ endpoint: 'https://example.com' });
    expect(dummyClient.languages).toMatchSnapshot();
  });
});
