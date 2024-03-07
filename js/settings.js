const infoForm                          = document.getElementById('info-form'),
			infoFormBtn                       = document.querySelector('#info-form .form-button'),
			infoFormInputName                 = document.getElementById('info-form__name'),
			infoFormInputPhone                = document.getElementById('info-form__phone'),
			infoFormInputEmail                = document.getElementById('info-form__email'),
			infoFormAllErrors                 = document.querySelectorAll('#info-form .account__form-error'),
			passwordForm                      = document.getElementById('password-form'),
	    passwordFormBtn                   = document.querySelector('#password-form .form-button');
			passwordFormInputCurrentPassword  = document.getElementById('info-form__current-password'),
	    passwordFormInputNewPassword      = document.getElementById('info-form__new-password'),
	    passwordFormInputNewCheckPassword = document.getElementById('info-form__check-new-password'),
	    passwordFormAllErrors             = document.querySelectorAll('#password-form .account__form-error');


IMask(
	infoFormInputPhone,
	{
		mask: '+{7}(000)000-00-00',
	}
);

const checkInfoForm = () => {
	infoFormBtn.disabled = !(infoFormInputName.value.trim() && infoFormInputPhone.value.trim() && infoFormInputEmail.value.trim());
}

infoFormInputName.addEventListener('input', () => {
	checkInfoForm();
});

infoFormInputPhone.addEventListener('input', () => {
	checkInfoForm();
});

infoFormInputEmail.addEventListener('input', () => {
	checkInfoForm();
});

infoForm.addEventListener('submit', (e) => {
	validateFieldEmpty(infoFormInputName, 'Введите имя');
	validateFieldEmpty(infoFormInputPhone, 'Введите номер телефона');
	validateFieldPhone(infoFormInputPhone, 'Некорректный номер телефона');
	validateFieldEmpty(infoFormInputEmail, 'Введите email');
	validateFieldEmail(infoFormInputEmail, 'Некорректный email')

	isSubmitForm = Array.from(infoFormAllErrors).some(item => item.textContent.trim());

	if(isSubmitForm) {
		e.preventDefault();
	}
});

const checkPasswordForm = () => {
	passwordFormBtn.disabled = !(passwordFormInputCurrentPassword.value.trim() && passwordFormInputNewPassword.value.trim() && passwordFormInputNewCheckPassword.value.trim());
}

passwordFormInputCurrentPassword.addEventListener('input', () => {
	checkPasswordForm();
});

passwordFormInputNewPassword.addEventListener('input', () => {
	checkPasswordForm();
});

passwordFormInputNewCheckPassword.addEventListener('input', () => {
	checkPasswordForm();
});

passwordForm.addEventListener('submit', (e) => {
	validateFieldEmpty(passwordFormInputCurrentPassword, 'Введите текущий пароль');
	validateFieldEmpty(passwordFormInputNewPassword, 'Введите новый пароль');
	validateFieldLength(passwordFormInputNewPassword, 6, 'Введите пароль не менее 6 символов');
	validateFieldConfirmation(passwordFormInputNewPassword, passwordFormInputNewCheckPassword, 'Пароль не совпадает с новым паролем');

	isSubmitForm = Array.from(passwordFormAllErrors).some(item => item.textContent.trim());

	if(isSubmitForm) {
		e.preventDefault();
	}
});