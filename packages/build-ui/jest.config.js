module.exports = {
    testEnvironment: "jsdom",
    clearMocks: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
}