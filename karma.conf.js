'use strict';

// Karma configuration
module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],
        // plugins: [
        //     'karma-phantomjs-launcher',
        //     'karma-jasmine'
        // ],

        files: [
    
            'client/bower_components/angular/angular.js',
            'client/bower_components/angular-route/angular-route.min.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            

            'client/js/app.js',
            'client/js/*.js',

            //directive templates
            'client/templates/*.html',

            //specs
            'tests/*.js'

        ],

        exclude: [
        ],

        preprocessors: {
            'client/templates/*.html': ['ng-html2js'],
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome', 'Chromium'],

        singleRun: false,

        captureTimeout: 5000,
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'clients/', // HERE
            moduleName: 'test.templates'
        }
    });
};
