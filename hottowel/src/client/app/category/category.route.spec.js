/* jshint -W117, -W030 */
describe('category routes', function() {
  describe('state', function() {
    var view = 'app/category/category.html';

    beforeEach(function() {
      module('app.category', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state category to url /category ', function() {
      expect($state.href('category', {})).to.equal('/category');
    });

    it('should map /category route to category View template', function() {
      expect($state.get('category').templateUrl).to.equal(view);
    });

    it('of category should work with $state.go', function() {
      $state.go('category');
      $rootScope.$apply();
      expect($state.is('category'));
    });
  });
});
