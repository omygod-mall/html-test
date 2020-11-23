

$(document).ready(init);
	function init(){
		$(".useredit,.inpage,.inpage2").hide();
		$(window).scroll(windowscroll);	
		}		
	/*偵測目前卷軸位置改變上下BAR其他外觀*/
	function windowscroll(){
	if ($(this).scrollTop() <= 0) {
	$("header").attr('class',' ').stop();
	}
	if ($(this).scrollTop() > 1) {
	$("header").attr('class','scllto ').stop();
	}
}

