module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/tests/unit/mocks/fileMock.js',
    },
};
