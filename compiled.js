(function ($) {


    /* ==============================================
        Load Clients
       ==============================================
    */

       
    function fetchData() {
        fetch('/data/projects.json')
        .then((res) => res.json())
        .then((data) => {

            $.map(data, function(item, key) {

                $('#client-list').append(`
                    <li class="client mouse-change" id="${item.slug}" data-key="${key}">
                        <details>
                            <summary><h2>${item.client}</h2><img class="empty-arrow" src="../svg/arrow-empty.svg" /></summary>

                            <div class="client-body">

                                <div class="client-body--left mouse-star">
                                    <div class="type"># ${item.type}</div>
                                    <div class="description">
                                        <p>${item.description}</p>
                                    </div>
                                    <div class="links-holder">
                                        <ul class="links-title">
                                            <li><img src="../svg/link.svg" alt="Links" /></li>
                                            <li><h3>Links</h3></li>
                                        </ul>
                                        <ul class="links">
                                            <li>
                                                <a href="${item.links[0].website}" title="Website">Website</a>
                                            </li>
                                            <li>
                                                <a href="${item.links[0].instagram}" title="Instagram">Instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="client-body--right">

                                    ${(function() { 
                                        if (item.images.length > 0) { return (`
                                                <div class="prev-holder">
                                                    <button class="prev"><img src="../svg/arrow-right.svg" width="60" /></button>
                                                </div>
                                                <div class="swiper mouse-grab">
                                                <div class="swiper-wrapper">

                                                    </div>
                                                </div>
                                                <div class="next-holder">
                                                    <button class="next"><img src="../svg/arrow-right.svg" width="60" /></button>
                                                </div>
                                            `); 
                                        } else {
                                            return '';
                                        }
                                    })()}

                                </div>

                            </div>

                        </details>
                    </li>
                `);
                console.log(item.client);

                $.map(item.images, function(img, key) {
                    $('#' + item.slug).find('.swiper-wrapper').append(`<div class="swiper-slide"><img src="${img}" /></div>`);
                }); 
            });
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`);
        });
    }
    
    fetchData();

    
    /* ==============================================
        Details Animation
    ==============================================
    */
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });


    $(document).ready(function() {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoHeight: true,
            on: {
                touchStart: function() {
                    $('.swiper-slide').removeClass('mouse-grab').addClass('mouse-closed');
                },
                touchEnd: function() {
                    $('.swiper-slide').removeClass('mouse-closed').addClass('mouse-grab');
                },
            },
            navigation: {
              nextEl: '.next',
              prevEl: '.prev',
            },
        });
    });



})(jQuery);





(function($) {

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


    /* ======================
       Easier Click
       =======================*/ 
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
    


    
(function($) {



})(jQuery);