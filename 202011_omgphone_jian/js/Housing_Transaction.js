$(document).ready(init);
	function init(){
		$("#addMark01,#addMark02,#addMark03,.useredit").hide();
		
		
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
function addMark(){$("#addMark").show();$("#addMark01,#addMark02,#addMark03").hide();}	
function addMark01(){$("#addMark01").show();$("#addMark02,#addMark,#addMark03").hide();}
function addMark02(){$("#addMark02").show();$("#addMark01,#addMark,#addMark03").hide();}
function addMark03(){$("#addMark03").show();$("#addMark01,#addMark,#addMark02").hide();}

$(".Rbtn07").click(function () {
	$(".useredit").stop().fadeToggle();
	
	});	


