/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cartProducts = [];
var storedProducts = JSON.parse(localStorage.getItem("products"));
var menuItems = $('section.header li');
var megaMenu = $('div.mega-menu-container');
//cartProducts = storedProducts;
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

//desktop menu
$('section.header nav li').click(function(e){

    if($(this).hasClass('underline-border')){
        $(megaMenu).toggleClass(function(){
            return $(this).is('.hide-mega-menu ,.show-mega-menu') ? 'hide-mega-menu' : 'show-mega-menu';
        });
        removeMenuHighlight();
    }
    else{
        removeMenuHighlight();
        $(this).addClass('highlight_stay');
        $(this).addClass('underline-border');
        megaMenu.removeClass('hide-mega-menu');
        megaMenu.addClass('show-mega-menu');
    }
    
    let chosenCategory = $(this).text();
    $('section.mega-menu-body > section.first-column h2')[0].textContent = chosenCategory;
});

$('section.body, div#pagination').on('click',function(){
        clearMenu();
});

$(window).on('resize',function(){
    if($( window).width() < 550){
        clearMenu();
    }
});

function removeMenuHighlight(){
        $('nav li').removeClass('highlight_stay');
        $('nav li').removeClass('underline-border');
}

function clearMenu(){
        megaMenu.removeClass('show-mega-menu');
        megaMenu.addClass('hide-mega-menu');
        $('nav li').removeClass('highlight_stay');
        $('nav li').removeClass('underline-border');
}

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
