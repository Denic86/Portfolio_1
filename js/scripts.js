// Custom Scripts

let header = document.querySelector('.header');
let burgerButton = document.querySelector('.header__line');
let mainBody = document.querySelector('.main__body');
let wrapper = document.querySelector('.wrapper');
const mediaQuery = window.matchMedia('(max-width: 768px)');
if (header) {
	header.addEventListener("click", function (e) {
		let target = e.target
		if (target.classList.contains('header__line')) {
			if (mediaQuery.matches && (!(header.classList.contains('-active')))) {
				mainBody.classList.add('-locked');
			} else {
				mainBody.classList.remove('-locked');
			}
			header.classList.toggle('-active')
		};

		if (target.classList.contains("-scrollTo")) {
			let hrefTarget = target.getAttribute("href")
			let divScrollTo = document.querySelector(`${hrefTarget}`)
			scrollTo(divScrollTo)
			e.preventDefault();
		};


		if (window.innerWidth < 768) {
			if (target.classList.contains('-scrollTo')) {
				closeMenu()

			}
		};

	});
};

function scrollTo(div) {
	div.scrollIntoView({
		block: `center`,
		behavior: 'smooth',
	})
}

// close Menu
let winHeight = window.innerHeight;
let winWidth_2 = document.documentElement.clientWidth
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
	.test(navigator.userAgent)) {
	window.addEventListener('resize', function () {
		let winWidthNew = window.winHeight;
		if (!(winWidthNew === winHeight)) {
			closeMenu()
			winHeight = winWidthNew;
		}
	});
}
function closeMenu() {
	if (header.classList.contains('-active')) {
		header.classList.remove('-active');
		if (mainBody.classList.contains('-locked')) {
			mainBody.classList.remove('-locked');
		}
	}
}
// right padding
let rp = document.querySelectorAll('.-rp')
function rightPadding() {
	let winWidth = window.innerWidth;
	console.log(winWidth)
	let winWidth_2 = document.documentElement.clientWidth
	console.log(winWidth_2)
	if (winWidth != winWidth_2) {
		mainBody.style.paddingRight = winWidth - winWidth_2 + "px"
		console.log(105)
	}
}
function removeRightPadding() {
	if (mainBody.style.paddingRight) {
		mainBody.style.paddingRight = ""
	}
}

// login
let loginAppellation = document.querySelector('.login__appellation');
let loginBtns = document.querySelector('.login__bnts')
let loginRegistration = document.querySelector('.login__registration');
let loginEntry = document.querySelector('.login__entry');
let loginEntryVk = document.querySelector('.login__entry-vk');
let formRegistration = document.querySelector('.login__form-registration');
let formEntry = document.querySelector('.login__form-entry');
if (loginAppellation) {
	loginAppellation.addEventListener("click", function (e) {
		let targetElement = e.target
		if (targetElement.classList.contains('login__registration')) {
			if (loginEntry.classList.contains("-appellation_color-ff")) {
				loginEntry.classList.remove("-appellation_color-ff")
			};
			loginRegistration.classList.add('-appellation_color-ff');
			loginBtns.classList.remove('login__bnts_revers')
			loginEntryVk.style.display = "none"
			formEntry.style.display = "none"
			formRegistration.style.display = "block"
		};
		if (targetElement.classList.contains('login__entry')) {
			if (loginRegistration.classList.contains("-appellation_color-ff")) {
				loginRegistration.classList.remove("-appellation_color-ff")
			};
			loginBtns.classList.add('login__bnts_revers')
			loginEntry.classList.add('-appellation_color-ff');
			loginEntryVk.style.display = "flex"
			formEntry.style.display = "block"
			formRegistration.style.display = "none"
		}
	});
};
// 
let doc = document.documentElement

window.addEventListener('scroll', function () {
	if (doc.clientWidth > 768) {
		if (window.pageYOffset > 10) {
			header.classList.add('-header-padding');
		}
		else {
			header.classList.remove('-header-padding');
		}
	}
});

// popup
let popupLink = document.querySelectorAll('.-popup-link')

if (popupLink.length > 0) {
	popupLink.forEach(element => {
		let hrefAttrPopup = element.getAttribute('href');
		let popup = document.querySelector(hrefAttrPopup);
		if (popup) {
			element.addEventListener("click", function (e) {
				popupOpen(popup)
				e.defaultPrevented();
			});
		}
	});
};
let bigZindex;
let itemZindex;
function popupOpen(item) {
	let popupActive = document.querySelectorAll('.popup.-active');
	if ((header.classList.contains('-active')) && (window.innerWidth < 769)) {
		header.classList.remove('-active')
	}
	if (!(mainBody.classList.contains('-locked'))) {
		rightPadding()
		mainBody.classList.add('-locked')
	}
	if (popupActive.length === 0) {
		bigZindex = Number(getComputedStyle(item).zIndex);
		itemZindex = Number(getComputedStyle(item).zIndex);
	}

	if ((popupActive.length > 0)) {
		console.log(typeof bigZindex)
		itemZindex = Number(getComputedStyle(item).zIndex);
		if (bigZindex >= itemZindex) {
			item.style.zIndex = bigZindex + 1;
			bigZindex = Number(item.style.zIndex);
		} else {
			if (bigZindex < itemZindex) {
				bigZindex = Number(getComputedStyle(item).zIndex);
			}
		}
	}
	item.classList.add("-active");
	popupClose();
};
function popupClose() {
	let popupActive = document.querySelectorAll('.popup.-active');
	if (popupActive.length > 0) {
		popupActive.forEach(element => {
			element.addEventListener("click", function (e) {
				let targetEl = e.target;
				if ((targetEl.closest('.-popup__close')) || (!(targetEl.closest('.popup__block')))) {
					element.classList.remove('-active');
					if (popupActive.length === 1) {
						mainBody.classList.remove('-locked');
						removeRightPadding()
					}
				}
			});
		});

	}

}


// счетчик символов
const feedbackPopupTextarea = document.querySelector('.feedback-popup__input_textarea');


if (feedbackPopupTextarea) {
	const feedbackPopupTextareaMax = feedbackPopupTextarea.getAttribute("maxlength");
	const feedbackPopupTextareaTotal = document.querySelector('.counter__total');
	const feedbackPopupTextareaWritten = document.querySelector('.counter__written');
	feedbackPopupTextareaTotal.innerHTML = feedbackPopupTextareaMax;
	feedbackPopupTextarea.addEventListener('input', function () {
		feedbackPopupTextareaWritten.innerHTML = feedbackPopupTextarea.value.length
	});
};;
// Custom scripts

