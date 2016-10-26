$(document).ready(function() {
	/* Menu and Navigation */
	setNavigation();

	/* Load Section with Nav */
	freshLoadSection();
	loadSectionFromImg();
	loadSectionFromCaption();

});

function setNavigation() {
	var button = $('.menu');
	var nav = $('nav');

	button.click(function() {
		nav.toggleClass('open');
		var menu = $(this).find('img');
		menu.toggleClass('open');
		menu.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
			if (menu.hasClass('open')) {
				$('.hline hr').css('width', '100%');
			}
			else {
				$('.hline hr').css('width', '5%');
			}
		});
	});
}

function loadSection(tag) {
	var container = $('.description');
	var currTag = container.children().last().attr('id').split("-")[0];
	if (tag != currTag) {
		container.children().fadeOut(250, function() {
			container.empty();
			container.append($('#' + tag + '-page').clone());
			container.children().fadeIn(250);
		});
	}
}

function loadSectionFromImg() {
	$('.nav-img').click(function() {
		var tag = $(this).attr('id');
		console.log(tag);
		if (tag !== 'resume') loadSection(tag);
	});
}

function loadSectionFromCaption() {
	$('.caption').click(function() {
		var tag = $(this).siblings().attr('id');
		console.log(tag);
		if (tag !== 'resume') loadSection(tag);
		else $(this).siblings()[0].click();
	});
}

function freshLoadSection() {
	var container = $('.description');
	container.append($('#home-page').clone());
	container.children().fadeIn(250);
}
