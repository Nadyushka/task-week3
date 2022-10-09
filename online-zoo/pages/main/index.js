
const buttonPrev = document.querySelector('.pets-block__left')
const buttonNext = document.querySelector('.pets-block__right')
let petsBlock = document.querySelector('.pets-block');
let petsPhotosOld = document.querySelector('.pets__photos');

let animalInfo = [
	{
		'name': 'giant Pandas',
		'img': '../../assets/images/pets__photo1.jpg',
		'place': 'Native to Southwest China',
		'food': '../../assets/icons/pets__banana-bamboo.svg'
	},

	{
		'name': 'Eagles',
		'img': '../../assets/images/pets__photo2.jpg',
		'place': 'Native to South America',
		'food': '../../assets/icons/pets__meet-fish.svg'
	},

	{
		'name': 'Gorillas',
		'img': '../../assets/images/pets__photo3.jpg',
		'place': 'Native to Congo',
		'food': '../../assets/icons/pets__banana-bamboo.svg'
	},

	{
		'name': 'Two-toed Sloth',
		'img': '../../assets/images/pets__photo4.jpg',
		'place': 'Mesoamerica, South America',
		'food': '../../assets/icons/pets__meet-fish.svg'
	},

	{
		'name': 'cheetahs',
		'img': '../../assets/images/pets__photo5.jpg',
		'place': 'Native to Africa',
		'food': '../../assets/icons/pets__meet-fish.svg'
	},

	{
		'name': 'Penguins',
		'img': '../../assets/images/pets__photo6.jpg',
		'place': 'Native to Antarctica',
		'food': '../../assets/icons/pets__meet-fish.svg'
	}
]


// функция для отрисовки нового блока с животными

function drawNewSlide() {

	let randomAnimal = [];

	while (randomAnimal.length < 6) {
		let t = Math.floor(Math.random() * 6)
		if (!randomAnimal.includes(t)) {
			randomAnimal.push(t)
		}
	}

	let petsPhotos = document.createElement('div')
	petsPhotos.classList.add('pets__photos');
	petsPhotos.classList.add('pets__photos__new');
	petsBlock.appendChild(petsPhotos)

	function drawCard(block, number) {
		let petsPet = document.createElement('div')
		petsPet.classList.add(block);
		petsPhotos.appendChild(petsPet);

		let petsPet1Container = document.createElement('div')
		petsPet1Container.classList.add('pets__pet1-container');
		let petsPet1Info = document.createElement('div')
		petsPet1Info.classList.add('pets__pet1-info');
		petsPet.appendChild(petsPet1Container);
		petsPet.appendChild(petsPet1Info);

		let petsPet1Pphoto = document.createElement('img')
		petsPet1Pphoto.classList.add('pets__pet1-photo');
		petsPet1Pphoto.src = animalInfo[randomAnimal[number]]['img'];
		petsPet1Pphoto.alt = animalInfo[randomAnimal[number]]['name'];
		petsPet1Container.appendChild(petsPet1Pphoto);


		let petsPet1Text = document.createElement('div')
		petsPet1Text.classList.add('pets__pet1-text')
		petsPet1Info.appendChild(petsPet1Text);
		let petsPet1Food = document.createElement('img')
		petsPet1Food.classList.add('pets__pet1-food')
		petsPet1Food.src = animalInfo[randomAnimal[number]]['food'];
		petsPet1Food.alt = 'food';
		petsPet1Info.appendChild(petsPet1Food);

		let petsPet1H4 = document.createElement('h4')
		petsPet1H4.classList.add('pets__pet1-h4');
		petsPet1Text.appendChild(petsPet1H4);
		petsPet1H4.textContent = animalInfo[randomAnimal[number]]['name'];
		let petsPet1usualP = document.createElement('p')
		petsPet1Text.appendChild(petsPet1usualP);
		petsPet1usualP.textContent = animalInfo[randomAnimal[number]]['place'];

	}
	drawCard('pets__pet1', 0), drawCard('pets__pet2', 1), drawCard('pets__pet3', 2), drawCard('pets__pet4', 3), drawCard('pets__pet5', 4), drawCard('pets__pet6', 5)
}

