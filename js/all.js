$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(".dropdown_open").slideToggle();
        $(".dropdown").addClass(active);
    });

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
});