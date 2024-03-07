const loginForm 													 = document.getElementById('login-form'),
			loginFormEmailOrPhone 							 = document.getElementById('login-form__email-or-phone'),
			loginFormPassword 									 = document.getElementById('login-form__password'),
			loginFormErrorAll 						 			 = document.querySelectorAll('.account__form-error');


let isSubmitForm = false;
loginForm.addEventListener('submit', (e) => {
	validateFieldEmpty(loginFormEmailOrPhone, 'Введите почту или номер телефона');
	validateFieldEmpty(loginFormPassword, 'Введите пароль');

	isSubmitForm = Array.from(loginFormErrorAll).some(item => item.textContent.trim());
	isSubmitForm && e.preventDefault();
});