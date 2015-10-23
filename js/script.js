$(document).ready(function() {
	/* Menu and Navigation */
		var button = $('.menu');
		var nav = $('nav');

		button.click(function() {
			nav.toggleClass('open');
			var menu = $(this).find('img');
			menu.toggleClass('open');
			menu.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
				if (menu.hasClass('open')) {
					$('hr').css("width", "100%");
				}
				else {
					$('hr').css("width", "5%");	
				}	
			});
		});

	/* Contact Form */
	
});