(function() {
    'use strict';

    angular
        .module('ShoppingCart.UI')
        .controller('CheckoutController', ViewCartController);

    ViewCartController.$inject = 
    [
        '$scope', 
        '$state', 
        '$stateParams', 
        'ShoppingCartBackendService', 
        'OrderBackendService'
    ];

    function ViewCartController ($scope, $state, $stateParams, ShoppingCartBackendService, OrderBackendService) {
        var vm = this;
        vm.submitOrder = submitOrder;
        vm.hasError = false;
        vm.isSubmitted = false;

		// Call activate on load
        activate();
        
        function activate() {
            // Hydrate cart items into vm.cartitem
            vm.cartitems = ShoppingCartBackendService.getCart();
        }

        function submitOrder() {
            // Disable Place order button
            vm.isSubmitted = true;
            var lineItemDetails = [];
            var i = 1;
            // Convert the Cart DTO/model into Order Detail DTO/model
            angular.forEach(ShoppingCartBackendService.getCart(), function(item) {
                var newItem = 
                { 
                    sku: item.sku, 
                    quantity: item.quantity, 
                    unitCost: item.price, 
                    orderLineNumber: i
                }; 
                i++;
                lineItemDetails.push(newItem);
            });

            // Build Order DTO Model
            var orderHeaderDto = {
                lineItemDetails: lineItemDetails
            };

            // Submit Order and get order id
            OrderBackendService.submitOrder(orderHeaderDto)
            .success(function(result) { // 201 created
                // Send to confirmation state with order id as parameter. 
                // TODO performance enhancement: 
                // You could save a round trip to the db by returning the order details here 
                // and passing object via params with state.go
                $state.go('confirmation', { orderId: result.data.id });
            })
            .error(function(someError){ 
                vm.hasError = true;
                // Enable submit buttin in event user wants to resubmit order
                vm.isSubmitted = false;
            });
        }

        // With controllerAs you don't use $scope directly in a controller
        // but in the case of when you want to use a watch you inject $scope
        // and consume it. See below.
        // $watch must be attached to $scope

        // Watch cartitems any time something changes (i.e. update quantity 
        // or delete) in the collection to determine when to update the total 
        $scope.$watchCollection('vm.cartitems', function(array) {
             var total = 0;
             if (array) {
                 angular.forEach(array, function(item) {
                     total += item.quantity * item.price;
                 });
             }
             vm.total = total;
         });
    }
})();
