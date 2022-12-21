document.addEventListener('DOMContentLoaded', function() {
    
    const windowSize = window.innerWidth

    Fancybox.bind("[data-fancybox]", {
    
    });



    // Fixed menu event control
    {
        let elem = document.querySelector('#menu-layout');
        let menuPosition = elem.getBoundingClientRect().top;
        window.addEventListener('scroll', function() {
            if (scrollY > 0 && scrollY < menuPosition) {
                elem.classList.remove('fixed')
            }
            if (scrollY > menuPosition - 20) {
                elem.classList.add('fixed')
            }
        });
    }




















})