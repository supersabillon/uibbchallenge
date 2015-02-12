module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        // Task configuration.
        jasmine: {
            all: {
                src: [
                    '*.js',
                ],
                options: {
                    'vendor': '*.js',
                    'specs': '*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

};