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
      $('#preloader').delay(10).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
//   const easeInOutExpo = (x) => {
// 	return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
// 		pow( 2, 20 * x - 10 ) / 2 :
// 		( 2 - pow( 2, -20 * x + 10 ) ) / 2;
// 	};
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500); // "easeInOutExpo"
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
				}, 1000); //"easeInOutExpo"
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
			$('.scrolltop-mf').fadeIn(1000); //"easeInOutExpo"
		} else {
			$('.scrolltop-mf').fadeOut(1000); //"easeInOutExpo"
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
	$('#testimonial2-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	})

	// CONTENTS:

	// - ABOUT section

	// -> start skills

	/*--/ set skill progress bar values /--*/
	const current_time = new Date()
	let duration = current_time.getFullYear() - 2018 // Current date - date i start coding
	
	// how long i've work with a language
	const skill_languages = [
		{
			langName : 'Python',
			years : 3,
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
	var skills_html = `<p class="title-s">Skill<span class="position" id="skill-duration">from 2018</span></p>`;
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

	// end skills <-

	// -> start about me
	let aboutMe_ListOfParagraphs = [
		`
		Hello there ,
		<br>I'm Amir Mohammad! and i am a backend developer (simply means doing the dirty works in the backend of the site &#128521;).
		i love learning new things and with what i knew , i would help others and share it only on one circumstances which that is 
		catching up the best of ourselves. 
		`,
		`
		I'm also into sport, although not eventually doing it professionally but i'll try to put some time in my day rotins ,
		sometimes it's hiking and some other time running
		`,
	]
	aboutMe_ListOfParagraphs.forEach(function(paragraph){
		$('#about-me-paragraphs').append(
			`
			<p class="lead"> ` + paragraph + `
			`
		)
		})

	// end about me <-
	
	// end ABOUT section

	// - SERVICES section
	const servicesList = [
		{
			title : 'Web Development',
			icon : '<img class="img-service-icon" src="img/django.png"></img>',
			description: 'develope your website in the fastest way in python-django'
		},
		{
			title : 'Python',
			icon : '<img class="img-service-icon" src="img/python.png"></img>',
			description: 'write you automation system or python program'
		},
		{
			title : 'Engineering Programs',
			icon : '<img class="img-service-icon" src="img/engineering_code.png"></img>',
			description: 'code every type of computational engineering programs (python, fortran),'
		},
	]

	servicesList.forEach(function(dic){
		$('#services').append(
		`
		<div class="col-md-4">
			<div class="service-box">
			<div class="service-ico">
				<span class="ico-circle">` + dic.icon + `</span>
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

	// end SERVICES section

	// - WORK section

	let portfoliosList = [
		{
			image: `img/default-project-bg.jpg`,
			image_alt : ``,
			link: 'https://github.com/amir-mohammad-HP/anymarker',
			title: `AnyMarker `,
			tag: `django | python | web`,
			date:`20, aug.2022`,
		},
		{
			image: `https://raw.githubusercontent.com/amir-mohammad-HP/local_library_webapp/main/app_screenshots/add%20book.png`,
			image_alt : `local library management`,
			link: 'https://github.com/amir-mohammad-HP/local_library_webapp',
			title: `Local Library Management`,
			tag: `django | python`,
			date:`10, aug.2022`,
		},
		{
			image: `https://github.com/amir-mohammad-HP/amir-mohammad-HP.github.io/raw/main/img/am-hp.jpg`,
			image_alt : `am-hp.ir`,
			link: 'https://github.com/amir-mohammad-HP/amir-mohammad-HP.github.io',
			title: `AM-HP.ir`,
			tag: `github pages | javascript | jquery `,
			date:`25, aug.2022`,
		},
	];
	portfoliosList.forEach(function(dic){
		$('#works-cards').append(
		`
		<div class="col-md-4">
          <div class="work-box">
            <a href="` + dic.link + `" target="blank">
              <div class="work-img">
                <img src="` + dic.image + `" alt="` + dic.image_alt + `" class="img-fluid">
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">` + dic.title + `</h2>
                    <div class="w-more">
                      <span class="w-ctegory">` + dic.tag + `</span>  <span class="w-date">` + dic.date + `</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
		`
		)
		})

		// end WORK section

		// BLOG section

		let blogList = [
			{
				image: `https://raw.githubusercontent.com/amir-mohammad-HP/django4-SampleCode/main/Email%20Authentication/vector.jpg`,
				image_alt : `Email authentication django`,
				href:`https://github.com/amir-mohammad-HP/django4-SampleCode/tree/main/Email%20Authentication`,
				title: `Email Authentication with Django `,
				description:
					`
					how to authenticate users with email in django and create a email authentication system
					`,
				tag: `django | web`,
				date:`1, sep.2022`,
				reading_time:`10 min`,
				author:`hamidipour`,
				author_image:`img/me_p.jpg`,
				author_image_alt:`hamidi pour`,
			},
			{
				image: `https://raw.githubusercontent.com/amir-mohammad-HP/django4-SampleCode/main/model%20signals/vector.jpg`,
				image_alt : `django model signal`,
				href:`https://github.com/amir-mohammad-HP/django4-SampleCode/tree/main/model%20signals`,
				title: `how to use django signals with models`,
				description:`some times we need do some task after our models create, modify or delete and singnals are the solution`,
				tag: `django | web`,
				date:`25, aug.2022`,
				reading_time:` < 3 min`,
				author:`hamidipour`,
				author_image:`img/me_p.jpg`,
				author_image_alt:`hamidi pour`,
			},
			{
				image: `https://raw.githubusercontent.com/amir-mohammad-HP/django4-SampleCode/main/ImageAdminPage/vector.jpg`,
				image_alt : `image admin page preview`,
				href:`https://github.com/amir-mohammad-HP/django4-SampleCode/tree/main/ImageAdminPage`,
				title: `how to view images on the django admin page`,
				description:`it feels good to have a view of our uploaded images in the admin page`,
				tag: `django | web`,
				date:`25, aug.2022`,
				reading_time:`5 min`,
				author:`hamidipour`,
				author_image:`img/me_p.jpg`,
				author_image_alt:`hamidi pour`,
			},
		];
		blogList.forEach(function(dic){
			$('#blog-cards').append(
			`
	<div class="col-md-4">
		<div class="card card-blog">
		  <div class="card-img">
			<a href="` + dic.href + `"><img src="` + dic.image + `" alt="` + dic.image_alt + `" class="img-fluid"></a>
		  </div>
		  <div class="card-body">
			<div class="card-category-box">
			  <div class="card-category">
				<h6 class="category">` + dic.tag + `</h6>
			  </div>
			</div>
			<h3 class="card-title"><a href="` + dic.href + `">` + dic.title + `</a></h3>
			<p class="card-description">
			` + dic.description + `
			</p>
		  </div>
		  <div class="card-footer">
			<div class="post-author">
			  <a href="#about">
				<img src="` + dic.author_image + `" alt="` + dic.author_image_alt + `" class="avatar rounded-circle">
				<span class="author">` + dic.author + `</span>
			  </a>
			</div>
			<div class="post-date">
			  <span class="ion-ios-clock-outline"></span> ` + dic.reading_time + `
			</div>
		  </div>
		</div>
	  </div>
			`
			)
			})

	// end BLOG section

	// social media 
		let sociaMedia = [
			{
				address: 'https://github.com/amir-mohammad-HP',
				icon: 'ion-social-octocat'
			},
			{
				address: 'https://www.instagram.com/a_m.h_p/',
				icon: 'ion-social-instagram'
			},
			{
				address: 'https://linkedin.com/in/am-hp/',
				icon: 'ion-social-linkedin'
			},
			
		];
		sociaMedia.forEach(function(dic){
			$('#social-media-items').append(
			`
			<li>
				<a href="` + dic.address + `" target="blank">
					<span class="ico-circle ">
						<i class="` + dic.icon + `"></i>
					</span>
				</a>
			</li>
			`
			)
			})


	// end social media
	

	

		

})(jQuery);
