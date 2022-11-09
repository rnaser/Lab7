function init(){
//add your javascrip between these two lines of code
 
  function myEventFunction(){
    alert( "Rami Naser: " + inn.value);
	var inn = document.getElementById('entryinput');
	inn.value = 'the script works';
	var ban = document.getElementById('textoutput');		
	ban.innerHTML = inn;		
			
  }
 
  
  var btn = document.getElementById('entrybutton');
 
  btn.addEventListener('click',myEventFunction);
  
}
window.addEventListener('load', init);
