
module.exports = {
	extends: 'stylelint-config-standard',
	plugins: ['stylelint-no-indistinguishable-colors'],
	rules: {
		indentation: 4,
		'color-no-hex': true,
		'no-indistinguishable-colors': true,
	},
};
