const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		plugins: [new NodePolyfillPlugin()],
		externals: {
			fs: 'require("fs")',
			path: 'require("path")',
		},
	},
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
		},
	},
})

// module.exports = {
// 	configureWebpack: (config) => {
// 		const plugins = []
// 		plugins.push(new NodePolyfillPlugin())
// 	},
// }
