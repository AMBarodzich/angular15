
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'client/lib/jquery/dist/jquery.js',
      'client/lib/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'client/lib/angular-route/angular-route.min.js',
      'client/js/*.js',
      'client/test/*.js'
    ],

    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false
  });
};
