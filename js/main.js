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
	window.scrollY > 0 ? header.classList.add('header--active') : header.classList.remove('header--active');
};

window.addEventListener('scroll', () => {
	headerScrollActive();
});

headerScrollActive();


headerBtnMobileMenu.addEventListener('click', () => {
	if(headerMobileMenu.classList.contains('menu--active')){
		document.body.style.overflow = null;

		header.querySelector('.header__inner').classList.remove('header__inner--active');
		window.scrollY === 0 && header.classList.remove('header--active');
		headerMobileMenu.classList.remove('menu--active');
	}
	else{
		document.body.style.overflow = 'hidden';

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
		document.body.style.overflow = null;
	}
	else if(headerBtnDisplay !== 'none' && headerMobileMenu.classList.contains('menu--active')){
		header.classList.add('header--active');
		document.body.style.overflow = 'hidden';
	}
});

new Swiper('.menu__new-collectionsslider', {
	slidesPerView: 1.5,
	spaceBetween: 15,
});


searchButtonOpen.addEventListener('click', () => {
	header.classList.add('header--active');
	searchModal.classList.add('search--active');

	headerBtnMobileMenu.classList.remove('header__mobile-btn--active');
	header.querySelector('.header__inner').classList.remove('header__inner--active');
	headerMobileMenu.classList.remove('menu--active');

	document.body.style.overflow = 'hidden';
	searchInput.focus();
});

searchButtonClose.addEventListener('click', () => {
	window.scrollY === 0 && header.classList.remove('header--active');

	document.body.style.overflow = null;
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
	) {
		document.body.style.overflow = null;

		window.scrollY === 0 && header.classList.remove('header--active');
	}

	if(!modelSearchContent && !btnSearch) {
		searchModal.classList.remove('search--active');
	}

	if(!modelBasket && !btnBasket) {
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
	document.body.style.overflow = 'hidden';

	headerBtnMobileMenu.classList.remove('header__mobile-btn--active');
	header.querySelector('.header__inner').classList.remove('header__inner--active');
	headerMobileMenu.classList.remove('menu--active');

	basketModal.classList.add('model-action--active');
});

basketBtnClose.addEventListener('click', () => {
	window.scrollY === 0 && header.classList.remove('header--active');
	document.body.style.overflow = null;

	basketModal.classList.remove('model-action--active');
});

const basketProducts        		= document.querySelectorAll('.model-action__basket-product'),
			basketTotalSumma          = document.querySelector('.model-action__basket-totalpricenumber'),
			basketDelivery            = document.querySelector('.model-action__basket-delivery'),
			basketDeliveryNumberPrice = document.querySelector('.model-action__basket-textnumber span'),
			basketDeliveryProgressBar = document.querySelector('.model-action__basket-progressbar span'),
			basketCountProducts       = document.querySelector('.model-action__basket-count');

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

	basketTotalSummaNumber = 0;
};

basketProducts.forEach(item => {
	const
		btnDelete = item.querySelector('.model-action__basket-productinfobtndelete'),
		btnMinus  = item.querySelector('.model-action__basket-productinfocountminus'),
		btnPlus   = item.querySelector('.model-action__basket-productinfocountplus'),
		input     = item.querySelector('.model-action__basket-productinfocountinput');

	btnMinus.addEventListener('click', () => {
		if(input.value <= 1) {
			input.value = 1;
			return;
		}

		input.value = Number(input.value) - 1;
		basketTotalAmount();
	});

	btnPlus.addEventListener('click', () => {
		input.value = Number(input.value) + 1;
		basketTotalAmount();
	});

	input.addEventListener('input', (e) => {
		if(e.target.value < 1 || e.target.value[0] === '0'){
			input.value = 1;
		}
		basketTotalAmount();
	});

	btnDelete.addEventListener('click', () => {
		item.remove();

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