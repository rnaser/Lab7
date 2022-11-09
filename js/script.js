function init(){
//add your javascrip between these two lines of code
 
   function myEventFunction(){
			alert( "Rami Naser: " + inn.value);
			
			
			
		}
 
       var inn = document.getElementById('entryinput');
	   var btn = document.getElementById('entrybutton');
	   var ban = document.getElementById('textoutput');
	   btn.addEventListener('click',myEventFunction);
	   btn.addEventListener('click',function(){
	 
	     ban.innerHTML = '<h2 id="textoutput" class="center">inn.value</h2>';
       }};
 
 
     
		
     
		
		


}
window.addEventListener('load', init);
