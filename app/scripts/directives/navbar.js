'use strict';

/**
 * @ngdoc directive
 * @name membershipSystemFrontendApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('membershipSystemApp')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'views/navbar.html',
            controller: ['$scope', '$window',

            function ($scope, $window) {

                    $scope.goBack = function () {
                        history.back();
                    }
        }]
        };
    });