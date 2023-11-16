$(document).ready(function() {

    // API URL to fetch the quotes 
    const API_URL = "https://api.quotable.io/quotes/random?minLength=100&maxLength=150";

    // Fetch API to get the data needed to fill the text and author elements
    const contentUpdate = () => {
        $.get( API_URL, function( data ) {
            // If it's the first page (no content yet), fill the it (current page)
            if ($('.box__text').html() === "") {
                $(".box__sheet--current .box__text").html(data[0].content);
                $(".box__sheet--current .box__author").html(data[0].author);
            // If it's not the first page (content on the current page), fill the next page
            } else {
                $(".box__sheet--next .box__text").html(data[0].content);
                $(".box__sheet--next .box__author").html(data[0].author);
            }
        });
    }

    // Fill the first page of the notebook
    contentUpdate();
    // Fill the second page of the notebook
    contentUpdate();

    // Click handler - triggers page flip and generation of the next pages (quotes)
    $('.box__button--next').click(function() {
        // Flips the page 
        $('.box__sheet--current').addClass('flip');
        // Then, call the function which handles class changes 
        setTimeout(changeClass, 1000);
    });

    // Update IDs depending on the elements' sheet state (current or next)
    const changeID = (myclass, myID) => {
        $(myclass).map(function() {
            $(this).attr('id', (this.id == myID ? 'next-' + myID : myID));
        })
    }

    // Update classes when the sheet flips to get ready the next one 
    const changeClass = () => {
        // Switch classes between the current and the next sheet
        $('.box__sheet').toggleClass('box__sheet--current');
        $('.box__sheet').toggleClass('box__sheet--next');
        // Reposition the sheet to its initial place (no rotation)
        $('.box__sheet--next').removeClass('flip');
        // Call the function with the different arguments to update the IDs
        changeID('.box__sheet', 'quote-box');
        changeID('.box__text', 'text');
        changeID('.box__author', 'author');
        changeID('.box__button--tweet', 'tweet-quote');
        changeID('.box__button--next', 'new-quote');
        // Call the API to update text and author
        contentUpdate();
    }

});

// add the tweet id to the change 