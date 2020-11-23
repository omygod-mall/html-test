

$(document).ready(init);
	function init(){
		allmain()
		$("#add").css({"overflow":"hidden"});
		
		
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
function allmain(){$("#addMark,#addList").css({"overflow":"hidden"}).hide();$("#allmain").css({"overflow":"auto"}).show();$('html,body').animate({scrollTop:0}, 0);}
function addList(){$("#addMark,#allmain").css({"overflow":"hidden"}).hide();$("#addList").css({"overflow":"auto"}).show();$('#addList').animate({scrollTop:0}, 0);}
function addMark(){$("#addList,#allmain").css({"overflow":"hidden"}).hide();$("#addMark").css({"overflow":"auto"}).show();$('#addMark').animate({scrollTop:0}, 0);}


<!--部分共用開關-->
$( ".btnhov .fa-angle-right" ).click(function() {
   $(this).find(' + div').slideToggle(0);
});

<!--加入照片-->
$( ".pluson" ).click(function() {
   $('.inpage').slideDown(0);
});
<!--商品規格開關按鈕-->
$( "#spec" ).click(function() {
   $("#specon").slideToggle(0);
});
<!--商品規格增加打開用-->
$( "#addplus" ).click(function() {
   $('#specon').slideDown(0);
});


$( ".paon" ).click(function() {
   $(this).find('+div').slideToggle(0);
});


$( ".btnhov .fa-angle-right" ).click(function() {
   $(this).find('div').slideToggle(0);
});

$( ".inshow" ).click(function() {
   $(this).find('+div').slideToggle(0);
});

<!--多件優惠-->
$( "#addplus2" ).click(function() {
   $('.inpage2').slideDown(0);
});
$( ".addplus2" ).click(function() {
   $('.inpage2').slideToggle(0);
});


