$(function(){
	
	$("a.phoneMenu").bind('click', function(e){
		
		if ($("nav ul").is(":visible")) {
			
			$("nav ul").slideUp();
			$("a.phoneMenu").removeClass("active");
			
		} else {
			
			$("nav ul").slideDown();
			$("a.phoneMenu").addClass("active");
			
		}
		
		e.preventDefault();
		
	});
	
	$(".slider-outer a.navigation").bind('click', function(e){
		
		if ($(this).hasClass("slider-left")) {
			
			$(this).parent().find('.slider-inner').animate({"margin-left":"+=100%"});
			$(this).parent().find('.slider-inner ul.active').removeClass('active').prev().addClass('active');
			
		} else {
			
			$(this).parent().find('.slider-inner').animate({"margin-left":"-=100%"});
			$(this).parent().find('.slider-inner ul.active').removeClass('active').next().addClass('active');
			
		}
		
		if ($(this).parent().find('.slider-inner ul.active').prev().length) {
			
			$(this).parent().find('a.slider-left').removeClass("hidden");
			
		} else {
			
			$(this).parent().find('a.slider-left').addClass("hidden");
			
		}
		
		if ($(this).parent().find('.slider-inner ul.active').next().length) {
			
			$(this).parent().find('a.slider-right').removeClass("hidden");
			
		} else {
			
			$(this).parent().find('a.slider-right').addClass("hidden");
			
		}
		
		e.preventDefault();
		
	});
	
});