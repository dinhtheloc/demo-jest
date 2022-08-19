// jest.config.js
module.exports = {
  preset: "jest-preset-angular",
  testResultsProcessor: "jest-sonar-reporter",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"]
};
