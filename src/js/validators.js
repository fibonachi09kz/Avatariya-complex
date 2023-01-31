$(document).ready(function() {









    // ПЕРЕПИСАТЬ НА НАТИВНЫЙ JS и перенести в main
    const fieldList = [
        'input[type="text"]',
        'input[type="password"]',
        'input[type="file"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="tel"]',
        'input[type="url"]',
        'input[type="date"]',
        'input[type="checkbox"]',
        'input[type="radio"]',
        'textarea',
        'select'
    ]
    function fieldControl(element) {
        let wrapper = element.closest('.input__wrapper');
        if (wrapper) {
            element.attr('autofocus') ? wrapper.addClass('is-focused') : wrapper.removeClass('is-focused');
            element.attr('required') ? wrapper.addClass('is-required') : wrapper.removeClass('is-required');
            element.attr('disabled') ? wrapper.addClass('is-disabled') : wrapper.removeClass('is-disabled');
        }
    }
    function fieldController(selectorsArray) {
        selectorsArray.forEach(e => {
            $(`form ${e}`).each(function() {
                fieldControl($(this));
                $(this).on('focus', function() {
                    let parent = $(this).closest('.input__wrapper');
                    parent.addClass('is-focused');
                });
                $(this).on('focusout', function() {
                    let parent = $(this).closest('.input__wrapper');
                    parent.removeClass('is-focused');
                });
            });
        })
    }
    fieldController(fieldList)




    

    jQuery.extend(jQuery.validator.messages, {
        required: "Обязательное поле",
        remote: "Please fix this field.",
        email: "Введите корректный E-Mail",
        url: "Введите корректный URL",
        date: "Введите корректную дату",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Пожалуйста, введите значение меньше чем {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}."),
    });


    $.validator.addMethod(
        "phoneRegex",
        function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        }, 'Введите корректный номер телефона'
    );

    $(".validate").each(function(e) {
        $(this).validate({
            errorElement: "span",
            errorPlacement: function(error, element) {     
                var item = element.closest('.input__wrapper');
                if ( item.hasClass('line') ) {
                    item.find(element).after(error);
                } else {
                    item.append(error);
                }
            },
            highlight: function(element, errorClass) {
                $(element).closest('.input__wrapper').removeClass('valid');
                $(element).closest('.input__wrapper').addClass('invalid');
            },
            unhighlight: function(element, errorClass) {
                if($(element).attr('required')) {
                    $(element).closest('.input__wrapper').removeClass('invalid');
                    $(element).closest('.input__wrapper').addClass('valid');
                }
            }
        });
    });

    function formSubmitScroll() {
        let alert = $('.alert');
        $('html, body').animate({
            scrollTop: alert.offset().top
        }, 700);
    }

    function fieldManualRevalidate(fieldName) {
        $(`[name="${fieldName}"]`).val('');
        $(`[name="${fieldName}"]`).valid()
    }

    $('[type="tel"]').inputmask({
        "mask": "+7 (999) 999-99-99",
        "clearMaskOnLostFocus": false
    });

    $('[type="tel"]').each(function() {
        $(this).rules('add', {
            phoneRegex: '^[+][0-9] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$'
        });
    });

})