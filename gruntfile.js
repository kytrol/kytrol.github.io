module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: [
            'vendors/jquery/jquery-1.11.3.js',
            'resources/js/script.js'
            ],
            dest: 'resources/js/build/production.js',
          }
        },
        uglify: {
          build: {
            src: 'resources/js/build/production.js',
            dest: 'resources/js/build/min/production.min.js'
          }
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'resources/img/',
              src: ['*.{png,jpg,gif,ico}'],
              dest: 'resources/img/',
            }]
          }
        },
        responsive_images: {
          dev: {
            options: {
              sizes: [{
                width: 125,
                height: 125
              },{
                name: "dpi",
                width: 260,
                height: 260,
                suffix: "_x2",
              }],
            },
            files: [{
              expand: true,
              src: ['*.{png,jpg,gif}'],
              cwd: 'resources/img/',
              dest: 'resources/img/'
            }]
          }
        },
        cssmin: {
          target: {
            files: [
              {'resources/css/build/production.css': ['vendors/normalize-css/normalize.css', 'resources/css/styles.css']}, {
              expand: true,
              cwd: 'resources/css/build',
              src: ['*.css'],
              dest: 'resources/css/build/min',
              ext: '.min.css'
            }]
          }
        },
        watch: {
          js: {
            files: ['resources/js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          },
          css: {
            files: ['resources/css/*.css'],
            tasks: ['cssmin'],
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
