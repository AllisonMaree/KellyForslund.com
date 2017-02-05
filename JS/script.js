var image = document.getElementById("main");
var src = ["homePage.jpg","homePage2.jpg","contactPageImage.jpg","glant.jpg","lineListImag.jpg",];

var step=0
    function slideit() { 
        image.src = src[step];
        if(step<4){
            step++;
        }else{
            step=1;
        }
    }        
    setInterval(slideit,5000);