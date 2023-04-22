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




