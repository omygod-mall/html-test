

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



<!--商品規格開關按鈕-->
$( ".btnhov .fa-angle-right" ).click(function() {
   $(this).find(' + div').slideToggle(0);
});

$( ".inbtn" ).click(function() {
   $(this).find('div').slideToggle(0);
});
<!--商品規格增加打開用-->
$( "#addplus" ).click(function() {
   $('.btnhov.addplus .inpage').slideDown(0);
});
$( "#addplus2" ).click(function() {
   $('.inpage2').slideDown(0);
});

<!--商品分類第二層-->
$( ".btnhov03" ).click(function() {
   $(this).find('div').slideToggle(0);
});
