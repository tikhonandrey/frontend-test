module.exports = {
  roots: ["<rootDir>/src/app"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  automock: false,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(js|jsx)?$": "babel-jest"
  },
  // automock: false,
  setupFiles: [
    "<rootDir>/__test-utils__/dom.js",
    "<rootDir>/__test-utils__/enzyme.js"
    // "<rootDir>/__test-utils__/fetch.js"
  ]
};
