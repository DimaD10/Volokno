new Swiper('.new-collection__slider', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.new-collection__slider-button--prev',
        nextEl: '.new-collection__slider-button--next'
    },
    pagination: {
        el: '.new-collection__slider-pagination',
        clickable: true,
    },
});

const productsSlider = document.querySelectorAll('.products-slider');

productsSlider.forEach((item, i) => {
    const index = i + 1;

    new Swiper(item, {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 1,
        autoHeight: true,
        navigation: {
            prevEl: `.products-slider__arrows-prev--${index}`,
            nextEl: `.products-slider__arrows-next--${index}`
        },
        breakpoints: {
            878.98: {
                slidesPerView: 4,
            },
            568.98: {
                slidesPerView: 3,
            },
        }
    });
});