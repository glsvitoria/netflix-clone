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

const destaque = document.querySelector('div.destaque')
const navHeight = destaque.offsetHeight

const header = document.querySelector('#header .container')

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
  })