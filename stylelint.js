
module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		indentation: 4,
		"color-no-hex": [true, { "message": "Don't use hex colors like \"%s\""}]
	},
};
