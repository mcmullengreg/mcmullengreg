jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});


// Global Vars
var wrapper    = $("#site-wrapper"),
	menu       = $(".menu"),
	menuLinks  = $(".menu ul li a"),
	toggle     = $(".nav-toggle"),
	toggleIcon = $(".nav-toggle span"),
	sectionID = 1,
	phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
	twitter = /(^|[^@\w])@(\w{1,15})\b/,
	email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;


function toggleThatNav() {
	if (menu.hasClass("show-nav")) {
		if (!Modernizr.csstransforms) {
			menu.removeClass("show-nav");
			toggle.removeClass("show-nav");
			menu.animate({
				right: "-=300"
			}, 500);
			toggle.animate({
				right: "-=300"
			}, 500);
		} else {
			menu.removeClass("show-nav");
			toggle.removeClass("show-nav");
		}

	} else {
		if (!Modernizr.csstransforms) {
			menu.addClass("show-nav");
			toggle.addClass("show-nav");
			menu.css("right", "0px");
			toggle.css("right", "330px");
		} else {
			menu.addClass("show-nav");
			toggle.addClass("show-nav");
		} 
	}
}

function changeToggleClass() {
	toggleIcon.toggleClass("fa-times");
	toggleIcon.toggleClass("fa-bars");
}

$(function() {
	toggle.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();
		toggleThatNav();
		changeToggleClass();
	});
});