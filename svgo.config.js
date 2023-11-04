export default {
	multipass: true,
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					cleanupNumericValues: false,
					removeViewBox: false, // https://github.com/svg/svgo/issues/1128
				},
				cleanupIDs: {
					minify: false,
					remove: false,
				},
				convertPathData: false,
			},
		},
		'sortAttrs',
		{
			name: 'addAttributesToSVGElement',
			params: {
				attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
			},
		},
		'removeDimensions',
	],
};
