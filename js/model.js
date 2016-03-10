var i = 9;
var n = 15;

function loadmore() {
	do {
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(native/feed/"+ i +".jpg);\"></div>");
		i++;
	} while(i < n);
	$("body").animate({
		scrollTop: $(".more").offset().top
	}, 1500);
}

function play() {
	$(".info").fadeOut(250);
	$(".video").html('<iframe width="800" height="450" src="https://www.youtube.com/embed/CJEJDbeDqbc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
	setTimeout(function() {
		$(".video").fadeIn(250);
	}, 300);
}

$(document).ready(function() {
	$(".info").animate({"opacity":"1", "margin-top":"175px"}, 500);
});

ymaps.ready(init);
var myMap;

function init(){
	myMap = new ymaps.Map("map", {
		center: [43.49, 43.61],
		zoom: 7,
		controls: ['zoomControl']
	});
	myMap.behaviors.disable('scrollZoom');
}
