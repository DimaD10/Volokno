const modelActionFilter    				= document.querySelector('.model-filter'),
			modelActionContentFilter    = document.querySelector('.model-filter .model-action__box'),
      btnModelActionFilterOpen 		= document.querySelector('.collections-products__filters-btn'),
			btnModelActionFilterClose 	= document.querySelector('.model-action__top-btnclose--filter'),
			btnFilterClose 							= document.querySelector('.model-filter__button-close'),
			btnsFilterSize 							= document.querySelectorAll('.model-filter__btns-size > .size-selection__btn'),
			boxFilterSize               = document.querySelectorAll('.model-filter__box-size  > .model-filter__box-grid');


btnModelActionFilterOpen.addEventListener('click', () => {
	scrollOff();
	modelActionFilter.classList.add('model-action--active');
});

btnModelActionFilterClose.addEventListener('click', (e) => {
	scrollOn();
	modelActionFilter.classList.remove('model-action--active');

	e.preventDefault();
});

btnFilterClose.addEventListener('click', (e) => {
	scrollOn();
	modelActionFilter.classList.remove('model-action--active');

	e.preventDefault();
});

btnsFilterSize.forEach(btn => {
	btn.addEventListener('click', (e) => {
		btnsFilterSize.forEach(item => {
			item.classList.remove('link--active');
		});

		btn.classList.add('link--active');

		boxFilterSize.forEach(item => {
			item.classList.remove('model-filter__box-size--active');

			item.getAttribute('data-type') === btn.getAttribute('data-type')
				&& item.classList.add('model-filter__box-size--active');
		});

		e.preventDefault();
	});
});

document.addEventListener('click', (e) => {
	const isClickModelActionContentFilter = e.composedPath().includes(modelActionContentFilter);
	const isClickBtnModelActionFilterOpen = e.composedPath().includes(btnModelActionFilterOpen);

	if(!isClickModelActionContentFilter && !isClickBtnModelActionFilterOpen){
		modelActionFilter.classList.remove('model-action--active');
	}
});