(function() {
    'use strict';

    angular
        .module('Order.UI')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('confirmation', {
            parent: 'app',
            url: '/confirmation/:orderId',
            views: {
                'content@': {
                    templateUrl: 'order-ui/confirmation/confirmation.html',
                    controller: 'OrderConfirmationController',
                    controllerAs: 'vm',
                }   
            }
        });
    }
})();