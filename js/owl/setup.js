$('.owl-carousel').owlCarousel({
   loop:true, /* Ficar em loop */
   margin:4, /* Margin entre as imagens */
   nav:true,  /* Ter o botão de navegação */
   responsive:{
       0:{
           items:1
       },
       600:{
           items:3
       },
       1000:{
           items:5
       }
   }
})