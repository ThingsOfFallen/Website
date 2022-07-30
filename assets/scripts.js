/*
    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
*/

/* Copyright © 2022 Liam Labell. All rights reserved. */
(function ($) {
    'use strict';
    $(document).ready(function () {
        // Preloader
        $(window).on('load', function() {
            $('body').addClass('loaded');
        });

        /* Smooth Scroll */
        $('a.smooth-scroll').on("click", function (e) {
            const anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /* Scroll Navigation Background Change with Sticky Navigation */
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });

        /* Mobile Navigation Hide or Collapse on Click */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* Scroll To Top */
        $(window).scroll(function(){
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        $('.scroll-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        /* Typed.js */
        new Typed('.typing', {
            strings: ["Fullstack Web Dev", "Backend Application Dev"],
            typeSpeed: 90,
            backSpeed: 70,
            loop: true
        });

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        /* Magnific Popup */
        $('.portfolio-popup').magnificPopup({
            type: 'image',
            gallery: { enabled: true },
            zoom: { enabled: true, duration: 500 },
            image:{
                markup: '<div class="mfp-figure portfolio-pop-up">'+
                    '<div class="mfp-close"></div>'+
                    '<div class="mfp-img"></div>'+
                    '<div class="mfp-bottom-bar portfolio_title">'+
                    '<div class="mfp-title"></div>'+
                    '<div class="mfp-counter"></div>'+
                    '</div>'+
                    '</div>',
                titleSrc:function(item){
                    return item.el.attr('title');
                }
            }
        });

        /* Testimonial Carousel */
        tns({
            container: '.testimonial-carousel-list',
            items: 1,
            speed: 650,
            nav: false,
            autoplay: true,
            mouseDrag: true,
            autoplayHoverPause: true,
            autoplayButtonOutput: false,
            controlsContainer: '.testimonial-controls',
            prevButton: '#testimonial-controls-prev',
            nextButton: '#testimonial-controls-next'
        });
    });
})($);
