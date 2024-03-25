module.exports = {
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	testEnvironment: 'jsdom',
	testMatch: ['**/*.tests.tsx'],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
		"\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
    '^@components(.*)': '<rootDir>/src/components$1',
    '^@contexts(.*)': '<rootDir>/src/contexts$1',
	}
};
