
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
	bamboo1.classList.toggle('bamboo__hidden');
	bamboo2.classList.toggle('bamboo2__visible');
	titleOne.classList.toggle('block-header__logo-item__active');
	additionalNav.classList.toggle('additional__nav__active');


}

burgerMenu.addEventListener('click', activateBurgerMenu)
headerBurgerBg.addEventListener('click', function () {
	if (document.querySelector('.header__burger__active')) {
		activateBurgerMenu();
	}

}
)

/* Amount интерактив */

const slideContainerUl = document.querySelector('.slide-container-ul')
const slideContainerUlAll = document.querySelectorAll('.slide-container-ul li')



function deleteOrangeCircles() {
	const slideContainerAll = document.querySelectorAll('.slide-container-ul li div')
	for (let i = 0; i < slideContainerAll.length; i++) {
		slideContainerAll[i].remove()
	}
}

function addOrangeCircles(chosenParent) {
	let circleOne = document.createElement('div');
	circleOne.classList.add('one-start');
	chosenParent.append(circleOne)

	let circleTwo = document.createElement('div');
	circleTwo.classList.add('two-start');
	circleOne.append(circleTwo)

	function moveCircles() {
		document.querySelector('.one-start').classList.add('one');
		document.querySelector('.two-start').classList.add('two');
	}
	setTimeout(moveCircles, 100)
}

function changeColor() {
	const slidePositions = document.querySelectorAll('.slide-positions li')
	const slideContainerAll = document.querySelectorAll('.slide-container-ul li')

	for (let i = 0; i < slidePositions.length; i++) {
		slidePositions[i].style.color = 'black';
	}

	for (let i = 0; i < slideContainerAll.length; i++) {
		if (slideContainerAll[i].firstElementChild) {
			slidePositions[i].style.color = 'orange';
			let inputValue = +slidePositions[i].innerHTML.slice(1);
			document.querySelector('input').value = inputValue;
		}
	}
}


changeColor();

for (let i = 0; i < slideContainerUlAll.length; i++) {
	slideContainerUlAll[i].onclick = function (event) {
		deleteOrangeCircles();
		addOrangeCircles(event.target)
		changeColor()
	}
}

/* очистить инпут для ввода суммы и ограничить */


document.querySelector('input').addEventListener('click', function () {
	this.value = '';
})


document.querySelector('input').oninput = function () {
	this.value = this.value.substr(0, 4);
}


document.querySelector('input').addEventListener('input', function () {
	let numberValue = ['5000', '2000', '1000', '500', '250', '100', '50', '25']
	if (numberValue.includes(this.value)) {
		deleteOrangeCircles();
		addOrangeCircles(document.querySelectorAll('.slide-container-ul li')[numberValue.indexOf(this.value)])
		changeColor()
	} else {
		deleteOrangeCircles();
		const slidePositions = document.querySelectorAll('.slide-positions li')
		
		for (let i = 0; i < slidePositions.length; i++) {
			slidePositions[i].style.color = 'black';
		}
	}
})
