$(document).ready(function(){

$('#dropdownHoverButton').on('click ',function(){
    $('#dropdownHover').toggleClass('hidden');
})
$('#dropdownHoverButton , #dropdownHover').on('mouseover ',function(){
    $('#dropdownHover').removeClass('hidden');
})
$('#dropdownHover').on('mouseout ',function(){
    $(this).addClass('hidden');
})

if($('.owl-carousel.owl-carousel-cnt').length){
    $('.owl-carousel.owl-carousel-cnt').owlCarousel({
        loop:true,
        margin:68,
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
}

$('.owl-carousel.owl-cnt-body').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$("#burger").click(function(){
    $('#main-menu').toggleClass("active");
})

// $('.owl-carousel.learning-silder').owlCarousel({
//     loop:true,
//     margin:45,
//     nav: true,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:4
//         }
//     }
// });
});
