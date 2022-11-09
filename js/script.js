function init(){
//add your javascrip between these two lines of code
 
   function myEventFunction(){
			alert( "Rami Naser: " + inn.value );
			
			
		}
 
       var inn = document.getElementById('entryinput');
	   var btn = document.getElementById('entrybutton');
	   var ban = document.getElementById('entrybutton');
	   btn.addEventListener('click',myEventFunction);
 
 
     
		
     
		
		


}
window.addEventListener('load', init);
