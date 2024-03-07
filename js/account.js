const accountMenuBtn = document.querySelector('.account-menu__box-active');

accountMenuBtn.addEventListener('click', () => {
	accountMenuBtn.classList.toggle('account-menu__box-active--active');
});