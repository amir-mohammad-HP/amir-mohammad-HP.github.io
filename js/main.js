(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ set skill progress bar values /--*/
	const current_time = new Date()
	let duration = current_time.getFullYear() - 2018 // Current date - date i start coding
	
	// how long i've work with a language
	const skill_languages = [
		{
			langName : 'Python',
			years : 4,
		},
		{
			langName : 'Django <small>(python framework)</small>',
			years : 2,
		},
		{
			langName : 'JavaScript',
			years : 0.5,
		},
		{
			langName : 'Jquery <small>(JavaScript library)</small>',
			years : 0.5,
		},
		{
			langName : 'CSS',
			years : 1,
		},
		{
			langName : 'HTML',
			years : 2,
		},
		{
			langName : 'Fortran',
			years : 2,
		},
		
	]

	$('#skills').empty();
	var skills_html = `<p class="title-s">Skill<span class="pull-right" id="skill-duration">from 2018</span></p>`;
	$('#skills').html(skills_html)
	skill_languages.forEach(function(dic){
		$('#skills').append(
			`
		<span>` + dic.langName + `</span> <span class="pull-right">` + dic.years + ` years</span>
		<div class="progress">
		  <div class="progress-bar" role="progressbar" id="python-progress" style="width: ` + (dic.years*100)/duration + `%;" aria-valuemin="0"
			aria-valuemax="100"></div>
		</div>
		`
		)
		})

	// my Services
	const servicesList = [
		{
			title : 'Web Development',
			icon : 'ion-monitor',
			description: 'develope your website in the fastest way in python-django'
		},
		{
			title : 'Web Development',
			icon : 'ion-monitor',
			description: 'develope your website in the fastest way in python-django'
		},
		{
			title : 'Web Development',
			icon : 'ion-monitor',
			description: 'develope your website in the fastest way in python-django'
		},
	]

	servicesList.forEach(function(dic){
		$('#services').append(
		`
		<div class="col-md-4">
			<div class="service-box">
			<div class="service-ico">
				<span class="ico-circle"><i class="` + dic.icon + `"></i></span>
			</div>
			<div class="service-content">
				<h2 class="s-title">` + dic.title + `</h2>
				<p class="s-description text-center">
				` + dic.description + `
				</p>
			</div>
			</div>
		</div>
		`
		)
		})

	

	

})(jQuery);
