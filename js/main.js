const header = document.querySelector('.header');
const headerInner = document.querySelector('.header__inner');
const headerMobileMenu = document.querySelector('.menu');
const headerBtnMobileMenu = document.querySelector('.header__mobile-btn');
const headerMobileMenuLink = document.querySelectorAll('.menu__list-link');
const searchButtonOpen = document.querySelector('.header__btn-search');
const searchButtonClose = document.querySelector('.search__close-btn');
const searchModal = document.querySelector('.search');
const searchModalContent = document.querySelector('.search__box');
const searchInput = document.querySelector('.search__form-input');
const headerButtons = document.querySelectorAll('.buttons-box__btn');
const productCard = document.querySelectorAll('.product-card');
const basketBtnOpen = document.querySelector('.header__links-ref--basket');
const basketBtnClose = document.querySelector('.model-basket__btn-close');
const basketModal = document.querySelector('.model-basket');
const basketModalContent = document.querySelector('.model-basket .model-action__box');


const headerScrollActive = () => {
	window.scrollY > 0 || document.body.classList.contains('scroll-off') ? header.classList.add('header--active') : header.classList.remove('header--active');
};

window.addEventListener('scroll', () => {
	headerScrollActive();
});

headerScrollActive();

let pageY;
const scrollOff = () => {
	pageY = window.pageYOffset;
	document.body.classList.add('scroll-off');
	document.body.style.top = '-' + pageY + 'px';
}

const scrollOn = () => {
	if(document.body.classList.contains('scroll-off')){
		document.body.classList.remove('scroll-off');

		pageY && window.scroll(0, pageY);
	}
}

headerBtnMobileMenu.addEventListener('click', () => {
	if(headerMobileMenu.classList.contains('menu--active')){
		scrollOn();

		header.querySelector('.header__inner').classList.remove('header__inner--active');
		window.scrollY === 0 && header.classList.remove('header--active');
		headerMobileMenu.classList.remove('menu--active');
	}
	else{
		scrollOff();

		header.querySelector('.header__inner').classList.add('header__inner--active');
		header.classList.add('header--active');
		headerMobileMenu.classList.add('menu--active');
	}
	headerBtnMobileMenu.classList.toggle('header__mobile-btn--active');
});

headerMobileMenuLink.forEach(item => {
	item.addEventListener('click', (e) => {
		if(!item.nextElementSibling) return;

		item.classList.toggle('menu__list-link--active');
		e.preventDefault();
	});
});

window.addEventListener('resize', () => {
	const headerBtnDisplay = window.getComputedStyle(headerBtnMobileMenu).getPropertyValue('display');
	if(headerBtnDisplay === 'none' && headerMobileMenu.classList.contains('menu--active')) {
		scrollOn();
	}
	// else if(headerBtnDisplay !== 'none' && headerMobileMenu.classList.contains('menu--active')){
	// 	header.classList.add('header--active');
	// 	scrollOff();
	// }
});

new Swiper('.menu__new-collectionsslider', {
	slidesPerView: 1.5,
	spaceBetween: 15,
});

searchButtonOpen.addEventListener('click', () => {
	header.classList.add('header--active');
	searchModal.classList.add('search--active');

	const isHeaderMobileMenu = headerBtnMobileMenu.classList.contains('header__mobile-btn--active');

	isHeaderMobileMenu && headerBtnMobileMenu.classList.remove('header__mobile-btn--active');
	header.querySelector('.header__inner').classList.remove('header__inner--active');
	headerMobileMenu.classList.remove('menu--active');

	!isHeaderMobileMenu && scrollOff();
	searchInput.focus();
});

searchButtonClose.addEventListener('click', () => {
	window.scrollY === 0 && header.classList.remove('header--active');

	scrollOn();
	searchModal.classList.remove('search--active');
});

document.addEventListener('click', (e) => {
	const headerInnerClick = e.composedPath().includes(headerInner);
	const btnHeaderMenu = e.composedPath().includes(headerBtnMobileMenu);
	const modelHeaderMenu = e.composedPath().includes(headerMobileMenu);

	const modelSearchContent = e.composedPath().includes(searchModalContent);
	const btnSearch = e.composedPath().includes(searchButtonOpen);

	const modelBasket = e.composedPath().includes(basketModalContent);
	const btnBasket = e.composedPath().includes(basketBtnOpen);

	const btnFilter = e.composedPath().includes(document.querySelector('.collections-products__filters-btn'));
	const modelFilter = e.composedPath().includes(document.querySelector('.model-filter .model-action__box'));

	const btnMap = e.composedPath().includes(document.querySelector('.contacts__info-btnmap'));
	const modelMapContent = e.composedPath().includes(document.querySelector('.model-map > .model__content'));
	const btnBasketOpen = e.composedPath().includes(document.getElementById('my-products__basket-open'));

	if(
		!btnSearch
		&& !btnBasket
		&& !modelSearchContent
		&& !modelBasket
		&& !btnHeaderMenu
		&& !modelHeaderMenu
		&& !headerInnerClick
		&& !btnFilter
		&& !modelFilter
		&& !btnMap
		&& !modelMapContent
		&& !btnBasketOpen
	) {
		scrollOn();

		window.scrollY === 0 && header.classList.remove('header--active');
	}

	if(!modelSearchContent && !btnSearch) {
		searchModal.classList.remove('search--active');
	}

	if(!modelBasket && !btnBasket && !btnBasketOpen) {
		basketModal.classList.remove('model-action--active');
	}
});

