$('.nav-toggle').click(function(){
	console.log($(this));
	$(this).toggleClass('open');
	$(".nav").slideToggle();
});