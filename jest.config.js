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
  moduleNameMapper: {
    "^root": "<rootDir>",
    "^src": "<rootDir>/src",
    "^lib": "<rootDir>/src/lib",
  },
}