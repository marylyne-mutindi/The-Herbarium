(function ($) {
    "use strict";
    
/*---------------------------------
    Search slideToggle
-----------------------------------*/
    $(".search-wrapper > a").on("click", function(e) {
        e.preventDefault();
        $('.search-form').toggleClass('active');
    }); 
    
/*---------------------------------
    Setting slideToggle
-----------------------------------*/
    $(".settings-wrapper > a").on("click", function(e) {
        e.preventDefault();
        $('.settings-content').toggleClass('active');
    }); 
    
/*---------------------------------
    Cart slideToggle
-----------------------------------*/
    $(".cart-wrapper > a").on("click", function(e) {
        e.preventDefault();
        $('.cart-item-wrapper').toggleClass('active');
    }); 
    
/*---------------------------------
    Menu Sticky
-----------------------------------*/
    var $windows = $(window);
    var sticky = $('.header-sticky');
    $windows.on('scroll', function() {
        var scroll = $windows.scrollTop();
        if (scroll < 300) {
            sticky.removeClass('sticky');
        }else{
            sticky.addClass('sticky');
        }
    });

/*------------------------------------
    Mobile Menu
--------------------------------------*/
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    }); 

/*-------------------------------------
    Hero Slider
----------------------------------------*/
    var heroSlider = $('.ht-hero-slider');
    heroSlider.slick({
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right'></i></button>",
        autoplay: true,
        autoplaySpeed: 50000,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                  arrows: false
              }
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    heroSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var sliderTitle = $('.ht-hero-slider h1');
        var currentTitle = $('.slick-current h1');
        sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
        currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
    });
    heroSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        var sliderTitle = $('.ht-hero-slider h1');
        var currentTitle = $('.slick-current h1');
        sliderTitle.removeClass('cssanimation leDoorCloseLeft sequence');
        currentTitle.addClass('cssanimation leDoorCloseLeft sequence');
    });
    
/*------------------------------------
    Food Category Slider
--------------------------------------*/
    var foodSlider = $('.ht-food-slider'); 
    foodSlider.slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });
/*---------------------------------------
    Product Carousel Slider
------------------------------------------*/
    var productSlider = $('.product-carousel'); 
    productSlider.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
/*-------------------------------------
    Timer Product Carousel Slider
----------------------------------------*/
    var timerSlider = $('.timer-carousel'); 
    timerSlider.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
/*--------------------------------------
    Product Slider Two
----------------------------------------*/
    var productSliderTwo = $('.product-carousel-two'); 
    productSliderTwo.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 6,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
/*--------------------------------------
    Product Slider Three
----------------------------------------*/
    var productSliderThree = $('.product-carousel-three'); 
    productSliderThree.slick({
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
/*------------------------------------------
    Featured Carousel Slider
--------------------------------------------*/
    var fetauredSlider = $('.feaured-carousel'); 
    fetauredSlider.slick({
        arrows: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                }
            }
        ]
    });
/*----------------------------------------
    Testimonial Slider
------------------------------------------*/
    $('.text-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        fade: true,
        asNavFor: '.image-carousel',
        responsive: [
            {
              breakpoint: 479,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.image-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.text-carousel',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
/*---------------------------------------
    Blog Carousel
-----------------------------------------*/
    var blogSlider = $('.blog-carousel'); 
    blogSlider.slick({
        arrows: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScoll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
/*---------------------------------------
    Deal Carousel
-----------------------------------------*/
    var blogSlider = $('.deal-slider-active'); 
    blogSlider.slick({
        arrows: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScoll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
/*--------------------------------------
    Single Product image gallery Tabstyle 
-----------------------------------------*/
    $('.small-image-slider-single-product-tabstyle-3').slick({
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next-btn"></i>',
        arrows: false,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    }); 
    $('.small-image-slider-single-product-tabstyle-3 a').on('click', function (e) {
        e.preventDefault();

        var $thisParent = $(this).closest('.product-image-slider');
        var $href = $(this).attr('href');
        $thisParent.find('.small-image-slider-single-product-tabstyle-3 a').removeClass('active');
        $(this).addClass('active');
        
        $thisParent.find('.product-large-image-list .tab-pane').removeClass('active show');
        $thisParent.find('.product-large-image-list ' + $href).addClass('active show');
        
    });
/*--------------------------------------
    Modal Slick Slider
-----------------------------------------*/
    $('.single-slide-menu').slick({
        dots: false,
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
	});
    $('.modal').on('shown.bs.modal', function (e) {
        $('.single-slide-menu').resize();
    })
    $('.single-slide-menu a').on('click',function(e){
        e.preventDefault();
        var $href = $(this).attr('href');
        $('.single-slide-menu a').removeClass('active');
        $(this).addClass('active');
        $('.product-details-large .tab-pane').removeClass('active show');
        $('.product-details-large '+ $href ).addClass('active show');
    });
    
/*------------------------------------
    Scroll Up
--------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
    
/*------------------------------------
    Countdown
--------------------------------------*/	
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="cdown"><span class="counting">%-D</span>days</div><div class="cdown"><span class="counting">%-H</span>hours</div><div class="cdown"><span class="counting">%M</span>mins</div><div class="cdown"><span class="counting">%S</span>secs</div>'));
        });
    });	
    
/*-------------------------------------
    Price Slider
---------------------------------------*/  
    $( "#slider-range" ).slider({
        range: true,
        min: 55,
        max: 1000,
        values: [ 55, 1000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
    
/*--------------------------------------
    EasyZoom instances
----------------------------------------*/  
    $('.easyzoom').easyZoom();
    
/*---------------------------------------
    Login Toggle
-----------------------------------------*/
    $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
    }); 
    
/*----------------------------------------
    Coupon Toggle
------------------------------------------*/
    $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
    });
    
/*-----------------------------------------
    Account Toggle
-------------------------------------------*/
    $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
    });
    
