$(function(){
	
	//回到顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>150){
			$('.return-top').fadeIn(300);
		}else{
			$('.return-top').fadeOut(300);
		}
	})
	$('.return-top').bind('click',function(){
		$('html,body').animate({scrollTop:0},300);
		return false
	})
})