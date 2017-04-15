(function() {
    'use strict';

    angular
        .module('Product.UI')
        .controller('HomeController', CategoryListController);

    CategoryListController.$inject = ['$scope', '$state', 'ProductBackendService'];

    function CategoryListController ($scope, $state, ProductBackendService) {
        var vm = this;
        vm.categories = [];
        
		// Call activate on load
        activate();
        
        function activate() {
            // Hydrate categories into vm.categories
            ProductBackendService.getCategories().then(function(categoriesResult){
                vm.categories = categoriesResult.data;
            })
        }
    }
})();
