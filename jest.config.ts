import { Config } from 'jest'
const config: Config = {
	roots: ['<rootDir>/src', '<rootDir>/tests'],
	moduleFileExtensions: ['js', 'json', 'ts'],
	testRegex: '.*\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest'
	},
	collectCoverageFrom: ['**/*.{ts,tsx}'],
	coverageDirectory: '../coverage',
	testEnvironment: 'node'
}

export default config
