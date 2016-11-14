var grunt = require('grunt');

grunt.loadNpmTasks('grunt-browserify');

grunt.initConfig({
	'browserify': {
		watch: {
			files: {
				'src/js/index_bundle.js': ['src/js/index.jsx']
			},
			options: {
				transform: [['babelify', {'presets': ['es2015', 'react']}]],
				browserifyOptions: {
					debug: true
				},
				watch: true,
				keepAlive: true
			}
		}
	}
});

grunt.registerTask('default', ['browserify:watch']);