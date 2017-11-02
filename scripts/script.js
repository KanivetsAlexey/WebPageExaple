$(document).ready(function(){

 	$(window).scroll(function(){
 		var a = $(window).scrollTop();
 	if ( a > 300 ) {$("#menubar").animate(
 		{'opacity':'1',
 		'top':'5px'},700);
 		$("#arrow").animate(
 		{'opacity':'0.3',
 		'top':'10px'},700)}
 		else {$("#menubar").stop(true).animate(
 			{'opacity':'0',
 			'top':'1000px'},700);
 			$("#arrow").stop(true).animate(
 			{'opacity':'0',
 			'top':'1000px'},700);};
 	});
  $('.brows').click(function(){
  	location.href = 'index.html';
  });

});