/*-----------------------------------------
    Ship Address Toggle
--------------------------------------------*/
    $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
    });	
    
/*----------------------------------------
    Scroll Down
------------------------------------------*/  
    $('.scroll-down').on('click', function() {
        $('html, body').animate({scrollTop: $('.scroll-area').offset().top - 100 }, 'slow');
        return false;
    });

/*---------------------------------
    Product Detail Page Functionality
-----------------------------------*/
    
    // Initialize product detail functionality when page loads
    $(document).ready(function() {
        initProductDetailFeatures();
    });
    
    function initProductDetailFeatures() {
        // Product image gallery
        $('.thumbnail-item').on('click', function() {
            const newSrc = $(this).find('img').attr('src');
            $('#main-product-img').attr('src', newSrc);
            
            $('.thumbnail-item').removeClass('active');
            $(this).addClass('active');
        });
        
        // Quantity controls
        $('.qty-btn[data-action="decrease"]').on('click', function() {
            const input = $('.qty-input');
            let currentValue = parseInt(input.val());
            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });
        
        $('.qty-btn[data-action="increase"]').on('click', function() {
            const input = $('.qty-input');
            let currentValue = parseInt(input.val());
            input.val(currentValue + 1);
        });
        
        // Add to cart functionality
        $('.btn-primary').on('click', function(e) {
            e.preventDefault();
            showNotification('Added to cart successfully!');
        });
        
        // Buy now functionality
        $('.btn-success').on('click', function(e) {
            e.preventDefault();
            showNotification('Redirecting to checkout...');
            // Here you would normally redirect to checkout
        });
        
        // Wishlist toggle
        $('.wishlist-btn').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            const isActive = $(this).hasClass('active');
            const message = isActive ? 'Added to wishlist!' : 'Removed from wishlist!';
            showNotification(message);
        });
        
        // FAQ accordion
        $('.faq-question').on('click', function() {
            const answer = $(this).next('.faq-answer');
            const icon = $(this).find('i');
            
            // Close all other FAQ items
            $('.faq-answer').not(answer).removeClass('show');
            $('.faq-question i').not(icon).removeClass('fa-minus').addClass('fa-plus');
            
            // Toggle current FAQ
            answer.toggleClass('show');
            if (answer.hasClass('show')) {
                icon.removeClass('fa-plus').addClass('fa-minus');
            } else {
                icon.removeClass('fa-minus').addClass('fa-plus');
            }
        });
        
        // Review helpful buttons
        $('.helpful-btn').on('click', function() {
            $(this).toggleClass('voted');
            const isVoted = $(this).hasClass('voted');
            const text = isVoted ? 'Thanks for your feedback!' : 'Feedback removed';
            showNotification(text);
        });
        
        // Load more reviews
        $('.load-more-reviews').on('click', function(e) {
            e.preventDefault();
            showNotification('Loading more reviews...');
            // Here you would load more reviews via AJAX
        });
        
        // Write review button
        $('.write-review-btn').on('click', function(e) {
            e.preventDefault();
            showNotification('Review form would open here');
            // Here you would open a review form modal or redirect
        });
        
        // Smooth scroll to reviews section
        $('.review-count').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('.reviews-ratings').offset().top - 100
            }, 800);
        });
    }
    
    // Show notification function
    function showNotification(message) {
        // Remove existing notification
        $('.product-notification').remove();
        
        // Create and show new notification
        const notification = $(`
            <div class="product-notification">
                <i class="fa fa-check-circle" style="margin-right: 8px;"></i>
                ${message}
            </div>
        `);
        
        $('body').append(notification);
        
        // Show notification
        setTimeout(() => {
            notification.addClass('show');
        }, 100);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.removeClass('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

})(jQuery);	