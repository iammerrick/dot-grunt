var {%= js_safe_name %} = require('../{%= name %}');
var expect = require('chai').expect;

describe('{%= js_safe_name %}', function() {
  it('should say hello to the world', function() {
    expect({%= js_safe_name %}('World')).to.equal('Hello, World!');
  });
});