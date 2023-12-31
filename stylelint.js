
module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		indentation: 4,
		"color-no-hex": [true, { "message": "Don't use hex colors like \"%s\""}]
		"custom-property-pattern": [
			"^(?!.*(rgba|hex)).*$",
			{
			  "message": "Custom properties should not contain rgba or hex colors"
			}
		  ]
	},
};
