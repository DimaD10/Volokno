const modelActionFilter    				= document.querySelector('.model-filter'),
			modelActionContentFilter    = document.querySelector('.model-filter .model-action__box'),
      btnModelActionFilterOpen 		= document.querySelector('.collections-products__filters-btn'),
			btnModelActionFilterClose 	= document.querySelector('.model-action__top-btnclose--filter'),
			btnFilterClose = document.querySelector('.model-filter__button-close');


btnModelActionFilterOpen.addEventListener('click', () => {
	document.body.style.overflow = 'hidden';
	modelActionFilter.classList.add('model-action--active');
});

btnModelActionFilterClose.addEventListener('click', (e) => {
	document.body.style.overflow = null;
	modelActionFilter.classList.remove('model-action--active');

	e.preventDefault();
});

btnFilterClose.addEventListener('click', (e) => {
	document.body.style.overflow = null;
	modelActionFilter.classList.remove('model-action--active');

	e.preventDefault();
});

document.addEventListener('click', (e) => {
	const isClickModelActionContentFilter = e.composedPath().includes(modelActionContentFilter);
	const isClickBtnModelActionFilterOpen = e.composedPath().includes(btnModelActionFilterOpen);

	if(!isClickModelActionContentFilter && !isClickBtnModelActionFilterOpen){
		modelActionFilter.classList.remove('model-action--active');
	}
});