$(function() {

  //#main-slider
  $(function(){

    var slider     = $('.carousel'),
        autoplay   = slider.data('autoplay'),
        navigation = slider.data('navigation'),
        pagination = slider.data('pagination'),
        transition = slider.data('transition'),
        screenHeight = $(window).height(),
        navigationH	 = $('#main-menu').outerHeight();

    $('#home_slider').height(screenHeight-100);

    function animate(el, eff, ty) {
      $(el).textillate({
        autoStart: false,
        loop: false,
        in : {
          effect: eff,
          delay: 30
        },
        out : {
          effect: 'fadeOut'
        },
        type: ty
      });
    }

    if(slider.length) {

	    slider.owlCarousel({

	      navigation : navigation || false,
	      singleItem : true,
	      autoPlay : autoplay || false,
	      stopOnHover: true,
	      transitionStyle : transition || false,
	      addClassActive: true,
	      navigationText: [
	        "<i class='fa fa-arrow-left'></i>",
	        "<i class='fa fa-arrow-right'></i>"
	      ],
	      pagination: pagination || false,
	      rewindSpeed : 300,
	      lazyLoad : true,
	      afterInit: function (event) {
          $(".owl-item.active .slide-caption h1").textillate("out");
          var a = $(".owl-item.active .slide-caption h1"),
            n = a.data("effect"),
            e = a.data("delay");
          setTimeout(function () {
            $(".owl-item.active .slide-caption h1, .owl-item.active .slide-caption h1 .texts, .owl-item.active .slide-caption h1 span").css("visibility", "hidden"), animate(a, n, "char"), a.textillate("in");
          }, e - 100), slider.find(".owl-item.active .animated").each(function () {
            $(this).wrap('<div style="overflow: hidden"></div>');
            var t = $(this).data("animation"),
              i = $(this).data("delay");
            $(this).css({
              "-webkit-animation-name": t,
              "-moz-animation-name": t,
              "-o-animation-name": t,
              "animation-name": t,
              "-webkit-animation-delay": i,
              "-moz-animation-delay": i,
              "-o-animation-delay": i,
              "animation-delay": i
            });
          });
	      },
	      beforeMove: function (event) {
          $(".owl-item.active .slide-caption h1").textillate("out"),
          slider.find(".owl-item.active .animated").each(function () {
            $(this).css({
              "-webkit-animation-name": "unset",
              "-moz-animation-name": "unset",
              "-o-animation-name": "unset",
              "animation-name": "unset",
              "-webkit-animation-delay": "unset",
              "-moz-animation-delay": "unset",
              "-o-animation-delay": "unset",
              "animation-delay": "unset"
            });
          });
	      }, 
	      afterMove: function (event) {
          var a = $(".owl-item.active .slide-caption h1"),
            n = a.data("effect"),
            e = a.data("delay");
          setTimeout(function () {
            $(".owl-item.active .slide-caption h1, .owl-item.active .slide-caption h1 .texts, .owl-item.active .slide-caption h1 span").css("visibility", "hidden"), animate(a, n, "char"), $(".owl-item.active .slide-caption h1").textillate("in");
          }, e), slider.find(".owl-item.active .animated").each(function () {
            $(this).wrap('<div style="overflow: hidden"></div>');
            var t = $(this).data("animation"),
              i = $(this).data("delay");
            $(this).css({
              "-webkit-animation-name": t,
              "-moz-animation-name": t,
              "-o-animation-name": t,
              "animation-name": t,
              "-webkit-animation-delay": i,
              "-moz-animation-delay": i,
              "-o-animation-delay": i,
              "animation-delay": i
            });
          });

	      }
	    });

	    // Init Keyboard navigations
	    $(document.documentElement).keyup(function (event) {    

	      // handle cursor keys
	      if (event.keyCode == 37) {
	       	// go left
	         slider.trigger('owl.prev');
	      } else if (event.keyCode == 39) {
	       	// go right
	       	slider.trigger('owl.next');
	      }

	    });
		}

  });

  if($('.course').length) {
    var courseHeight = '';
    $('.course-body').each(function() {
      if($(this).height() > courseHeight) {
        courseHeight = $(this).height();
      }
    });
    $('.course-body').height(courseHeight);
  }


	if($('#typed').length) {
		var typed = new Typed('#typed', {
		  stringsElement: '#typed-strings',
		  typeSpeed: 80,
		  backSpeed: 20,
		  startDelay: 1000,
		  loop: false,
		  loopCount: 0,
		  smartBackspace: true,
		  showCursor: true,
		  cursorChar: '|',
		  autoInsertCss: true,
		});
	}

	if($('.intro-search select').length) {
		$('.intro-search select').each(function() {
			$(this).FeastSelect({
				btnClass: 'input-lg',
				btnText: $(this).find('option:first-child').text()
			});
		});
	}

  	$(".animsition-overlay").animsition({
	    inClass: 'overlay-slide-in-left',
	    outClass: 'overlay-slide-out-left',
	    inDuration: 600,
	    outDuration: 600,
	    linkElement: '.animsition-link',
	    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	    loading: true,
	    loadingParentElement: 'body', //animsition wrapper element
	    loadingClass: 'animsition-loading',
	    loadingInner: '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="900.000000pt" viewBox="0 0 900.000000 340.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,340.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path class="practs" d="M2660 1695 l0 -1695 430 0 430 0 0 65 0 65 -355 0 -355 0 0 1560 0 1560 355 0 355 0 0 70 0 70 -430 0 -430 0 0 -1695z"/><path class="practs" d="M5490 3320 l0 -70 355 0 355 0 0 -1560 0 -1560 -355 0 -355 0 0 -65 0 -65 430 0 430 0 0 1695 0 1695 -430 0 -430 0 0 -70z"/><path class="sm-line1" d="M1250 2550 l0 -80 695 0 695 0 0 80 0 80 -695 0 -695 0 0 -80z"/><path class="sm-line2" d="M6370 2550 l0 -80 695 0 695 0 0 80 0 80 -695 0 -695 0 0 -80z"/><path class="letter-a" d="M4421 2533 c-82 -177 -771 -1704 -771 -1708 0 -3 33 -5 73 -5 l72 0 349 798 c192 438 352 800 356 805 3 4 97 -197 207 -448 l201 -455 -313 0 -312 0 -26 -60 -25 -60 365 -2 365 -3 127 -287 126 -288 82 0 c68 0 81 2 77 15 -3 8 -180 398 -394 867 l-387 853 -80 3 c-78 3 -80 2 -92 -25z"/><path class="center-line1" d="M440 1690 l0 -80 1100 0 1100 0 0 80 0 80 -1100 0 -1100 0 0 -80z"/><path class="center-line2" d="M6370 1690 l0 -80 1100 0 1100 0 0 80 0 80 -1100 0 -1100 0 0 -80z"/><path class="sm-line1" d="M1250 830 l0 -80 695 0 695 0 0 80 0 80 -695 0 -695 0 0 -80z"/><path class="sm-line2" d="M6370 830 l0 -80 695 0 695 0 0 80 0 80 -695 0 -695 0 0 -80z"/></g></svg>', // e.g '<img src="loading.svg" />'
	    timeout: false,
	    timeoutCountdown: 5000,
	    onLoadEvent: true,
	    browser: [ 'animation-duration', '-webkit-animation-duration'],
	    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	    overlay : true,
	    overlayClass : 'animsition-overlay-slide',
	    overlayParentElement : 'body',
	    transition: function(url){ window.location.href = url; }
  	});
      

  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "transit",
          stylers: [
            {
              color: "#808080"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#dcdfe6"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ffffff"
            },
            {
              weight: 1.8
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7d7d7"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#ebebeb"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#a7a7a7"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#efefef"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#696969"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on"
            },
            {
              color: "#737373"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d6d6d6"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        }
      ]
    });
  }



	if($('[data-fancybox="gallery"]').length) {
		$('[data-fancybox="gallery"]').fancybox({
			baseClass: 'fancybox-custom-layout',
			infobar: false,
	    helpers: {
	      title: {
	        type: 'outside'
	      },
	      thumbs: {
	        width: 60,
	        height: 60
	      },
	      media: {
	        youtube: {
	          params: {
	            autoplay: 0,
	            rel: 0,
	            controls: 1,
	            showinfo: 0,
	            autohide: 1,
	          }
	        }
	      }
	    },
			thumbs: {
				hideOnClose: false
			},
			touch: {
				vertical: false
			},
			buttons: [
	      'close',
	      'thumbs',
	      'share'
	    ],
			animationEffect: "fade",
			animationDuration: 366,
			transitionEffect: "fade",
			transitionDuration: 366,
			idleTime: false,
			gutter: 0,
			// Customize caption area
			caption: function (instance) {
				return '<h3>' + $(this).find('.title').html() + '</h3><p>' + $(this).find('.caption').html() + '</p>';
			}
		});


	}
	var thumbsArray = [];
	function checkDomChange(arr) {
		if($('.fancybox-thumbs__list').length) {
			$('[data-fancybox="gallery"]').each(function(index, el) {
				var title = $('.title', this).html();
				var x = 'item_' + index;
				// console.log(title);
				if(!thumbsArray.includes(x)){
					// console.log(title);
					var html = $('.fancybox-thumbs__list a[data-index='+index+']').html();
					$('.fancybox-thumbs__list a[data-index='+index+']').html(html + '<span>'+title+'</span>');
					thumbsArray.push(x);
				}
			});
		}
		setTimeout( checkDomChange, 500);
	}

	checkDomChange();
	$('.layout-options li a.layout-grids').click(function(e) {
		e.preventDefault();
		$('.layout-options li a.layout-list').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
  	$('.courses .loading-courses').show().delay(300).fadeOut();
  	$('.courses .loading-courses').css('display', 'flex');
		$('.courses .course').each(function() {
			$(this).parent().removeClass('col-md-12').addClass('col-md-6');
		});
	});
	$('.layout-options li a.layout-list').click(function(e) {
		e.preventDefault();
		$('.layout-options li a.layout-grids').parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
  	$('.courses .loading-courses').show().delay(300).fadeOut();
  	$('.courses .loading-courses').css('display', 'flex');
		$('.courses .course').each(function() {
			$(this).parent().removeClass('col-md-6').addClass('col-md-12');
		});
	});

	if($('.main-menu .main-navbar .nav li.dropdown ul').length){
		$('.main-menu .main-navbar .nav li.dropdown').prepend('<div class="dropdown-btn dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-menu .main-navbar .nav li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	if($(window).width() < 992) {
		$('#sidebar-container').removeClass('in');
	}

	function removeAnimsition() {
		if($(window).width() < 768) {
			$('.nav .animsition-link').each(function(e) {
				if($(this).hasClass('dropdown-toggle')) {
					$(this).removeClass('animsition-link').addClass('animsition-link-removed');
				}
			});
		} else {
			$('.animsition-link-removed').each(function() {
				$(this).removeClass('animsition-link-removed').addClass('animsition-link');
			});
		}
	}

	// removeAnimsition();
	// $(window).on('resize', removeAnimsition)

	var windowH = $(window).height(),
			navbarH = $('.main-menu').height();

	$('.home-intro').css('height', windowH-navbarH);

	$('[data-toggle="tooltip"]').tooltip();

  $(window).stellar();

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a:not([data-toggle])').bind('click', function(event) {
      var $anchor = $(this).attr('href');

      if($anchor.length > 1) {
          var offset = $($anchor).offset();
          $('html, body').stop().animate({
              scrollTop: offset.top
          }, 800, 'linear');
      }            
      event.preventDefault();
  });

  // Accordion panels
  $('.panel').each(function() {
  	if( ! $('.panel-collapse', this).hasClass('in') ) {
  		$('.accordion-toggle', this).addClass('collapsed');
  	}
  });

  $('.latest-courses .categories a').click(function(e) {
  	e.preventDefault();
  	$('.latest-courses .categories li').removeClass('active');
  	$(this).parent('li').addClass('active');
  	$('.latest-courses .loading-courses').fadeIn().delay(2000).fadeOut();
  	$('.latest-courses .loading-courses').css('display', 'flex');
  });

    function sendContact() {
      var valid;  
      valid = validateContact();
      if(valid == true) {
        $.ajax({
          url: "contact_process.php",
          data: $('#contactForm').serialize(),
          type: "POST",
          success:function(responde){
            if(responde.status === true) {
              $('#contactForm .responde').removeClass('alert-danger').addClass('alert-success').html(responde.msg).slideDown();
              $('form#contactForm')[0].reset();
            } else {
              $('#contactForm .responde').removeClass('alert-success').addClass('alert-danger').html(responde.msg).slideDown();
            }
          },
          dataType:"json"
        })
      }
    }
    
    function validateContact() {
      var valid = true; 
      $("#contactForm input, #contactForm textarea").css('border-bottom-color','#0c2461');
      $(".form-info").html('');
      
      if(!$("#contactForm #name").val()) {
        $("#contactForm #name-info").html("(required)");
        $("#contactForm #name").css('border-bottom-color','#dd4b39');
        valid = false;
      }
      if(!$("#contactForm #email").val()) {
        $("#contactForm #email-info").html("(required)");
        $("#contactForm #email").css('border-bottom-color','#dd4b39');
        valid = false;
      }
      if(!$("#contactForm #email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#contactForm #email-info").html("(invalid)");
        $("#contactForm #email").css('border-bottom-color','#dd4b39');
        valid = false;
      }
      if(!$("#contactForm #subject").val()) {
        $("#contactForm #subject-info").html("(required)");
        $("#contactForm #subject").css('border-bottom-color','#dd4b39');
        valid = false;
      }
      if(!$("#contactForm #message").val()) {
        $("#contactForm #message-info").html("(required)");
        $("#contactForm #message").css('border-bottom-color','#dd4b39');
        valid = false;
      }
      
      return valid;
    }

    
    
});

