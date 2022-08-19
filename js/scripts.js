const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  $('.section-img360 .thumb').on('click', function(){
    $('.modal').modal();

  });