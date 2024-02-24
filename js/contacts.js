const social       = document.querySelector('.contacts__info-boxsocial'),
			infoBlock 	 = document.querySelector('.contacts__info'),
			infoBoxsOne  = document.querySelector('.contacts__info-boxs-1');


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
)