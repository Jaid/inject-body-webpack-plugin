module.exports = {
  testEnvironment: "node",
  coverageDirectory: "<rootDir>/dist/jest/coverage",
  collectCoverageFrom: [
    "<rootDir>/dist/package/development/**",
    "!<rootDir>/node_modules/",
  ],
  coverageReporters: [
    "text-summary",
    "html",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/dist",
    "<rootDir>/build",
  ],
  moduleNameMapper: {
    "^root": "<rootDir>",
    "^src": "<rootDir>/src",
    "^lib": "<rootDir>/src/lib",
  },
  // This is only false by default if there are multiple test files, so we have to force this to be false
  // https://jestjs.io/docs/configuration#verbose-boolean
  verbose: false,
}