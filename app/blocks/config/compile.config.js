(function() {
    'use strict';

    angular
        .module('shopApp')
        .config(compileServiceConfig);

    compileServiceConfig.$inject = ['$compileProvider','DEBUG_INFO_ENABLED'];

    function compileServiceConfig($compileProvider,DEBUG_INFO_ENABLED) {
        
        $compileProvider.debugInfoEnabled(DEBUG_INFO_ENABLED);
        
        /*
        If you wish to debug an application with this information
        then you should open up a debug console in the browser
        then call this method directly in this console:

		angular.reloadWithDebugInfo();
		*/
    }
})();
