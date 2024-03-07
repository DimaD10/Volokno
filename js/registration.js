const registrationForm                     = document.getElementById('registration-form'),
			registrationFormInputName            = document.getElementById('registration-form__name'),
			registrationFormInputPhone           = document.getElementById('registration-form__phone'),
			registrationFormInputEmail        	 = document.getElementById('registration-form__email'),
			registrationFormInputPassword        = document.getElementById('registration-form__password'),
      registrationFormInputAgree           = document.getElementById('registration-form__agree'),
			registrationFormInputAgreeBox        = document.querySelector('.account__form-labelcheckbox'),
			registrationFormErrorAll 						 = document.querySelectorAll('.account__form-error');


IMask(
	registrationFormInputPhone,
	{
		mask: '+{7}(000)000-00-00',
	}
);

let isSubmitForm = false;
registrationForm.addEventListener('submit', (e) => {
	validateFieldEmpty(registrationFormInputName, 'Введите имя');
	validateFieldEmpty(registrationFormInputPhone, 'Введите номер телефона');
	validateFieldPhone(registrationFormInputPhone, 'Некорректный номер телефона');
	validateFieldEmpty(registrationFormInputEmail, 'Введите email');
	validateFieldEmail(registrationFormInputEmail, 'Некорректный email');
	validateFieldEmpty(registrationFormInputPassword, 'Введите пароль');
	validateFieldLength(registrationFormInputPassword, 6, 'Введите пароль не менее 6 символов');

	if(!registrationFormInputAgree.checked){
		registrationFormInputAgreeBox.classList.add('account__form-labelcheckbox--error');
		e.preventDefault();
	}
	else{
		registrationFormInputAgreeBox.classList.remove('account__form-labelcheckbox--error');
	}

	isSubmitForm = Array.from(registrationFormErrorAll).some(item => item.textContent.trim());

	if(isSubmitForm) {
		e.preventDefault();
	}
});