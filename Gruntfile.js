'use strict';

const sass = require("node-sass");

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.js', '!lib/**'],
                dest: 'dist/js',
                flatten: true
            }]
          }
        },
        uglify: {
            vendor: {
                files: [{
                    src: 'src/lib/*.js',
                    dest: 'dist/js/vendor.min.js'
                }]
            }
        },
        copy: {
            base: {
                expand: true,
                cwd: 'src',
                src: ['**', '!css/**', '!lib/**', '!app/**', '!components/**'],
                dest: 'dist',
            }
        },
        sass: {
            options: {
    			implementation: sass
    		},
            style: {
                src: 'src/**/*.scss',
                dest: 'dist/css/style.css'
            }
        },
        watch: {
            sass: {
                files: ['src/**/*.scss'],
                tasks: ["sass"],
                options: {
                    spawn: false
                }
            },
            babel: {
                files: ['src/**/*.js', "!src/lib/**"],
                tasks: ["babel"],
                options: {
                    spawn: false
                }
            },
            uglify: {
                files: ["src/lib/*.js"],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            copy: {
                files: ['**', '!css/**', '!lib/**', '!app/**', '!components/**'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask("default", ["babel", "uglify", "copy", "sass"]);

};
