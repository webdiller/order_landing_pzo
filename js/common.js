$(document).ready(function () {
    $('#carousel1').owlCarousel({
        mouseDrag: false,
        touchDrag: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        smartSpeed: 450,
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
        dots: true,
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

    var owl = $('#carousel2');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        
        if($('#carousel2 > div.owl-stage-outer > div > div:nth-child(7)').hasClass('active')){
            console.log('active');
        }

    });
    $('#showMore').on('click', function (e) { 
        e.preventDefault();
        $('.text_checkbox.hidden:hidden').slice(0,10).slideDown(200);
    });

});