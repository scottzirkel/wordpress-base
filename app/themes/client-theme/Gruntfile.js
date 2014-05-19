module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: ['app/themes/THEME-NAME/js/src/main.js'],
                dest: 'app/themes/THEME-NAME/js/concat/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! main.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'app/themes/THEME-NAME/js/main.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['gruntfile.js', 'app/themes/THEME-NAME/js/*.js'],
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
                    'app/themes/THEME-NAME/css/core.min.css': [
                        'app/themes/THEME-NAME/less/core.less'
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
                    'app/themes/THEME-NAME/less/*.less'
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
            'app/themes/THEME-NAME/css/core.min.css',
            'app/themes/THEME-NAME/js/main.min.js'
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
