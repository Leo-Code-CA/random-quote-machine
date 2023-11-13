$(document).ready(function() {

    const API_URL = "https://api.quotable.io/quotes/random?minLength=100&maxLength=200";

    $('.box__button--next').click(function() {
        $('.box__sheet--current').addClass('flip');
        setTimeout(changeClass, 1000);
    });

    const changeClass = () => {
        $('.box__sheet').toggleClass('box__sheet--current');
        $('.box__sheet').toggleClass('box__sheet--next');
        $('.box__sheet--next').removeClass('flip');
        contentUpdate();
    }

    const contentUpdate = () => {
        $.get( API_URL, function( data ) {
        $(".box__sheet--next .box__text").html(data[0].content);
        $(".box__sheet--next .box__author").html(data[0].author);
        });
    }

});

    