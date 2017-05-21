'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('pipz', function() {

  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/contacts");
  });

  describe('contacts', function() {

    beforeEach(function() {
      browser.get('/#!/contacts');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('pipz');
    });
  });
});
