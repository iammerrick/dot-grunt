var {%= name %} = require('../{%= name %}');
var expect = require('chai').expect;

describe('{%= name %}', function() {
  it('should work properly', function() {
    expect({%=name%}()).to.equal(2);
  });
});