 /* ==============================================
    Fade In .back-to-top
    =============================================== */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').css("display","block");
        } else {
            $('.back-to-top').css("display","none");
        }
    });
   

    