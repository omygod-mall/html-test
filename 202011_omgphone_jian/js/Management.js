$(document).ready(init);

function init() {
    // $(".useredit,.inpage,.inpage2").hide();
    $(".useredit,.inpage").hide();
    $(window).scroll(windowscroll);
}
/*偵測目前卷軸位置改變上下BAR其他外觀*/
function windowscroll() {
    if ($(this).scrollTop() <= 0) {
        $("header").attr('class', ' ').stop();
    }
    if ($(this).scrollTop() > 1) {
        $("header").attr('class', 'scllto ').stop();
    }
}



$(".Rbtn07").click(function() {
    $(".useredit").stop().fadeToggle();
});

$(".pluson").click(function() {
    $(this).next('.inpage').slideToggle(0);
});
$(".pluson2").click(function() {
    // $(this).next('.inpage2').slideToggle(0);
});

$(".Mclosebtn h1").click(function() {
    $(this).prev(".Monoff").slideToggle();
    $(this).find("div").fadeToggle();

});