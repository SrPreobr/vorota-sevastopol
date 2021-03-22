$(function () {

	'use strict';

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items:1,
		//autoWidth: true,
		nav: true,
		dots: true
	});

	$('.type_i ').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.content').eq($(this).index()).removeClass('hide').siblings('.content').addClass('hide');
	});

	$('.header_accec span').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		$('.content_2').eq($(this).index()).removeClass('hide').siblings('.content_2').addClass('hide');
	});

	$('.gallery').colorbox({
		rel:'gal',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});


	$('.content').eq(0).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal1',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content').eq(1).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal2',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content').eq(2).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal3',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content').eq(3).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal4',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content').eq(4).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal5',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content').eq(5).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal6',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(0).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal7',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(1).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal8',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(2).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal9',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(3).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal10',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(4).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal11',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.content_2').eq(5).find('.owl-item').not('.cloned').find('.item').colorbox({
		rel:'gal12',
		current: '{current} из {total}',
		opacity: 0.5,
		maxWidth: '90%'
	});

	$('.pult').colorbox();





});
