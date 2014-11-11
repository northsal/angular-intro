/*
 app.js: main application script
 this is an Angular application
 */

// angular: model-view-controller

"use strict";

// (name of app, array)
angular.module('AngularDemo', [])
    // $scope --> available on any view
    .controller('HelloController', function($scope) {
        $scope.person = {
            firstName: null,
            lastName: null
        };
    })

    .controller('MoviesController', function($scope) {
        $scope.movies = movies;
        $scope.sortCol = 'rank';
        $scope.sortBy = function(sortCol) {
            if ($scope.sortCol == sortCol) {
                $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                $scope.sortCol = sortCol;
                $scope.sortReverse = false;
            }
        };
        $scope.isSortedBy = function(colName) {
            return colName == $scope.sortCol;
        }
    });