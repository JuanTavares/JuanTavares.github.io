// Scrolling Effect

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('.navbar-dark').css('background', 'rgba(0, 0, 0, .5)');
    } else {
        $('.navbar-dark').css('background', 'rgba(0, 0, 0, 0)');
    }
})