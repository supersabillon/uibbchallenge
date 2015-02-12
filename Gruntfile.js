module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jasmine: {
            all: {
                src: [
                    'public/javascripts/src/**/*.js',
                ],
                options: {
                    'vendor': 'public/javascripts/libs/**/*.js',
                    'specs': 'public/javascripts/spec/**/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

};