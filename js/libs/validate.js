const validateFieldEmpty = (field, message) => {
	const error = field.nextElementSibling;

	if(!field.value.trim().length) {
		error.textContent = message;
	} else {
		error.textContent = null;
	}
}

const validateFieldLength = (field, min, message) => {
	if(!field.value.trim().length) {
		return;
	}

	const error = field.nextElementSibling;

	if(field.value.trim().length < min) {
		error.textContent = message;
	} else {
		error.textContent = null;
	}
}

const validateFieldPhone = (field, message) => {
	if(!field.value.trim().length) {
		return;
	}

	const error = field.nextElementSibling;
	let phoneRegex = /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

	if( !phoneRegex.test(field.value) ) {
		error.textContent = message;
	} else {
		error.textContent = null;
	}
}

const validateFieldEmail = (field, message) => {
	if(!field.value.trim().length) {
		return;
	}

	const error = field.nextElementSibling;
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if( !emailRegex.test(field.value) ) {
		error.textContent = message;
	} else {
		error.textContent = null;
	}
}

const validateFieldConfirmation = (field_1, field_2, message) => {
	const error = field_2.nextElementSibling;

	if(field_1.value !== field_2.value) {
		error.textContent = message;
	} else {
		error.textContent = null;
	}
}