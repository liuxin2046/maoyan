$(function(){
	
	//选项卡切换
	$('.subnav li').bind('click',function(){
		var _index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-item').eq(_index).show().siblings().hide();
	})

})