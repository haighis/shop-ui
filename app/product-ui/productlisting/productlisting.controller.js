(function() {
    'use strict';

    angular
        .module('Product.UI')
        .controller('ProductListingController', ProductListingController);

    ProductListingController.$inject = 
    [   
        '$scope', 
        '$state', 
        '$stateParams', 
        'ProductBackendService', 
        'ShoppingCartBackendService'
    ];

    function ProductListingController ($scope, $state, $stateParams, ProductBackendService, ShoppingCartBackendService) {
        var vm = this;
        vm.products = [];
        vm.add = add;
        vm.quantity = [];

		// Call activate on load
        activate();
        
        function activate() {
            // Hydrate products into vm.products
            var model = 
            {
                categoryId: $stateParams.categoryId, 
                page: 1, // TODO if we have time then implement paging
                size: 1000 // safe maximum is 1000 products 
                // TODO if we have time then implement paging
            };

            ProductBackendService.getProducts(model).then(function(results){
                vm.products = results;
            })
        }

        function add(model) {
            // Quantity (in ng-model) is determined based on 
            // the product id. vm.quantity ng model is an array of product id's
            // To get the actual quantity value you refer to vm.quantity
            // and pass in the array position to get the value
            // i.e var a = vm.quantity[2];
            var cartModel = 
            {
                quantity: vm.quantity[model.id],
                price: model.price,
                title: model.title,
                sku: model.sku,
                customerId: 'johntodo'
            };

            ShoppingCartBackendService.addToCart(cartModel).then(function(result){
                //todo hide/show loading indicator
            });
        }
    }
})();
