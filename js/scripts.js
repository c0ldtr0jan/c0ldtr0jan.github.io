$(function(){
	
	$("a.phoneMenu").bind('click', function(){
		
		if ($("nav ul").is(":visible")) {
			
			$("nav ul").slideUp();
			$("a.phoneMenu").removeClass("active");
			
		} else {
			
			$("nav ul").slideDown();
			$("a.phoneMenu").addClass("active");
			
		}
		
	});
	
	$(".slider-outer a.navigation").bind('click', function(e){
		
		if ($(this).hasClass("slider-left")) {
			
			$(this).parent().find('.slider-inner').animate({"margin-left":"+=100%"});
			
		} else {
			
			$(this).parent().find('.slider-inner').animate({"margin-left":"-=100%"});
			
		}
		
		e.preventDefault();
		
	});
	
});