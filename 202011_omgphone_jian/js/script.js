$(function () {
    $i = 1

    var $f2menubarClone = $('#f2menubar').clone().css('opacity', 0).appendTo('.main')
    $f2menubarClone.find('.f2menu').removeClass('f2menu').addClass('f2menuO')
    console.log($f2menubarClone)
    var f2menubarHeight = $f2menubarClone.outerHeight(true)
    $f2menubarClone.remove()
    console.log(f2menubarHeight)

    $('#f2menubar').css('height', 30)

    $('.arr').click(function () {
        console.log($i)
        if ($i === 0) {
            $('.f2menubar,.f5menubar').animate({ height: '30px' }, 100)
            $(this).prev('ul').attr('class', 'f2menu')
            $('.arr').css({ transform: 'rotate(0deg)', transition: '0.2s ease' })
            $i = 1
        } else {
            $('.f2menubar,.f5menubar').animate({ height: f2menubarHeight }, 100)
            $(this).prev('ul').attr('class', 'f2menuO')
            $('.arr').css({ transform: 'rotate(180deg)', transition: '0.2s ease' })
            $i = 0
        }
    })

    $('.Rbtn02').click(function () {
        $('.RSkey').fadeIn()
        $('main').css({ overflow: 'hidden' })
        $('body').css({ overflow: 'hidden' })
    })

    $('body').on('click', '#onback', function () {
        $('.RSkey').fadeOut()
        $('main').css({ overflow: 'auto' })
        $('body').css({ overflow: 'auto' })
    })

    $('#onmenu').click(function () {
        $('.f2menubar1').animate({ height: '30px' }, 100)
        $('#closebtn').delay(1000).attr('style', 'margin-top:-10px;transform: rotate(0deg);transition: 1s ease')
        $('aside').slideDown()
    })

    /*商品規格開關按鈕*/
    $('#spec').click(function () {
        $('#specon').slideToggle(0)
    })
    /*商品規格增加打開用*/
    $('#addplus').click(function () {
        $('#specon').slideDown(0)
    })
    /*分享按鈕語法*/
    $('.shareclose').click(function () {
        $('#sharebtn').slideUp()
    })
    $('.Rbtn01').click(function () {
        $('#sharebtn').slideDown()
    })
    $('#gototop').click(function () {
        $('html,body').stop().animate({ scrollTop: '0px' }, 100)
    })

    var down = false
    var pos = null
    var current = $('.f7menu').scrollLeft()
    var move = 0
    $('.f7menu')
        .on('mousedown touchstart', function (event) {
            down = true
            pos = event.clientX
            current = $('.f7menu').scrollLeft()
        })
        .on('mousemove touchmove', function (event) {
            if (down) {
                move = pos - event.clientX
            }

            var dis = current + move
            if (dis < 0) dis = 0
            $(this).scrollLeft(dis)
        })

    $(document).on('mouseup touchend', function () {
        down = false
    })
})

$('.close').click(function () {
    $('aside').slideUp()
    $('#closebtn').attr('style', 'margin-top:-10px;')
})

$(document).ready(init)

function init() {
    $(window).scroll(windowscroll)
}
/*偵測目前卷軸位置改變上下BAR其他外觀*/
function windowscroll() {
    if ($(this).scrollTop() <= 50) {
        $('header').attr('class', ' ').stop()
        $('#gototop').stop().fadeOut()
    }
    if ($(this).scrollTop() > 51) {
        $('header').attr('class', 'scllto ').stop()
        $('#gototop').stop().fadeIn()
    }
    //Jimmy-start
    //功能: 捲軸到頂部及底部才顯示footer
    /*if($(this).scrollTop() > 10){
    	//隱藏底部
    	$("#gotobottom").stop().fadeOut();
    }
    if($(this).scrollTop()<=11 || $(this).scrollTop()>=$(document).height()-$(window).height()-100){
    	//顯示底部
    	$("#gotobottom").stop().fadeIn();
    }*/
    //Jimmy-end
    if ($(this).scrollTop() <= 50) {
        $('#f2menubar').attr('class', 'scllto2o f2menubar').stop()
    }
    if ($('#f2menubar').length > 0) {
        if ($(this).scrollTop() > $('#f2menubar').offset().top) {
            $('#f2menubar').attr('class', 'scllto2 f2menubar').stop()
        }
    }
}

/*以上首頁專用其他頁面語法放在這個下面沒有相關的對應會導致失效
首頁拍賣倒數計時*/
// $(function(){

// 	var note = $('#note'),
// 		ts = new Date(2012, 0, 1),
// 		newYear = true;

// 	if((new Date()) > ts){
// 		// The new year is here! Count towards something else.
// 		// Notice the *1000 at the end - time must be in milliseconds
// 		ts = (new Date()).getTime() + 10*24*60*60*1000;
// 		newYear = false;
// 	}

// 	$('#countdown').countdown({
// 		timestamp	: ts,
// 		callback	: function(days, hours, minutes, seconds){

// 			var message = "";

// 			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
// 			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
// 			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
// 			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

// 			if(newYear){
// 				message += "left until the new year!";
// 			}
// 			else {
// 				message += "left to 10 days from now!";
// 			}

// 			note.html(message);
// 		}
// 	});

// });
/*首頁賣出件數bar*/
// $(document).ready(function () {
//   var progressSelector = $(".progress-wrap");
//   progressSelector.each(function () {
//     var getPercent = $(this).attr("data-progresspercent");
//     var getSpeed = parseInt($(this).attr("data-speed"));
//     var getColor = $(this).attr("data-color");
//     var getHeight = $(this).attr("data-height");
//     var getWidth = $(this).attr("data-width");
//     $(this).css({ "height": getHeight, "width": getWidth });
//     $(this).find(".progress-bar").css({ "background-color": "#" + getColor }).animate({ width: getPercent + '%' }, getSpeed)
//   });
// });

/*產品單一或是三格呈現*/

// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 10,
//     // init: false,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 40,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         },
//         640: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         320: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//         }
//     }
// });

// var swiper = new Swiper('.swiper-container2', {
//     slidesPerView: 1,
//     spaceBetween: 50,
//     // init: false,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         1024: {
//             slidesPerView: 1,
//             spaceBetween: 40,
//         },
//         768: {
//             slidesPerView: 1,
//             spaceBetween: 30,
//         },
//         640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//         }
//     }
// });
