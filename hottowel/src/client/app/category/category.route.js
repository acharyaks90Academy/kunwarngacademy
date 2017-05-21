(function() {
  'use strict';

  angular
    .module('app.category')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'category',
        config: {
          url: '/category',
          templateUrl: 'app/category/category.html',
          controller: 'CategoryController',
          controllerAs: 'vm',
          title: 'Category',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Category'
          }
        }
      }
    ];
  }
})();
