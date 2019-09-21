$(document).ready(function(){
	var winHeight = $(window).innerHeight();
	if(!$('main-nav').hasClass('fixed')){
		$(window).scroll(function(){
	 	if($(window).scrollTop() > winHeight){
	 		$('.main-nav').addClass('navbar-fixed-top');
	 		$('.ham-menu span').css({'background':'#333'});
	 	}else{
	 		$('.main-nav').removeClass('navbar-fixed-top');
	 		$('.ham-menu span').css({'background':'#fff'});
	 	}
	});
	}
});

$(document).ready(function(){
	var nHeight = $('.main-nav').outerHeight();
	$('.h3').css({
		'padding-top':nHeight+'px',
	});
});

$(document).ready(function(){
	$('.ham-menu').click(function(){
		$(this).toggleClass('pressed');
		if($(this).hasClass('pressed')){
			$('.sidebar').addClass('menu-slide');	
		}else{
			$('.sidebar').removeClass('menu-slide');
		}
		
	});
});

$(document).ready(function(){
	var sideH = $('.main-nav').outerHeight();
	$('.sidebar').css({
		'height':'calc(100% - '+sideH+'px',
		'top':sideH+'px'
	});
});

$(document).ready(function(){
	$('.go-to-me').click(function(){
		$('html, body').animate({
			scrollTop: $('.body-brand').offset().top
		}, 1000);
	});
});

$(document).ready(function(){
	var uMargin = $('.user-img').css('margin-left');
	var uHeight = $('.user-img').innerWidth();
	$('.user-img').css({
		'height':uHeight+'px',
		'margin-top':uMargin
	});
});

$(document).ready(function(){
	var pHeight = $(window).innerHeight();
	var pH = pHeight / 2;
	$('.para-part').css({
		'height': pH+'px'
	});
});

$(document).ready(function(){
	var imgSize = $('.past-work img').css('width');
	$('.past-work a img ').css({
		'height':imgSize,
	});
});

$(document).ready(function(){
	$('.view-btn').on('click',function(){
		$('.past-hidden').toggleClass('past-view');
		$('.view-btn span').toggleClass('fa-angle-double-down  fa-angle-double-up');
	});
});


$(document).ready(function(){
	$('.go-to-up').click(function(){
		$('html, body').animate({
			scrollTop: $('.header-brand').offset().top
		}, 1000);
	});
});

$(document).ready(function(){
	$('.nav li').on('click',function(){
		var id = $(this).data('id');
		$('.nav li').removeClass('active');
		$(this).addClass('active');
		$('html,body').animate({
			scrollTop: $('#'+id).offset().top
		}, 1000);
	});
});

$(document).ready(function(){
	$(".image").on("click",function(){
    	var src = $(this).attr("src");
    	$(".modal-img").prop("src",src);
	});
});