const slider = new Swiper(".product-view__slider", {
  slidesPerView: 1,
  mousewheel: true,
  direction: "horizontal",
  scrollbar: false,
  speed: 500,
  pagination: {
    el: ".product-view__slider-pagination",
    // clickable: true,
  },
  navigation: {
    prevEl: `.product-view__slider-arrow--prev`,
    nextEl: `.product-view__slider-arrow--next`,
  },
  thumbs: {
    swiper: {
      el: ".product-view__slider-mini",
      slidesPerView: 10,
      spaceBetween: 10,
      slidesPerGroup: 1,

      breakpoints: {
        1400: {
          slidesPerView: 10,
        },
        1200: {
          slidesPerView: 8,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    },
  },
  breakpoints: {
    1040: {
      loop: false,
      autoHeight: true,
      scrollbar: true,
      direction: "vertical",
    },
    320: {
      loop: true,
    },
  },
});

const btnLike = document.querySelector(".product-view__content-btnlike");

btnLike.addEventListener("click", () => {
  btnLike.classList.toggle("product-card__image-btnlike--active");
});

const btnsFilterSize = document.querySelectorAll(".size-selection__btn");
const boxFilterSize = document.querySelectorAll(
  ".product-view__content-sizesitems"
);

btnsFilterSize.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnsFilterSize.forEach((item) => {
      item.classList.remove("link--active");
    });

    btn.classList.add("link--active");

    boxFilterSize.forEach((item) => {
      item.classList.remove("product-view__content-sizesitems--active");

      item.getAttribute("data-type") === btn.getAttribute("data-type") &&
        item.classList.add("product-view__content-sizesitems--active");
    });
  });
});

const btnsContentModel = document.querySelectorAll(
  ".product-view__content-button"
);
const contentModel = document.querySelector(".product-view__model");
const contentModelBox = document.querySelectorAll(
  ".product-view__model-content"
);
const btnCloseContentModel = document.querySelector(".product-view__model-btn");
let currentType;

btnsContentModel.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      contentModel.classList.contains("product-view__model--active") &&
      currentType === item.getAttribute("data-type")
    ) {
      item.classList.remove("product-view__content-button--active");
      contentModel.classList.remove("product-view__model--active");
    } else {
      btnsContentModel.forEach((btn) => {
        btn.classList.remove("product-view__content-button--active");
      });
      item.classList.add("product-view__content-button--active");
      contentModel.classList.add("product-view__model--active");
    }

    contentModelBox.forEach((item) => {
      item.classList.remove("product-view__model-content--active");
    });

    contentModel
      .querySelector(
        `.product-view__model-content[data-type='${item.getAttribute(
          "data-type"
        )}']`
      )
      .classList.add("product-view__model-content--active");
    currentType = item.getAttribute("data-type");
  });
});

btnCloseContentModel.addEventListener("click", () => {
  contentModel.classList.remove("product-view__model--active");

  btnsContentModel.forEach((btn) => {
    btn.classList.remove("product-view__content-button--active");
  });
});

const contentModelSizesBtn = document.querySelector(
  ".product-view__content-sizesbtn"
);

contentModelSizesBtn.addEventListener("click", () => {
  contentModel.classList.add("product-view__model--active");

  contentModelBox.forEach((item) => {
    item.classList.remove("product-view__model-content--active");
  });

  document
    .querySelector('.product-view__model-content[data-type="table-sizes"]')
    .classList.add("product-view__model-content--active");

  currentType = null;
});
