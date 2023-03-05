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


    /*
    * Awesome Hover
    */
    $('.awesome').on('mouseenter', function() {

        if ( !$('.awesome-image').hasClass('turned') ) {

            $('.awesome-image').addClass('turned');

            gsap.to('.awesome-image', { 
                top: '20%',
                left: '10%',
                opacity: 1,
                width: '100%',
                rotate: '35deg'
                
            });
        }
    });

    /*
    * Awesome Click
    */
    $('.awesome-image').on('click', function() {

        if ( $('.awesome-image').hasClass('unturned') ) {
            
            $(this).removeClass('unturned');

            gsap.to( $('.awesome-image'), {
                width: '250px',
                top: '20%',
                left: '10%',
                rotate: '35deg',
                zIndex: 0
            });

        } else {
            $(this).addClass('unturned');

            gsap.to(this, {
                top: '50%',
                left: '0',
                rotate: '0deg',
                maxWidth: '100vw',
            });

            gsap.to('.unturned', {
                width: '80vw',
                position: 'absolute',
                left: '10vw',
                right: '10vw',
                zIndex: 9,
            });
        }

    });


    /*
    * Helpful Hover
    */
    $('.helpful').on('mouseenter', function() {

        if ( !$('.helpful-image').hasClass('turned') ) {

            $('.helpful-image').addClass('turned');

            gsap.to('.helpful-image', { 
                top: '50%',
                right: '10px',
                left: '80%',
                opacity: 1,
                width: '100%',
                rotate: '15deg'
                
            });
        }
    });

    /*
    * Helpful Click
    */    
    $('.helpful-image').on('click', function() {

        if ( $('.helpful-image').hasClass('unturned') ) {
            $(this).removeClass('unturned');

            gsap.to( $('.helpful-image'), {
                width: '250px',
                top: '50%',
                right: '10px',
                left: '80%',
                rotate: '15deg',
                zIndex: 0
            });

        } else {
            $(this).addClass('unturned');

            gsap.to(this, {
                top: '50%',
                left: '0',
                rotate: '0deg',
                maxWidth: '100vw',
            });

            gsap.to('.unturned', {
                width: '80vw',
                position: 'absolute',
                left: '10vw',
                right: '10vw',
                zIndex: 9,
            });
        }

    });


    /*
    * Easier Hover
    */
    $('.easier').on('mouseenter', function() {

        if ( !$('.easier-image').hasClass('turned') ) {

            $('.easier-image').addClass('turned');

            gsap.to('.easier-image', { 
                top: '60%',
                left: '20vw',
                opacity: 1,
                width: '100%',
                rotate: '-20deg'
                
            });
        }

    });

    /*
    * Easier Click
    */    
    $('.easier-image').on('click', function() {

        if ( $('.easier-image').hasClass('unturned') ) {

            $(this).removeClass('unturned');

            gsap.to( $('.easier-image'), {
                width: '250px',
                top: '60%',
                left: '20%',
                rotate: '-20deg',
                zIndex: 0
            });

        } else {

            $(this).addClass('unturned');

            gsap.to(this, {
                top: '60%',
                left: '0',
                rotate: '0deg',
                maxWidth: '100vw',
            });

            gsap.to('.unturned', {
                width: '60vw',
                position: 'absolute',
                left: '20vw',
                right: '20vw',
                zIndex: 9,
            });
        }

    });
    

    Draggable.create(".awesome-image", {
        type:"x,y",
        bounds: $('.hero'),
        inertia: true,
        onClick: function() {
            console.log("clicked: awesome");
        },
        onDragEnd: function() {
            console.log("drag ended");
        }
    });

    Draggable.create(".helpful-image", {
        type:"x,y",
        bounds: $('.hero'),
        inertia: true,
        onClick: function() {
            console.log("clicked: helpful");
        },
        onDragEnd: function() {
            console.log("drag ended");
        }
    });

    Draggable.create(".easier-image", {
        type:"x,y",
        bounds: $('.hero'),
        inertia: true,
        onClick: function() {
            console.log("clicked: easier");
        },
        onDragEnd: function() {
            console.log("drag ended");
        }
    });


})(jQuery);