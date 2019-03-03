module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['lib/**/*.js', '!**/node_modules/**', '!**/__mocks__/**'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/__responses__/'],
  // coverageReporters: ['text-summary', 'json' /*, "html"*/],
  collectCoverage: true,
  coverageDirectory: './coverage/',
};
