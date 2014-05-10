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
	
});