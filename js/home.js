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