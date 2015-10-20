var portfolio = angular.module('portfolio', []);


//controller///////////////////////////////////////////////////////////////////////////////////

//stocks controller
portfolio.controller('mainController', function($scope, $location){

	console.log('portfolio');

	$scope.Blackjack = function(){
		console.log('blackjack')
		// location.path("")
	}


	$scope.Replay = function(){

	}

});
// end of controller


//factories ///////////////////////////////////////////////////////////////////////////////////

//socratse Factory
// portfolio.factory('mainFactory', function($http){
// 	var factory = {};

// 	factory.askingQuestion = function(intent, callback){
		
		
// 	};

// 	return factory;
// });
