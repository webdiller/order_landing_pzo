$(document).ready(function () {
    $('#carousel1').owlCarousel({
        pagination : true,
        loop      : true,
        dots      : true,
        nav       : true,
        navText   : ["<i class=\"fal fa-arrow-circle-left\"></i>","<i class=\"fal fa-arrow-circle-right\"></i>"],
        responsive: {
            0:{
                items:1
            }
        }
    });

    $('#carousel2').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText   : ["<i class=\"fal fa-arrow-circle-left\"></i>","<i class=\"fal fa-arrow-circle-right\"></i>"],
        responsive:{
            0:{
                items:1,
            },
            480: {
                items: 2
            },
            768:{
                items:2,
                margin: 20
            },
            1024:{
                items:3,
            }
        }
    });
});