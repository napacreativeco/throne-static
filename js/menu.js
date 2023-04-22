(function($) {

    /* ==============================================
        Open Menu
       ==============================================
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
                top: '0px'
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

    $('.close-menu').on('click', function() {
        $('.menu-container').css({
            transform: 'scaleY(0.0)',
            top: '100%'
        }).removeClass('open');
    });

})(jQuery);
    


    