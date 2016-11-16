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
			if (tag == 'proj' && $(window).width() < 750) setProjectBar();
		});
	}
}

function loadSectionFromImg() {
	$('.nav-img').click(function() {
		var tag = $(this).attr('id');
		if (tag !== 'resume') loadSection(tag);
	});
}

function loadSectionFromCaption() {
	$('.caption').click(function() {
		var tag = $(this).siblings().attr('id');
		if (tag !== 'resume') loadSection(tag);
		else $(this).siblings()[0].click();
	});
}

function freshLoadSection() {
	var container = $('.description');
	container.append($('#home-page').clone());
	container.children().fadeIn(250);
}

function setProjectBar() {
	/* Fade Icon on Click */
	$('.proj-bar').first().find('img').click(function() {
		$(this).removeClass('inactive');
		$('.proj-bar').first().find('img').not(this).each(function() {
			$(this).addClass('inactive');
		});
		/* Display section associated with icon. */
		var tag = $(this).attr('id');
		var currTag = $('.desc-container').children(':visible').attr('id').split('-')[0];
		if (tag !== currTag) {
			$('.desc-container').first().children(':visible').fadeOut(250, function() {
				$('#' + tag + '-desc').first().fadeIn(250);
			});
		}
	});
}
