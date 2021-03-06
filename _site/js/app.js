// custom

$(document).ready(function() {
	$("#my-menu").mmenu({
		"navbar": {
            "title": " ",
        },
        "extensions": [
            "pageshadow"
        ],
               "navbars": [
                  {
                     "position": "bottom",
                     "content": [
                        //"<a class='fa fa-envelope' href='#/'></a>",
                        //"<a class='fa fa-twitter' href='#/'></a>",
                        //"<a class='fa fa-facebook' href='#/'></a>"
                        " "
                     ]
                  }
               ]
    });

    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });



	$("[name='remember-me-checkbox']").bootstrapSwitch();

	$('.header-link, .header-links-dropdown').mouseenter(function() {
		$('.header-links-dropdown').stop().animate({height: '170px'},275).addClass('open');
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


	function _rxFadeIn(el) {
		$('.overlay-content').each(function(){
			$(this).stop().fadeOut(275);
		});
		$('.' + el).stop().fadeIn(275);
	}

	$('.overlay-target').mouseenter(function() {
		if ($(this).hasClass('myaccount-target')) {
			_rxFadeIn('myaccount-dropdown-wrapper');
		}else if ($(this).hasClass('minicart-target')) {
			_rxFadeIn('minicart-dropdown-wrapper');
		}
	});


	$('.dropdown-action').mouseleave(function() {
		$('.overlay-content').stop().fadeOut(275);
	});

	var _cartCount = parseInt($('.cart-count').html());
	if (_cartCount <= 0) {
		$('.cart-count').hide();
	}

	$('.home-login-target').click(function() {
		$('.myaccount-dropdown.mobile').stop().slideToggle();
	});

	$('.home-product-target').click(function() {
		$('.home-product-dropdown.mobile').stop().slideToggle();
	});

	$('.products-btn').on("click", function (event) {
    	$('.arrow-img').toggleClass('rotate');
    	$('.arrow-img').toggleClass('rotate2');
	});

	$('.truncate').truncate({
		width: 'auto',
		multiline: true
	});

	// THIS PART IS JUST FOR SHOWING LOGGED IN VS LOGGED OUT STATES 
	// NOT FOR PRODUCTION
	if(window.location.href.indexOf("signed-in=yes") > -1) {
		$('body').find('.signed-out').remove();	
	} else  {
		$('body').find('.signed-in').remove();
	}

});




