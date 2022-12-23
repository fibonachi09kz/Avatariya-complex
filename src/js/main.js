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
            items.forEach(e => {
                let features = e.querySelectorAll('.features li')
                let expandLink = e.querySelector('a.expand');
                if (features.length > 3) {
                    expandLink.style.display = 'block';
                    features.forEach((line, index) => {
                        if (index > 2) {
                            line.style.display = 'none'
                        }
                    })
                } else {
                    expandLink.style.display = 'none';
                }
                expandLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.target.classList.toggle('open')
                    if (e.target.classList.contains('open')) {
                        features.forEach((line, index) => {
                            line.style.display = 'block'
                        })
                        e.target.textContent = 'Скрыть'
                    } else {
                        features.forEach((line, index) => {
                            if (index > 2) {
                                line.style.display = 'none'
                            }
                        })
                        e.target.textContent = 'Подробнее о пакете'
                    }
                })

            })
        }
    }

































})