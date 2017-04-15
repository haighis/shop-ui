(function() {
    'use strict';

    var OrderBackend = angular.module('Order.UI');

    OrderBackend.factory('OrderBackendService', OrderService);

    OrderService.$inject = ['$q', '$http', 'promiseService', 'ShoppingCartBackendService'];

    function OrderService ($q, $http, promiseService, ShoppingCartBackendService) {
        var service = {
            getOrder: getOrder,
            submitOrder: submitOrder
        };

        return service;

        // Submit Order and clear cart from localstorage
        function submitOrder (model) {
            // Use promise service in order to return success and error back to controller
            var defer = promiseService.defer();
            $http.post('http://localhost:3333' + '/api/orders/',model)
            .then(function(success) {
                // clear the cart
                ShoppingCartBackendService.clearCart();
                return defer.resolve(success);    
            }, 
            function(error){
                return defer.reject(error);
            });
            return defer.promise;
        }

        // Get Order
        function getOrder(id) {
            // Use promise service in order to return success and error back to controller
            var defer = promiseService.defer();
            $http.get('http://localhost:3333' + '/api/orders/' + id)
            .then(function(success) {
                return defer.resolve(success);
            }, 
            function(error){
                return defer.reject(error);
            });
            return defer.promise;
        }
    }
})();