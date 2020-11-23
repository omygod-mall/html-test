$(document).ready(init);
	function init(){
		
		  $('html,body').delay(0).animate({scrollTop:1}, 0);
          $('html,body').delay(100).animate({scrollTop:0}, 0);
		
		$(".inmember,.popup1,.cashbg").hide();//帳戶明細預先隱藏
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

	
		
$('.cashbtn').click(function(){
		$('.cashbg').fadeIn();
	});	
		
		
}

	
	
	$("#btcash01").click(function () {
			   $("#btcash01in").fadeIn();
		       $("#btcash02in").hide();
    });
   $("#btcash02").click(function () {
			   $("#btcash02in").fadeIn();
		       $("#btcash01in").hide();
    });
	
	
      $(".Rbtn02").click(function () {
			   $(".RSkey").fadeIn();
			   $("main").css({"overflow":"hidden"});
			   $("body").css({"overflow":"hidden"});
    });
	
    $("#onback2").click(function () {
             $(".RSkey").fadeOut();
			 $("main").css({"overflow":"auto"});
			 $("body").css({"overflow":"auto"});
    });
	
	

 
$('.cashbtn2').click(function(){
		$('.teambg').fadeIn();
	}); 

$('.cashbg span,.cashbg2 span').click(function(){
		cashbgclase();
	});



function cashbgclase(){$('.cashbg,.cashbg2').fadeOut();}

function editinon(){$('.editin').fadeIn();}
function editinoff(){$('.editin').fadeOut();}


$i = 0;

    $("#cashbanner").click(function () {
        if ($i === 0) {
           $("#cashbanner").attr("style","background-color: #cd0067; color: #FFF;padding:5% 7%; font-size: 1.2em; margin-top: 5%; display: block; cursor: pointer; text-decoration: none!important");
		   $("#inpage01").hide();
		   $("#inpage02,.inmember").show();
            $i = 1;
        } else {
            $("#cashbanner").attr("style","padding:5% 7%; background-color: #F1F1F1!important; font-size: 1.2em!important; margin-top: 5%; display: block; color: #333!important; cursor: pointer; text-decoration: none!important");
		   $("#inpage02,.inmember").hide();
		   $("#inpage01").show();
            $i = 0;
        }
    });	




$l = 1;
	

    $(".Prbtn05h").click(function () {
        if ($l === 0) {
   $('#onf02').stop().hide();
   $('#onf01').stop().show();
	$(this).css({"background-color":"#FFFFFF","color":"#009999"});
            $l = 1;
        } else {
   $('#onf01').stop().hide();
   $('#onf02').stop().show();
	$(this).css({"background-color":"#009999","color":"#FFFFFF"});
            $l = 0;
        }
    });




$z = 0;
	

    $(".arrteam").click(function () {
        if ($z === 0) {
	$(this).css({"transform":"rotate(0deg)","transition":"0.4s"});
	$(".inputscroll").slideDown();		
            $z = 1;
        } else {
	$(this).css({"transform":"rotate(180deg)","transition":"0.4s"});
	$(".inputscroll").slideUp();	
            $z = 0;
        }
    });




function pupon(){$(".popup").fadeIn();
			   }

function pupTeam(){
	           $(".teambg").fadeIn();
			   $("main").css({"overflow":"hidden"});
			   $("body").css({"overflow":"hidden"});
			   }
function pupTeamoff(){
	           $(".teambg").fadeOut();
			   $("main").css({"overflow":"auto"});
			   $("body").css({"overflow":"auto"});
			   }


$(".teambtn,.teambtn2").click(function () {
			 $(".popup").fadeOut();
			   
    });


$(".safeclose").click(function () {
			   $(".safe2").slideUp();
    });



function btn01(){$("#pain02").hide();$("#pain01").show();}
function btn02(){$("#pain01").hide();$("#pain02").show();}