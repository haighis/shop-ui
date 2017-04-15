// 'use strict';

// describe('Product.UI module', function() {

//   beforeEach(module('ui.router'));
//   beforeEach(module('Product.UI'));
  
//   var $controller, $scope, $rootScope, $controller, $state, $q;

//   // beforeEach(inject(function(_$controller_){
//   //     $controller = _$controller_;
//   //     $rootScope = _$rootScope_;
//   // }));

//   beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$scope_) {
//       $rootScope = _$rootScope_;
//       $q = _$q_;
//       $controller = _$controller_;
//       //productService = _products_;
//       $scope = _$scope_;
//   }));

//   function setupController() {
//         //Need a function so we can setup different instances of the controller
//         //var getProducts = $q.defer();

//         //Set up our spies
//         //spyOn(products, 'getProducts').andReturn(getProducts.promise);

//         //Initialise the controller
//         $controller('CategoryListController', {
//             $scope: $scope
//         });

//         // Use $scope.$apply() to get the promise to resolve on nextTick().
//         // Angular only resolves promises following a digest cycle,
//         // so we manually fire one off to get the promise to resolve.
//         // if(resolve) {
//         //     $scope.$apply(function() {
//         //         getProducts.resolve();
//         //     });
//         // } else {
//         //     $scope.$apply(function() {
//         //         getProducts.reject();
//         //     });
//         // }
//     }

//   describe('Category List controller', function(){
//     var controller;

//       // beforeEach(function() {
//       //     var $scope = $rootScope.$new();
//       //     controller = $controller('CategoryListController', {  $scope: $scope });
//       // });

//       // beforeEach(inject(function($rootScope, $controller) {
//       //     ctrl = $controller('requestsController', { $scope: $rootScope.$new() });
//       // }));

//     it('should ....', inject(function($controller, $scope) {
//       //spec body
//       var view2Ctrl = $controller('CategoryListController');
//       expect(view2Ctrl).toBeDefined();
//     }));

//     // it('should ....', inject(function($controller) {
//     //   //spec body
//     //   var view2Ctrl = $controller('View2Ctrl');
//     //   expect(view2Ctrl).toBeDefined();
//     // }));

//   });
// });