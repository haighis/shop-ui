(function() {
    'use strict';

    angular
        .module('ShoppingCart.UI')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('checkout', {
            parent: 'app',
            url: '/checkout',
            views: {
                'content@': {
                    templateUrl: 'shoppingcart-ui/checkout/checkout.html',
                    controller: 'CheckoutController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
