(function() {
    'use strict';

    angular
        .module('ShoppingCart.UI')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('viewcart', {
            parent: 'app',
            url: '/viewcart',
            views: {
                'content@': {
                    templateUrl: 'shoppingcart-ui/viewcart/viewcart.html',
                    controller: 'ViewCartController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
