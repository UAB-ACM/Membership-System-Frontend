'use strict';

/**
 * @ngdoc overview
 * @name membershipSystemFrontendApp
 * @description
 * # membershipSystemFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('membershipSystemFrontendApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
