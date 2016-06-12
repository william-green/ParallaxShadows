window.addEventListener('load',function(e){
	//page loaded
  	window.addEventListener('mousemove',function(e){
  		//mousemove event
    	var elems = document.getElementsByClassName('parallaxShadow');
    	//gather all elements
	    for(var i = 0; i < elems.length; i++){
	    	//loop through all the elements
	      	var elem = elems[i];
	      	//calculate and apply shadow for current cursor position...
	      	var elemOffset = elem.getBoundingClientRect();
	      	elem.style.boxShadow = Math.floor(-(e.clientX - elemOffset.left)/10)+'px '+Math.floor(-(e.clientY - elemOffset.top)/20)+'px '+(Math.abs(Math.floor(-(e.clientX - elemOffset.left)/10+Math.floor(-(e.clientY - elemOffset.top)/20))))+'px -2px #000';
	    }
  	})
});