$(document).ready(function() {
	var width = $(window).width();
	var height = $(window).height();

	$(".module > a").css({"display":"none"});
	$(".links").css({"display":"none"});

	$(".landing").css({"width":width, "height":height});
	$(".mainview").css({"width":width, "height":height});
	$(".backview").css({"width":width, "height":height});
	$(".close-block").css({"height":height});
	$(".topage").css({"width":width});
	$(".page").css({"z-index":-1});

	if(device.windows()) {
		$("#featured").orbit();
		$("#featured2").orbit();

		$(window).resize(function() {
			var width = $(window).width();
			var height = $(window).height();
			$(".landing").css({"width":width, "height":height});
			$(".mainview").css({"width":width, "height":height});
			$(".backview").css({"width":width, "height":height});
			$(".close-block").css({"height":height});
			$(".topage").css({"width":width});
		});

		$(".logo").click(function() {
			$("html, body").animate({
				scrollTop: $("#start").offset().top
			}, 1000);
		});

		$(".topage").click(function() {
			$('html, body').animate({
				scrollTop: $("#start").offset().top
			}, 1000);
		});

		$("li.map").click(function() {
			$("ul#main").fadeOut(150);
			$("ul#social").fadeOut(150);
			$(".mainview").fadeOut(150);
			setTimeout(function() {
				$(".close-block").fadeIn(150);
				$(".backview").fadeIn(150);
			}, 150);
		});

		$(".close-block").click(function() {
			$(".close-block").fadeOut(150);
			$(".backview").fadeOut(150);
			setTimeout(function() {
				$("ul#main").fadeIn(150);
				$("ul#social").fadeIn(150);
				$(".mainview").fadeIn(150);
			}, 150);
		});

		$("#nalchik").click(function() {
			myMap.setCenter([43.49, 43.61], 13);
			$(".dashinfo").css({"width":"370px"});
			$(".dashinfo > h1").text("Мотошкола Evil Wheels");
			$(".dashinfo > #description").text("В помощь людям, желающим постичь основы езды на кроссовом мотоцикле.");
			$(".dashinfo > #address").text("г. Нальчик, Владикавказское шоссе");
			$(".dashinfo > span > #site").text("http://evilwheels.ru/motoschool");
			$(".dashinfo > span > #site").attr("href", "http://evilwheels.ru/motoschool");
		});

		$("#taganrog").click(function() {
			myMap.setCenter([47.21, 38.93], 13);
			$(".dashinfo").css({"width":"410px"});
			$(".dashinfo > h1").text("Веломастерская Evil Wheels");
			$(".dashinfo > #description").text("Ремонт и техническое обслуживание велосипедов.");
			$(".dashinfo > #address").text("г. Таганрог, 3 калужский проезд, 118 гараж.");
			$(".dashinfo > span > #site").text("http://evilwheels.ru/workshop");
			$(".dashinfo > span > #site").attr("href", "http://vk.com/workshopvelo");
		});

		$("#moscow").click(function() {
			myMap.setCenter([55.75, 37.62], 10);
			$(".dashinfo").css({"width":"410px"});
			$(".dashinfo > h1").text("Прокат скутеров ForFreedom");
			$(".dashinfo > #description").text("Прокат скутеров и аренда мопедов по низким ценам.");
			$(".dashinfo > #address").text("г. Москва, Госпитальный переулок 4/6.");
			$(".dashinfo > span > #site").text("http://forfreedom.ru/");
			$(".dashinfo > span > #site").attr("href", "http://forfreedom.ru/");
		});
	}

	if(!device.windows()) {
		$("ul#main").css({"display":"none"});
		$(".container_photo").css({"display":"none"});
		$(".photo").css({"display":"block"});
		$(".image").css({"display":"inline-block"});
	}
});

if(device.windows()) {
	ymaps.ready(init);
	var myMap;

	function init() {
		myMap = new ymaps.Map("map", {
			center: [43.49, 43.61],
			zoom: 14,
			controls: []
		});

		var pin_motoschool = new ymaps.Placemark([43.489496, 43.655722], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'http://evilwheels.ru/native/pins/ew.png',
			iconImageSize: [60, 38]
		});

		var pin_workshop = new ymaps.Placemark([43.492234, 43.647274], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'http://evilwheels.ru/native/pins/ew.png',
			iconImageSize: [60, 38]
		});

		var pin_workshopvelo = new ymaps.Placemark([47.240211, 38.867742], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'http://evilwheels.ru/native/pins/ew.png',
			iconImageSize: [60, 38]
		});

		var pin_forfreedom = new ymaps.Placemark([55.77036, 37.687129], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'http://evilwheels.ru/native/pins/ff.png',
			iconImageSize: [45, 38]
		});

		myMap.geoObjects.add(pin_motoschool);
		myMap.geoObjects.add(pin_workshop);
		myMap.geoObjects.add(pin_workshopvelo);
		myMap.geoObjects.add(pin_forfreedom);

		pin_motoschool.events.add('click', function () {
			$(".dashinfo").css({"width":"370px"});
			$(".dashinfo > h1").text("Мотошкола Evil Wheels");
			$(".dashinfo > #description").text("В помощь людям, желающим постичь основы езды на кроссовом мотоцикле.");
			$(".dashinfo > #address").text("г. Нальчик, Владикавказское шоссе");
			$(".dashinfo > span > #site").text("http://evilwheels.ru/motoschool");
			$(".dashinfo > span > #site").attr("href", "http://vk.com/evil_wheels_experts");
		});

		pin_workshop.events.add('click', function () {
			$(".dashinfo").css({"width":"370px"});
			$(".dashinfo > h1").text("Мастерская Evil Wheels");
			$(".dashinfo > #description").text("Ремонт и техническое обслуживание мототехники, велосипедов, и прочих видов транспорта.");
			$(".dashinfo > #address").text("г. Нальчик, ул. Пролетарская 30");
			$(".dashinfo > span > #site").text("http://evilwheels.ru/workshop");
			$(".dashinfo > span > #site").attr("href", "http://vk.com/evil_wheels");
		});

		pin_workshopvelo.events.add('click', function () {
			$(".dashinfo").css({"width":"410px"});
			$(".dashinfo > h1").text("Веломастерская Evil Wheels");
			$(".dashinfo > #description").text("Ремонт и техническое обслуживание велосипедов.");
			$(".dashinfo > #address").text("г. Таганрог, 3 калужский проезд, 118 гараж.");
			$(".dashinfo > span > #site").text("http://evilwheels.ru/workshop");
			$(".dashinfo > span > #site").attr("href", "http://vk.com/workshopvelo");
		});

		pin_forfreedom.events.add('click', function () {
			$(".dashinfo").css({"width":"410px"});
			$(".dashinfo > h1").text("Прокат скутеров ForFreedom");
			$(".dashinfo > #description").text("Прокат скутеров и аренда мопедов по низким ценам.");
			$(".dashinfo > #address").text("г. Москва, Госпитальный переулок 4/6.");
			$(".dashinfo > span > #site").text("http://forfreedom.ru/");
			$(".dashinfo > span > #site").attr("href", "http://forfreedom.ru/");
		});
	}
}