headerButtons.forEach(item => {
	item.addEventListener('click', () => {
		if(item.classList.contains('buttons-box__btn--active'))
			item.classList.remove('buttons-box__btn--active');
		else
			item.classList.add('buttons-box__btn--active');
	});

	document.addEventListener('click', (e) => {
		const dropdown = e.composedPath().includes(item.nextElementSibling);
		const btn = e.composedPath().includes(item);

		if(!dropdown && !btn){
			item.classList.remove('buttons-box__btn--active');
		}
	})
});

productCard.forEach((item) => {
	const imageSlider = item.querySelector('.product-card__top-slider');
	const btn = item.querySelector('.product-card__info-btn');
	const btnLike = item.querySelector('.product-card__image-btnlike');
	const info = item.querySelector('.product-card__info-flex');
	const size = item.querySelector('.product-card__info-size');
	const btnColor = item.querySelectorAll('.product-card__info-color');

	btnLike.addEventListener('click', () => {
		if(btnLike.classList.contains('product-card__image-btnlike--active')){
			btnLike.classList.remove('product-card__image-btnlike--active');
		}
		else{
			btnLike.classList.add('product-card__image-btnlike--active');
		}
	});

	btn?.addEventListener('click', () => {
		productCard.forEach(item => {
			item.querySelector('.product-card__info-flex').classList.remove('product-card__info-flex--none');
			item.querySelector('.product-card__info-size').classList.remove('product-card__info-size--active');
		});

		info.classList.add('product-card__info-flex--none');
		size.classList.add('product-card__info-size--active');
	});

	const productCardSlider = new Swiper(imageSlider, {
		loop: true,
		slidesPerView: 1,
		allowTouchMove: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});

	item.addEventListener('mouseleave', () => {
		info.classList.remove('product-card__info-flex--none');
		size.classList.remove('product-card__info-size--active');
	});
    item
      .querySelector(".product-card__image")
      .addEventListener("mouseleave", () => {
        if (productCardSlider.slides.length > 1) productCardSlider.slidePrev();
      });


    item
        .querySelector(".product-card__image")
        .addEventListener("mouseenter", () => {
        if (productCardSlider.slides.length > 1)
            if (productCardSlider.slides.length > 1)
            productCardSlider.slideNext();
        });


	productCardSlider.on('slideChange', () => {
		const color = productCardSlider.slides[productCardSlider.activeIndex]?.getAttribute('data-color');

		btnColor.forEach(e => e.classList.remove('product-card__info-color--active'));
		item.querySelector(`.product-card__info-color[data-color="${color}"]`)?.classList.add('product-card__info-color--active');
	});
	//переключение цветов
	btnColor.forEach(item => {
		item.addEventListener('click', () => {
			const color = item.getAttribute('data-color');

			const slideIndex = productCardSlider.slides.findIndex((slide) => {
				return slide.getAttribute('data-color') === color;
			});

			btnColor.forEach(e => e.classList.remove('product-card__info-color--active'));
			item.classList.add('product-card__info-color--active');

			productCardSlider.slideTo(slideIndex);
		});
	});
});

new Swiper('.model-action__basket-likesslider', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 1,
	navigation: {
		prevEl: '.model-action__basket-likessliderarrowsbtn--prev',
		nextEl: '.model-action__basket-likessliderarrowsbtn--next'
	}
});

basketBtnOpen.addEventListener('click', () => {
	header.classList.add('header--active');

	const isHeaderMobileMenu = headerBtnMobileMenu.classList.contains('header__mobile-btn--active');
	!isHeaderMobileMenu && scrollOff();

	isHeaderMobileMenu && headerBtnMobileMenu.classList.remove('header__mobile-btn--active');
	header.querySelector('.header__inner').classList.remove('header__inner--active');
	headerMobileMenu.classList.remove('menu--active');

	basketModal.classList.add('model-action--active');
});

basketBtnClose.addEventListener('click', () => {
	window.scrollY === 0 && header.classList.remove('header--active');
	scrollOn();

	basketModal.classList.remove('model-action--active');
});

const basketProducts        		= document.querySelectorAll('.model-action__basket-product'),
			basketTotalSumma          = document.querySelector('.model-action__basket-totalpricenumber'),
			basketDelivery            = document.querySelector('.model-action__basket-delivery'),
			basketDeliveryNumberPrice = document.querySelector('.model-action__basket-textnumber span'),
			basketDeliveryProgressBar = document.querySelector('.model-action__basket-progressbar span'),
			basketCountProducts       = document.querySelector('.model-action__basket-count'),
      buyOrderDeliveryNumberPrice = document.querySelector('.my-products__info-deliverytext > b'),
	    buyOrderDeliveryProgressBar = document.querySelector('.my-products__info-deliveryprogressbar > span'),
	    buyOrderCountProducts       = document.querySelector('.my-products__info-topcount span'),
	    buyOrderTotalSumma          = document.querySelector('.my-products__info-summatotal'),
	    buyOrderContentTotalSumma          = document.querySelector('.my-products__content-total'),
	    buyOrderDeliverySumma          = document.querySelector('.my-products__info-summadelivery'),
	    buyOrderContentDeliverySumma = document.querySelector('.my-products__content-price--dilivery');

