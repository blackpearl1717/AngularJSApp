(function() {
  var app = angular.module('myApp', ['ui.router']);

   app.run(function($rootScope, $location, $state, LoginService) {
     console.clear();
     console.log('running');
    if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });

  app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'login/login.html',
        controller : 'LoginController'
      })
      .state('transfer', {
        url : '/transfer',
        templateUrl : 'transfer/transfer.html',
        controller : 'TransferController'
      });

       /* $urlRouterProvider.otherwise('/login'); */
  }]);

})();
