$(document).ready(function() {

    const API_URL = "https://api.quotable.io/quotes/random?minLength=100&maxLength=200";

    const apiCall = () => {
        return $.get( API_URL, function( data ) {
            $(".box__text").html(data[0].content);
            $(".box__author").html(data[0].author);
         });
    }

    apiCall();
    $(".box__button").click(apiCall);

    // const animatedSteam = () => {
    //     $('.stopOne')
    //     .animate({
    //         stopColor: 'pink'
    //     }, 3000)
    //     .animate({
    //         stopColor: 'red'
    //     }, 3000, animatedSteam)
    // }

    // animatedSteam();


});