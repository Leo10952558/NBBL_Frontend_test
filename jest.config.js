// module.exports = {
//   transform: {
//     "^.+\\.vue$": "@vue/vue3-jest",
//     "^.+\\.jsx?$": "babel-jest",
//   },
//   testEnvironment: "jsdom",
//   testEnvironmentOptions: {
//     customExportConditions: ["node", "node-addons"],
//   },
// };

module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};