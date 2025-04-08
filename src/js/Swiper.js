 // Inicializar Swiper
 const swiper = new Swiper('.swiper', {
    // Parámetros
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // Si necesitamos paginación
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Botones de navegación
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });