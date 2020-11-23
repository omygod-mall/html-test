$(function () {

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
	


 