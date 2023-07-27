//profile
$(function () {
    var profile = new Swiper(".profile", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var profile = new Swiper(".sample", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});