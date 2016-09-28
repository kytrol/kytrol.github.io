$(document).ready(function() {
	/* Menu and Navigation */
	setNavigation();

	/* Change Header Image Source Based on DPI */
	dpiChange();

	/* Load Section with Nav */
	freshLoadSection();
	loadSection();

	/* Contact Form */

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
				$('hr').css('width', '100%');
			}
			else {
				$('hr').css('width', '5%');
			}
		});
	});
}

function dpiChange() {
	if (window.devicePixelRatio == 2) { $('.head').attr('src', 'resources/img/header/head_x2.png'); }
}

function loadSection() {
	$('.nav-bg').click(function() {
		var tag = $(this).find('img').attr('id');
		if (tag != 'resume') {
			var container = $('.description');
			var currTag = container.children().first().attr('id').split("-")[0];
			if (tag != currTag) {
				container.children().fadeOut(250, function() {
					container.empty();
					container.append($('#' + tag + '-page').clone());
					container.children().fadeIn(250);
				});
			}
		}
	});
}

function freshLoadSection() {
	var container = $('.description');
	container.append($('#home-page').clone());
	container.children().fadeIn(250);
}
