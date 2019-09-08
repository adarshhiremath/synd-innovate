const sass = require('node-sass'); // For Grunt-sass 3

module.exports = (grunt) =>{
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'public/stylesheets/application.css': 'sass/application.scss'
                }
            }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss', 'views/**/*.ejs'],
                tasks: ['sass'],
                options: {
                    livereload: true //Needs to run LiveReload
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['sass']);
};