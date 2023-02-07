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
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: 'filled',
            bulletClass: 'star-big',
            renderBullet: function (index, className) {
                return '<button type="button" class="' + className + '"></button>';
            }
        },
        breakpoints: {
            550: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
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

    let outParksSwiper = new Swiper(".our-parks-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
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

    let teamMiddleSwiper = new Swiper(".team-middle-swiper", {
        grabCursor: true,
        loop: true,
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
        spaceBetween: 20,
        allowTouchMove: false,
        breakpoints: {
            991: {
                spaceBetween: 30,
            }
        }
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
        spaceBetween: 20,
        allowTouchMove: false,
        breakpoints: {
            991: {
                spaceBetween: 30,
            }
        }
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
    if (window.innerWidth < 991) {
        amusementsSwiper2.destroy()
    }
    let amusementsSwiper = new Swiper(".amusements-swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 1500,
        },
        grabCursor: true,
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
        direction: 'horizontal',
        breakpoints: {
            991: {
                direction: 'vertical',
                allowTouchMove: false,
                grabCursor: false,
                slidesPerView: 2,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
    if (window.innerWidth > 991) {
        amusementsSwiper2.controller.control = this.amusementsSwiper;
    }
    



    function swiperOverUpdate() {
        this.params.navigation.nextEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-next');
        this.params.navigation.prevEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-prev');
        this.navigation.update()
    }
    function swiperOverInit() {
        this.params.navigation.nextEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-next');
        this.params.navigation.prevEl = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-button-prev');
        this.navigation.init()
        this.navigation.update()
    }


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
		slidesPerView: 1,
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
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            550: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        },
		observeParents: true,
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
			}
		},
	});


    let animatorsSwiper = new Swiper(".animators-swiper", {
		slidesPerView: 4,
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
        },
		observeParents: true,
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			}
		},
	});

    let videoTypesSwiper = new Swiper(".video-types-swiper", {
		slidesPerView: 1,
        spaceBetween: 40,
		grabCursor: true,
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
			}
		},
	});

    let videoReviewsSwiper = new Swiper(".video-reviews-swiper", {
		slidesPerView: 1,
        spaceBetween: 40,
		grabCursor: true,
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
			}
		},
	});

    let interestingBlockSwiper = new Swiper(".interesting-block-swiper", {
		slidesPerView: 2,
        spaceBetween: 30,
		grabCursor: true,
        loop: true,
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
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
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
			}
		},
	});





    let historySwiper = new Swiper(".history-swiper", {
		slidesPerView: 'auto',
		spaceBetween: 80,
		grabCursor: true,
        loop: true,
		observeParents: true,
        effect: 'coverflow',
		on: {
			init: function (swiper) {
				let bindedInit = swiperOverInit.bind(swiper)
                bindedInit()
                this.params.pagination.el = this.el.closest('.swiper-control-wrapper').querySelector('.swiper-pagination');
                this.params.pagination.bulletActiveClass = 'active';
                this.params.pagination.bulletClass = 'year';
                this.params.pagination.clickable = true;
                this.params.pagination.renderBullet = function (index, className) {
                    let currentYear = this.slides[index].getAttribute('year')
                    return '<button class="' + className + '"><p>' + currentYear + '</p><span class="star-big"></span></button>';
                }
                this.pagination.init()
			},
			update: function (swiper) {
                let bindedUpdate = swiperOverUpdate.bind(swiper)
				bindedUpdate()
			}
		},
	});




















})