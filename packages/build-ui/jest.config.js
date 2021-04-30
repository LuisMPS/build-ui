module.exports = {
    testEnvironment: "jsdom",
    clearMocks: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    coveragePathIgnorePatterns: [
        'node_modules',
        'test-components',
        'test-utils'
    ],
}