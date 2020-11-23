$(function() {
    $('.Rbtn02').click(function() {
        $('.RSkey').fadeIn()
        $('main').css({ overflow: 'hidden' })
        $('body').css({ overflow: 'hidden' })
    })

    $('#onback2').click(function() {
        $('.RSkey').fadeOut()
        $('main').css({ overflow: 'auto' })
        $('body').css({ overflow: 'auto' })
    })

    $('.shoptxt,.shopbtn h4').hide()
    $('.shopbtn h3').show()

    $('.shopbtn h4').click(function() {
        $(this).hide()
        $(this).prev('h3').show()
        $(this).closest('.shoppcar').find('.shoptxt').hide()
        $(this).closest('.shoppcar').prev('.div2TableCell').find('.combobox').prop('disabled', true)
    })




    // $('.shobtn').click(function() {

    //     $(this).closest('.shoppcar').find('h4').hide()
    //     $(this).closest('.shoppcar').find('h3').show()
    //     $(this).closest('.shoppcar').find('.shoptxt').hide()
    //     $(this).closest('.shoppcar').prev('.div2TableCell').find('.combobox').prop('disabled', true)
    // })




    $('.shopbtn h3').click(function() {
        $(this).hide()
        $(this)
            .next('h4')
            .show()
        $(this)
            .closest('.shoppcar')
            .find('.shoptxt')
            .show()
        $(this)
            .closest('.shoppcar')
            .prev('.div2TableCell')
            .find('.combobox')
            .prop('disabled', false)
    })

    $('.popmes').on('click', function() {
        $(this)
            .find('.popmestext')
            .toggleClass('show')
    })
})

// $(function() {
//     // This button will increment the value
//     // $('.qtyplus').click(function(e) {
//     //         // Stop acting like a button
//     //         e.preventDefault()
//     //             // Get the field name
//     //         fieldName = $(this).attr('field')
//     //             // Get its current value
//     //         var currentVal = parseInt($('input[name=' + fieldName + ']').val())
//     //             // If is not undefined
//     //         if (!isNaN(currentVal)) {
//     //             // Increment
//     //             $('input[name=' + fieldName + ']').val(currentVal + 1)
//     //         } else {
//     //             // Otherwise put a 0 there
//     //             $('input[name=' + fieldName + ']').val(0)
//     //         }
//     //     })
//     //     // This button will decrement the value till 0
//     // $('.qtyminus').click(function(e) {
//     //     // Stop acting like a button
//     //     e.preventDefault()
//     //         // Get the field name
//     //     fieldName = $(this).attr('field')
//     //         // Get its current value
//     //     var currentVal = parseInt($('input[name=' + fieldName + ']').val())
//     //         // If it isn't undefined or its greater than 0
//     //     if (!isNaN(currentVal) && currentVal > 0) {
//     //         // Decrement one
//     //         $('input[name=' + fieldName + ']').val(currentVal - 1)
//     //     } else {
//     //         // Otherwise put a 0 there
//     //         $('input[name=' + fieldName + ']').val(0)
//     //     }
//     // })
// })

var x, i, j, selElmnt, a, b, c
    /*look for any elements with the class "custom-select2":*/
x = document.getElementsByClassName('custom-select2')
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0]
        /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement('DIV')
    a.setAttribute('class', 'select-selected')
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
    x[i].appendChild(a)
        /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement('DIV')
    b.setAttribute('class', 'select-items select-hide')
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
        c = document.createElement('DIV')
        c.innerHTML = selElmnt.options[j].innerHTML
        c.addEventListener('click', function(e) {
            /*when an item is clicked, update the original select box,
        and the selected item:*/
            var y, i, k, s, h
            s = this.parentNode.parentNode.getElementsByTagName('select')[0]
            h = this.parentNode.previousSibling
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i
                    h.innerHTML = this.innerHTML
                    y = this.parentNode.getElementsByClassName('same-as-selected')
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute('class')
                    }
                    this.setAttribute('class', 'same-as-selected')
                    break
                }
            }
            h.click()
        })
        b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener('click', function(e) {
        /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation()
        closeAllSelect(this)
        this.nextSibling.classList.toggle('select-hide')
        this.classList.toggle('select-arrow-active')
    })
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
  except the current select box:*/
    var x,
        y,
        i,
        arrNo = []
    x = document.getElementsByClassName('select-items')
    y = document.getElementsByClassName('select-selected')
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove('select-arrow-active')
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add('select-hide')
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect)