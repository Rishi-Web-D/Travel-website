
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });
  var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
  });
// var swiper = new Swiper(".product-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//   });

  // search bar code start //
const searchform = document.querySelector(".search-form");
function opensearch(){
searchform.style.transform = `translateY(0%)`;
}
function closesearch(){
searchform.style.transform = `translateY(110%)`;
}
// search bar code end 45.5//
