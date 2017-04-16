'use strict';
  
  /*
    Shop App e2e tests
    Tests that browse the frontend angular states 
  */
  
  describe('shop app e2e test', function() {
    
  var url = 'http://localhost:2005/';

  it('should automatically redirect to /category when location hash/fragment is empty', function() {
    browser.get(url);
    expect(browser.getLocationAbsUrl()).toMatch("/category");
  });

  // Example of faing e2e test
  // it('should fail to show that protractor is working and sometimes I fail', function() {
  //   browser.get(url);
  //   expect(browser.getLocationAbsUrl()).toMatch("/categorytest");
  // });

  // Category
  describe('category', function() {

    beforeEach(function() {
      browser.driver.get(url);
      browser.driver.manage().window().setSize(1439, 873);
      element(by.css('nav>div:nth-of-type(1)>a>i')).click();
    });

    //expect( element(by.css('select[ng-model="vm.quantity[product.id]"]')).isPresent() ).toBe(true);

  });

  // Product Listing 
  // describe('category', function() {

  //   beforeEach(function() {
  //     browser.driver.get(url);
  //     //browser.driver.get('index.html#!/category');
  //     browser.driver.waitForAngular();
  //     element(by.css('div:nth-of-type(4)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>a')).click();
  //   });

  //   expect( element(by.css('select[ng-model="vm.quantity[product.id]"]')).isPresent() ).toBe(true);

  // });

  // // Product Listing
  // describe('product', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#!/category/productlisting/1001');
  //   });

  // });    

  // // View cart
  // describe('viewcart', function() {

  //   beforeEach(function() {
  //     browser.get('index.html#!/vieasdfwcart');
  //   });

  // });    
});
