module.exports = function (grunt) {

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Error check JS files
		jshint: {
			files:['Gruntfile.js', 'src/js/*.js'],
			options: {
				reporter: require('jshint-stylish')
			}
		},
		// Combine our developed JS files
		concat: {
			js: {
				src: ['src/js/*.js'],
				dest: 'javascripts/main.js'
			},
		},
		// Minify it what we can
		uglify: {
			app: {
				files: {
					'javascripts/main.min.js': ['javascripts/main.js']
				}
			}
		},
		// Compile the SCSS
		compass: {
			dist: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'css',
					environment: 'production'
				}
			},
			// Dev mode, hopefully with commenting
			dev: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'css',
					environment: 'development'
				}
			}
		},
		// Copy some files over that are needed (jQuery/Font Awesome)
		copy: {
            jquery: {
                files: [
	                {
		                expand: true,
		                cwd: 'src/vendor/jquery/dist/',
		                src: ['**'],
		                dest: 'javascripts/vendor'
					}
	            ]
            },
            fontAwesome: {
	            files: [
                	{
		                expand: true,
		                cwd: 'src/vendor/fontawesome/fonts',
		                src: ['**'],
		                dest: 'fonts'
	                }
	            ]
            }
        },
        imagemin: {
			dynamic: {
			    files: [{
			        expand: true,
			        cwd: 'src/images/',
			        src: ['**/*.{png,jpg,gif,svg}'],
			        dest: 'mages/'
			    }]
			}
		},
		modernizr: {
			dist: {
				"dest":"javascripts/vendor/modernizr.js"
			}	
		},
		watch: {
			css: {
				files: ['src/scss/*.scss'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['jshint', 'concat']
			},
			images: {
				files: ['src/images/*.{png,jpg,gif,svg}'],
				tasks: ['imagemin']
			}
		}
	});
	
	// Load Node tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	// Register Tasks
	grunt.registerTask('dev', ['jshint', 'concat', 'compass', 'copy', 'imagemin']);
	grunt.registerTask('live', ['dev', 'uglify']);
};