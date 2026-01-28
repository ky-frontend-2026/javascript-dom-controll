    const gallerySwiper = new Swiper(".gallery", {
      pagination: {
        el: ".gallery .swiper-pagination",
      },
      navigation: {
        nextEl: ".gallery  .swiper-button-next",
        prevEl: ".gallery  .swiper-button-prev",
      },
      loop:true,
    //   autoplay:true
    });