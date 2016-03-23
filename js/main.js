$('.nav-toggle').click(function(){
	console.log($(this));
	$(this).toggleClass('open');
	$(".nav").slideToggle();
});

if ( window.location.hash ) {
    var hash = window.location.hash,
        $hash = $(hash);

    $hash.removeAttr('id');
    $hash.before('<div id="'+hash.slice(1)+'" class="hashlink"></div>');
    window.location.hash = hash;
}
