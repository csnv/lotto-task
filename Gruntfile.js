module.exports = function (grunt)
{
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

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
                src: 'src/lib/*.js',
                dest: 'dist/js/vendor.min.js'
            }
        },
        copy: {
            base: {
                expand: true,
                cwd: 'src',
                src: ['**', '!lib/**', '!app/**', '!components/**'],
                dest: 'dist',
            }
        }
    });

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask("default", ["babel", "uglify", "copy"]);

};
