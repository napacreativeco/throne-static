(function($) {

    /* 
    * Open Menu
    */
    $('.hamburger').on('click', function() {

        if ( $('.menu-container').hasClass('open') ) {

            $('.menu-container').css({
                transform: 'scaleY(0.0)',
                top: '100%'
            }).removeClass('open');

            $('.hamburger').removeClass('clicked');
            

        } else {

            $('.menu-container').css({
                transform: 'scaleY(1.0)',
                top: '40px'
            }).addClass('open');

            $('.hamburger').addClass('clicked');
        }

    });

    $('.menu-link').on('click', function() {

        $('.menu-container').css({
            transform: 'scaleY(0.0)',
            top: '100%'
        }).removeClass('open');

    });


    /* 
    * Open Case Studies
    */
    $('.casestudy-link').on('click', function(e) {

        $('.case-study').hide();

        var targetClient = $(this).attr('data-client'); 
        var Idized = '#' + targetClient + '';

        // open container
        $('.case-studies-container').css({
            transform: 'scale(1.0)',
            borderRadius: '0px'
        });

        // choose client
        $(Idized).css({
            display: 'block'
        });
    });

    /* 
    * Close Case Study 
    */
   $('.close-case-study').on('click', function() {
        $('.case-studies-container').css({
            transform: 'scale(0.0)',
            borderRadius: '100%'
        })
   });


})(jQuery);