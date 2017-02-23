//our routing beetween pages
todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/todo', {
        templateUrl: 'partials/todo.html',
        controller: 'TodoCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
