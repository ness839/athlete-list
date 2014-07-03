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
      {'name': 'nfl',
       'snippet': 'National Football League',
       'id': 1 },
      {'name': 'mlb',
       'snippet': 'Major League Baseball',
       'id': 2},
      {'name': 'nba',
       'snippet':'National Basketball Association',
       'id': 3}
    ];
    $scope.sport = {};
    $scope.players = {};
    
    $scope.setSport = function(chosen) {
    	$scope.sport = $scope.sportList[chosen - 1];
    };
    
    $scope.getPlayers = function() {    	
    	switch($scope.sport.id) {
    		case 1:
 		  		$http.get('http://api.espn.com/v1/sports/football/nfl/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3')
    			.success(function(data){
    			$scope.players = data.sports[0].leagues[0].athletes; 	
    			});
    			break;
    		case 2:
 		  		$http.get('http://api.espn.com/v1/sports/baseball/mlb/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3')
    			.success(function(data){
    			$scope.players = data.sports[0].leagues[0].athletes;   	
    			});
    			break;
    		case 3:
 		  		$http.get('http://api.espn.com/v1/sports/basketball/nba/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3')
    			.success(function(data){
    			$scope.players = data.sports[0].leagues[0].athletes;   	
    			});
    			break;
    		default:
    			window.alert('You dun goofed!');
    			break;
    	}
    };    
  });
