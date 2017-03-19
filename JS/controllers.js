 var app = angular.module('myApp', []);

 app.controller('myController', function($scope, $http) {

 		var onDataComplete = function(response){
 			$scope.myData = response.data; 		
 			$http.get($scope.myData.key);	
 		};

 		var onResponse = function(response){
 			//$scope.response = response.data;
 			console.log("onResponse works");
 		};

 		var onError = function(reason){
 			$scope.error="could not load data";
 		}

 		$scope.search = function(data) {
 			 $http.get("/KellyForslund.com/JS/JSON/data.json")
 			 .then(onDataComplete, onError);
 		};

	});


	

