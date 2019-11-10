$(document).ready(function() {
		$('.header__slider').slick({
				infinite: true,
				fade: true,
				prevArrow:
				'<svg class="icon icon-arrow-left slider-arrow slider-arrow__left"><use xlink: href = "assets/img/sprite.svg#arrow-left"></use></svg>',
				nextArrow: '<svg class="icon icon-arrow-right slider-arrow slider-arrow__right"><use xlink: href = "assets/img/sprite.svg#arrow-right"></use></svg>',
				asNavFor: '.slider-dotshead'
		});
		$('.slider-dotshead').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			asNavFor: '.header__slider'
		});
		$('.surf-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow:
				'<svg class="icon icon-arrow-left slider-arrow slider-arrow__left"><use xlink: href = "assets/img/sprite.svg#arrow-left"></use></svg>',
				nextArrow: '<svg class="icon icon-arrow-right slider-arrow slider-arrow__right"><use xlink: href = "assets/img/sprite.svg#arrow-right"></use></svg>',
				asNavFor: '.slider-map'
		});
		$('.slider-map').slick({
			slidesToShow: 8,
			slidesToScroll: 1,
			asNavFor: '.surf-slider',
			focusOnSelect: true
		});

		$('.holder__slider, .shop__slider').slick({
			infinite: true,
			fade: true,
			prevArrow: '<svg class="icon icon-arrow-left slider-arrow slider-arrow__left"><use xlink: href = "assets/img/sprite.svg#arrow-left"></use></svg>',
			nextArrow: '<svg class="icon icon-arrow-right slider-arrow slider-arrow__right"><use xlink: href = "assets/img/sprite.svg#arrow-right"></use></svg>'
		});


$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="assets/img/plus.svg" alt="plus sign"></div><div class="quantity-button quantity-down"><img src="assets/img/minus.svg" alt="minus sign"></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
	var spinner = $(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

	btnUp.click(function() {
		var oldValue = parseFloat(input.val());
		if (oldValue >= max) {
			var newVal = oldValue;
		} else {
			var newVal = oldValue + 1;
		}
		spinner.find("input").val(newVal);
		spinner.find("input").trigger("change");
	});

btnDown.click(function() {
	var oldValue = parseFloat(input.val());
	if (oldValue <= min) {
		var newVal = oldValue;
	} else {
		var newVal = oldValue - 1;
	}
	spinner.find("input").val(newVal);
	spinner.find("input").trigger("change");
});

});

$('.quantity-button').on('click', () => {
	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

	$('.summ').html('$' + summ);
});


let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

$('.summ').html('$' + summ);

$('.surfboard-box__circle').on('click', function() {
	$(this).toggleClass('active');
});

	});
