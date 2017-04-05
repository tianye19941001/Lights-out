
$(document).ready(function(){
	var lignts = $('.deathlight');
	lignts.click(function(){
		if ($(this).parent().hasClass('active')) {
			if ($(this).hasClass('diasbled')) {
				return false;
			}else{
				if($(this).hasClass('off')) {
					$(this).removeClass('off').addClass('on');
				}else{
					$(this).removeClass('on').addClass('off');
				}
			}
		}else{
			
			$(this).parent().addClass('active').siblings().removeClass('active');
			if ($(this).hasClass('diasbled')) {
				return false;
			}else{
				if($(this).hasClass('off')) {
					$(this).removeClass('off').addClass('on');
				}else{
					$(this).removeClass('on').addClass('off');
				}
			}
		}
	})
});