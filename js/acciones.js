// JavaScript Document
	var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <div align="center"> <img src="imagenes/otra.jpg" width="250" height="250" id="otra" OnClick="cambiar ()"> </div> <div data-role="controlgroup"><a data-role="button" href="#Principal" class="vibrar">Principal</a> <a data-role="button" href="#causas" class="vibrar">Causas</a> <a data-role="button" href="#niveles" class="vibrar">Niveles de pobreza</a>  <a data-role="button" href="#paises" class="vibrar">Paises </a> <a data-role="button" href="#programas" class="vibrar" >Programas para combatir la pobraza</a> </div> </div> </div>';
		
		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});

function cambiar ()
{
	elemento= document.getElementById('otra');
	if (elemento.src.match("otra.jpg"))
	{elemento.src="imagenes/reflexion.jpg";}
	else
	{elemento.src="imagenes/otra.jpg";}
}	


$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('.vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
  
  $('.escuchar').tap(function(){
    navigator.notification.beep(1);
  });
 },false); //deviceready
}); //document ready

