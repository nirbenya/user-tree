module.exports = {
	'presets': [
		[
			'@babel/preset-env',
			{
				'targets': {
					'browsers': ['> 1%', 'last 2 versions'],
				},
			},
		],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	'plugins': [
		'@babel/transform-runtime',
		'@babel/plugin-syntax-class-properties',
		'@babel/plugin-proposal-class-properties',
	],
};
