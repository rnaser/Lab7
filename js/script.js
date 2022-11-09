function init(){
//add your javascrip between these two lines of code
 
   function myEventFunction(){
			alert( "hello");
		}
 
   entrybutton.addEventListener('click',myEventFunction);
 
 
var fc = document.getElementById('textcontrol')
		//use fc.value in inspector to see the input value
		alert(fc.value);
		fc.value = "javascript worked";	






window.addEventListener('load', init);