let functionStatus = false;


// функция движения влево

function moveLeft() {
	document.querySelectorAll('.pets__photos')[0].style.left = '2000px';
	drawNewSlide();
	document.querySelectorAll('.pets__photos')[1].style.left = '-2000px';
}

function moveLeftNew() {
	document.querySelectorAll('.pets__photos')[1].style.left = '0px';

}

// функция движения вправо

function moveRight() {
	document.querySelectorAll('.pets__photos')[0].style.left = '-2000px';
	drawNewSlide();
	document.querySelectorAll('.pets__photos')[1].style.left = '2000px';
}
function moveRightNew() {
	document.querySelectorAll('.pets__photos')[1].style.left = '0px';
}

// функция удалить старый блок

function deleteOldBlock() {
	let parent = document.querySelector('.pets-block');
	let child = document.querySelector('.pets__photos');
	parent.removeChild(child);
	setTimeout(() => functionStatus = false, 1550);

}

// привязываю к кнопкам движение слайдов

buttonPrev.addEventListener('click', function () {
	if (functionStatus === false) {
		functionStatus = true;
		moveLeft();
		setTimeout(deleteOldBlock, 600);
		setTimeout(moveLeftNew, 100);
	}
}
)

buttonNext.addEventListener('click', function () {
	if (functionStatus === false) {
		functionStatus = true;
		moveRight();
		setTimeout(deleteOldBlock, 600);
		setTimeout(moveRightNew, 100);

	}
}
)

/* Бургер-меню */



const burgerMenu = document.querySelector('.header-burger')
const burgerTop = document.querySelector('.header-burger__top')
const burgerMiddle = document.querySelector('.header-burger__middle')
const burgerBottom = document.querySelector('.header-burger__bottom')
const headerBurgerBg = document.querySelector('.header__burger-bg')
const blockHeaderBg = document.querySelector('.block-header-bg')
const bamboo1 = document.querySelector('.bamboo1')
const bamboo2 = document.querySelector('.bamboo2')
const titleOne = document.querySelector('.header__one')
const additionalNav = document.querySelector('.additional__nav')
const h1Texthidden = document.querySelector('.h1 p:nth-child(2)')





function activateBurgerMenu() {
	burgerMenu.classList.toggle('header__burger__active');
	burgerTop.classList.toggle('header-burger__top__active');
	burgerMiddle.classList.toggle('header-burger__middle__active');
	burgerBottom.classList.toggle('header-burger__bottom__active');
	headerBurgerBg.classList.toggle('header__burger-bg__active');
	blockHeaderBg.classList.toggle('block-header-bg__active');
	titleOne.classList.toggle('block-header__logo-item__active');
	bamboo1.classList.toggle('bamboo__hidden');
	bamboo2.classList.toggle('bamboo2__visible');
	additionalNav.classList.toggle('additional__nav__active');
	h1Texthidden.classList.toggle('h1-active');
}

burgerMenu.addEventListener('click', activateBurgerMenu)
headerBurgerBg.addEventListener('click', function () {
	if (document.querySelector('.header__burger__active')) {
		activateBurgerMenu();
	}

}
)


/* ПОП-АП */




document.querySelector('.testimonials__blocks').addEventListener('click', (event) => {

	if (document.documentElement.clientWidth < 955) {

		if (!document.querySelector('.testimonials-block-border__active') && !document.querySelector('.header__burger-bg-white')) {

			let activeBlock = event.target;
			activeBlock.closest('.testimonials-block-border').classList.add('testimonials-block-border__active')
			drawPopUpCroos()

			document.querySelector('.testimonials-block-border__active .testimonials-block').classList.add('testimonials-block__active')
			document.querySelector('.testimonials-block-border__active .testimonials-block .testimonials-block__person-text').classList.add('testimonials-block__person-text__active')
			document.querySelector('.testimonials-block-border__active .testimonials__cross').classList.add('testimonials__cross__active')
			document.querySelector('.testimonials__blocks').classList.add('testimonials__blocks-active')

		}
	}
})



