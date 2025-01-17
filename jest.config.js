/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": ["ts-jest", {}],
  },
  testRegex: "(/.*|(\\.|/).*)\\.((test)|(spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
      diagnostics: false,
    },
  },

  moduleDirectories: [
    "node_modules",
    // add the directory with the test-utils.js file, for example:
    "utils", // a utility folder
    __dirname, // the root directory
  ],

  rootDir: "./",
};