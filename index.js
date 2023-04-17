$(document).ready(function () {

    $('#expandIcon01').click(function () {

        $('#slider-2').slideToggle();
        $('#slider-1').toggleClass("backgroundChange")
        $('#slider-2').toggleClass("backgroundChange")
        $(this).toggleClass("fas fa-plus fas fa-minus")

    });

    $('#expandIcon02').click(function () {

        $('#slider-4').slideToggle();
        $('#slider-3').toggleClass("backgroundChange")
        $('#slider-4').toggleClass("backgroundChange")
        $(this).toggleClass("fas fa-plus fas fa-minus")

    });

    $('#expandIcon03').click(function () {

        $('#slider-6').slideToggle();
        $('#slider-5').toggleClass("backgroundChange")
        $('#slider-6').toggleClass("backgroundChange")
        $(this).toggleClass("fas fa-plus fas fa-minus")

    });

    $('#expandIcon04').click(function () {

        $('#slider-8').slideToggle();
        $('#slider-7').toggleClass("backgroundChange")
        $('#slider-8').toggleClass("backgroundChange")
        $(this).toggleClass("fas fa-plus fas fa-minus")

    });


    $("#section04 .sec4Review").each(function (i) {

        $(this).attr('id', "child" + (i + 1));

    });

    let First = 2;
    let Second = 1;

    $('#child' + First + ', #child' + Second).addClass('current');

    $('#rightArrow').click(function () {

        if (Second != 3) {
            $("#section04 .sec4Review").removeClass('current');
            First++;
            Second++;
            $('#child' + First + ', #child' + Second).addClass('current');
        }
    });

    $('#leftArrow').click(function () {

        if (Second != 1) {
            $("#section04 .sec4Review").removeClass('current');
            First--;
            Second--;
            $('#child' + First + ', #child' + Second).addClass('current');
        }
    });

    $('#clickToDisp').click(function () {

        $('#sec06Parent2').show()
        $('#section06-Parent2').show()
        $('#sec06Parent003').hide()
        $('#section06-Parent003').hide()
        $('#sec06Parent4').hide()
        $('#section06-Parent4').hide()
        $(this).addClass("section06-header2")
        $('#clickToDisp2').removeClass('section06-header2')
        $('#clickToDisp3').removeClass('section06-header2')
        $('#colorChange').addClass("fontColor")
        $('#colorChange1').removeClass("fontColor")
        $('#colorChange2').removeClass("fontColor")

    });

    $('#clickToDisp2').click(function () {

        $('#sec06Parent2').hide()
        $('#section06-Parent2').hide()
        $('#sec06Parent003').css("display", "inherit")
        $('#section06-Parent003').show()
        $('#sec06Parent4').hide()
        $('#section06-Parent4').hide()
        $(this).addClass("section06-header2")
        $('#clickToDisp').removeClass('section06-header2')
        $('#clickToDisp3').removeClass('section06-header2')
        $('#colorChange1').addClass("fontColor")
        $('#colorChange').removeClass("fontColor")
        $('#colorChange2').removeClass("fontColor")

    });

    $('#clickToDisp3').click(function () {

        $('#sec06Parent2').hide()
        $('#section06-Parent2').hide()
        $('#sec06Parent003').css("display", "none")
        $('#section06-Parent003').hide()
        $('#sec06Parent003').css("display", "inherit")
        $('#section06-Parent4').show()
        $(this).addClass("section06-header2")
        $('#clickToDisp').removeClass('section06-header2')
        $('#clickToDisp2').removeClass('section06-header2')
        $('#colorChange2').addClass("fontColor")
        $('#colorChange').removeClass("fontColor")
        $('#colorChange1').removeClass("fontColor")

    });

});