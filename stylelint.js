
module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		indentation: 4,
		"color-named": "always-where-possible",
		"color-no-hex": [true, { "message": "Don't use hex colors like \"%s\""}]
		"function-disallowed-list": [["rgb","rgba", "hex"], { "message": "Don't use rgb, rgba or hex colors"}],
	},
};
