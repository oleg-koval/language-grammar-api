const LanguageToolClient = require('../lib/index');

const mockedLogger = () => {
  return;
};

describe('LanguageToolClient:', () => {
  it('should have required functionality', () => {
    const dummyClient = new LanguageToolClient({ endpoint: 'https://example.com', log: mockedLogger });
    expect(dummyClient).toMatchSnapshot();
  });

  it('should be equal to function', () => {
    const dummyClient = new LanguageToolClient({ endpoint: 'https://example.com' });
    expect(dummyClient.languages).toMatchSnapshot();
  });

  it('should be equal to function', () => {
    const dummyClient = new LanguageToolClient({ endpoint: 'https://example.com' });
    expect(dummyClient.check).toMatchSnapshot();
  });

  it('Should throw error with missing options', () => {
    expect(() => new LanguageToolClient()).toThrowErrorMatchingSnapshot();
  });
});
