module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: [
            'js/jquery-1.11.3.js',
            'js/script.js'
            ],
            dest: 'js/production.js',
          }
        },
        uglify: {
          build: {
            src: 'js/production.js',
            dest: 'js/production.min.js'
          }
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'img/',
              src: ['*.{png,jpg,gif,ico}'],
              dest: 'img/',
            }]
          }
        },
        responsive_images: {
          dev: {
            options: {
              sizes: [{
                width: 285,
                height: 285
              },{
                name: "dpi",
                width: 570,
                height: 570,
                suffix: "_x2",
              }],
            },
            files: [{
              expand: true,
              src: ['head*.{png,jpg,gif}'],
              cwd: 'img/',
              dest: 'img/'
            }]
          }
        },
        watch: {
          scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          }
        }
});

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
