/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
    // If you're using babel for both:
    // "^.+\\.[jt]sx?$": "babel-jest",
  },
  verbose: true,
  clearMocks: false,
  collectCoverage: true,
  reporters: ['default'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/file-mock.ts',
    '\\.(css|less|sass|scss)$': "babel-jest" //'<rootDir>/tests/__mocks__/object-mock.ts'
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ["<rootDir>tests/setupTests.ts"]
};