$(function() {
    $('.popup,.useredit').hide();
    $i = 1;
    $(".arr").click(function() {
        if ($i === 0) {
            $(".f2menubar").animate({ height: '30px' }, 100);
            $(".arr").css({ "transform": "rotate(0deg)", "transition": "0.2s ease" });
            $i = 1;
        } else {
            $(".f2menubar").animate({ height: '100%' }, 100);
            $(".arr").css({ "transform": "rotate(180deg)", "transition": "0.2s ease" });
            $i = 0;
        }
    });

    $s = 1;
    $(".downbtn").click(function() {
        if ($s === 0) {
            $(this).find("span").css({ "transform": "rotate(180deg)", "animation": "rotating 0.5s" })
            $(this).find("+h8").slideUp();
            $s = 1;
        } else {
            $(this).find("span").css({ "transform": "rotate(0deg)", "animation": "rotating2 0.5s" })
            $(this).find("+h8").slideDown();
            $s = 0;
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


    /*分享按鈕語法*/
    $(".shareclose").click(function() {
        $('#sharebtn').slideUp();
    });

    $(".btnshare").click(function() {
        $('#sharebtn').slideDown();
    });


    // $("#addcar").click(function() {
    //     $("#mesgon").slideToggle(100);
    // });


    $(".safeclose").click(function() {
        $(".safe2").slideUp();
    });

    $(".Rbtn02").click(function() {
        $(".RSkey").fadeIn();
        $(".threebtn").hide();
        $("main").css({ "overflow": "hidden" });
        $("body").css({ "overflow": "hidden" });
    });


    $("#onback2").click(function() {
        $(".RSkey").fadeOut();
        $(".threebtn").show();
        $("main").css({ "overflow": "auto" });
        $("body").css({ "overflow": "auto" });
    });




    $(".popclose").click(function() {
        $(".popup").fadeOut();
        $("main").css({ "overflow": "auto" });
        $("body").css({ "overflow": "auto" });

    });

    $("#re02").click(function() { $('html,body').stop().animate({ scrollTop: $('#re02in').offset().top - 100 }, 500); });
    $("#re03").click(function() { $('html,body').stop().animate({ scrollTop: $('#re03in').offset().top - 100 }, 500); });

    $("#onmenu").click(function() {
        $(".f2menubar1").animate({ height: '30px' }, 100);
        $("#closebtn").delay(1000).attr("style", "margin-top:-10px;transform: rotate(0deg);transition: 1s ease");
        $('aside').slideDown();
    });

    $("#gototop").click(function() {
        $('html,body').stop().animate({ scrollTop: '0px' }, 100);

    });

})


$(".closebtn").click(function() {
    shopoff();
    $(".popup").fadeOut();
});



$(".Rbtn07").click(function() {
    $(".useredit").stop().fadeToggle();

});
$(".main,inPrtxt").click(function() {
    $(".useredit").stop().fadeOut();

});





function pupon() {
    $(".popup").fadeIn();
    $("main").css({ "overflow": "hidden" });
    $("body").css({ "overflow": "hidden" });


}

function shopoff() {
    $(".shopbg").fadeOut();
    $("main").css({ "overflow": "auto" });
    $("body").css({ "overflow": "auto" });
}

function addcar() {
    $(".shopbg").fadeIn();
    $("#addcar").show();
    $("#addnow").hide();
    $("main").css({ "overflow": "hidden" });
    $("body").css({ "overflow": "hidden" });
}

function addnow() {
    $(".shopbg").fadeIn();
    $("#addcar").hide();
    $("#addnow,.snin").show();
    $("main").css({ "overflow": "hidden" });
    $("body").css({ "overflow": "hidden" });
}


function shopbg() { $('.shopbg').fadeToggle(); }




$('.close').click(function() {
    $('aside').slideUp();
    $("#closebtn").attr("style", "margin-top:-10px;");
});


$(document).ready(init);

function init() {
    $(window).scroll(windowscroll);
}

function windowscroll() {
    if ($(this).scrollTop() <= 0) {
        $("#gototop").stop().hide();
        $("header").attr('class', ' ').stop();
    }
    if ($(this).scrollTop() > 1) {
        $("#gototop").stop().show();
        $("header").attr('class', 'scllto ').stop();
    }



}




$(".teambtn,.teambtn2").click(function() {
    $(".popup").fadeOut();
    $("main").css({ "overflow": "auto" });
    $("body").css({ "overflow": "auto" });

});