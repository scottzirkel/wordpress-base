module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['src/js/main.js'],
                dest: 'assets/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! main.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'assets/js/main.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['gruntfile.js', 'src/js/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        less:{
            dist:{
                files: {
                    'assets/css/core.min.css': [
                        'src/less/core.less'
                    ]
                },
                banner: '/*! Core Stylesheet <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                options:{
                    compress: true,
                    sourceMap: true,
                    sourceMapFilename: 'assets/css/core.min.css.map'
                }
            }
        },
        watch: {
            less:{
                files: [
                    'src/less/*.less'
                ],
                tasks: ['less']
            },
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint','concat','uglify']
            }
        },
         clean: {
          dist: [
            'assets/css/core.min.css',
            'assets/js/main.min.js'
          ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean','less','jshint','concat','uglify']);
    grunt.registerTask('dev', ['watch']);
};