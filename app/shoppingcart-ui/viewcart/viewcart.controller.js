(function() {
    'use strict';

    angular
        .module('ShoppingCart.UI')
        .controller('ViewCartController', ViewCartController);

        angular
        .module('ShoppingCart.UI').filter('range', function() {
          return function(input, min, max) {
            min = parseInt(min); //Make string input int
            max = parseInt(max);
            for (var i=min; i<max; i++)
              input.push(i);
            return input;
          };
        });


    ViewCartController.$inject = ['$scope', '$state', '$stateParams', 'ShoppingCartBackendService'];

    function ViewCartController ($scope, $state, $stateParams, ShoppingCartBackendService) {
        var vm = this;
        vm.clearCart = clearCart;
        vm.cartitems = [];
        vm.removeItem = removeItem;
        vm.updateQuantity = updateQuantity;

		// Call activate on load
        activate();
        
        function activate() {
            // Hydrate cart items into vm.cartitem
            vm.cartitems = ShoppingCartBackendService.getCart();
        }

        function removeItem(item) {
            ShoppingCartBackendService.removeItem(item).then(function(result){
            });
        }

        function clearCart() {
            ShoppingCartBackendService.clearCart();
            vm.cartitems = ShoppingCartBackendService.getCart();
        }

        function updateQuantity(item) {
            item.quantity = vm.quantity[item.id]
            ShoppingCartBackendService.updateQuantity(item).then(function(result){
                activate();
            });
        }

        // With controllerAs you don't use $scope directly in a controller
        // but in the case of when you want a watch you inject $scope
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
