/*
  Slightly more 
*/
describe('Order Service', function() {
  var OrderBackendService;

  // Load dependencies
  beforeEach(module('ui.router'));
  beforeEach(module('ngStorage'));
  beforeEach(module('promiseland'));
  beforeEach(module('ShoppingCart.UI'));
  beforeEach(angular.mock.module('Order.UI'));

  // Set injected OrderBackendService service/factory (_OrderBackendService_) to local OrderBackendService variable
  beforeEach(inject(function(_OrderBackendService_) {
    OrderBackendService = _OrderBackendService_;
  }));

  // Verify the OrderBackendService service exists
  it('OrderBackendService should exist', function() {
    expect(OrderBackendService).toBeDefined();
  });

  // Test for submitOrder method
  describe('OrderBackendService.submitOrder()', function() {
    // Verify the method exists
    it('should exist', function() {
      expect(OrderBackendService.submitOrder).toBeDefined();
    });
  });

  // Test for getOrder method
  describe('OrderBackendService.getOrder()', function() {
    // Verify the method exists
    it('should exist', function() {
      expect(OrderBackendService.getOrder).toBeDefined();
    });
  });
});