module.exports = function ( karma ) {
    karma.set({
        /**
         * From where to look for files, starting with the location of this file.
         */
        basePath: './client/',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'js/app.js',
            'js/app.directives.js',
            'js/app.controllers.js',
            'js/app.services.js',


            'templates/directives/*.html',
            'templates/*.html',
            'tests/directives.spec.js'
        ],
        frameworks: [ 'jasmine' ],
        plugins: [ 'karma-jasmine', 'karma-chrome-launcher', 'karma-phantomjs-launcher' ],
        preprocessors: {
            'client/templates/*.html': ['ng-html2js'],
            'client/templates/directives/*.html': ['ng-html2js'],
        },

        /**
         * On which port should the browser connect, on which port is the test runner
         * operating, and what is the URL path for the browser to use.
         */
        port: 9018,
        runnerPort: 9100,
        urlRoot: '/',

        /**
         * Disable file watching by default.
         */
        autoWatch: false,
        singleRun: true,

        reporters: ['progress'],



        /**
         * The list of browsers to launch to test on. This includes only "Firefox" by
         * default, but other browser names include:
         * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
         *
         * Note that you can also use the executable name of the browser, like "chromium"
         * or "firefox", but that these vary based on your operating system.
         *
         * You may also leave this blank and manually navigate your browser to
         * http://localhost:9018/ when you're running tests. The window/tab can be left
         * open and the tests will automatically occur there during the build. This has
         * the aesthetic advantage of not launching a browser every time you save.
         */
        browsers: [
            'Chrome'
        ],
        ngHtml2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'client/', // HERE
            moduleName: 'test.templates'
        }
    });
};
