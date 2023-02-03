document.addEventListener('DOMContentLoaded', function() {
    
    try {
        document.body.classList.add('loaded')
        setTimeout(function () {
            document.querySelector('#preloader').style.display = 'none';
            bodyOverflow('disable')
        }, 300);
    } catch (e) {
        console.log(e)
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
    try {
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
    } catch (e) {
        console.log(e)
    }


    // Раскрытие дополнительных преимуществ пакета в блоке тарифов на главной
    try {
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
    } catch (e) {
        console.log(e)
    }


    try {
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
    } catch (e) {
        console.log(e)
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
    try {
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
    } catch (e) {

    }


    try {
        document.querySelectorAll('nav>ul>li>div').forEach(function(elem) {
            elem.addEventListener('click', function() {
                this.classList.toggle('active')
                jqElemConvert(this.nextElementSibling).slideToggle()
            })
        })
    } catch (e) {
        console.log(e)
    }
    


    // Счётчик для количества чего-либо

    // Счётчик имеет минимальное и максимальное значение, устанавливаемое в атрибутах
    // Минимальное значение автоматически подставляется в скрытый инпут и в значение счётчика
    // Изменение счётчика также меняет значение скрытого инпута
    try {
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
    } catch (e) {
        console.log(e)
    }



    try {
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
    } catch (e) {
        console.log(e)
    }





    try {
        const modalInit = new HystModal({
            linkAttributeName: "data-modal",
            catchFocus: true
        });
    } catch (e) {
        console.log(e)
    }



    try {
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
    } catch (e) {
        console.log(e)
    }


    try {
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
    } catch (e) {
        console.log(e)
    }




    try {
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
        
    } catch (e) {
        console.log(e)
    }

    // Генератор уникальных значений
    function genUnique(type, length) {
        let valueLength = length;
        let chars = '';
        switch (type) {
            case 'password':
                chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
            case 'id':
                chars = "0123456789abcdefg";
            break;
        }
        let value = "";
        for (let i = 0; i < valueLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            value += chars.substring(randomNumber, randomNumber + 1);
        }
        return value
    }


    // Загрузка аватарки в профиле
    try {
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
    } catch (e) {
        console.log(e)
    }

    // Добавление детей в профиле
    try {
        let childrenParent = document.querySelector('.childrens-block');
        if (childrenParent) {
            let wrapper = childrenParent.querySelector('.wrapper'),
            form = childrenParent.querySelector('form'),
            addBtn = childrenParent.querySelector('.add-child');
            function renderChild() {
                let elem = document.createElement('div');
                elem.classList.add('item');
                let fioAttr = `fio-${genUnique('id', 5)}`;
                let dateAttr = `date-${genUnique('id', 5)}`;
                elem.innerHTML = 
                `
                    <div class="input__wrapper">
                        <label>ФИО ребенка</label>
                        <div class="input__box">
                            <input type="text" name="${fioAttr}" placeholder="Введите ваше имя" required>
                            <span class="input-icon"></span>
                        </div>
                    </div>
                    <div class="input__wrapper">
                        <label>День рождение ребенка</label>
                        <div class="input__box">
                            <input type="date" name="${dateAttr}" required>
                            <span class="input-icon"></span>
                        </div>
                    </div>
                    <div class="delete-child">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M3 6.5H5H21" stroke="#EC1E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19 6.5V20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5H7C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5V6.5M8 6.5V4.5C8 3.96957 8.21071 3.46086 8.58579 3.08579C8.96086 2.71071 9.46957 2.5 10 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V6.5" stroke="#EC1E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                `;
                return elem;
            }
            if (wrapper && form && addBtn) {
                document.addEventListener('click', function(e) {
                    let deleteBtn = e.target.closest('.delete-child');
                    if (!deleteBtn) return;
                    wrapper.removeChild(e.target.closest('.item'))
                })
                addBtn.addEventListener('click', function() {
                    wrapper.appendChild( renderChild() );
                    jqElemConvert(form).validate()
                });
            }
            
        }
    } catch (e) {
        console.log(e)
    }   



    try {
        let dev = document.createElement('developer');
        dev.innerHTML = "Frontend: Alexin Danila. Github: fibonachi09kz<br>Backend: Khasaev Radik";
        dev.style.display = "none";
        document.body.appendChild(dev) 
    } catch (e) {
        console.log(e)
    }


    



   















})