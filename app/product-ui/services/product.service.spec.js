describe('Product Service', function() {
  var ProductBackendService;

  // Load our api.users module
  beforeEach(angular.mock.module('Product.UI'));

  // Set our injected ProductBackendService service/factory (_Products_) to our local ProductBackendService variable
  beforeEach(inject(function(_ProductBackendService_) {
    ProductBackendService = _ProductBackendService_;
  }));

  // A simple test to verify the ProductBackendService service exists
  it('ProductBackendService should exist', function() {
    //expect(2 + 2).toEqual(4);
    expect(ProductBackendService).toBeDefined();
  });

  // A set of tests for our Users.all() method
  // describe('.all()', function() {
  //   // A simple test to verify the method all exists
  //   it('should exist', function() {
  //     expect(Users.all).toBeDefined();
  //   });
  // });
});