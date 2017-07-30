/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//$('input').on('change',function(){
//    console.log(this.value);  
//});




var cartProducts = [];
var storedProducts = JSON.parse(localStorage.getItem("products"));

$( document ).ready(function() {
    $('.cart-items').html(storedProducts.length);
});
//adding to cart

$('i.add-to-cart').on('click',function(e){
    e.stopPropagation();
    $(this).closest('div#popup-container');
    console.log(cartProducts);
    cartProducts.push($(this).closest('div.product').attr('data-product-id'));
    localStorage.setItem("products", JSON.stringify(cartProducts));
    $('.cart-items').html(cartProducts.length);
});

//mobile
$('div#nav-icon').on('click',function(){
//    console.log('clicked');
    $('nav#mobile-menu').toggleClass(function(){
        return $(this).is('.show-mobile-nav ,.hide-mobile-nav') ? 'show-mobile-nav hide-mobile-nav' : 'show-mobile-nav';
    });
});
//mobile


//popup
$('div.product').on('click',function(){
    var itemID = $(this).closest('div').attr('data-product-id');
    buildPopup(itemID);
    console.log($(this).closest('div').attr('data-product-id'));
    console.log('function working');
});

//add to favs
$("i.add-to-fav").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('highlight');
});
//add to favs


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
//nav


//pages pagination
$('div.pagination a.page').click(function(){
    console.log('link clicked');
$('div.pagination a.page').removeClass('active');
$(this).addClass('active');
});
//pages pagination


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
//prevent window scroll on empty link click
