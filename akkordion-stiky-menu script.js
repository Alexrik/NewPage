jQuery(document).ready(function() {
	
	$('.wrapper>article').not(':first').hide();
	
	$('.wrapper>h1').click(function() {
		
		var FindArticle = $(this).next('article');
		var FindWrapper = $(this).closest('.wrapper');

		if (FindArticle.is('visible')) {

			FindArticle.slideUp('slow');

		} else {

			FindWrapper.find('>article').slideUp('slow');
			FindArticle.slideDown('slow');

		}
	}); //------------------------------------------------------------------------------------------------end click

	var navPos, winPos, navHeight;

	navPos = $('ul').offset().top;
		//$('.show-navPos').text(navPos); 

	navHeight = $('ul').outerHeight(true);

	$('<div class = "clone-ul"></div>').insertBefore('ul').css('height', navHeight).hide();

	$(window).scroll(function(){

		winPos = $(window).scrollTop();
		//$('.show-winPos').text(winPos);

		if (winPos >= navPos) {

			$('ul').addClass('fixed shadow');
			$('.clone-ul').show();

		} else {

			$('ul').removeClass('fixed shadow');
			$('.clone-ul').hide();

		}
	}); //-----------------------------------------------------------------------------------------------end scroll

});//end ready