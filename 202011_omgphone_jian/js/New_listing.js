

$(document).ready(init);
	function init(){
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



    $(".Rbtn02").click(function () {
			   $(".RSkey").fadeIn();
			   $("main").css({"overflow":"hidden"});
			   $("body").css({"overflow":"hidden"});
    });
	
    $(".onback").click(function () {
             $(".RSkey").fadeOut();
			 $("main").css({"overflow":"auto"});
			 $("body").css({"overflow":"auto"});
    });



  $(".divTableCell h7").click(function () {
			 $(this).find('h7').fadeToggle( 100 );
    });