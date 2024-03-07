const formSelects      = document.querySelectorAll('.account__form-input--select'),
	    placingOrderForm = document.getElementById('placing-order__form'),
			placingOrderFormInputName = document.getElementById('placing-order__form-name'),
			placingOrderFormInputPhone = document.getElementById('placing-order__form-phone'),
			placingOrderFormInputEmail = document.getElementById('placing-order__form-email'),
			placingOrderFormInputAddress = document.getElementById('placing-order__form-address'),
	    placingOrderFormErrorAll = document.querySelectorAll('.account__form-error'),
			btnBasketOpen = document.getElementById('my-products__basket-open'),
	    basket = document.querySelector('.model-basket');

formSelects.forEach(select => {
	const popupList = select.parentNode.querySelectorAll('.account__form-selectlistitem');

	select.addEventListener('click', () => {
		select.parentNode.classList.toggle('account__form-selectbox--active');
	});

	const popupListItemRemoveClass = () => {
		popupList.forEach(item => {
			item.classList.remove('account__form-selectlistitem--active');
		});
	}

	popupList.forEach(item => {
			item.addEventListener('click', () => {
				popupListItemRemoveClass();

				item.classList.add('account__form-selectlistitem--active');
				select.value = item.textContent;
				select.parentNode.parentNode
					.querySelector('.account__form-input--select-value')
					.value = item.getAttribute('data-value');

				select.parentNode.classList.remove('account__form-selectbox--active');
			});
		});
});

document.addEventListener('click', (e) => {
	formSelects.forEach(select => {
		const isFormSelect = e.composedPath().includes(select);
		const isFormSelectPopup = e.composedPath().includes(select.parentNode.querySelector('.account__form-selectlist'));

		if(!isFormSelect && !isFormSelectPopup){
			select.parentNode.classList.remove('account__form-selectbox--active');
		}
	});
});

IMask(
	placingOrderFormInputPhone,
	{
		mask: '+{7}(000)000-00-00',
	}
);

let isSubmitForm = false;
placingOrderForm.addEventListener('submit', (e) => {
	validateFieldEmpty(placingOrderFormInputName, 'Введите имя');
	validateFieldEmpty(placingOrderFormInputPhone, 'Введите номер телефона');
	validateFieldPhone(placingOrderFormInputPhone, 'Некорректный номер телефона');
	validateFieldEmpty(placingOrderFormInputEmail, 'Введите email');
	validateFieldEmail(placingOrderFormInputEmail, 'Некорректный email');
	validateFieldEmpty(placingOrderFormInputAddress, 'Введите адрес');

	isSubmitForm = Array.from(placingOrderFormErrorAll).some(item => item.textContent.trim());

	if(isSubmitForm) {
		e.preventDefault();
	}
});

btnBasketOpen.addEventListener('click', () => {
	document.querySelector('.header').classList.add('header--active');
	scrollOff();

	basket.classList.add('model-action--active');
});
