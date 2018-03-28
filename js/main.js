// Scrolling Effect

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('.navbar-dark').css('background', 'rgba(0, 0, 0, .5)');
    } else {
        $('.navbar-dark').css('background', 'rgba(0, 0, 0, 0)');
    }
})

function checkWidth(init) {
    /*If browser resized, check width again */
    if ($(window).width() < 786) {
        $('.card').addClass('mx-auto');
        $('#card-deck').removeClass('card-deck');
    } else if (!init) {
        $('#card-deck').addClass('card-deck');
        $('.card').removeClass('mx-auto');
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});