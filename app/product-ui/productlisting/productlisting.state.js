(function() {
    'use strict';

    angular
        .module('Product.UI')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('category.productlisting', {
            url: '/productlisting/:categoryId',
                templateUrl: 'product-ui/productlisting/productlisting.html',
                controller: 'ProductListingController',
                controllerAs: 'vm',
        });
    }
})();
