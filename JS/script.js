$(document).ready(function() {

	var hot=[];

$("#button_tables").click(function(){

	$.getJSON('/KellyForslund.com/JS/JSON/data.json', function(data){

		 hot = data;

		console.log("You want to search for tables.");

	});

 });


$("#button_dining").click(function() {

	for (i=0; i < hot.tables.length; i++) {

		  if($.inArray("dining", hot.tables[i].type)) {

		  	console.log(hot.tables[i])

		  	 } else {

		  		delete hot.tables[i];
				
			}
			
		} 
	

		console.log(hot.tables.length);

});

$("#button_coffee").click(function() {

	for (i=0; i < hot.tables.length; i++) {

		if(hot.tables[i].type !== "coffee") {
			
			delete hot.tables[i];
			
		} 
		}

		console.log(hot.tables.length);

});


$("#button_side").click(function() {

	for (i=0; i < hot.tables.length; i++) {

		if(hot.tables[i].type !== "side") {
			
			delete hot.tables[i];
			
		} 
		}

		console.log(hot.tables.length);

});

 });


		// for (i = 0; i < obj.tables.length; i++) {

		//  	if(obj.tables[i].shape == "round") {

		//  	 	hot.push(obj.tables[i]);

		//  	 		 } else {

		//  	 			alert("sorry there is nothing here") }
		//  	 		}
		 	 	

		//  	console.log(hot);

		
		
	
    	
    	

   
    

	
   