var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 20,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
     
      
    },
  });