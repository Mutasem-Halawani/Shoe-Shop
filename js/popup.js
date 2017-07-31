/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function buildPopup(id,key){
    
//    console.log(id);
//    console.log(key);
    products = productsNew;
    var index = id;
    var popupContainer = $('<div>',{
        id: 'popup-container',
        'class': 'show'
    });
    popupContainer.appendTo('main');

    var productPopup = $('<div>',{
        'class': 'product-popup'
    });
    productPopup.appendTo(popupContainer);
    
    var productLightbox = $('<div>',{
        'data-product-id': id,
       'class': 'product-lightbox' 
    });
    productLightbox.appendTo(productPopup);

    var popupProductHeader = $('<div>',{
       'class': 'product-header' 
    });
    popupProductHeader.appendTo(productLightbox);

    var closePopup = $('<span>',{
       'class': 'close-popup',
       text: '✖'
    });
    closePopup.appendTo(popupProductHeader);

    var productName = $('<h2>',{
       text: 'SHOES' 
    });
    productName.appendTo(popupProductHeader);

    var popupProductDescription = $('<div>',{
        'class': 'product-description'
    });
    popupProductDescription.appendTo(productLightbox);

    var popupProductName = $('<h3>',{
        text: products[index].name 
    });
    popupProductName.appendTo(popupProductDescription);

    var popupProductImage = $('<div>',{
       'class': 'product-image' 
    });
    popupProductImage.appendTo(productLightbox);

    var rightArrow = $('<i>',{
       'class': 'fa fa-angle-right'
    });
    rightArrow.appendTo(popupProductImage);

    var popupProductImageTag = $('<img>',{
       src: products[index].img,
       alt: ''
    });
    popupProductImageTag.appendTo(popupProductImage);

    var leftArrow = $('<i>',{
       'class': 'fa fa-angle-left'
    });
    leftArrow.appendTo(popupProductImage);

    var popupProductPriceCont = $('<div>',{
        'class': 'product-price-container'
    });
    popupProductPriceCont.appendTo(productLightbox);
    
    var popupProductDiscountPrice = $('<span>',{
       'class': 'product-discount-price',
       text: products[index].discountPrice
    });
    popupProductDiscountPrice.appendTo(popupProductPriceCont);

    var popupProductPrice = $('<span>',{
       'class': 'product-price',
       text: products[index].price
    });
    popupProductPrice.appendTo(popupProductPriceCont);

    var popupFooter = $('<div>',{
        'class': 'popup-footer'
    });
    popupFooter.appendTo(productPopup);

    var addToCartButton = $('<button>',{
       'class': 'btn add-to-cart-btn',
       text: 'הוספה לעגלת הקניות'
    });
    addToCartButton.appendTo(popupFooter);

    var addToFavButton = $('<button>',{
       'class': 'btn add-to-fav-btn',
       text: 'הוספה למועדפים'
    });
    addToFavButton.appendTo(popupFooter);
    
    
    $('i.fa-angle-left').on('click',function(){
        var before = parseInt(id) - 1;
        if(before > 0){
            buildPopup(before);
        }    
    });
    
    $('i.fa-angle-right').on('click',function(){
        var next = parseInt(id) + 1;
        if(next < (products.length)){
            buildPopup(next);
        }    
    });
    
    $('span.close-popup').on('click',function(e){
        $(this).closest('div#popup-container').removeClass('show');
        $(this).closest('div#popup-container').addClass('hide');
        $('div#popup-container').remove();
    });

    $('div#popup-container').on('click',function(e){
        if(e.target.id === 'popup-container'){
            $(this).removeClass('show');
            $(this).addClass('hide');
            $('div#popup-container').remove();
        }
    });
    
    $('.add-to-cart-btn').on('click',function(e,key){
        var productNumber = parseInt(id);
//        console.log(key);
//        var productNumber = key;
        cartProducts.push(productNumber);
        console.log(cartProducts);
        localStorage.setItem("products", JSON.stringify(cartProducts));
        $('.cart-items').html(cartProducts.length);
    });
    
    $('.add-to-fav-btn').on('click',function(){
       var IDNum = parseInt(id);
       var chosen  = $('div.product[data-product-id='+ IDNum +']');
       var header = chosen.children()[0];
       var heartIcon = $(header).find('i.add-to-fav');
       heartIcon.addClass('highlight');
    });
}

