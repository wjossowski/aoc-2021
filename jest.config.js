/* eslint-disable no-undef */
module.exports = {
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)spec.ts?(x)'],
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@types)', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  watchPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
}
