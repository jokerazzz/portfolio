$(function (){

	$('.js-nav-menu-toggle').on('click', function(){
		$('.header_nav').toggleClass('header_nav-open');
	});
	$('html').on('click', function(e){
		if(!$(e.target).closest('.js-nav-menu').length &&
		($('.js-nav-menu').hasClass('header_nav-open'))){
		 $('.js-nav-menu').removeClass('header_nav-open');	
		}
	});
    VanillaTilt.init(document.querySelectorAll(".portfolio__item"), {
		max: 25,
		speed: 400
	});

	$('.block').smoove({offset: '30%'});

	


	

	
	$('#dg-container').gallery();
});

