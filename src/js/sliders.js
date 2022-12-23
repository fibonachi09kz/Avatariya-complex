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



























})