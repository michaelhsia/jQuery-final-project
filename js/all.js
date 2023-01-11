$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(".dropdown_open").slideToggle();
        $(".dropdown").addClass(active);
    });
});