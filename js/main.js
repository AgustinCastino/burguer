// Owl Carousel
$(document).ready(function () {
    $('#contenedorResenias').owlCarousel({
        items:1,
        loop:true,
        responsive:{
            0:{
                center: true,
                items:1
            },
            992:{
                items:2
            }
        }
    });

    $('.producto').owlCarousel({
        center: true,
        items:2,
        loop:true,
        responsive:{
            0:{
                margin:30,
                items:2
            },
            992:{
                margin:0,
                items:3
            }
        }
    });

});



// Validación formulario con Bootstrap
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

// Cambio de color Nav al clickear
$("#buttonNavbar").click(function(){
    $("nav").toggleClass("fondoGris");
})