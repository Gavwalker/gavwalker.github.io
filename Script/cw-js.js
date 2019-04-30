
function show(val){
	    if (val == "1") 
		{
		    eaddy.style.visibility='visible';
			maddy.style.visibility='hidden';
		}
		else if (val == "2")
		{
			maddy.style.visibility='visible';
			eaddy.style.visibility='hidden';
		}
		else
		{
			eaddy.style.visibility='hidden';
			maddy.style.visibility='hidden';
		}
		
	}
	


/*slide function*/
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 5000;	// Time Between Switch
	 
// Image List
images[0] = "Images/slideshow2.jpg";
images[1] = "Images/slideshow1.jpg";
images[2] = "Images/slideshow.jpg";
images[3] = "Images/slideshow3.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
