$( document ).ready(function() {
    $.getJSON("http://localhost:8888/KellyForslund.com/JS/JSON/data.json", function(data){
        console.log(data);
    }); 
});
	
    // $.ajax({
    //     dataType: 'json',
    //     beforeSend : function() {
    //        console.log('Before Ajax Request Starts !!');
    //     },
    //     success: function(data) {
    //         console.log(data);
    //         alert(data);
    //         document.write(data);
    //     },
    //     error : function(jqXHR, textStatus, errorThrown) {
    //          alert("Error occurred: " + errorThrown);
    //     },
    //      afterSend : function() {
    //        console.log('Ajax Request Complete  !!');
    //     },
    //     url: 'localhost8080/KellyForslund.com/JS/JSON/data.json'
    // });  


 