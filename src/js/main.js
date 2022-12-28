document.addEventListener('DOMContentLoaded', function() {
    

    // Большинство отдельных функций оборачиваем в модуль, чтобы иметь локальный namespace
    //
    // {
    //     Код...
    // }


    // Определяем константы
    const WINDOW_SIZE = window.innerWidth


    // Инициализация Fancybox v4
    Fancybox.bind("[data-fancybox]", {
    
    });



    // Плавающее меню в шапке
    {
        let elem = document.querySelector('#menu-layout');
        let menuPosition = elem.getBoundingClientRect().top;
        elem.classList.remove('fixed')
        window.addEventListener('scroll', function() {
            if (scrollY > 0 && scrollY < menuPosition) {
                elem.classList.remove('fixed')
            }
            if (scrollY > menuPosition - 20) {
                elem.classList.add('fixed')
            }
        });
    }

    
    // Раскрытие дополнительных преимуществ пакета в блоке тарифов на главной
    {
        let items = document.querySelectorAll('#tariffs .swiper .swiper-slide');
        if (items) {
            items.forEach(item => {
                let toggler = item.querySelector('a.expand');
                let list = item.querySelector('ul');
                if (toggler && list) {
                    list.style.height = '100px'
                    toggler.addEventListener('click', function(e) {
                        e.preventDefault()
                        item.classList.toggle('opened')
                        if (item.classList.contains('opened')) {
                            this.textContent = 'Скрыть';
                            list.style.height = 'auto';
                        } else {
                            this.textContent = 'Подробнее о пакете'
                            list.style.height = '100px'
                        }
                    })
                }
            })
        }
    }


    // {
    //     let container = document.querySelector('#main-page-video');
    //     let video = container.querySelector('#main-page-video video');
    //     let btn = container.querySelector('.play-btn');
    //     if (container && video && btn) {
    //         btn.addEventListener('click', function() {
    //             if (!this.classList.contains('paused')) {
    //                 video.pause()
    //                 this.classList.add('paused')
    //             } else {
    //                 video.play()
    //                 this.classList.remove('paused')
    //             }
    //         })
    //     }
        
    // }































})