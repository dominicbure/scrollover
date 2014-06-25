module.exports = function(grunt) {
	//Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json') ,
        skrollrPkg: grunt.file.readJSON('node_modules/skrollr/package.json') ,
		jshint: {
			options: {
				smarttabs: false,
				curly: true,
				immed: true,
				latedef: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				globals: {
					window: true,
					document: true,
					navigator: true,
					XMLHttpRequest: true,
					XDomainRequest: true,
					matchMedia: true
				}
			},
			all: ['src/**/*.js']
		},
		qunit: {
			all: ['test/index.html']
		},
		uglify: {
			options: {
				banner: '/*! scrollover <%= pkg.version %> + skrollr <%= skrollrPkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | https://github.com/quadroid/scrollover */\n'
			},

			all: {
				files: {
					'dist/scrollover.pack.js': [
                        'src/scrollover.js',
                        'node_modules/skrollr/src/skrollr.js',
                        //'node_modules/skrollr/dist/skrollr.min.js',
                        'src/skrollr-init.js',
                    ],
				}
			}
		}
	});

	//Dependencies.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	//Tasks.
	grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);
	grunt.registerTask('travis', ['jshint', 'qunit']);
};