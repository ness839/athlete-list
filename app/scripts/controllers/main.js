'use strict';

/**
 * @ngdoc function
 * @name nflplayersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflplayersApp
 */
angular.module('nflplayersApp')
  .controller('MainCtrl', function ($scope) {
  	
    $scope.sportList = [
      {'name': 'NFL',
       'snippet': 'National Football League',
       'id': 1 },
      {'name': 'MLB',
       'snippet': 'Major League Baseball',
       'id': 2},
      {'name': 'NBA',
       'snippet':'National Basketball Association',
       'id': 3}
    ];
    
    $scope.sport = {};
    
    $scope.setSport = function(chosen) {
    	$scope.sport = $scope.sportList[chosen - 1];
    };
    
  });
