$(document).ready(function() {
	// INIT
	backToTop();
	new WOW().init();
	menu_mobile();

	// FUNCTION
});

function backToTop() {
	if ($('#back_to_top').length) {
	    var scrollTrigger = 100, // px
	        backToTop = function () {
	            var scrollTop = $(window).scrollTop();
	            if (scrollTop > scrollTrigger) {
	                $('#back_to_top').fadeIn();
	            } else {
	                $('#back_to_top').fadeOut();
	            }
	        };
	    backToTop();
	    $(window).on('scroll', function () {
	        backToTop();
	    });
	    $('#back_to_top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
}

function menu_mobile () {
	// document.getElementById('butn-menu-top').addEventListener("click", function() {
	// 	this.classList.toggle("is-active");
	// 	document.getElementById('wrap-menu-top').hasClass(a, 'class-desu')
	// }, false);

	$('#butn-menu-top').on('click', function () {
		$(this).toggleClass('is-active')
		$('#wrap-menu-top').toggleClass('is-active')
	});
}
