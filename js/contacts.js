const social          = document.querySelector('.contacts__info-boxsocial'),
			infoBlock 	    = document.querySelector('.contacts__info'),
			infoBoxsOne     = document.querySelector('.contacts__info-boxs-1'),
			btnMapOpen      = document.querySelector('.contacts__info-btnmap'),
			btnMapClose     = document.querySelector('.model-map__close'),
			modelMap 		    = document.querySelector('.model-map'),
			modelMapContent = document.querySelector('.model-map > .model__content');


const socialPlace = () => {
	if(window.innerWidth <= 1320){
		infoBlock.append(social);
	}
	else{
		infoBoxsOne.append(social);
	}
}

socialPlace();

window.addEventListener('resize', () => {
	socialPlace();
});

IMask(
	document.querySelector('.contacts__form-input--phone'),
	{
		mask: '+{7}(000)000-00-00',
	}
);


btnMapOpen.addEventListener('click', () => {
	scrollOff();
	modelMap.classList.add('model--active');
});

btnMapClose.addEventListener('click', () => {
	scrollOn();
	modelMap.classList.remove('model--active');
});

document.addEventListener('click', (e) => {
	const isModelMapContent = e.composedPath().includes(modelMapContent);
	const isBtnMapOpen = e.composedPath().includes(btnMapOpen);

	if(!isBtnMapOpen && !isModelMapContent){
		modelMap.classList.remove('model--active');
	}
});
