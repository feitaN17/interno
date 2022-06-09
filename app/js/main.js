import { Swiper, EffectFade, Autoplay, EffectCards, EffectCoverflow, Pagination } from 'swiper'
Swiper.use([EffectFade, Autoplay, EffectCards, EffectCoverflow, Pagination])

import MicroModal from 'micromodal'
import SmoothScroll from 'smooth-scroll'
import WOW from 'wow.js'

document.addEventListener('DOMContentLoaded', () => {
	new WOW().init()

	$(window).scroll(function () {
		var target = $(this).scrollTop()

		if (target == 0) {
			$('.up').removeClass('up--active')
		} else {
			$('.up').addClass('up--active')
		}
	})

	const scroll = new SmoothScroll('a[href*="#"]', {
		speed: 300,
	})

	MicroModal.init({
		openTrigger: 'data-micromodal-open',
		closeTrigger: 'data-micromodal-close',
		disableFocus: true,
		disableScroll: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
	})

	const swiper = new Swiper('.swiper', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
	})

	const reviewsSwiper = new Swiper('.reviews-swiper', {
		effect: 'coverflow',
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	const burgerBtn = document.querySelector('.burger-btn')
	const burgerMenu = document.querySelector('.burger-menu')
	const overlay = document.querySelector('.overlay')
	burgerBtn.addEventListener('click', () => {
		if (!burgerMenu.classList.contains('burger-menu--active')) {
			document.querySelector('html').style.overflowY = 'hidden'
		} else {
			console.log(1)
			document.querySelector('html').style.overflowY = 'auto'
		}
		burgerMenu.classList.toggle('burger-menu--active')
		burgerBtn.classList.toggle('burger-btn--active')
		overlay.classList.toggle('overlay--active')
	})
	overlay.addEventListener('click', () => {
		burgerMenu.classList.remove('burger-menu--active')
		burgerBtn.classList.remove('burger-btn--active')
		overlay.classList.remove('overlay--active')
		document.querySelector('html').style.overflowY = 'auto'
	})
})
