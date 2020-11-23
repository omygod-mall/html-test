$(function() {
    // $l = 1;
    // $("#allinfo").click(function () {
    // 	if ($l === 0) {
    // 		$(".f3menubar").animate({ height: '45px' }, 100);
    // 		$(".arr").css({ "transform": "rotate(0deg)", "transition": "0s ease" });
    // 		$l = 1; $i = 0;
    // 	} else {
    // 		$(".f3menubar").animate({ height: '100%' }, 100);
    // 		$("#showin02").hide(); $("#showin01").show();
    // 		$(".arr").css({ "transform": "rotate(0deg)", "transition": "0s ease" });
    // 		$l = 0; $i = 1;
    // 	}
    // });


    $k = 0;

    $('#infoT').stop().hide();
    $('#arr').attr('class', 'infoBimgs')


    $("#infoB").click(function() {
        if ($k === 0) {
            $('#infoT').stop().slideDown();
            $('#arr').attr('class', 'infoBimg');
            $k = 1;
        } else {
            $('#infoT').stop().slideUp();
            $('#arr').attr('class', 'infoBimgs')
            $k = 0;
        }
    });


    $l = 1;


    $(".Prbtn05h").click(function() {
        if ($l === 0) {
            $('#onf02').stop().hide();
            $('#onf01').stop().show();
            $(this).css({ "background-color": "#FFFFFF", "color": "#009999" });
            $l = 1;
        } else {
            $('#onf01').stop().hide();
            $('#onf02').stop().show();
            $(this).css({ "background-color": "#009999", "color": "#FFFFFF" });
            $l = 0;
        }
    });

    $(".Rbtn02").click(function() {
        $(".RSkey").fadeIn();
        $("main").css({ "overflow": "hidden" });
        $("body").css({ "overflow": "hidden" });
    });

    $("#onmenu").click(function() {
        $(".f3menubar1").animate({ height: '30px' }, 100);
        $("#closebtn").delay(1000).attr("style", "margin-top:-10px;transform: rotate(0deg);transition: 1s ease");
        $('aside').slideDown();
    });

    $("#gototop").click(function() {
        $('html,body').stop().animate({ scrollTop: '0px' }, 100);
    });

})

$('.close').click(function() {
    $('aside').slideUp();
    $("#closebtn").attr("style", "margin-top:-10px;");
});


$(document).ready(init);

function init() {
    $(window).scroll(windowscroll);
}
/*偵測目前卷軸位置改變上下BAR其他外觀*/
function windowscroll() {
    if ($(this).scrollTop() <= 50) {
        $("header").attr('class', ' ').stop();
        $("#gototop").stop().fadeOut();
    }
    if ($(this).scrollTop() > 51) {
        $("header").attr('class', 'scllto ').stop();
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
    if ($(this).scrollTop() <= 50) {
        $("#f3menubar").attr('class', 'scllto3o f3menubar').stop();
    }
    if ($(this).scrollTop() > $("#f3menubar").offset().top) {
        $("#f3menubar").attr('class', 'scllto3 f3menubar').stop();
    }

}







// 以上首頁專用其他頁面語法放在這個下面沒有相關的對應會導致失效
// 首頁拍賣倒數計時
// $(function () {

// 	var note = $('#note'),
// 		ts = new Date(2012, 0, 1),
// 		newYear = true;

// 	if ((new Date()) > ts) {
// 		// The new year is here! Count towards something else.
// 		// Notice the *1000 at the end - time must be in milliseconds
// 		ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
// 		newYear = false;
// 	}

// 	$('#countdown').countdown({
// 		timestamp: ts,
// 		callback: function (days, hours, minutes, seconds) {

// 			var message = "";

// 			message += days + " day" + (days == 1 ? '' : 's') + ", ";
// 			message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
// 			message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
// 			message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

// 			if (newYear) {
// 				message += "left until the new year!";
// 			}
// 			else {
// 				message += "left to 10 days from now!";
// 			}

// 			note.html(message);
// 		}
// 	});

// });
// 首頁賣出件數bar
$(document).ready(function() {
    var progressSelector = $(".progress-wrap");
    progressSelector.each(function() {
        var getPercent = $(this).attr("data-progresspercent");
        var getSpeed = parseInt($(this).attr("data-speed"));
        var getColor = $(this).attr("data-color");
        var getHeight = $(this).attr("data-height");
        var getWidth = $(this).attr("data-width");
        $(this).css({ "height": getHeight, "width": getWidth });
        $(this).find(".progress-bar").css({ "background-color": "#" + getColor }).animate({ width: getPercent + '%' }, getSpeed)
    });
});