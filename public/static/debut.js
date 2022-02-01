 /* ==============================================
    Fade In .back-to-top
    =============================================== */
// window.$ = window.jQuery = require('jquery');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').css("display","block");
        } else {
            $('.back-to-top').css("display","none");
        }
    });
   

    