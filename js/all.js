$(document).ready(function () {
    // Menu dropdown
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(".dropdown_open").slideToggle();
        $(".dropdown").addClass("active");
    });


    // Swiper banner
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Autoplay
        autoplay: {
            delay: 3000,
        }
    });


    // Lightbox course details
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'showImageNumberLabel': false
    });
});