function drawPopUpCroos() {
	let testimonialsCross = document.createElement('div')
	testimonialsCross.classList.add('testimonials__cross');
	document.querySelector('.testimonials-block-border__active .testimonials-block__person-info').insertBefore(testimonialsCross, document.querySelector('.testimonials-block-border__active .testimonials-block__person-info').firstChild);

	let testimonialsCrossTop = document.createElement('div')
	testimonialsCrossTop.classList.add('testimonials__cross__top');
	testimonialsCross.appendChild(testimonialsCrossTop)

	let testimonialsCrossBottom = document.createElement('div')
	testimonialsCrossBottom.classList.add('testimonials__cross__bottom');
	testimonialsCross.appendChild(testimonialsCrossBottom)

	document.querySelector('.testimonials__cross').onclick = closePopUp;

	document.querySelector('.header__burger-bg').classList.add('header__burger-bg-white');

	document.querySelector('.header__burger-bg-white').onclick = closePopUp;
}

function closePopUp() {

	document.querySelector('.testimonials-block-border__active .testimonials-block').classList.remove('testimonials-block__active');
	document.querySelector('.testimonials-block-border__active .testimonials-block__person-text').classList.remove('testimonials-block__person-text__active');
	document.querySelector('.testimonials-block-border__active').classList.remove('testimonials-block-border__active');
	document.querySelector('.header__burger-bg').classList.remove('header__burger-bg-white');
	document.querySelector('.testimonials__blocks').classList.remove('testimonials__blocks-active')
	document.querySelector('.testimonials__cross').remove();


}


/* ОТЗЫВЫ карусель */

const testimonialsScroll = document.querySelector('.testimonials__scroll');
const testimonialsScrollRrogress = document.querySelector('.testimonials__scroll--progress');
const testimonialsBlocks = document.querySelector('.testimonials__blocks');
let quantityMove;
let prevPosition = 0;
let currentPosition = 1;

function updatePosition(e) {

	if (e.target != testimonialsScrollRrogress) {

		const testimonialsScrollWidth = parseInt(window.getComputedStyle(testimonialsScroll).width);
		const newPosition = e.offsetX;
		const countPercent = newPosition / testimonialsScrollWidth;

		quantityMove = Math.floor(newPosition / testimonialsScrollWidth * 100 / 12.5) - Math.floor(prevPosition / testimonialsScrollWidth * 100 / 12.5);
		const floor = Math.floor(countPercent * 100 / 12.5) * 12.5 + '%';
		testimonialsScrollRrogress.style.marginLeft = floor;

		if (prevPosition < newPosition) {
			moveTestimonialBack(quantityMove)
		} else {
			moveTestimonialForward(quantityMove)
		}

		prevPosition = e.offsetX;
	}
}

testimonialsScroll.addEventListener('click', updatePosition);



function moveTestimonialBack(move) {

	if (document.documentElement.clientWidth >= 1350) {
		testimonialsBlocks.style.left = parseInt(window.getComputedStyle(testimonialsBlocks).left) - 298 * move + 'px';
	} else {
		testimonialsBlocks.style.left = parseInt(window.getComputedStyle(testimonialsBlocks).left) - 325 * move + 'px';
	}
}

function moveTestimonialForward(move) {
	if (document.documentElement.clientWidth >= 1350) {
		testimonialsBlocks.style.left = parseInt(window.getComputedStyle(testimonialsBlocks).left) - 298 * move + 'px';
	} else {
		testimonialsBlocks.style.left = parseInt(window.getComputedStyle(testimonialsBlocks).left) - 325 * move + 'px';
	}
}

window.addEventListener('resize', function () {
	testimonialsBlocks.style.left = '0px';
	testimonialsScrollRrogress.style.marginLeft = '0px';
	prevPosition = 0;
})
