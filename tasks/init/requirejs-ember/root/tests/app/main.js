define(['controllers/ApplicationController'], function(ApplicationController) {
  describe('ApplicationController', function() {
    describe('constructor', function() {
      it('should create a new controller', function() {
        expect(ApplicationController.create()).to.be.an('object');
      });
    });
  });
});