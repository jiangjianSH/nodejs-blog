module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['public/js/index.js', 'public/js/util.js'],
                dest: 'dist/built.js',
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
}