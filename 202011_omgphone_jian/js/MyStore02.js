
$(function () {


	
	
$l = 1;

    $("#allinfo").click(function () {
        if ($l === 0) {
             $(".f3menubar").animate({height: '45px'}, 100);
			$(".arr").css({"transform":"rotate(0deg)","transition":"0s ease"});
            $l = 1;
        } else {
             $(".f3menubar").animate({height: '100%'}, 100);
			$("#showin02").hide();$("#showin01").show();
            $l = 0;
        }
    });
	
	
$k = 0;
	
$('#infoT').stop().hide();
$('#arr').attr('class','infoBimgs')   
	

    $("#infoB").click(function () {
        if ($k === 0) {
     $('#infoT').stop().slideDown();
	$('#arr').attr('class','infoBimg');
            $k = 1;
        } else {
   $('#infoT').stop().slideUp();
	$('#arr').attr('class','infoBimgs')    
            $k = 0;
        }
    });
	


	
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
             $(".f3menubar1").animate({height: '30px'}, 100);
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
     $("#f3menubar").attr('class','scllto3o f3menubar').stop();
    }
if ($(this).scrollTop() > $("#f3menubar").offset().top) {
     $("#f3menubar").attr('class','scllto3 f3menubar').stop();
    }
	

}

	




