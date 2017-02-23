exports.config = {

  allScriptsTimeout: 20000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',
  onPrepare: function(){
	    browser.ignoreSynchronization = true;
  },
  

  jasmineNodeOpts: {
	  onComplete:null,
      isVerbose: true,
	  showColors: true,
	  includeStackTrace: true,   
	  defaultTimeoutInterval: 70000,
	  showTiming: true,
	  realtimeFailure : true
  }

};