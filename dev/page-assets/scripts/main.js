// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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
        jquery:                 'lib/jquery/jquery',
        jqueryBem:              'lib/jquery/jquery-bem',
        jqueryMayBall:          'lib/jquery/jquery-breakpoint',
        jqueryBreakpoint:       'lib/jquery/jquery-may-ball',
        underscore:             'lib/underscore/underscore',
        'underscore-mixins':    'lib/underscore/underscore-mixins',
        backbone:               'lib/backbone/backbone',
        backboneBem:            'lib/backbone/backbone-bem'
    }
});

require([
    // force plugin-dependent plugins to run
    '../../dir-assets/scripts/lib/console/console',
    'jquery',
    'jqueryBem',
    'jqueryBreakpoint',
    'jqueryMayBall',
    'underscore',
    'underscore-mixins',
    'backbone',
    'backboneBem',
    'routers/router.instance',
    'views/app.instance',
    'lib/skrollr/init-skrollr',
    'lib/skrollr/init-skrollr-stylesheets'
], function (
    consoleFix,
    $,
    jqueryBem,
    jqueryBreakpoint,
    jqueryMayBall,
    _,
    underscoreMixins,
    backbone,
    backboneBem,
    router,
    app,
    initSkrollr,
    initSkrollrStylesheets
) {
    $(function () {
        $.breakpoint.changeBreakpoints({
            thumb: {
                max: 299
            },
            palm: {
                max: 719
            },
            lap: {
                max: 1023,
                min: 720
            },
            'lap-and-up': {
                min: 720
            },
            portable: {
                max: 1023
            },
            desk: {
                min: 1024
            }
        });

        app.setRouter(router);
        app.setMain($('#skrollr-body'));
        app.$el.prependTo('.main');

        _.defer(function () {
            var skrollr;

            initSkrollrStylesheets();
            skrollr = initSkrollr({
                smoothScrolling: false,
                forceHeight: false
            });

            app.setCanChangeSectionPredicate(function () {
                return !skrollr.isAnimatingTo();
            });

            // $.setScrollScreenFunction(skrollr.setScrollTop);
            $.setScrollScreenFunction(function (top) {
                skrollr.animateTo(top, {
                    duration: 200
                });
            });
            $.setGetElScrollPositionFunction(function ($el) {
                return skrollr.relativeToAbsolute($el.get(0), 'top', 'top');
            });
            $.setGetScreenScrollFunction(skrollr.getScrollTop);
            $.setScreenScrollEventCreator(function (func) {
                skrollr.on('render', func);
            });
        });

    });
});