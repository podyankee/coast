$(document).ready(function() {
		$('.header__slider').slick({
				infinite: true,
				fade: true,
				prevArrow:
				'<svg class="icon icon-arrow-left slider-arrow slider-arrow__left"><use xlink: href = "assets/img/sprite.svg#arrow-left"></use></svg>',
				nextArrow: '<svg class="icon icon-arrow-right slider-arrow slider-arrow__right"><use xlink: href = "assets/img/sprite.svg#arrow-right"></use></svg>',
				asNavFor: '.slider-dots'
		});
		$('.slider-dots').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			asNavFor: '.header__slider'
		});
	});
