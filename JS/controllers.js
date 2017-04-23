angular.module('myApp', [])
    .service('myService', ['$scope', function ($scope) {

        return {
            query: function() {
               alert('test');
            }
        };

    }])
    .controller('myController', ['$scope', 'myService', function ($scope, myService) {
        myService.query();
    }]);
    



//var app = angular.module('myApp', []);

// $(document).ready(function() {

	

// 	var hot=[];


// 	$.getJSON('/KellyForslund.com/JS/JSON/data.json', function(data){

		

// 		console.log("The date from script.js is " + data);

// });

// app.service('myService', ['$scope', function($scope) {
// 	this.myNumber = 5;


// 	this.myService = 3;

// 	return {
// 		mySum: this.myService + this.myNumber
// 	}

// }]);




//  app.controller('myController', ['$scope','myService', function($scope, myServices) {

//  	$scope.mySum = myService.mySum;

//  	console.log(mySum);


//        var isCheckedObj = {}
//        var masterList = []


// // CREATE MASTER BOOLEAN lIST OF PARAMETERS //

// 		var isChecked = function() {

//    			isCheckedObj.material = {
//                   "Wood" : $("#matWood").is(':checked'),
//                   "Metal":$("#matMetal").is(':checked'),
//                   "Other" :$("#matOther").is(':checked')
//               }

//               isCheckedObj.style = {
//                   "Traditional" : $("#styTraditional").is(':checked'),
//                   "Transitional":$("#styTransitional").is(':checked'),
//                   "Modern":$("#styModern").is(':checked'),
//                   "Outdoor":$("#styOutdoor").is(':checked')
//               }
//                isCheckedObj.size = {
//                   "small" :$("#sizeSmall").is(':checked'),
//                   "medium":$("#sizeMedium").is(':checked'),
//                   "large" :$("#sizeLarge").is(':checked'),
//               }
//                 isCheckedObj.leadtime = {
//                   "quickship":$("#leadtimeQuickship").is(':checked'),
//                   "standard":$("#leadtimeStandard").is(':checked'),
//               }

//            };


// // CREATE ARRAY OF PARAMETERS = "TRUE" //


// 		var customerPreference = function() {

// 			isChecked();

// 			_.each(isCheckedObj.material, function(val,key) {
// 				if (val) {
// 					masterList.push(key);
// 				}
// 			});
// 			_.each(isCheckedObj.size, function(val,key) {
// 				if (val) {
// 					masterList.push(key);
// 				}
// 			});
// 			_.each(isCheckedObj.style, function(val,key) {
// 				if (val) {
// 					masterList.push(key);
// 				}
// 			});
// 			_.each(isCheckedObj.leadtime, function(val,key) {
// 				if (val) {
// 					masterList.push(key);
// 				}
// 			});

// 			console.log(masterList);

// 		};


//  		var onDataComplete = function(response){

//  			$scope.myData = response.data; 		
 	
//  		};

 		
//  		$scope.search = function(response) {

//           	$http.get("/KellyForslund.com/JS/JSON/data.json")

//           	onDataComplete();

          	
//  			 customerPreference();

//  		};
	
// }]);

// //});
	

