document.addEventListener('DOMContentLoaded', function() {

    const WINDOW_SIZE = window.innerWidth;



    // Инициализация и конфиг отдельных слайдеров

    let mainPromoSwiper = new Swiper(".main-promo-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        }
    });

    let galleryHeadSwiper = new Swiper(".gallery-head-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-small',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        }
    });


    {
        let gallerySwipers = document.querySelectorAll('.gallery-swiper');
        gallerySwipers.forEach(function(elem) {
            new Swiper(elem, {
                speed: 300,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                slidesPerView: "auto",
                spaceBetween: 30
            });
        })
    }
    





    // Связываем контроль 2-ух отдельных слайдеров
    let amusementsSwiper2 = new Swiper(".amusements-swiper-2", {
        slidesPerView: 2,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        speed: 700,
        spaceBetween: 40,
        direction: 'vertical',
        allowTouchMove: false
    });
    let amusementsSwiper = new Swiper(".amusements-swiper", {
        slidesPerView: 2,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        speed: 700,
        spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        },
        direction: 'vertical',
        allowTouchMove: false
    });
    amusementsSwiper2.controller.control = this.amusementsSwiper;






    // Boilerplate для слайдера, у которого навигация НЕ дочерний элемент .swiper [используется для вынесения навигации из контейнера и обход overflow:hidden]
    // Конфиг инициализации расположен ниже

    // <div class="swiper-control-wrapper">
    //     <div class="swiper swiperName">
    //         <div class="swiper-wrapper">
    //             <div class="swiper-slide"></div>
    //         </div>
    //     </div>
    //     <div class="swiper-pagination"></div>
    //     <div class="swiper-button-next"></div>
    //     <div class="swiper-button-prev"></div>
    // </div>


    let mainPageTariffsSwiper = new Swiper(".main-page-tariffs-swiper", {
		slidesPerView: 4,
		spaceBetween: 30,
		grabCursor: true,
		pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        },
		observeParents: true,
		on: {
			init: function (swiper) {
				swiper.el.querySelector('.swiper-preloader').remove()
				swiper.params.navigation.nextEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-next');
				swiper.params.navigation.prevEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-prev');
				swiper.navigation.init()
				swiper.navigation.update()
			},
			update: function (swiper) {
				swiper.params.navigation.nextEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-next');
				swiper.params.navigation.prevEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-prev');
				swiper.navigation.update()
			}
		},
	});


    let swiperFea = new Swiper("#tariffs .swiper.fea", {
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        }
    })
























})