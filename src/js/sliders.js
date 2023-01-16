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

    let reviewsSwiper = new Swiper(".reviews-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
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
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        grabCursor: true,
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

    let cafeSwiper = new Swiper(".cafe-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 1000,
        grabCursor: true,
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

    let exElemsSwiper = new Swiper(".ex-elems-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        speed: 1000,
        grabCursor: true,
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


    let selectorGallerySwiper = new Swiper(".selector-gallery-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
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


  
    let gallerySwiper1 = new Swiper('.gallery-swiper-1', {
        loop: true,
        speed: 7000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        slidesPerView: "auto",
        spaceBetween: 30,
        allowTouchMove: false
    });
    let gallerySwiper2 = new Swiper('.gallery-swiper-2', {
        loop: true,
        speed: 7000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
        },
        slidesPerView: "auto",
        spaceBetween: 30,
        allowTouchMove: false
    });
    





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



    let parkRulesSwiper = new Swiper(".park-rules-swiper", {
		slidesPerView: 1,
		grabCursor: true,
        direction: 'vertical',
        loop: true,
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


























})