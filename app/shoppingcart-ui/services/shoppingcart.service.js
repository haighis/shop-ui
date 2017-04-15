(function() {
    'use strict';

    var ShoppingCartBackend = angular
        .module('ShoppingCart.UI');

    ShoppingCartBackend.factory('ShoppingCartLocalService', ShoppingCartLocalStorageService);

    ShoppingCartLocalStorageService.$inject = ['$localStorage'];
    
    // Abstraction for working with cartitems in localStorage
    function ShoppingCartLocalStorageService($localStorage) {
        var service = {
            initializeLocalStorage: initializeLocalStorage,
            getStorage: getStorage,
            setStorage: setStorage,
            clearStorage: clearStorage
        };

        return service;

        // Initialize LocalStorage to an array
        function initializeLocalStorage() {
            var existStorage = $localStorage.cartitems;
            if(existStorage === undefined) {
                existStorage = [];
            }
        }

        function getStorage() {
            return $localStorage.cartitems;
        }

        function setStorage(items) {
            $localStorage.cartitems = items;
        }

        function clearStorage() {
            delete $localStorage.cartitems;
            $localStorage.cartitems = [];
        }
    }

    ShoppingCartBackend.factory('ShoppingCartBackendService', ShoppingCartService);

    ShoppingCartService.$inject = ['$q', '$http', 'ShoppingCartLocalService'];

    function ShoppingCartService ($q, $http, ShoppingCartLocalService) {
        var service = {
            getCart: getCart,
            removeItem: removeItem,
            clearCart: clearCart,
            addToCart: addToCart,
            updateQuantity: updateQuantity
        };

        return service;

        function getCart() {
            return ShoppingCartLocalService.getStorage();
        }

        function removeItem(item) {
            var defer = $q.defer();      
            $http.delete('http://localhost:4444' + '/api/carts/' + item.id).then(function(success) {
                var cart = getCart();
                var indexToRemove = _.indexOf(cart, _.find(cart, {id: item.id}));

                // Replace item at index using native splice
                cart.splice(indexToRemove, 1);
                
                ShoppingCartLocalService.setStorage(cart);
                defer.resolve(success);
            }, 
            function(error){
                defer.reject(error);
            });
            return defer.promise;
        }

        function clearCart() {
            angular.forEach(getCart(), function(item) {
                $http.delete('http://localhost:4444' + '/api/carts/' + item.id).then(function(success) {
                    //defer.resolve(success);

                }, 
                function(error){
                    //defer.reject(error);
                });
            });

            ShoppingCartLocalService.clearStorage();
        }   

        // 
        function _setQuantity(item) {
            // logic that will assure the quantity of any item is max value of 9
            // todo store this in ng contstant so we can change this in one place
            // and reference it everywhere
            var effectiveQuantity = 0;
            if(item.quantity <= 9) {
                effectiveQuantity = parseInt(item.quantity);
            }

            return effectiveQuantity;
        }

        // Save cart to shopping cart REST API/localstorage
        // add to local storage so it's there when they come back or when the close the browser and then open again
        // add a method that on load in category controller we call intializeCart in this service to 
        // hydrate their shopping cart from local storage
        // add to server 
        function addToCart(model) {
            ShoppingCartLocalService.initializeLocalStorage();

            // Save to localStorage
            var existStorage = getCart();

            if(!Array.isArray(getCart())) {
                existStorage = [];
                ShoppingCartLocalService.setStorage(existStorage);
            }

            var itemInCart = _.find(existStorage, {sku:model.sku});
            var defer = $q.defer();            
            if(!itemInCart){
                // save to REST API
                $http.post('http://localhost:4444' + '/api/carts', model).then(function(success) {
                    model.id = success.data.id;
                    existStorage.push(model);
                    // save cart items to local storage
                    ShoppingCartLocalService.setStorage(existStorage);
                    defer.resolve(success);
                }, 
                function(error){
                    defer.reject(error);
                });
                
            }
            else {
                itemInCart.quantity = model.quantity;
                // When a product is already in cart then we update the quantity 
                // of the existing item 
                updateQuantity(itemInCart).then(function(result){
                    defer.resolve(result);
                });
            }
            return defer.promise;
        }

        function updateQuantity(item) {
            // Assure max value of quantity can be max 9
            var effectiveQty = _setQuantity(item);

            // Create a new cart object and set the effective qty
            var cartModel = 
            {
                quantity: effectiveQty,
                title: item.title,
                price: item.price,
                sku: item.sku,
                id: item.id,
                customerId: 'johntodo'
            };

            // Replace existing item in cart that contain the new qty for same cart item
            var existStorage = _.map(getCart(), function(cartItem) {
              return cartItem.id === item.id ? cartModel : cartItem;
            });

            // save cart items to local storage
            ShoppingCartLocalService.setStorage(existStorage);

            // Update cart item in REST API
            var defer = $q.defer();

            $http.put('http://localhost:4444' + '/api/carts', cartModel).then(function(success) {
                defer.resolve(success);
            }, 
            function(error){
                defer.reject(error);
            });

            return defer.promise;
        }
    }
})();