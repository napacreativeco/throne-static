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
                            <summary>
                            
                                <h2>
                                    <span class="client-name">
                                        ${item.client}
                                    </span>
                                    <span class="sup">
                                        <sup>
                                            ${(function() {
                                                if (key <= 8) { return '00' + (key + 1); } else { return '0' + (key + 1); } 
                                            })()}
                                        </sup>
                                    </span>
                                </h2>
                                
                                <img class="empty-arrow" src="../svg/arrow-empty.svg" />
                            </summary>

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
                                                <div class="images-wrapper"></div>
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
                    $('#' + item.slug).find('.images-wrapper').append(`<div class="slide"><img src="${img}" /></div>`);
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
   $(document).ready(function() {
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


        (function titleMarquee() {
            document.title = document.title.substring(1)+document.title.substring(0,1);
            setTimeout(titleMarquee, 200);
        })();

   })



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




