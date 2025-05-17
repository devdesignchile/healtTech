(function ($) {
  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  AOS.init({
    once: true
  });

  
  $(window).on('scroll', function () {
		//.Scroll to top show/hide
    var scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }
  });
	// scroll-to-top
  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function() {

    // navbarDropdown
    if ($(window).width() < 992) {
      $('.main-nav .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });
    }


    // -----------------------------
    //  Count Down JS
    // -----------------------------
    var syoTimer = $('#simple-timer');
    if (syoTimer) {
      $('#simple-timer').syotimer({
        year: 2023,
        month: 9,
        day: 1,
        hour: 0,
        minute: 0
      });
    }


    // -----------------------------
    //  Story Slider
    // -----------------------------
    $('.about-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Quote Slider
    // -----------------------------
    $('.quote-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });


  });

})(jQuery);

function cambiarContenido(texto) {
  document.getElementById('contenido').textContent = texto;
  document.getElementById('verMasBtn').classList.remove('d-none');
}

AOS.init({
  once: true // solo se animan una vez al cargar
});

function cambiarContenido(texto) {
  const contenido = document.getElementById("contenido");
  const verMasBtn = document.getElementById("verMasBtn");

  contenido.innerHTML = ""; // Limpiar contenido previo
  const palabras = texto.split(" "); // Dividir el texto en palabras

  palabras.forEach((palabra, i) => {
  const span = document.createElement("span");
  span.textContent = palabra; // No agregues un espacio aquí
  span.classList.add("word");
  span.style.animationDelay = `${i * 0.1}s`; // Reducción del tiempo de delay
  contenido.appendChild(span);

  // Añadir el espacio después de cada palabra, pero fuera del span
  if (i < palabras.length - 1) {
    contenido.appendChild(document.createTextNode(" "));
  }
  });

  verMasBtn.classList.remove("d-none");
}

// Llamar a la función con el texto que quieres mostrar
cambiarContenido("");