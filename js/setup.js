$(document).ready(function() {
    
    /** 
     * Navigation
     */
    $(function() {
        $('ul.nav a').bind('click', function(event) {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 185
            }, 2500, 'easeInOutExpo');
            event.preventDefault();
            history.pushState(3, $anchor.attr('href'), $anchor.attr('href'));
        });
    });

    $(function() {
        $('.smooth').bind('click', function(event) {
            var $anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: 0
            }, 2500, 'easeInOutExpo');
            event.preventDefault();
            history.pushState(3, $anchor.attr('href'), $anchor.attr('href'));
        });
    });
    
    
    
    /*
     * Parallax
     */

    // initialize the plugin, pass in the class selector for the sections of content (blocks)
    var scrollorama = $.scrollorama({blocks: 'section'});
    var menuItems = $('.nav > li');

    // assign function to add behavior for onBlockChange event
    scrollorama.onBlockChange(function() {
        var i = scrollorama.blockIndex;
        menuItems.removeClass('active');
        if (i > 0)
            menuItems.eq(i - 1).addClass('active');
    });


    scrollorama
            .animate('.block_home', {delay: 300, duration: 700, property: 'padding-top', start: 300, end: 700, pin: true})
            .animate('#services_title', {delay: 0, duration: 150, property: 'margin-top', start: 0, end: -150});


    scrollorama
            .animate('#block_service_1', {delay: 0, duration: 300, property: 'margin-top', start: 150, end: -135})
            .animate('#block_service_2', {delay: 150, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_3', {delay: 300, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_4', {delay: 450, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_5', {delay: 600, duration: 300, property: 'margin-top', start: 150, end: -255})
            .animate('#block_service_6', {delay: 750, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_7', {delay: 900, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_8', {delay: 1050, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_service_9', {delay: 1200, duration: 300, property: 'margin-top', start: 150, end: -250});

    scrollorama
            .animate('.service_article_1', {delay: 1500, duration: 400, property: 'margin-top', start: 0, end: -500})
            .animate('.service_article_2', {delay: 2000, duration: 300, property: 'margin-top', start: 0, end: -200})
            .animate('#leaf', {delay: 2300, duration: 300, property: 'margin-top', start: 0, end: -200})
            .animate('.block_oder', {delay: 2500, duration: 500, property: 'margin-top', start: 0, end: -500});

    scrollorama
            .animate('.face-01', {delay: 1820, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-02', {delay: 1740, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-03', {delay: 1750, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-04', {delay: 1725, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-05', {delay: 1775, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-06', {delay: 1800, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-07', {delay: 1800, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-08', {delay: 1775, duration: 50, property: 'opacity', start: 0, end: 1})
            .animate('.face-09', {delay: 1700, duration: 50, property: 'opacity', start: 0, end: 1});

    scrollorama
            .animate('.s_lines', {delay: 900, duration: 250, property: 'height', start: 0, end: 260});


    scrollorama
            .animate('#block_stage_1', {delay: 350, duration: 300, property: 'margin-top', start: 150, end: -135})
            .animate('#block_stage_2', {delay: 500, duration: 300, property: 'margin-top', start: 150, end: -255})
            .animate('#block_stage_3', {delay: 650, duration: 300, property: 'margin-top', start: 150, end: -255})
            .animate('#block_stage_4', {delay: 800, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_stage_5', {delay: 950, duration: 300, property: 'margin-top', start: 150, end: -255})
            .animate('#block_stage_6', {delay: 1100, duration: 300, property: 'margin-top', start: 150, end: -250})
            .animate('#block_stage_7', {delay: 1250, duration: 300, property: 'margin-top', start: 150, end: -250});


    /*
     * Gallery
     */

    $(".gallery").jCarouselLite({
        auto: 6000,
        speed: 600,
        vertical: false,
        btnNext: ".arrowRight",
        btnPrev: ".arrowLeft"
    });

});