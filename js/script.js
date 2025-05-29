document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      const isOpen = accordion.classList.contains("active");

      // Barcha accordionlarni yopamiz
      accordions.forEach((acc) => {
        acc.classList.remove("active");
        acc.querySelector(".accordion-content").style.maxHeight = null;
      });

      // Agar hozirgi yopiq bo'lsa, ochamiz
      if (!isOpen) {
        accordion.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  const footerTopBox = document.querySelectorAll('.footer-top__box');
  footerTopBox.forEach(item => {
    const footerList = item.querySelector(".footer-list");
    const footerAccordionHeader = item.querySelector(".footer-accordion__header");

    footerAccordionHeader.addEventListener("click", () => {
      footerList.classList.toggle("show");
      footerAccordionHeader.classList.toggle('active')
    })
  })

  const catalogAccordion = document.querySelectorAll(".catalog-filter__box");
  console.log(catalogAccordion);

  catalogAccordion.forEach(item => {


    const accordionHeader = item.querySelector(".catalog-filter__box-header");
    if (accordionHeader) {
      accordionHeader.addEventListener("click", () => {
        item.classList.toggle("show")
      })
    }

  })

  const listViewBtn = document.querySelector(".list-view__btn");
  if (listViewBtn) {
    const gridViewBtn = document.querySelector(".grid-view__btn");
    const catalogProducts = document.querySelector(".catalog-products");
    listViewBtn.addEventListener("click", () => {
      catalogProducts.classList.add("list-view")
      gridViewBtn.classList.remove("active")
      listViewBtn.classList.add("active")
    })
    gridViewBtn.addEventListener("click", () => {
      catalogProducts.classList.remove("list-view");
      gridViewBtn.classList.add("active")
      listViewBtn.classList.remove("active")
    })
  }

  const openFilterBtn = document.querySelector(".open-filter__btn");
  if (openFilterBtn) {
    const filter = document.querySelector(".catalog-filter__container");
    const closeFilterBtn = document.querySelectorAll(".close-filter");

    openFilterBtn.addEventListener("click", () => {
      filter.classList.add("show");
      document.body.style.overflow = 'hidden';
    })
    closeFilterBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        filter.classList.remove("show");
        document.body.style.overflow = '';
      })
    })
  }

  const slides = document.querySelectorAll(".reviews-swiper .swiper-slide");

  slides.forEach((slide) => {
    const comment = slide.querySelector(".user-comment");
    const button = slide.querySelector(".show-more--text");

    const lineHeight = parseFloat(getComputedStyle(comment).lineHeight); // 1 qator balandligi
    const maxLines = 11;
    const maxHeight = lineHeight * maxLines;

    if (comment.scrollHeight > maxHeight) {
      button.classList.add("show"); // faqat 11 qatordan ko'p bo'lsa ko'rsat
      button.addEventListener("click", () => {
        comment.classList.toggle("expanded");
        button.textContent = comment.classList.contains("expanded") ? "Скрыть" : "Показать полностью";
      });
    } else {
      button.style.display = "none"; // tugmani yashirish
    }
  });
});

const introSwiper = new Swiper('.intro-swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: `.intro-next-btn`,
    prevEl: `.intro-prev-btn`
  },
  pagination: {
    el: `.intro-swiper-pagination`,
    clickable: true
  }
})

// product-swiper
const productSwiper = new Swiper('.product-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: `.product-next-btn`,
    prevEl: `.product-prev-btn`
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 23,
    },
    0: {
      slidesPerView: 2,
    },
  }
})


// selected-brands__swiper
const selectedBrandsSwiper = new Swiper('.selected-brands__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 6,
  spaceBetween: 16,
  grid: {
    rows: 2,
    fill: 'row',
  },
  navigation: {
    nextEl: `.brands-next-btn`,
    prevEl: `.brands-prev-btn`
  },
  pagination: {
    el: `.selected-brands-swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 5,
    },
    0: {
      slidesPerView: 4,
      grid: {
        rows: 3,
        fill: 'row',
      },
    },
  }
})
// selected-brands__swiper

// special-prices-swiper
const specialPricesSwiper = new Swiper('.special-prices-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: `.special-prices-swiper-next-btn`,
    prevEl: `.special-prices-swiper-prev-btn`
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 21,
    },
  }
})
const specialPricesSwiper2 = new Swiper('.special-prices-swiper2', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: `.special-prices-swiper2-next-btn`,
    prevEl: `.special-prices-swiper2-prev-btn`
  },
  pagination: {
    el: `.swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 21,
    },
  }
})
//

