$(document).ready(function() {
	/* Menu and Navigation */
	setNavigation();

	/* Load Section with Nav */
	freshLoadSection();
	loadSection();

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

function responsiveHeight() {
	var jobWidth = $('.job-box').width();
	$('.job-box').css({'height': jobWidth+'px'});
}
