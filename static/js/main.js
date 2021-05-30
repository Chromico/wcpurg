/*
Author       : Theme-Family
Template Name: Al-Wakil - App Landing Page Template
Version      : 1.0
*/

(function($) {
    "use strict";
	
	
		/*PRELOADER JS*/
			$(window).load(function() { 
				$('.atf-status').fadeOut();
				$('.atf-preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		
		// Navbar menu-top
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#menu-top').hasClass('navbar-collaps')) {
				$('#menu-top').addClass('navbar-collaps');
			}
		});		

		// Navbar Menu Reduce 
	
		$(window).trigger('scroll');
		$(window).on('scroll', function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.navbar-expand-md').removeClass('navbar-expend');
			} else {
				$('.navbar-expand-md').addClass('navbar-expend');
				$('.navbar-expand-md').removeClass('navbar-collaps');
			}
			if ($(window).scrollTop() > top) {
				$('.scrolltop-atf').fadeIn(1000, "easeInOutExpo");
			} else {
				$('.scrolltop-atf').fadeOut(1000, "easeInOutExpo");
			}
		});


		//  Star Scrolling nav
		$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.page-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#menu-top',
			offset: navHeight
		});
        

		  //**================= Sticky =====================**//
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.navbar-expand-md').addClass('navbar-collaps');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-header-area').removeClass('navbar-collaps');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
		  
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
			
			
			/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:3
					}
				}
			})
			/*END PARTNER LOGO*/
			
				
		
			/*START Testimonials LOGO*/
			$("#testimonial-slider").owlCarousel({
				margin:3,
				nav:false,
				loop:true,
				dots:true,
				responsive:{
					0:{
						items:1
					},
					768:{
						items:2
					},
					1000:{
						items:3
					}
				}
			});
			
		/*END Testimonials LOGO*/
		
			

    
})(jQuery);

