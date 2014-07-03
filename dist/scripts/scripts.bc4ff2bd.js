"use strict";angular.module("nflplayersApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("nflplayersApp").controller("MainCtrl",["$scope","$http",function(a,b){a.sportList=[{name:"nfl",snippet:"National Football League",id:1},{name:"mlb",snippet:"Major League Baseball",id:2},{name:"nba",snippet:"National Basketball Association",id:3}],a.sport={},a.players={},a.setSport=function(b){a.sport=a.sportList[b-1]},a.getPlayers=function(){switch(a.sport.id){case 1:b.get("http://api.espn.com/v1/sports/football/nfl/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3").success(function(b){a.players=b.sports[0].leagues[0].athletes});break;case 2:b.get("http://api.espn.com/v1/sports/baseball/mlb/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3").success(function(b){a.players=b.sports[0].leagues[0].athletes});break;case 3:b.get("http://api.espn.com/v1/sports/basketball/nba/athletes/?offset=0&apikey=ehtaq9zm53tbchrtg7tta6e3").success(function(b){a.players=b.sports[0].leagues[0].athletes});break;default:window.alert("You dun goofed!")}}}]),angular.module("nflplayersApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);