(function() {
    'use strict';

    angular
        .module('Order.UI')
        .controller('OrderConfirmationController', OrderConfirmationController);

    OrderConfirmationController.$inject = ['$scope', '$stateParams', 'OrderBackendService'];

    function OrderConfirmationController ($scope, $stateParams, OrderBackendService) {
        var vm = this;
        vm.order = [];
        vm.invalidOrder = false;

		// Call activate on load
        activate();
        
        function activate() {
            if($stateParams.orderId) {
                // Hydrate order into vm.order
                OrderBackendService.getOrder($stateParams.orderId)
                .success(function(result) {
                    vm.order = result.data;
                })
                .error(function(someError){ 
                    // If error then show invalid order
                    vm.invalidOrder = true;
                });
            }
            else {
                vm.invalidOrder = true;
            }
        }
    }
})();
