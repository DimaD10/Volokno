const items = document.querySelectorAll('.questions__item-listitem');

items.forEach(item => {
	const currentContent = item.querySelector('.questions__item-listcontent');

	item.addEventListener('click', () => {
		item.classList.toggle('questions__item-listitem--active');

		item.classList.contains('questions__item-listitem--active')
			? currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
			: currentContent.style.maxHeight = 0 + 'px';
	});
});

window.addEventListener('resize', () => {
	const ResizeItems = document.querySelectorAll('.questions__item-listitem');

	ResizeItems.forEach(item => {
		const currentContent = item.querySelector('.questions__item-listcontent');

		if(item.classList.contains('questions__item-listitem--active')){
			currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
		}
	});
});