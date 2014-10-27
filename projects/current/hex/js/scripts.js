$(function(){

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	var outerMargin = 20;
	var hexGap = 20;
	var boxPadding = 20;

	if (windowHeight > windowWidth) {

		var boxHeight = (parseFloat(windowWidth) - (outerMargin * 2));

	} else {

		var boxHeight = (parseFloat(windowHeight) - (outerMargin * 2));

	}

	var hexHeight = ((boxHeight - (hexGap * 2)) / 3);

	var sideLength = (hexHeight / (Math.sqrt(3)));
	var triHeight = (2 * sideLength) / 2;

	var triSectHeight = (hexHeight / 2);

	var triWidth = Math.sqrt((sideLength * sideLength) - (triSectHeight * triSectHeight));

	var hexWidth = (sideLength + (triWidth * 2));

	var boxWidth = (sideLength + (hexWidth * 2) + (hexGap * 2)); //(sideLength * 3) + (hexGap * 2);

	var hexOffset = (((hexHeight * 2) - hexWidth) / 2);

	var count = 1;

	var icons = new Array("fa-info", "fa-cogs", "fa-picture-o", "fa-users", "fa-quote-left", "fa-question-circle", "fa-home");
	var colors = new Array("#efefef", "#efefef", "#efefef", "#efefef", "#efefef", "#efefef", "#666666");
	var sectionNames = new Array("About Us", "Services", "Our Work", "Get A Quote", "Testimonials", "Contact Us", "Home");
	var moreInfo = new Array("Who We Are", "What We Do", "Content Samples", "Competitive Rates", "What People Say", "Get In Touch", "Website Home");

	$("body").html('<div id="box"></div>');
	$("#box").css({
		"position":"absolute", 
		"height":boxHeight + "px",  
		"width":boxWidth + "px", 
		"top":"50%", 
		"margin-top": - (boxHeight / 2) + "px", 
		"left":"50%",
		"padding":"0 " + boxPadding + "px", 
		"margin-left": - ((boxWidth + (boxPadding * 2)) / 2) + "px",
		"overflow":"hidden"
	});

	var animationTime = 600;
	var animationType = "easeOutExpo";

	var newInt = setInterval(function(){

		if (count <= 7) {
			
			$("#box").append('<div class="hex hex' + count + '"><div class="in1"><div class="in2"><div class="icon"><i class="fa ' + icons[(count - 1)] + '" style="color:' + colors[(count - 1)] + '"></i></div><div class="text">' + sectionNames[(count - 1)] + '<div class="more">' + moreInfo[(count - 1)] + '</div></div></div></div></div>');

			$("#box .hex" + count).css({

				"opacity":"0",
				"position":"absolute", 
				"height":hexHeight + "px", 
				"width":(hexHeight * 2) + "px", 
				"top":"50%",
				"margin-top": - (hexHeight / 2) + "px",  
				"left":"50%", 
				"margin-left": - hexHeight + "px"

			});

			switch (count) {

				case 1:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1",
						"top": (hexHeight + (hexGap / 2)),  
						"left":"100%", 
						"margin-left": - (hexOffset + hexWidth + boxPadding) + "px",
						"margin-top": - (hexHeight / 2) + "px"

					}, (animationTime), animationType);

				break;

				case 2:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1",
						"top": ((hexHeight * 2) + ((hexGap / 2) * 3)),  
						"left":"100%", 
						"margin-left": - (hexOffset + hexWidth + boxPadding) + "px",
						"margin-top": - (hexHeight / 2) + "px"

					}, (animationTime), animationType);

				break;

				case 3:

					$("#box .hex" + count).animate({
	 					
	 					"opacity":"1",
 						"top":"100%",  
						"left":"50%", 
						"margin-left": - hexHeight + "px",
						"margin-top": - hexHeight + "px"

					}, (animationTime), animationType);

				break;

				case 4:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1",
 						"top": ((hexHeight * 2) + ((hexGap / 2) * 3)),  
						"left":"0", 
						"margin-left": - (hexOffset - boxPadding) + "px",
						"margin-top": - (hexHeight / 2) + "px"

					}, (animationTime), animationType);

				break;

				case 5:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1",
 						"top": (hexHeight + (hexGap / 2)),  
						"left":"0", 
						"margin-left": - (hexOffset - boxPadding) + "px",
						"margin-top": - (hexHeight / 2) + "px"

					}, (animationTime), animationType);

				break;

				case 6:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1",
 						"top":"0",  
						"left":"50%", 
						"margin-left": - hexHeight + "px",
						"margin-top": "0px"

					}, (animationTime), animationType);

				break;

				case 7:

					$("#box .hex" + count).animate({
 						
 						"opacity":"1"

					}, (animationTime * 4), "easeInOutSine");

				break;

			}

			count++;

		} else {

			$("#box .hex").bind('click', function(){
				if ($(this).hasClass("hover")) {
					alert ("hello");
				}
			});

			$("#box .hex").bind('mouseenter mouseleave', function() {
		        $(this).toggleClass('hover');                                       
		    });

			clearInterval(newInt);

		}

	}, (animationTime / 6));

	/*
	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"top":"0",  
		"left":"50%", 
		"margin-left": - hexHeight + "px"

	});

	

	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex:last").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"bottom":"0",  
		"left":"50%", 
		"margin-left": - hexHeight + "px"

	});

	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex:last").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"top": (hexHeight + (hexGap / 2)),  
		"left":"100%", 
		"margin-left": - (hexOffset + hexWidth + boxPadding) + "px",
		"margin-top": - (hexHeight / 2) + "px"

	});

	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex:last").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"top": ((hexHeight * 2) + ((hexGap / 2) * 3)),  
		"left":"100%", 
		"margin-left": - (hexOffset + hexWidth + boxPadding) + "px",
		"margin-top": - (hexHeight / 2) + "px"

	});

	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex:last").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"top": (hexHeight + (hexGap / 2)),  
		"left":"0", 
		"margin-left": - (hexOffset - boxPadding) + "px",
		"margin-top": - (hexHeight / 2) + "px"

	});

	$("#box").append('<div class="hex"><div class="in1"><div class="in2"></div></div></div>');

	$("#box .hex:last").css({

		"position":"absolute", 
		"height":hexHeight + "px", 
		"width":(hexHeight * 2) + "px", 
		"top": ((hexHeight * 2) + ((hexGap / 2) * 3)),  
		"left":"0", 
		"margin-left": - (hexOffset - boxPadding) + "px",
		"margin-top": - (hexHeight / 2) + "px"

	});
	*/

});