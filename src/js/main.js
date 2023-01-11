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
    



























    {
        let dev = document.createElement('developer');
        dev.innerHTML = "Frontend: Alexin Danila. Github: fibonachi09kz<br>Backend: Khasaev Radik";
        dev.style.display = "none";
        document.body.appendChild(dev) 
    }



























})