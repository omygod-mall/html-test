

$(document).ready(init);
	function init(){
$('#paina02,#paina03,#paina04,#paina05,#paina06').hide();
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

function goin01(){$('#goin01').attr('class','hover');$('#goin02').attr('class','');$('#pain01').show();$('#pain02').hide();}
function goin02(){$('#goin02').attr('class','hover');$('#goin01').attr('class','');$('#pain02').show();$('#pain01').hide();}


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

function paina01(){$('#paina01').fadeIn();$('#paina02,#paina03,#paina04,#paina05,#paina06').hide();}
function paina02(){$('#paina02').fadeIn();$('#paina01,#paina03,#paina04,#paina05,#paina06').hide();}
function paina03(){$('#paina03').fadeIn();$('#paina01,#paina02,#paina04,#paina05,#paina06').hide();}
function paina04(){$('#paina04').fadeIn();$('#paina01,#paina03,#paina02,#paina05,#paina06').hide();}
function paina05(){$('#paina05').fadeIn();$('#paina01,#paina03,#paina04,#paina02,#paina06').hide();}
function paina06(){$('#paina06').fadeIn();$('#paina01,#paina03,#paina04,#paina05,#paina02').hide();}
