$(function () {

<!--加入照片-->
$( ".pluson" ).click(function() {
   $('.inpage').slideToggle();
});	
	
	
$i = 1;

    $(".arr").click(function () {
        if ($i === 0) {
             $(".f2menubar").animate({height: '30px'}, 100);
			 $(".arr").css({"transform":"rotate(0deg)","transition":"0.2s ease"});
            $i = 1;
        } else {
             $(".f2menubar").animate({height: '100%'}, 100);
			  $(".arr").css({"transform":"rotate(180deg)","transition":"0.2s ease"});
            $i = 0;
        }
    });
	




    $(".Rbtn02").click(function () {
			   $(".RSkey").fadeIn();
			   $("main").css({"overflow":"hidden"});
			   $("body").css({"overflow":"hidden"});
    });
	
    $("#onback").click(function () {
             $(".RSkey").fadeOut();
			 $("main").css({"overflow":"auto"});
			 $("body").css({"overflow":"auto"});
    });


    $("#onmenu").click(function () {
             $(".f2menubar1").animate({height: '30px'}, 100);
             $("#closebtn").delay(1000).attr("style","margin-top:-10px;transform: rotate(0deg);transition: 1s ease");
			 $('aside').slideDown();
    });
	
	
    $("#gototop").click(function () {
              $('html,body').stop().animate({scrollTop:'0px'}, 100);

    });
	
})

$('.close').click(function(){
	$('aside').slideUp();
    $("#closebtn").attr("style","margin-top:-10px;");
	});


$(document).ready(init);
	function init(){
		$(window).scroll(windowscroll);	
		}		
	/*偵測目前卷軸位置改變上下BAR其他外觀*/
	function windowscroll(){
	if ($(this).scrollTop() <= 100) {
	$("header").attr('class',' ').stop();
	$("#gototop").stop().fadeOut();
	}
	if ($(this).scrollTop() > 101) {
	$("header").attr('class','scllto ').stop();
	$("#gototop").stop().fadeIn();
	}
//Jimmy-start
	/*//功能: 捲軸到頂部及底部才顯示footer
	if($(this).scrollTop() > 10){
		//隱藏底部
		$("#gotobottom").stop().fadeOut();
	}
	if($(this).scrollTop()<=11 || $(this).scrollTop()>=$(document).height()-$(window).height()-100){
		//顯示底部
		$("#gotobottom").stop().fadeIn();
	}*/
//Jimmy-end
if ($(this).scrollTop() <= 100) {
     $("#f2menubar").attr('class','scllto2o f2menubar').stop();
    }
if ($(this).scrollTop() > $("#f2menubar").offset().top) {
     $("#f2menubar").attr('class','scllto2 f2menubar').stop();
    }
	

}



