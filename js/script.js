function init(){
//add your javascrip between these two lines of code
 
  function myEventFunction(){
    alert( "Rami Naser: " + inn.value);
			
	ban.innerHTML = inn;		
			
  }
 
  var inn = document.getElementById('entryinput');
  inn.value = 'the script works';
  var ban = document.getElementById('textoutput');
  var btn = document.getElementById('entrybutton');
 
  btn.addEventListener('click',myEventFunction);
  
}
window.addEventListener('load', init);
