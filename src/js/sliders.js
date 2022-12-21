document.addEventListener('DOMContentLoaded', function() {

    let windowSize = window.innerWidth;

    var mainPromoSwiper = new Swiper(".main-promo-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        },
        // effect: 'cube',
        // cubeEffect: {
        //     slideShadows: false,
        // },
    });


























})