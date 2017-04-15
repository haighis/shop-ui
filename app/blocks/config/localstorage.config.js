(function() {
    'use strict';

    angular
        .module('shopApp')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider'];

    function localStorageConfig($localStorageProvider) {
        $localStorageProvider.setKeyPrefix('storeApp-');
    }
})();
