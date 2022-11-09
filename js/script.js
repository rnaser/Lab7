function init(){
//add your javascrip between these two lines of code
 
   function myEventFunction(){
			alert( "Rami Naser:" + inn.value );
			
		}
 
       var inn = document.getElementById('entryinput');
	   
		//use fc.value in inspector to see the input value
		inn.addEventListener('click',myEventFunction);
		alert(fc.value);
		fc.value = "javascript worked";	
 
 
     var btn = document.getElementById('entrybutton');
		
     btn.addEventListener('click',myEventFunction);
		
		


}
window.addEventListener('load', init);
