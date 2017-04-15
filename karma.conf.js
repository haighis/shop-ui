//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/ngstorage/ngStorage.js',
      'app.module.js',
      'app.state.js',
      'components/util/promise.service.js',
      'product-ui/product-ui.module.js',
      'product-ui/**/*.js',
      'product-ui/services/product.service.js',
      
      'shoppingcart-ui/shoppingcart-ui.module.js',
      'shoppingcart-ui/services/shoppingcart.service.js',
      // 'shoppingcart-ui/**/*.js',
      //'',
      'order-ui/order-ui.module.js',
      'order-ui/**/*.js',
      //'view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
