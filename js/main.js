$(document).ready(function() {

    const API_URL = "https://api.quotable.io/quotes/random?minLength=100&maxLength=200";

    $(".box__button").click(function(){
        $.get( API_URL, function( data ) {
            $(".box__text").html(data[0].content);
            $(".box__author").html(data[0].author);
         });
    })


});