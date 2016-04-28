$(document).ready(function() {
	var width = $(window).width();
	var height = $(window).height();
	var winwidth = width - 100;
	var winheight = height - 120;

	// $(".window").css({"width":winwidth});
	// $(".window").css({"height":winheight});
	$(".window").css({"margin-top":-(winheight/2)});
	$(".window").css({"margin-left":-(winwidth/2)});

	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		var winwidth = width - 100;
		var winheight = height - 120;

		$(".window").css({"width":winwidth});
		$(".window").css({"height":winheight});
		$(".window").css({"margin-top":-(winheight/2)});
		$(".window").css({"margin-left":-(winwidth/2)});
	});
	if(device.windows()) {
		$(".image").mouseenter(function() {
			if($(this).attr("data-bind") == "true") {
				$(this).css({"cursor":"pointer"});
				$(this).click(function() {
					$(".popup").fadeIn(360);
					if($(this).attr("data-description")) {
						$(".descp").css({"display":"block"});
						$(".descp > p").text($(this).attr("data-description"));
						if($(this).attr("data-location")) {
							$(".pin").css({"display":"inline-block"});
							$(".pin").attr({"href":$(this).attr("data-location")});
						}
					}
					else
					{
						$(".descp").css({"display":"none"});
					}
					// $(".photog").css({"background-image":"url("+$(this).attr("data-src")+")"});
					$(".photog").attr({"src":$(this).attr("data-src")});
				});
			}
		});
	}

	$(".popup > .fade").click(function() {
		$(".popup").fadeOut(360);
	});
});
