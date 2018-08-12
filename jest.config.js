module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    'components/**/*.{js, jsx}',
    'lib/**/*.{js, jsx}',
    'pages/**/*.{js,jsx}',
    'server/**/*.{js, jsx}',
    'shared/**/*.{js, jsx}'
  ]
};
