(function() { // IIFE immediately invoked function expression
    'use strict';

    angular
        .module('shopApp', [
            'ngStorage', 
            'ui.bootstrap',
            'ui.router',
         
            'Product.UI', // Product/Category module
            'ShoppingCart.UI', // ShoppingCart module
            'Order.UI' // Order module
        ])
        .run(run);

    run.$inject = ['$http', '$localStorage'];

    function run($http, $localStorage) {
    }
})();