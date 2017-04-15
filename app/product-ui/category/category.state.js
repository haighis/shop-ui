(function() {
    'use strict';

    angular
        .module('Product.UI')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('category', {
            parent: 'app',
            url: '/category',
            views: {
                'content@': {
                    templateUrl: 'product-ui/category/category.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
