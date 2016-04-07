module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'fixture'],
        files: [
            "index.js",
            "testing/**/*.js",
            "testing/**/*.html"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'index.js': ['coverage'],
            "testing/**/*.html": ['html2js']
        },
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage', 'kjhtml'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        plugins: [
            'karma-fixture',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine-html-reporter',
            'karma-coverage',
            'karma-html2js-preprocessor'
        ]
    });
};