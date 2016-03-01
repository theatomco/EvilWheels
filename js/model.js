var i = 9;
var n = 15;

function loadmore() {
	do {
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
		$(".feed").append("<div class=\"pinned\"><div class=\"image\" style=\"background-image: url(upl/snapster/"+ i +".jpg);\"></div>");
		i++;
	} while(i < n);
	$("body").animate({
		scrollTop: $(".more").offset().top
	}, 1500);
}

$(document).ready(function() {
	//some code stuff here.
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
