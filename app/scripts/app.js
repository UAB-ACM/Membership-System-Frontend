'use strict';

/**
 * @ngdoc overview
 * @name membershipSystemApp
 * @description
 * # membershipSystemApp
 *
 * Main module of the application.
 */
angular
  .module('membershipSystemApp', [
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
      .when('/membership', {
        templateUrl: 'views/membership.html',
        controller: 'MembershipCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
