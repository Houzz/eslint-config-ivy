module.exports = {
	"root": true,
	"parser": "babel-eslint",
	"extends": "eslint-config-airbnb",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true,
			"experimentalDecorators": true,
			"legacyDecorators": true
		},
		"sourceType": "module"
	},
	"env": {
		"browser": true,
		"node": true,
		"commonjs": true,
		"es6": true,
		"jest": true,
		"mocha": true
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".jsx",
					".ts",
					".tsx",
					".css",
					".scss",
					".less",
				],
				"paths": [
					"./",
					"../node_modules"
				]
			}
		},
		"react": {
			"pragma": "React",
			"version": "16.8"
		}
	},
	"plugins": [
		"react-hooks",
		"json",
		"jsx-a11y",
		"react",
		"import"
	],
	"rules": {
		"indent": [
			"error",
			4,
			{ "SwitchCase": 1 }
		],
		"camelcase": [
            "error",
            {
				"ignoreDestructuring": true,
				"properties": "never"
            }
        ],
		"max-len": ["error", { "code": 300 }],
		"class-methods-use-this": "off",
		"react/jsx-fragments": ["error", "element"],
		"react/jsx-indent": [
			"error",
			4
		],
		"react/jsx-indent-props": [
			"error",
			4
		],
		"no-return-assign": 0,
		"no-shadow": "warn",
		"no-case-declarations": 0,
		"no-underscore-dangle": 0,
		"no-restricted-globals": 0,
		"no-nested-ternary": 0,
		"import/no-unresolved": 0,
		"import/no-extraneous-dependencies": 0,
		"import/extensions": 0,
		"import/prefer-default-export": 0,
		"import/named": 0,
		"arrow-parens": 0,
		"global-require": 0,
		"import/no-dynamic-require": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"newline-before-return": 2,
		"react/no-array-index-key": 1,
		"react/require-default-props": [
			"error",
			{
				"ignoreFunctionalComponents": true
			}
		],
		"react/jsx-props-no-spreading": 0,
		"react/prop-types": 0,
        "import/no-import-module-exports": 2,
        "import/no-commonjs": 2
	},
	"globals": {
		"HZ": true,
		"spf": true,
		"$": true,
		"lightbox": true,
		"rootResolvePath": true,
		"requireRouter": true,
		"requireCommonRouter": true
	},
};
