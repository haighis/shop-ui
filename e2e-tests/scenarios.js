'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('shop app', function() {
    // describe('angularjs.org', function() {
    //   var homePage = new HomePage();

    //   beforeEach(function() {
    //      browser.get('https://angularjs.org/');
    //   });
  
    //   it('should have a three buttons', function() {
    //      expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(false);
    //   });
    // });
  var url = 'http://localhost:2005/';

  it('should automatically redirect to /category when location hash/fragment is empty', function() {
    browser.get(url);
    expect(browser.getLocationAbsUrl()).toMatch("/category");
  });


  describe('category', function() {

    beforeEach(function() {
      browser.get('index.html#!/category');
    });
});
