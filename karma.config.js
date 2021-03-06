// Karma configuration
// Generated on Thu Apr 07 2016 09:03:39 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'public/js/*.js',
            'public/js/**/*.js',
            'test/specs/*.js',
            'test/specs/controllers/*.js',
            'test/specs/services/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit'],


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
        // browsers: ['Chrome'],
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,


        junitReporter: {
          outputDir: 'reports', // results will be saved as $outputDir/$browserName.xml 
          outputFile: 'junitReport.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile 
          suite: 'associate', // suite will become the package name attribute in xml testsuite element 
          useBrowserName: false, // add browser name to report and classes names 
          nameFormatter: function (browser, result) {
                var output = result.suite;
                if (result.description.length > 53) {
                    var first = result.description.substr(0, 25);
                    var last =  result.description.substr(-25);
                    output = output + ": " + first + "..." + last;
                }
                else
                {
                    output = output + ": " + result.description;
                }
                console.log("result = " + result);
                return output;
          }, // function (browser, result) to customize the name attribute in xml testcase element 
          classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element, 
          properties: {} // key value pair of properties to add to the <properties> section of the report 
        }
    })
}
