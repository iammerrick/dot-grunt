define(['views/HelloView'], function(HelloView) {
  describe('HelloView', function() {
    describe('render', function() {
      it('should return the correct markup', function() {
        expect(new HelloView().render().el.innerHTML).to.equal('Welcome! Make something awesome!');
      });
    });
  });
});