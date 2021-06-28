$(document).ready(() => {
    $('#product-card-block, .products-items').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

    $('.open-pop-up').click(() => {
        $('#pop-up').css('display', 'flex');
    });

    $('#pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'pop-up-close') {
            $('#pop-up').hide();
        }
    });

    let errorMessage = $('.form-error');

    $('.send-email-pop-up').click(() => {
        let popUpName = $('#pop-up-name');
        let popUpPhone = $('#pop-up-phone');

        if (popUpName.val() && popUpPhone.val()) {
            $(errorMessage).hide();
            popUpName.css('margin-bottom', '20px').css('border-color', 'rgb(126, 123, 121)');
            popUpPhone.css('margin-bottom', '20px').css('border-color', 'rgb(126, 123, 121)');
            $('#pop-up-form').hide();
            $('#pop-up-title').hide();
            $('#pop-up-description').hide();
            $('.success-message').show();
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + popUpName.val() + '&phone=' + popUpPhone.val(),
            //     success: () => {
            //         $('#pop-up-form').hide();
            //         $('.success-message').show();
            //     },
            //     error: () => {
            //         alert('Ошибка запроса, неподалки с сервером.')
            //         $('#pop-up').hide();
            //     }
            // });
        } else {
            if (!popUpName.val()) {
                $(errorMessage[3]).show();
                popUpName.css('margin-bottom', '0').css('border-color', 'red');
            } else {
                $(errorMessage[3]).hide();
                popUpName.css('margin-bottom', '20px').css('border-color', 'rgb(126, 123, 121)');
            }
            if (!popUpPhone.val()) {
                $(errorMessage[4]).show();
                popUpPhone.css('margin-bottom', '0').css('border-color', 'red');
            } else {
                $(errorMessage[4]).hide();
                popUpPhone.css('margin-bottom', '20px').css('border-color', 'rgb(126, 123, 121)');
            }
        }
    });

    $('.send-email').click(() => {
        let inputName = $('#input-name');
        let inputPhone = $('#input-phone');
        let inputTime = $('#input-time');

        if (inputName.val() && inputPhone.val() && inputTime.val()) {
            errorMessage.hide();
            inputName.css('border-color', 'rgb(126, 123, 121)');
            inputPhone.css('border-color', 'rgb(126, 123, 121)');
            inputTime.css('border-color', 'rgb(126, 123, 121)');
            $('#form-title').hide();
            $($('form')[0]).hide();
            $('.send-email').hide();
            $($('.success-message')[0]).show().css('margin-top', '35px');
            // $.ajax({
            //     type: 'post',
            //     url: 'mail.php',
            //     data: 'name=' + inputName.val() + '&phone=' + inputPhone.val() + '&time=' + inputTime.val(),
            //     success: () => {
            //         $('#form-title').hide();
            //         $($('form')[0]).hide();
            //         $('.send-email').hide();
            //         $($('.success-message')[0]).show().css('margin-top', '35px');
            //     },
            //     error: () => {
            //         alert('Ошибка запроса, неподалки с сервером.')
            //     }
            // });
        } else {
            if (!inputName.val()) {
                inputName.css('border-color', 'red');
                $(errorMessage[0]).show().css('position', 'absolute');
            } else {
                $(errorMessage[0]).hide();
                inputName.css('border-color', 'rgb(126, 123, 121)');
            }
            if (!inputPhone.val()) {
                inputPhone.css('border-color', 'red');
                $(errorMessage[1]).show().css('position', 'absolute');
            } else {
                $(errorMessage[1]).hide();
                inputPhone.css('border-color', 'rgb(126, 123, 121)');
            }
            if (!inputTime.val()) {
                inputTime.css('border-color', 'red');
                $(errorMessage[2]).show().css('position', 'absolute');
            } else {
                $(errorMessage[2]).hide();
                inputTime.css('border-color', 'rgb(126, 123, 121)');
            }
        }
    });

    let menuBar = $('#header-menu');

    $('#menu-bar').click(() => {
        menuBar.css('display', 'flex');
        $('a.header-item').click(() => {
            menuBar.css('display', 'none');
        });
    });

    $('#menu-bar-close').click((e) => {
        if (e.target.id === 'menu-bar-close') {
            menuBar.css('display', 'none');
        }
    });


    new WOW().init();
});
