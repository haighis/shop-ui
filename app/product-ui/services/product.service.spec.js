/*
  Product Service Jasmine Test
  - As an example let's change the name of a method in the product backend service 
  - Rerun the tests and then see if the test fails
  - Change the method name in the test and rerun the test, and the test will pass
  - In this scenario we would also have a test/spec for controller
  so we would find the test failing in the controller spec so updating the controller
  to point to our new method name, rerun the tests and after everyting passes we 
  know the changes we made are sound and we can check in.
  
  https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1
*/
describe('Product Service', function() {
  var ProductBackendService;

  // Load ui router dependency
  beforeEach(module('ui.router'));
  // Load Product.UI module
  beforeEach(angular.mock.module('Product.UI'));

  // Set injected ProductBackendService service/factory (_Products_) to local ProductBackendService variable
  beforeEach(inject(function(_ProductBackendService_) {
    ProductBackendService = _ProductBackendService_;
  }));

  // Verify the ProductBackendService service exists
  it('ProductBackendService should exist', function() {
    expect(ProductBackendService).toBeDefined();
  });

  // Test for getProducts method
  describe('ProductBackendService.getProductsByCategory()', function() {
    // Verify the method exists
    it('should exist', function() {
      expect(ProductBackendService.getProductsByCategory).toBeDefined();
    });
  });

  // Test for getCategories method
  describe('ProductBackendService.getCategories()', function() {
    // Verify the method exists
    it('should exist', function() {
      expect(ProductBackendService.getCategories).toBeDefined();
    });
  });
});