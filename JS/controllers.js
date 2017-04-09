 var app = angular.module('myApp', []);

 app.controller('myController', function($scope, $http) {

       var isCheckedObj = {}
       var masterList = []


// CREATE MASTER BOOLEAN lIST OF PARAMETERS //

		var isChecked = function() {

   			isCheckedObj.material = {
                  "Wood" : $("#matWood").is(':checked'),
                  "Metal":$("#matMetal").is(':checked'),
                  "Other" :$("#matOther").is(':checked')
              }

              isCheckedObj.style = {
                  "Traditional" : $("#styTraditional").is(':checked'),
                  "Transitional":$("#styTransitional").is(':checked'),
                  "Modern":$("#styModern").is(':checked'),
                  "Outdoor":$("#styOutdoor").is(':checked')
              }
               isCheckedObj.size = {
                  "small" :$("#sizeSmall").is(':checked'),
                  "medium":$("#sizeMedium").is(':checked'),
                  "large" :$("#sizeLarge").is(':checked'),
              }
                isCheckedObj.leadtime = {
                  "quickship":$("#leadtimeQuickship").is(':checked'),
                  "standard":$("#leadtimeStandard").is(':checked'),
              }

           };


// CREATE LIST OF PARAMETERS = "TRUE" //


		var customerPreference = function() {

			isChecked();

			var objLength = Object.keys(isCheckedObj).length;

			console.log("Initial object: " + isCheckedObj);
			
			for(i = 0; i < objLength; i++){

				Object.keys(isCheckedObj).forEach(function(key) {
					if (!isCheckedObj[key]) delete isCheckedObj[key];
				});

				// console.log(Object.keys(isCheckedObj));

				console.log("edited object: " + isCheckedObj);			
     		 	
}
}

			//console.log(Object.values(masterList));



 		var onDataComplete = function(response){

 			$scope.myData = response.data; 		
 	
 		};

 		var onResponse = function(response){
 			console.log("onResponse works");
 		};

 		var onError = function(reason){
 			$scope.error="could not load data";
 		}

 		$scope.search = function(data) {

          	$http.get("/KellyForslund.com/JS/JSON/data.json")
 			 .then(onDataComplete, onError);

 			 customerPreference();

 		};

	});



	

