(function() {
    'use strict';

    var ProductBackend = angular.module('Product.UI');

    ProductBackend.factory('ProductBackendService', ProductService);

    ProductService.$inject = ['$q', '$http'];

    function ProductService ($q, $http) {
        var service = {
            getCategories: getCategories,
            getProductsByCategory: getProductsByCategory
        };

        return service;

        // Gets Products by category
        function getProductsByCategory (model) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'http://localhost:1111' + '/api/categories/' + model.categoryId +'/products',
                //params: { page: model.page, size: model.size }
            }).
            success(function (results, status, headers, config) {
                deferred.resolve(results);            
            }).
            error(function (data, status) {
                deferred.reject(data, status); 
            });
            return deferred.promise;    
        }

        // Gets all categories via GET from REST API
        function getCategories() {
            var deferred = $q.defer();
        
            $http.get('http://localhost:1111' + '/api/categories').then(function(success) {
                deferred.resolve(success);
            }, 
            function(error){
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
})();