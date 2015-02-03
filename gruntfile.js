module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            removeOldWwwBackup:  ['www_bak']
        },
        jshint: {
            homeLint: {
                options: {
                    // strict: true,
                    eqnull: true,
                    eqeqeq: true,
                    undef: true,
                    unused: true,
                    // NOTE: indent caused issues with how I do `switch` statements (I might change my approach)
                    // indent: 4,
                    browser: true,
                    devel: true,
                    onevar: true,
                    globals: {
                        define: true,
                        require: true
                    },
                    ignores: ['dev/page-assets/scripts/lib/', 'dev/dir-assets/scripts/lib/', 'dev/page-assets/scripts/main-built.js']
                },
                src: ['dev/dir-assets/scripts', 'dev/page-assets/scripts']
            }
        },
        rename: {
            newWwwBackup: {
                src: 'www',
                dest: 'www_bak'
            },
            keepDevDash: {
                // useful for debugging
                src: 'www/index.html',
                dest: 'www/dev.html'
            },
            defaultWwwDash: {
                // uses main-built.js and .css instead of .less
                src: 'www/www.html',
                dest: 'www/index.html'
            }
        },
        copy: {
            devToWww: {
                expand: true,
                cwd: 'dev/',
                src: ['**'],
                dest: 'www/'
            }
        },
        autoprefixer: {
            prefixAllCss: {
                expand: true,
                cwd: 'www/',
                src: ['**/*.css'],
                dest: 'www/',
                options: {
                    browsers: ['> 0.5%', 'last 4 versions']
                }
            }
        },
        requirejs: {
            home: {
                // compiles the app to main-built.js in dev/js/
                options: {
                    // instead optimize using uglify directly
                    optimize: 'none',
                    name: 'main',
                    baseUrl: 'dev/page-assets/scripts',
                    out: 'dev/page-assets/scripts/main-built.js',
                    shim: {
                        underscore: {
                            exports: '_'
                        },
                        backbone: {
                            deps: [
                                'underscore',
                                'jquery'
                            ],
                            exports: 'Backbone'
                        }
                    },
                    paths: {
                        // NOTE: must also keep GRUNTFILE.JS up to date
                        text:                   'lib/requirejs/text',
                        jquery:                 'lib/jquery/jquery',
                        jqueryBem:              'lib/jquery/jquery-bem',
                        jqueryMayBall:          'lib/jquery/jquery-breakpoint',
                        jqueryBreakpoint:       'lib/jquery/jquery-may-ball',
                        underscore:             'lib/underscore/underscore',
                        'underscore-mixins':    'lib/underscore/underscore-mixins',
                        backbone:               'lib/backbone/backbone',
                        backboneBem:            'lib/backbone/backbone-bem'
                    }
                }
            }
        },
        cssmin: {
            minifyAllCss: {
                expand: true,
                cwd: 'www/',
                src: ['**/*.css'],
                dest: 'www/'
            }
        },
        uglify: {
            minifyAllJs: {
                expand: true,
                cwd: 'www/',
                src: ['**/*.js'],
                dest: 'www/'
            }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the 'clean' task.
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the 'requirejs' task.
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Load the plugin that provides the 'copy' task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Load the plugin that provides the 'jshint' task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the plugin that provides the 'autoprefixer' task.
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Load the plugin that provides the 'rename' task.
    grunt.loadNpmTasks('grunt-rename');

    // Load the plugin that provides the 'cssmin' task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks
    grunt.registerTask('default', [
        'jshint:homeLint',
        'requirejs:home',
        'clean:removeOldWwwBackup',
        'rename:newWwwBackup',
        'copy:devToWww',
        'autoprefixer:prefixAllCss',
        'cssmin:minifyAllCss',
        'uglify:minifyAllJs',
        'rename:keepDevDash',
        'rename:defaultWwwDash'
    ]);

    // Just compile in 'dev'
    grunt.registerTask('compile', [
        'jshint:homeLint',
        'requirejs:home',
        // 'clean:removeOldWwwBackup',
        // 'rename:newWwwBackup',
        // 'copy:devToWww',
        // 'less:compileAllLess',
        // 'autoprefixer:prefixAllCss',
        // 'cssmin:minifyAllCss',
        // 'uglify:minifyAllJs',
        // 'rename:keepDevDash',
        // 'rename:defaultWwwDash'
    ]);
};