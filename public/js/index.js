$(function(){
	$("a").each(function(){
		$(this).css("background-color",'#'+Math.floor(Math.random()*255*255*255));
	});
});