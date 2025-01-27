

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "^widgets/(.*)$": "<rootDir>/src/widgets/$1",
        "^features/(.*)$": "<rootDir>/src/features/$1",
        "^entities/(.*)$": "<rootDir>/src/entities/$1",
        "^shared/(.*)$": "<rootDir>/src/shared/$1",
        "^pages/(.*)$": "<rootDir>/src/pages/$1",
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
        "^axios$": "<rootDir>/node_modules/axios",
        '\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
        "\\.(css|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transform: {
        '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-typescript'] }],
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
};