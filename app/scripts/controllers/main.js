'use strict';

/**
 * @ngdoc function
 * @name nflplayersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nflplayersApp
 */
angular.module('nflplayersApp')
  .controller('MainCtrl', function ($scope, $http) {
  	
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
    $scope.players = {};
    
    $scope.setSport = function(chosen) {
    	$scope.sport = $scope.sportList[chosen - 1];
    };
    
    $http.get('http://api.espn.com/v1/sports/football/nfl/athletes/?offset=50&apikey=ehtaq9zm53tbchrtg7tta6e3')
    	.success(function(data){
    		var input = data;
    		$scope.players = input.sports[0].leagues[0].athletes;
  //		window.alert($scope.players.length);
    	});
    
    
  });
