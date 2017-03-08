
var origText;

function upDate(previewPic){
	
    var bigImage = document.getElementById("image");
    
    origText = bigImage.innerHTML;
    
    var smallPic = previewPic.src;
    
    bigImage.style.backgroundImage = "url('" + smallPic + "')";
    
    bigImage.innerHTML = previewPic.alt;
}

function unDo(){
 
	var bigImage = document.getElementById("image");
 
    bigImage.style.backgroundImage = "url('')";
 
    bigImage.innerHTML = origText;
}

//lägger till kommentar