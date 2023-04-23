!function(e){fetch("/data/projects.json").then(e=>e.json()).then(n=>{e.map(n,function(n,t){e("#client-list").append(`\n                    <li class="client mouse-change" id="${n.slug}" data-key="${t}">\n                        <details>\n                            <summary>\n                            \n                                <h2>\n                                    <span class="client-name">\n                                        ${n.client}\n                                    </span>\n                                    <span class="sup">\n                                        <sup>\n                                            ${t<=8?"00"+(t+1):"0"+(t+1)}\n                                        </sup>\n                                    </span>\n                                </h2>\n                                \n                                <img class="empty-arrow" src="../svg/arrow-empty.svg" />\n                            </summary>\n\n                            <div class="client-body">\n\n                                <div class="client-body--left mouse-star">\n                                    <div class="type"># ${n.type}</div>\n                                    <div class="description">\n                                        <p>${n.description}</p>\n                                    </div>\n                                    <div class="links-holder">\n                                        <ul class="links-title">\n                                            <li><img src="../svg/link.svg" alt="Links" /></li>\n                                            <li><h3>Links</h3></li>\n                                        </ul>\n                                        <ul class="links">\n                                            <li>\n                                                <a href="${n.links[0].website}" title="Website">Website</a>\n                                            </li>\n                                            <li>\n                                                <a href="${n.links[0].instagram}" title="Instagram">Instagram</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n\n                                <div class="client-body--right">\n\n                                    ${n.images.length>0?'\n                                                <div class="images-wrapper"></div>\n                                            ':""}\n\n                                </div>\n\n                            </div>\n\n                        </details>\n                    </li>\n                `),console.log(n.client),e.map(n.images,function(t,s){e("#"+n.slug).find(".images-wrapper").append(`<div class="slide"><img src="${t}" /></div>`)})})}).catch(e=>{console.log(`Error Fetching data : ${e}`)}),e(document).ready(function(){const e=document.querySelectorAll("details");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(e=>{e!==n&&e.removeAttribute("open")})})}),function e(){document.title=document.title.substring(1)+document.title.substring(0,1),setTimeout(e,200)}()}),e(document).ready(function(){new Swiper(".swiper",{direction:"horizontal",loop:!0,autoHeight:!0,on:{touchStart:function(){e(".swiper-slide").removeClass("mouse-grab").addClass("mouse-closed")},touchEnd:function(){e(".swiper-slide").removeClass("mouse-closed").addClass("mouse-grab")}},navigation:{nextEl:".next",prevEl:".prev"}})})}(jQuery),function(e){e(".awesome").on("mouseenter",function(){e(".awesome-image").hasClass("turned")||(e(".awesome-image").addClass("turned"),gsap.to(".awesome-image",{top:"20%",left:"10%",opacity:1,width:"100%",rotate:"35deg"}))}),e(".awesome-image").on("click",function(){e(".awesome-image").hasClass("unturned")?(e(this).removeClass("unturned"),gsap.to(e(".awesome-image"),{width:"250px",top:"20%",left:"10%",rotate:"35deg",zIndex:0})):(e(this).addClass("unturned"),gsap.to(this,{top:"50%",left:"0",rotate:"0deg",maxWidth:"100vw"}),gsap.to(".unturned",{width:"80vw",position:"absolute",left:"10vw",right:"10vw",zIndex:9}))}),e(".helpful").on("mouseenter",function(){e(".helpful-image").hasClass("turned")||(e(".helpful-image").addClass("turned"),gsap.to(".helpful-image",{top:"50%",right:"10px",left:"80%",opacity:1,width:"100%",rotate:"15deg"}))}),e(".helpful-image").on("click",function(){e(".helpful-image").hasClass("unturned")?(e(this).removeClass("unturned"),gsap.to(e(".helpful-image"),{width:"250px",top:"50%",right:"10px",left:"80%",rotate:"15deg",zIndex:0})):(e(this).addClass("unturned"),gsap.to(this,{top:"50%",left:"0",rotate:"0deg",maxWidth:"100vw"}),gsap.to(".unturned",{width:"80vw",position:"absolute",left:"10vw",right:"10vw",zIndex:9}))}),e(".easier").on("mouseenter",function(){e(".easier-image").hasClass("turned")||(e(".easier-image").addClass("turned"),gsap.to(".easier-image",{top:"60%",left:"20vw",opacity:1,width:"100%",rotate:"-20deg"}))}),e(".easier-image").on("click",function(){e(".easier-image").hasClass("unturned")?(e(this).removeClass("unturned"),gsap.to(e(".easier-image"),{width:"250px",top:"60%",left:"20%",rotate:"-20deg",zIndex:0})):(e(this).addClass("unturned"),gsap.to(this,{top:"60%",left:"0",rotate:"0deg",maxWidth:"100vw"}),gsap.to(".unturned",{width:"60vw",position:"absolute",left:"20vw",right:"20vw",zIndex:9}))}),Draggable.create(".awesome-image",{type:"x,y",bounds:e(".hero"),inertia:!0,onClick:function(){console.log("clicked: awesome")},onDragEnd:function(){console.log("drag ended")}}),Draggable.create(".helpful-image",{type:"x,y",bounds:e(".hero"),inertia:!0,onClick:function(){console.log("clicked: helpful")},onDragEnd:function(){console.log("drag ended")}}),Draggable.create(".easier-image",{type:"x,y",bounds:e(".hero"),inertia:!0,onClick:function(){console.log("clicked: easier")},onDragEnd:function(){console.log("drag ended")}})}(jQuery),function(e){e(".hamburger").on("click",function(){e(".menu-container").hasClass("open")?(e(".menu-container").css({transform:"scaleY(0.0)",top:"100%"}).removeClass("open"),e(".hamburger").removeClass("clicked")):(e(".menu-container").css({transform:"scaleY(1.0)",top:"0px"}).addClass("open"),e(".hamburger").addClass("clicked"))}),e(".menu-link").on("click",function(){e(".menu-container").css({transform:"scaleY(0.0)",top:"100%"}).removeClass("open")}),e(".close-menu").on("click",function(){e(".menu-container").css({transform:"scaleY(0.0)",top:"100%"}).removeClass("open")})}(jQuery),jQuery;