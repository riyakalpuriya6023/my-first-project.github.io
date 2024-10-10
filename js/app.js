$(document).ready(function(){
    //HERO SLIDDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,//to remove dots from bottom near sliding arrow//
        smartSpeed:1000,
        navText: ['PREV','NEXT'],
        responsive:{
            0:{
              nav:false,  
            },
            600:{
                
            },
            768:{
                nav:true, 
            }
        }
    });

    //PROJECT SLIDDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,//to remove dots from bottom near sliding arrow//
        smartSpeed:1000,
        margin:24,
        responsive:{
            0:{
              items:1,
              nav:false,
              margin:0,
            },
            768:{
              items:2,
            },
            1140:{
                items:2,
                center:true,
            }
        }
    });

    



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed:800,
  })
});