// Fixed header on scroll
$(window).scroll(function() {

	if($(window).width() > 767) {
			if ($(this).scrollTop() > 80){
				if($('.main-menu').hasClass('transparent')) {
					$('.main-menu .logo-lg').attr('src', 'assets/images/logo.png');
					$('.main-menu .logo-sm').attr('src', 'assets/images/logo-small.png');
				}
		    $('.main-menu').addClass("sticky");
		    $('.top-bar').slideUp();
		  } else {
				if($('.main-menu').hasClass('transparent')) {
					$('.main-menu .logo-lg').attr('src', 'assets/images/logo-transparent.png');
					$('.main-menu .logo-sm').attr('src', 'assets/images/logo-transparent-small.png');
				}
		    $('.main-menu').removeClass("sticky");
		    $('.top-bar').slideDown();
		  }
    } else if($('.main-menu').hasClass('transparent')) {
			if ($(this).scrollTop() > 80){
				if($('.main-menu').hasClass('transparent')) {
	                $('.main-menu').css('position', 'relative');
				}
	    } else {
				if($('.main-menu').hasClass('transparent')) {
          $('.main-menu').css('position', 'fixed');
				}
	    }
    }
});


$(window).resize(function() {
	var NewWindowH = $(window).height(),
			NewNavbarH = $('.main-menu').height();
	$('.home-intro').css('height', NewWindowH-NewNavbarH);

	if($(window).width() > 991) {
		if(!$('#sidebar-container').hasClass('in')) {
			$('#sidebar-container').addClass('in');
		}
	} else {
		$('#sidebar-container').removeClass('in');
	}

});


$(window).on('load', function() {
  	$('body').removeClass('loading');
});