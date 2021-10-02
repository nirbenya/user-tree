module.exports = {
	'transform': {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['node_modules'],
	'testURL': 'http://localhost',
	'setupFilesAfterEnv': ['<rootDir>/jest/config.js'],
	'moduleNameMapper': {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|svgin|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/jest/file-mock.js',
		'\\.(css|scss)$': '<rootDir>/jest/style-mock.js',
	},
	'testEnvironment': 'jsdom',
};