let basketTotalSummaNumber = 0;
const basketTotalAmount = () => {
	const basketCurrentProducts = document.querySelectorAll('.model-action__basket-product');

	basketCurrentProducts.forEach(item => {
		const price = item.querySelector('.model-action__basket-productinfoprice').getAttribute('data-price'),
			input = item.querySelector('.model-action__basket-productinfocountinput').value;

		basketTotalSummaNumber += Number(price) * Number(input);
	});
	basketTotalSumma.textContent = basketTotalSummaNumber.toLocaleString('ru-Ru');

	const summaAmount = Number(basketDelivery.getAttribute('data-summa'));
	const summaAmountAll = summaAmount - basketTotalSummaNumber;

	basketDeliveryNumberPrice.textContent = summaAmountAll <= 0 ? 0 : summaAmountAll.toLocaleString('ru-Ru');
	basketDeliveryProgressBar.style.width = `${Math.min((basketTotalSummaNumber / summaAmount) * 100, 100)}%`;

	basketCountProducts.innerHTML = basketCurrentProducts.length.toString();

	if(buyOrderDeliveryNumberPrice){
		buyOrderDeliveryNumberPrice.textContent = summaAmountAll <= 0 ? '0 ₽' : summaAmountAll.toLocaleString('ru-Ru', {
			style: 'currency',
			currency: 'RUB',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		});

		buyOrderDeliveryProgressBar.style.width = `${Math.min((basketTotalSummaNumber / summaAmount) * 100, 100)}%`;
		buyOrderCountProducts.innerHTML = basketCurrentProducts.length.toString();

		buyOrderTotalSumma.textContent = basketTotalSummaNumber.toLocaleString('ru-Ru', {
			style: 'currency',
			currency: 'RUB',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		});

		buyOrderContentTotalSumma.textContent = basketTotalSummaNumber.toLocaleString('ru-Ru', {
			style: 'currency',
			currency: 'RUB',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		});

		buyOrderDeliverySumma.textContent = summaAmountAll <= 0 ? '0 ₽' : buyOrderDeliverySumma.getAttribute('data-price') + ' ₽';
		buyOrderContentDeliverySumma.textContent = summaAmountAll <= 0 ? '0 ₽' : buyOrderDeliverySumma.getAttribute('data-price') + ' ₽';
	}

	basketTotalSummaNumber = 0;
};

basketProducts.forEach(item => {
	const
		btnDelete = item.querySelector('.model-action__basket-productinfobtndelete'),
		btnMinus  = item.querySelector('.model-action__basket-productinfocountminus'),
		btnPlus   = item.querySelector('.model-action__basket-productinfocountplus'),
		input     = item.querySelector('.model-action__basket-productinfocountinput'),
	  buyOrderProductsItem = document.querySelector(`.my-products__info-product[data-id='${item.getAttribute('data-id')}']`);


	btnMinus.addEventListener('click', () => {
		if(input.value <= 1) {
			input.value = 1;
			return;
		}

		const count = Number(input.value) - 1;

		input.value = count;

		if(buyOrderProductsItem){
			buyOrderProductsItem.querySelector('.my-products__info-productdatacount span').textContent = count;
		}

		basketTotalAmount();
	});

	btnPlus.addEventListener('click', () => {
		const count = Number(input.value) + 1;

		input.value = count;

		if(buyOrderProductsItem){
			buyOrderProductsItem.querySelector('.my-products__info-productdatacount span').textContent = count;
		}

		basketTotalAmount();
	});

	input.addEventListener('input', (e) => {
		if(e.target.value < 1 || e.target.value[0] === '0'){
			input.value = 1;

			if(buyOrderProductsItem){
				buyOrderProductsItem.querySelector('.my-products__info-productdatacount span').textContent = 0;
			}
		}

		if(buyOrderProductsItem){
			buyOrderProductsItem.querySelector('.my-products__info-productdatacount span').textContent = e.target.value;
		}

		basketTotalAmount();
	});

	btnDelete.addEventListener('click', () => {
		item.remove();

		if(buyOrderProductsItem){
			buyOrderProductsItem.remove();
		}

		basketTotalAmount();
	});
});

basketTotalAmount();

const footerMenuBtn = document.querySelectorAll('.footer__menu-title');

footerMenuBtn.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('footer__menu-title--active');
	});
});

const warningBtn = document.querySelector('.warning__btn');
const warningModel = document.querySelector('.warning');

if(warningModel){
	warningBtn.addEventListener('click', () => {
		warningModel.style.display = 'none';
	});
}

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