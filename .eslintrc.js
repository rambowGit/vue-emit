module.exports = {	
	"env": {    
		"browser": true,
		"es6": true,
		"node": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
	],
	"parserOptions": {
		// "ecmaVersion": "latest",
		// "sourceType": "module"
		"ecmaVersion": "2018",
		"sourceType": "module",
		"ecmaFeatures": {
			"modules": true
		}
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	},
	
	
};
