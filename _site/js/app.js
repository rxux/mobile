// custom

$(document).ready(function() {


	$("[name='remember-me-checkbox']").bootstrapSwitch();

	$('.header-link, .header-links-dropdown').mouseenter(function() {
		$('.header-links-dropdown').stop().animate({height: '155px'},275).addClass('open');
		if ($(this).hasClass('header-link-about')) {
			$('.about-dropdown').show();
		}

		if ($(this).hasClass('header-link-industries')) {
			$('.industries-dropdown').show();
		}

		if ($(this).hasClass('header-link-service')) {
			$('.service-dropdown').show();
		}
	});

	$('.header-link').mouseenter(function() {
		if ($('.header-links-dropdown').hasClass('open')) {
			if ($(this).hasClass('header-link-about')) {
				$('.industries-dropdown, .service-dropdown').hide();
				$('.about-dropdown').show();
			}

			if ($(this).hasClass('header-link-industries')) {
				$('.about-dropdown, .service-dropdown').hide();
				$('.industries-dropdown').show();
			}

			if ($(this).hasClass('header-link-service')) {
				$('.about-dropdown, .industries-dropdown').hide();
				$('.service-dropdown').stop().show();
			}
		}
	});

	$('.header-links-wrapper').mouseleave(function() {
		$('.header-links-dropdown').stop().animate({height: '0'},275, function(){
			$(this).removeClass('open').find('span').hide();;
		});
	});

	$('.products-btn').click(function() {
		if (!$('.products-dropdown').hasClass('open')) {
			$('.products-dropdown').stop().slideDown(325).addClass('open');
		} else {
			$('.products-dropdown').stop().slideUp(325).removeClass('open');
		}
	});


});


// THIS PART IS JUST FOR SHOWING LOGGED IN VS LOGGED OUT STATES
if(window.location.href.indexOf("signed-in=yes") > -1) {
	$('body').find('.signed-out').remove();	
} else  {
	$('body').find('.signed-in').remove();
}