const interestingProductsSwiper = new Swiper('.interesting-products__swiper', {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: `.interesting-products__btn-next`,
    prevEl: `.interesting-products__btn-prev`
  },
  pagination: {
    el: `.interesting-products-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
})
const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: `.reviews-swiper-pagination`,
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
})


//サムネイル
var sliderThumbnail = new Swiper('.product-slider-slider-thumbnail', {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

//スライダー
var slider = new Swiper('.product-slider', {
  thumbs: {
    swiper: sliderThumbnail
  }
});

// document.addEventListener('DOMContentLoaded', function () {
//   const input = document.querySelector('.header-search__input');
//   const popularDropdown = document.querySelector('.header-search__dropdown');
//   const filledSearchDropdown = document.querySelector('.header-search__dropdown-filed-search');
//   const filledCategoryDropdown = document.querySelector('.header-search__dropdown-filed-category');
//   const popularItems = popularDropdown.querySelectorAll('li');

//   // Inputga focus bo'lsa, popular dropdownni ko'rsatamiz
//   input.addEventListener('focus', function () {
//     popularDropdown.classList.add('show');
//   });

//   // Popular dropdowndagi item bosilganda
//   popularItems.forEach(item => {
//     item.addEventListener('click', function () {
//       const value = item.querySelector('span').innerText;
//       input.value = value;

//       // Popularni yopamiz
//       popularDropdown.classList.remove('show');

//       // Filled dropdownlarni ko'rsatamiz
//       filledSearchDropdown.classList.add('show');
//       filledCategoryDropdown.classList.add('show');
//     });
//   });

//   // Hujjat bo'ylab clickni tinglaymiz
//   document.addEventListener('click', function (event) {
//     const isClickInsideInput = input.contains(event.target);
//     const isClickInsideDropdown = popularDropdown.contains(event.target) ||
//       filledSearchDropdown.contains(event.target) ||
//       filledCategoryDropdown.contains(event.target);

//     // Agar input yoki dropdown ichida bosilmagan bo'lsa, hammasini yopamiz
//     if (!isClickInsideInput && !isClickInsideDropdown) {
//       popularDropdown.classList.remove('show');
//       filledSearchDropdown.classList.remove('show');
//       filledCategoryDropdown.classList.remove('show');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('.header-search__input');
  const popularDropdown = document.querySelector('.header-search__dropdown');
  const filledSearchDropdown = document.querySelector('.header-search__dropdown-filed-search');
  const filledCategoryDropdown = document.querySelector('.header-search__dropdown-filed-category');
  const popularItems = popularDropdown.querySelectorAll('li');
  const overlay = document.querySelector('.overlay');

  // Inputga focus bo'lsa, popular dropdownni ko'rsatamiz
  input.addEventListener('focus', function () {
    popularDropdown.classList.add('show');

    if (window.innerWidth <= 768) {
      overlay.classList.add('show');
    }
  });

  // Popular dropdowndagi item bosilganda
  popularItems.forEach(item => {
    item.addEventListener('click', function () {
      const value = item.querySelector('span').innerText;
      input.value = value;

      popularDropdown.classList.remove('show');
      filledSearchDropdown.classList.add('show');
      filledCategoryDropdown.classList.add('show');

      if (window.innerWidth <= 768) {
        overlay.classList.add('show');
      }
    });
  });

  // Sahifada boshqa joyga bosilganda dropdownlarni yopamiz
  document.addEventListener('click', function (event) {
    const isClickInsideInput = input.contains(event.target);
    const isClickInsideDropdown = popularDropdown.contains(event.target) ||
      filledSearchDropdown.contains(event.target) ||
      filledCategoryDropdown.contains(event.target);

    if (!isClickInsideInput && !isClickInsideDropdown) {
      popularDropdown.classList.remove('show');
      filledSearchDropdown.classList.remove('show');
      filledCategoryDropdown.classList.remove('show');
      overlay.classList.remove('show');
    }
  });


  const dropdownMenu = document.querySelector(".dropdown-menu");
  const openDropdownMenu = document.querySelectorAll(".open-dropdown__menu-btn");

  openDropdownMenu.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // tashqi elementlarga event o'tmasin

      const isActive = btn.classList.contains("active");

      // Barcha tugmalardan active classni olib tashlaymiz
      openDropdownMenu.forEach(b => b.classList.remove("active"));

      // Agar tugma oldindan active bo‘lgan bo‘lsa, menyuni yopamiz
      if (isActive) {
        dropdownMenu.classList.remove("show");
      } else {
        btn.classList.add("active");
        dropdownMenu.classList.add("show");
      }
    });
  });

  // Hujjatning boshqa joyi bosilsa menyuni yopamiz
  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      openDropdownMenu.forEach(btn => btn.classList.remove("active"));
    }
  });

  // const dropdownMenu = document.querySelector(".dropdown-menu");
  // const openDropdownMenu = document.querySelectorAll(".open-dropdown__menu-btn");

  // openDropdownMenu.forEach(btn => {
  //   btn.addEventListener("click", (e) => {
  //     e.stopPropagation(); // boshqa elementlarga event ketmasin

  //     const isOpen = dropdownMenu.classList.contains("show");

  //     // Boshqa barcha tugmalardan "active" olib tashlaymiz
  //     openDropdownMenu.forEach(b => b.classList.remove("active"));

  //     if (isOpen) {
  //       dropdownMenu.classList.remove("show");
  //       btn.classList.remove("active");
  //     } else {
  //       dropdownMenu.classList.add("show");
  //       btn.classList.add("active");
  //     }
  //   });
  // });

  // // Tashqariga bosilganda menyuni yopish
  // document.addEventListener("click", (e) => {
  //   if (!dropdownMenu.contains(e.target)) {
  //     dropdownMenu.classList.remove("show");
  //     openDropdownMenu.forEach(btn => btn.classList.remove("active"));
  //   }
  // });


});


const menuAccordions = document.querySelectorAll(".menu-accordion");
if (menuAccordions) {
  menuAccordions.forEach(item => {
    const header = item.querySelector(".menu-accordion__header");
    header.addEventListener("click", () => {
      item.classList.toggle("active")
    })
  })
}

const mediaMenu = document.querySelector(".media-menu");
if (mediaMenu) {
  const openBtn = document.querySelector(".open-media__menu-btn");
  const closeBtn = document.querySelector(".close-media__menu-btn");
  openBtn.addEventListener("click", () => {
    mediaMenu.classList.add("show")
    document.body.style.overflow = 'hidden';
  })
  closeBtn.addEventListener("click", () => {
    mediaMenu.classList.remove("show");
    document.body.style.overflow = '';
  })
}

