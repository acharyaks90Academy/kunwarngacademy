(function() {
  'use strict';

  angular
    .module('app.category')
    .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['logger'];
  /* @ngInject */
  function CategoryController(logger) {
    var vm = this;
    vm.title = 'Category';

    activate();

    function activate() {
      logger.info('Activated Category View');
    }
  }
})();
