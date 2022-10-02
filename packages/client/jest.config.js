export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.tsx'],
  moduleNameMapper: {
    '^.+\\.(css|scss|svg|jpg)$': 'babel-jest',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
    '^@/store(.*)$': '<rootDir>/src/store$1',
    '^@/context(.*)$': '<rootDir>/src/context$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/image(.*)$': '<rootDir>/src/image$1',
    '^@/game(.*)$': '<rootDir>/src/game$1',
  },
}
