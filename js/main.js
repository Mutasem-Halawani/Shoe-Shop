/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cartProducts = [];
var storedProducts = JSON.parse(localStorage.getItem("products"));
cartProducts = storedProducts;
$( document ).ready(function() {
    $('.cart-items').html(storedProducts.length);
});

//mobile nav
$('div#nav-icon').on('click',function(){
    $('nav#mobile-menu').toggleClass(function(){
        return $(this).is('.show-mobile-nav ,.hide-mobile-nav') ? 'show-mobile-nav hide-mobile-nav' : 'show-mobile-nav';
    });
});


//nav
$('nav li').hover(function(){
     $(this).addClass('highlight');
}, function(){
     $(this).removeClass('highlight');
});

$('nav li').click(function(){
$('nav li').removeClass('highlight_stay');
$(this).addClass('highlight_stay');

$('nav li').click(function(){
    $('nav li').removeClass('underline-border');
    $(this).addClass('underline-border');
});
});

//pages pagination
$('div.pagination a.page').click(function(){
    $('div.pagination a.page').removeClass('active');
    $(this).addClass('active');
});


//prevent window scroll on empty link click
document.onclick = function (e) {
    var target = (e && e.target) || e.srcElement,
        src = document.body.scrollTop;

    if (target.tagName === "A" && target.href.slice(-1) === "#") {
        window.location.href = "#";
        document.body.scrollTop = src;           
        return false;
    }
    
    else if (target.tagName === "SPAN") {
        window.location.href = "#";
        document.body.scrollTop = src;           
        return false;
    }
};

//show added products
$('header#desktop p, span#items-on-cart').on('click',function(){
    alert('Products in Cart: ' + storedProducts); 
});
