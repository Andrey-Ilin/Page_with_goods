'use strict';

// Karma configuration
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
        // plugins: [
        //     'karma-phantomjs-launcher',
        //     'karma-jasmine'
        // ],

        // list of files / patterns to load in the browser
        files: [
    
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-route/angular-route.min.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            

            'client/js/app.js',
            'client/js/*.js',

            //directive templates

            'client/templates/*.html',

            //specs
            'client/tests/*.js'

        ],


        // list of files to exclude
        exclude: [
        ],



        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'client/templates/*.html': ['ng-html2js'],
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Chromium'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        captureTimeout: 5000,
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'clients/', // HERE
            moduleName: 'test.templates'
        }
    });
};






















// module.exports = function ( karma ) {
//     karma.set({
//         /**
//          * From where to look for files, starting with the location of this file.
//          */
//         basePath: './client/',
//
//         /**
//          * This is the list of file patterns to load into the browser during testing.
//          */
//         files: [
//             'bower_components/angular/angular.js',
//             'bower_components/angular-mocks/angular-mocks.js',
//             'bower_components/angular-route/angular-route.js',
//             'js/app.js',
//             'js/app.directives.js',
//             'js/app.controllers.js',
//             'js/app.services.js',
//
//
//             'templates/directives/*.html',
//             'templates/*.html',
//             'tests/controllers.spec.js'
//         ],
//         frameworks: [ 'jasmine' ],
//        // plugins: [ 'karma-jasmine', 'karma-chrome-launcher', 'karma-phantomjs-launcher' ],
//         preprocessors: {
//             'client/templates/*.html': ['ng-html2js'],
//             'client/templates/directives/*.html': ['ng-html2js'],
//         },
//
//         /**
//          * On which port should the browser connect, on which port is the test runner
//          * operating, and what is the URL path for the browser to use.
//          */
//         port: 9018,
//         runnerPort: 9100,
//         urlRoot: '/',
//
//         /**
//          * Disable file watching by default.
//          */
//         autoWatch: false,
//         singleRun: true,
//
//         reporters: ['progress'],
//
//
//
//         /**
//          * The list of browsers to launch to test on. This includes only "Firefox" by
//          * default, but other browser names include:
//          * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
//          *
//          * Note that you can also use the executable name of the browser, like "chromium"
//          * or "firefox", but that these vary based on your operating system.
//          *
//          * You may also leave this blank and manually navigate your browser to
//          * http://localhost:9018/ when you're running tests. The window/tab can be left
//          * open and the tests will automatically occur there during the build. This has
//          * the aesthetic advantage of not launching a browser every time you save.
//          */
//         browsers: [
//             'Chrome'
//         ],
//         ngHtml2JsPreprocessor: {
//             // strip this from the file path
//             stripPrefix: 'client/', // HERE
//             moduleName: 'test.templates'
//         }
//     });
// };
