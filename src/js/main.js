document.addEventListener('DOMContentLoaded', function() {
    
    {
        document.body.classList.add('loaded')
        setTimeout(function () {
            document.querySelector('#preloader').style.display = 'none';
            bodyOverflow('disable')
        }, 300);
    }


    //Functions
    function bodyOverflow(status) {
        switch (status) {
            case 'enable':
                document.body.classList.add('over')
            break;
            case 'disable':
                document.body.classList.remove('over')
            break;
        }
    }
    function jqElemConvert(elem) {
        return $(elem);
    }

    //Constants
    const WINDOW_SIZE = window.innerWidth


    

    //Another init
    Fancybox.bind("[data-fancybox]", {
        
    });



    // Плавающее меню в шапке
    {
        let elem = document.querySelector('#menu-layout');
        if (elem) {
            
            let currentPosition = window.pageYOffset;
            if (currentPosition > 121) {
                elem.classList.add('fixed')
            }
            window.addEventListener('scroll', function() {
                if (scrollY < 121) {
                    elem.classList.remove('fixed')
                } else {
                    elem.classList.add('fixed')
                }
            });
        }
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


    {
        let tabsAreaList = document.querySelectorAll('.tabs-area');
        if (tabsAreaList.length) {
            tabsAreaList.forEach(function(area) {
                let switchers = area.querySelectorAll('.tab');
                let sections = area.querySelectorAll('.section');
                if (switchers) {
                    let defaultTarget = area.querySelector('.tab.active').getAttribute('data-section');
                    sections.forEach(function(section) {
                        section.style.display = 'none';
                        if (section.getAttribute('data-section') == defaultTarget) {
                            section.style.display = 'block';
                        }
                    });
                    switchers.forEach(function(switcher) {
                        switcher.addEventListener('click', function() {
                            if (!this.classList.contains('active') && this.querySelectorAll('a').length == 0) {
                            switchers.forEach(function(switcher) {
                                switcher.classList.remove('active');
                            });
                            let targetSection = this.getAttribute('data-section');
                            sections.forEach(function(section) {
                                section.style.display = 'none';
                                if (section.getAttribute('data-section') == targetSection) {
                                section.style.display = 'block';
                                }
                            });
                            this.classList.add('active');
                            }
                        });
                    });
                }
            });
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



    function flyMenuAnimate(action) {
        let flyMenu = document.querySelector('.fly-menu');
        switch (action) {
            case 'open':
                flyMenu.style.display = 'block';
                setTimeout(() => {
                    flyMenu.classList.add('active')
                }, 100)
            break;
            case 'close':
                flyMenu.classList.remove('active')
                setTimeout(() => {
                    flyMenu.style.display = 'none';
                }, 300)
            break;
        }
    }
    {
        let flyMenu = document.querySelector('.fly-menu');
        trigger = document.querySelector('#menu-layout button.burger');
        if (flyMenu && trigger) {
            let layer = flyMenu.querySelector('.layer'),
            closeTrigger = flyMenu.querySelector('.close');
            trigger.addEventListener('click', function() {
                if (flyMenu.classList.contains('active')) {
                    flyMenuAnimate('close')
                    bodyOverflow('disable')
                } else {
                    flyMenuAnimate('open')
                    bodyOverflow('enable')
                }
            })
            closeTrigger.addEventListener('click', function() {
                flyMenuAnimate('close')
                bodyOverflow('disable')
            })
            layer.addEventListener('click', function() {
                flyMenuAnimate('close')
                bodyOverflow('disable')
            })
            document.addEventListener('keydown', function(event) {
                if (event.code == 'Escape') {
                    flyMenuAnimate('close')
                    bodyOverflow('disable')
                }
            });
        }
    }


    {
        document.querySelectorAll('nav>ul>li>div').forEach(function(elem) {
            elem.addEventListener('click', function() {
                this.classList.toggle('active')
                jqElemConvert(this.nextElementSibling).slideToggle()
            })
        })
    }
    


    // Счётчик для количества чего-либо

    // Счётчик имеет минимальное и максимальное значение, устанавливаемое в атрибутах
    // Минимальное значение автоматически подставляется в скрытый инпут и в значение счётчика
    // Изменение счётчика также меняет значение скрытого инпута
    {
        let counters = document.querySelectorAll('.counter-box');
        if (counters.length) {
            counters.forEach(function(e) {
                let num = e.querySelector('.num'),
                    minus = e.querySelector('.minus'),
                    plus = e.querySelector('.plus'),
                    min =+ e.getAttribute('data-min') || 1,
                    max =+ e.getAttribute('data-max') || 1000,
                    input = e.querySelector('input[type="hidden"]');
                if (num && minus && plus && input) {
                    num.textContent = min
                    input.value = min
                    let count =+ num.textContent;
                    minus.addEventListener('click', function() {
                        if (count > min) {
                            count--
                            num.textContent = count
                            input.value = count
                        }
                    })
                    plus.addEventListener('click', function() {
                        if (count < max) {
                            count++
                            num.textContent = count
                            input.value = count
                        }
                    })
                }
            })
        }
    }



    {
        let selectorGallery = document.querySelector('#selector-gallery');
        if (selectorGallery) {
            let targetBlock = selectorGallery.querySelector('.photo-block'),
                selectors = selectorGallery.querySelectorAll('.selector-gallery-swiper .swiper-slide');
            if (targetBlock && selectors) {
                selectors.forEach(function(selector) {
                    selector.addEventListener('click', function(e) {
                        selectors.forEach(e => e.classList.remove('active'))
                        this.classList.add('active')
                    })
                })
            }
        }
    }





    {
        const modalInit = new HystModal({
            linkAttributeName: "data-modal",
            catchFocus: true
        });
    }



    {
        let parent = document.querySelectorAll('.tabs__section');
        parent.forEach(function(parentElement) {
        let switchers = parentElement.querySelectorAll('.tab');
        let sections = parentElement.querySelectorAll('.section');
        if (switchers) {
            let defaultTarget = parentElement.querySelector('.tab.active').getAttribute('data-section');
            sections.forEach(function(section) {
                section.style.display = 'none';
                if (section.getAttribute('data-section') == defaultTarget) {
                    section.style.display = 'block';
                }
            });
            switchers.forEach(function(switcher) {
                switcher.addEventListener('click', function() {
                        if (!this.classList.contains('active') && this.querySelectorAll('a').length == 0) {
                        switchers.forEach(function(switcher) {
                            switcher.classList.remove('active');
                        });
                        let targetSection = this.getAttribute('data-section');
                        sections.forEach(function(section) {
                            section.style.display = 'none';
                            if (section.getAttribute('data-section') == targetSection) {
                            section.style.display = 'block';
                            }
                        });
                        this.classList.add('active');
                    }
                });
            });
        }
        });
    }


    {
        let expand = document.querySelectorAll('[data-expand]');
        function expandAction(element, action) {
            switch (action) {
                case 'open':
                    element.style.display = 'block';
                    element.classList.add('opened');
                break;
                case 'close':
                    element.style.display = 'none';
                    element.classList.remove('opened');
                break;
            }
        }
        if (expand.length) {
            expand.forEach(e => {
                let label = e.querySelector('[data-expand-button]');
                let content = e.querySelector('[data-expand-content]');
                if (label && content) {
                    if (label.classList.contains('active')) {
                        expandAction(content, 'open')
                    } else {
                        expandAction(content, 'close')
                    }
                    label.addEventListener('click', function() {
                        this.classList.toggle('active');
                        if (this.classList.contains('active')) {
                            expandAction(content, 'open')
                        } else {
                            expandAction(content, 'close')
                        }
                    })
                }
            })
        }
    }

















    {
        let mapMain = document.querySelector('#map');
        if (mapMain) {
            ymaps.ready(initMap);
            function initMap() {
                let map = new ymaps.Map("map", { center: [43.33679021, 76.94609981], zoom: 16 }, { searchControlProvider: "yandex#search" });
                let placeMark = new ymaps.Placemark(
                    [43.33679021, 76.94609981],
                    {
                        hintContent: "AVATARIA",
                        balloonContent:
                                '<div class="y-content"><img src="src/media/map/logo.svg"><p class="questions__map-text"><span>Парк «Волшебный лес»</span> пр. Сейфуллина 9а, уг. ул. Шолохова, ТРЦ Жибек-жолы 3 этаж</p><a href="">Как проехать?</a></div>',
                    },
                    {
                        iconLayout: "default#image",
                    }
                );
                map.geoObjects.add(placeMark);
                if ( window.innerWidth < 768 ) {
                    map.setCenter([62.144297, 65.442870]);
                }
            }
        }
        
    }



    // Загрузка аватарки в профиле
    {
        let avatarUpload = document.querySelector('#avatar-upload');
        if (avatarUpload) {
            let parent = avatarUpload.closest('.avatar-block');
            let img = parent.querySelector('.img img');
            if (parent && img) {
                let fileNameField = parent.querySelector('.file-name');
                if (fileNameField) {
                    avatarUpload.addEventListener('change', function(e) {
                        fileNameField.textContent = e.target.files[0].name
                        let imgLink = URL.createObjectURL(e.target.files[0])
                        img.src = imgLink
                    })
                }
            }
        }
    }




    {
        let dev = document.createElement('developer');
        dev.innerHTML = "Frontend: Alexin Danila. Github: fibonachi09kz<br>Backend: Khasaev Radik";
        dev.style.display = "none";
        document.body.appendChild(dev) 
    }



























})