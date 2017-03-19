 var app = angular.module('myApp', []);

 app.controller('myController', function($scope, $http) {
       
       var dataaray = [];

       var dataObj = {}


 		var onDataComplete = function(response){

 			alert("11");
 			
 			$scope.selections = dataaray;

 			$scope.objSelections =dataObj;

 			$scope.myData = response.data; 		
 			//$http.get($scope.myData.key);	
 		};

 		var onResponse = function(response){
 			//$scope.response = response.data;
 			console.log("onResponse works");
 		};

 		var onError = function(reason){
 			$scope.error="could not load data";
 		}

 		$scope.search = function(data) {
          
              dataObj.material = {
                  "Wood" : $("#matWood").is(':checked'),
                  "Metal":$("#matMetal").is(':checked'),
                  "Other" :$("#matOther").is(':checked')
              }

              dataObj.style = {
                  "Traditional" : $("#styTraditional").is(':checked'),
                  "Transitional":$("#styTransitional").is(':checked'),
                  "Modern" :$("#styModern").is(':checked'),
                  "Outdoor" :$("#styOutdoor").is(':checked')
              }

              
               var matWood =  $("#matWood").is(':checked');
               var matMetal =  $("#matMetal").is(':checked');
               var matOther =  $("#matOther").is(':checked');

               var styTraditional =  $("#styTraditional").is(':checked');
               var styTransitional =  $("#styTransitional").is(':checked');
               var styModern =  $("#styModern").is(':checked');
               var styOutdoor =  $("#styOutdoor").is(':checked');
             
             dataaray.push([matWood,matMetal,matOther])
             
             dataaray.push([styTraditional,styTransitional,styModern,styOutdoor])

 			 $http.get("/KellyForslund.com/JS/JSON/data.json")
 			 .then(onDataComplete, onError);
 		};

	});


	

