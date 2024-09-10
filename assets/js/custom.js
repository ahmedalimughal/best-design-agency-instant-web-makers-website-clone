AOS.init({
    disable: function () {
        return window.innerWidth < 1440;
    },
});
if ($('section').hasClass('services-banner')) {
    $('.white-logo').css('display', 'none')
    $('.black-logo').css('display', 'block')
    $('nav ul li').find('a:first').css('color', 'black')
}

var currentTab = 0;

function showTab(t) {
    var e = document.getElementsByClassName("tab");
    (e[t].style.display = "block"),
        0 == t
            ? ((document.getElementById("prevBtn").style.display = "none"),
                (document.getElementById("signupBtn2").style.display = "none"),
                (document.getElementById("nextBtn").style.display = "inline"))
            : (document.getElementById("prevBtn").style.display = "inline"),
        t == e.length - 1
            ? ((document.getElementById("nextBtn").style.display = "none"),
                (document.getElementById("signupBtn2").style.display = "inline"))
            : (document.getElementById("nextBtn").innerHTML = "Next");
}

function nextPrev(t) {
    var e = document.getElementsByClassName("tab");
    if (1 == t && !validateForm()) return !1;
    (e[currentTab].style.display = "none"), showTab((currentTab += t));
}

function validateForm() {
    var t,
        e,
        a = !0;
    for (
        t = document
            .getElementsByClassName("tab")
            [currentTab].getElementsByTagName("input"),
            e = 0;
        e < t.length;
        e++
    )
        "" == t[e].value && ((t[e].className += " invalid"), (a = !1));
    return a;
}

(function ($) {
    $(function () {
        $("nav ul li > a:not(:only-child)").click(function (e) {
            $(this).siblings(".nav-dropdown").slideToggle();
            $(".nav-dropdown").not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $("html").click(function () {
            $(".nav-dropdown").hide();
        });
        // Toggle open and close nav styles on click
        $("#nav-toggle").click(function () {
            $("nav ul").slideToggle();
        });
        $("#nav-toggle").on("click", function () {
            this.classList.toggle("active");
        });
    });
})(jQuery);


function nextPrev(t) {
    var e = document.getElementsByClassName("tab");
    if (1 == t && !validateForm()) return !1;
    (e[currentTab].style.display = "none"), showTab((currentTab += t));
}

function validateForm() {
    var t,
        e,
        a = !0;
    for (
        t = document
            .getElementsByClassName("tab")
            [currentTab].getElementsByTagName("input"),
            e = 0;
        e < t.length;
        e++
    )
        "" == t[e].value && ((t[e].className += " invalid"), (a = !1));
    return a;
}

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

// Show the first tab and hide the rest
$('#porfolio-tabs-nav li:first-child').addClass('active');
$('.porfolio-tab-content').hide();
$('.porfolio-tab-content:first').show();

// Click function
$('#porfolio-tabs-nav li').click(function () {
    $('#porfolio-tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.porfolio-tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var packageSwiper = new Swiper(".packageCarousel", {
    speed: 1000,
    spaceBetween: 0,
    // initialSlide: 1,
    loop: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let packageInner = new Swiper(".packageInnerSwiper", {
    speed: 1000,
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: false,
    grid: {
        rows: 2,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(window).width() <= 1000 &&
0 != ".clinet-logo-slider".length &&
($(".clinet-logo-slider").addClass("owl-carousel owl-theme"),
    $(".clinet-logo-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 2}, 577: {items: 3}, 769: {items: 3}}
    }));

$(window).width() <= 1000 &&
0 != ".we-provide-slider".length &&
($(".we-provide-slider").addClass("owl-carousel owl-theme"),
    $(".we-provide-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 3}, 577: {items: 4}, 769: {items: 5}}
    }));

$(window).width() <= 991 &&
0 != ".portfolio-slider".length &&
($(".portfolio-slider").addClass("owl-carousel owl-theme"),
    $(".portfolio-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 2}, 577: {items: 3}, 769: {items: 4}}
    }));

$(window).width() <= 1199 &&
0 != ".our-ideological-slider".length &&
($(".our-ideological-slider").addClass("owl-carousel owl-theme"),
    $(".our-ideological-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 2}, 577: {items: 2}, 769: {items: 3}}
    }));

$(window).width() <= 1199 &&
0 != ".how-it-work-slider".length &&
($(".how-it-work-slider").addClass("owl-carousel owl-theme"),
    $(".how-it-work-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 1}, 575: {items: 1}, 769: {items: 2}}
    }));

$(window).width() <= 1199 &&
0 != ".guranteed-slider".length &&
($(".guranteed-slider").addClass("owl-carousel owl-theme"),
    $(".guranteed-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 1}, 575: {items: 2}, 769: {items: 3}}
    }));

$(window).width() <= 575 &&
0 != ".counter-wrpaer-slider".length &&
($(".counter-wrpaer-slider").addClass("owl-carousel owl-theme"),
    $(".counter-wrpaer-slider").owlCarousel
    ({
        loop: !0,
        margin: 0,
        nav: !1,
        dots: !0,
        autoplay: 0,
        autoplayHoverPause: !0,
        mouseDrag: !0,
        responsive: {0: {items: 1}, 320: {items: 1}, 482: {items: 1}, 575: {items: 2}, 769: {items: 3}}
    }));


$(".packageBody ul").slimScroll({
    height: "350px",
    color: "#ffffff"
}), 0 != $(".scroll").length && $(".scroll").slimScroll({
    height: "350px",
    size: "6px",
    color: "#ffffff",
    alwaysVisible: !0,
    distance: "12px",
    railVisible: !0,
    railColor: " rgb(209, 0, 29)",
    railOpacity: 1,
    railBorderRadius: "0px",
    wheelStep: 10,
    disableFadeOut: !1
});

$(document).scroll(function () {
    "use strict";
    $(this).scrollTop() > 400 ? ($(".sticky-form").fadeIn(), $(".sticky-form").show()) : $(".sticky-form").fadeOut();
}),

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 400) {
            $('.fixedform').addClass('fixed-forms-main');

        }
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('stickyheader');

        } else {
            $('.fixedform').removeClass('fixed-forms-main');
            $('header').removeClass('stickyheader');

        }
    });


