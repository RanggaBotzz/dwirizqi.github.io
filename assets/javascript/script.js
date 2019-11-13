// media screen menu
$(document).ready(function(){
	$('#open').click(function(){
		$('nav').addClass('slide');
		$('nav').removeClass('slideBack');
	});
	$('#close').click(function(){
		$('nav').removeClass('slide');
		$('nav').addClass('slideBack');
	});
});


// full screen menu
$(window).scroll(function(){
	var y = $(window).scrollTop();
	if( y >= 200){
		$('nav').css('background-color','#c23616');
		$('.menu-item').css('color','#fff');
		$('#brand-single').css('color','#fff');
	}else{
		$('nav').css('background-color','transparent')
	}
});

$(window).scroll(function(){
	let top = $(window).scrollTop();
	if(top < 200){
		$('#top').css('opacity','0');
	}else{
		$('#top').css('opacity','1');
	}
});

$(window).on('load', function(){
	$('.Hland').addClass('muncul');
	$('.Pland').addClass('muncul');
	$('.tryBtn').addClass('muncul')
});


// parallax setiap item
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if( wScroll > $('.wCard').offset().top - 300 ){
		$('.wCard .card').each(function(i){
			setTimeout(function(){
				$('.wCard .card').eq(i).addClass('show')
			}, 300 * (i+1));
		});
	}
});