$(".fixedform .barforms").click(function (event) {

    $(this).parent().toggleClass("active");
    $('.formOverlaySide').toggleClass('active');
    event.stopPropagation();
});

$('body').delegate('.mainpriceng-count .leftcont-ban a ', 'click', function (event) {
    // console.log('qa');
    event.preventDefault();
    $('.fixedform .barforms').trigger('click');
});


$(function () {
    // $(".fixedfomrclick").click(function (event) {

    //   $('html, body').animate({ scrollTop: $('#section08').offset().top + 400 }, 500, 'linear');
    //   $('.fixedform .barforms').trigger('click');

    // });

    $(".slidedwon-btns").click(function () {

        $('html, body').animate({scrollTop: $('#packagesdrops').offset().top - 80}, 500, 'linear');
        //$('.fixedform .barforms').trigger('click');

    });
});
(function ($) {
    $(function () {
        $("nav ul li > .services-dropdown").click(function (e) {
            $(this).siblings(".services-dropdown .nav-dropdown").slideToggle();
            $(".services-dropdown .nav-dropdown").not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $("html").click(function () {
            $(".services-dropdown .nav-dropdown").hide();
        });
        // Toggle open and close nav styles on click
        $(".services-dropdown .nav-dropdown").click(function () {
            $("nav ul").slideToggle();
        });
        $(".services-dropdown .nav-dropdown").on("click", function () {
            this.classList.toggle("active");
        });
    });
})(jQuery);


var e,
    t,
    a,
    d,
    l,
    o = $(".slider-carousel-holder"),
    n = o.find(".slider-carousel"),
    i = n.find(".slider-carousel-next"),
    s = n.find(".slider-carousel-prev"),
    r = (n.find(".swiper-slide"), o.find(".eltdf-sc-fixed-title")),
    f = r.find("a"),
    c = r.find("h1"),
    u = r.find("h2"),
    h = o.find(".eltdf-sc-fixed-info");

var swiper = new Swiper(".slider-carousel", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: !0,
    loopedSlides: 7,
    mousewheel: {
        invert: !1,
        eventsTarged: o
    },
    breakpoints: {
        640: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 1.6,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: "auto",
        },
    },
    autoplay: {
        delay: 5e3
    },
    navigation: {
        nextEl: i,
        prevEl: s
    }
});

function m() {
    (e = n.find(".swiper-slide-active")),
        (t = e.find("a").attr("href")),
        (a = e.find("h1").text()),
        (d = e.find("h2").text());
    // (l = e.find(".additional-info").html());
}

m(),
    f.attr("href", t),
    c.text(a),
    u.text(d),
    u.attr("data-title", d),
    u.data("title", d),
    // h.html(l),
    setTimeout(function () {
        r.addClass("eltdf-fixed-title-animate-in"),
            h.addClass("eltdf-fixed-info-animate-in");
    }, 300),
    swiper.on("slideChangeTransitionStart", function () {
        m(),
            r.removeClass("eltdf-fixed-title-animate-in"),
            h.removeClass("eltdf-fixed-info-animate-in"),
            setTimeout(function () {
                f.attr("href", t),
                    c.text(a),
                    u.text(d),
                    u.attr("data-title", d),
                    u.data("title", d);
                // h.html(l);
            }, 700),
            setTimeout(function () {
                r.addClass("eltdf-fixed-title-animate-in"),
                    h.addClass("eltdf-fixed-info-animate-in");
            }, 800);
    });
// $('a').attr("href", t),
//   $("h1").text(a),
//   $("h2").text(d),
//   $("h2").attr("data-title", d),
//   $("h2").data("title", d),
//   setTimeout(function() {
//   $(".swiper-slide").addClass("eltdf-fixed-title-animate-in")
// }, 300),

$(document).ready(function () {
    $(".bets_seller_list").slimScroll({
        size: '4px',
        width: '100%',
        height: '400px',
        opacity: '1',
        allowPageScroll: true,
        alwaysVisible: true
    });
});

$('.banner-slider-owl').owlCarousel({

    navigation: false,
    // navigationText: ["", ""],
    loop: true,
    rewind: true,
    autoplayTimeout: 4000,
    autoplay: true,
    mouseDrag: false,
    singleItem: true,
    nav: false,
    dots: false,
    animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut', // and this
    responsiveClass: true,

    responsive: {
        0: {
            items: 1
            // nav:true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
});

$(".packageSlider").owlCarousel({
    dots: true,
    loop: false,
    margin: 20,
    nav: true,
    autoplay: false,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    responsive: {
        0: {items: 3},
        320: {items: 1},
        415: {items: 1},
        481: {items: 1},
        576: {items: 1},
        767: {items: 2},
        992: {items: 3},
        1280: {items: 3}
    },
});

$(".pricingslider").owlCarousel({
    dots: true,
    margin: 0,
    nav: false,
    autoplay: !0,
    responsive: {0: {items: 1}},
});


$('.our-proces-slider').owlCarousel({
    loop: false,
    margin: 0,
    navigation: true,
    dots: false,
    nav: true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        320: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1,
            nav: true
        },
        1920: {
            items: 1,
            nav: true
        }
    }
});

$(".openpopup").click(function () {
    $("#entry-popup").css("display", "flex").fadeIn();
});
$("#entry-box_close").click(function () {
    $("#entry-popup").fadeOut();
});
// window.location.hash ||
// setTimeout(function () {
//     $("#entry-popup").css("display", "flex").fadeIn();
// }, 1e4);

// var MODULE = MODULE || {};


$(document).ready(function () {
    $("#entry-box_close").click(function () {
        $("#entry-popup").fadeOut()
    });
    // window.location.hash || setTimeout(function () {
    //     $("#entry-popup").css("display", "flex").fadeIn()
    // }, 1e4)
});

$('.counting').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({countNum: $this.text()}).animate({
            countNum: countTo
        },

        {

            duration: 3000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum) + '+');
            },
            complete: function () {
                $this.text(this.countNum + '+');
                //alert('finished');
            }

        });


});

(function ($) {
    "use strict";

    //Page cursors
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }

    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    $(document).ready(function () {

        /* Hero Case study images */

        $('.case-study-name:nth-child(1)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(1)').addClass("show");
            $('.case-study-name:nth-child(1)').addClass('active');
        })
        $('.case-study-name:nth-child(2)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(2)').addClass("show");
            $('.case-study-name:nth-child(2)').addClass('active');
        })
        $('.case-study-name:nth-child(3)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(3)').addClass("show");
            $('.case-study-name:nth-child(3)').addClass('active');
        })
        $('.case-study-name:nth-child(4)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(4)').addClass("show");
            $('.case-study-name:nth-child(4)').addClass('active');
        })
        $('.case-study-name:nth-child(5)').on('mouseenter', function () {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(5)').addClass("show");
            $('.case-study-name:nth-child(5)').addClass('active');
        })
        $('.case-study-name:nth-child(1)').trigger('mouseenter')

    });


})(jQuery);

$(window).width() <= 767 && 0 != ".awardListCarousel".length && ($(".awardListCarousel").addClass("owl-carousel owl-theme"), $(".awardListCarousel").owlCarousel({
    loop: !0,
    margin: 0,
    nav: !1,
    dots: !0,
    autoplay: 0,
    autoplayHoverPause: !0,
    mouseDrag: !0,
    responsive: {
        768: {
            items: 3
        },
        300: {
            items: 2
        }
    }
}));

const acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        const allPanels = document.querySelectorAll('.panel')
        const panel = this.nextElementSibling


        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            allPanels.forEach(elem => {
                elem.style.display = 'none'
            })
            panel.style.display = "block";
        }
    });
}

$('.list-header').on('click', function () {
    var $J_li = $(this).parents('.J_list')
    $J_li.hasClass('open') ? $J_li.removeClass('open') : $J_li.addClass('open');
})


if ($(window).width() <= 768) {

    $('[data-targetit]').on('click', function (e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
        $('.package_slider .row').slick('setPosition');
    });

}

if ($(window).width() < 991) {
    $('nav ul li').find('a:first').css('color', 'white')
}

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
