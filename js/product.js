/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var productsNew = [];

function buildProductList(){
    for (let i=0;i<12;i++){
        productsNew[i] = {
            'id' : i,
            'name' : 'shoes' + i,
            'img' : getRandomImage(),
            'discountPrice' : '',
            'price' : '$' + Math.ceil(getRandomPrice(100,400))
        };
    };
};
buildProductList();

function getRandomPrice(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomImage() {
    let img  = Math.floor(Math.random() * 5) + 1;
    switch (img) {
        case 1:
            return 'img/shoes (3).png';
            break;
        case 2:
            return 'img/shoes (4).png';
            break;
        case 3:
            return 'img/shoes (5).png';
            break;
        case 4:
            return 'img/shoes (6).png';
            break;
        case 5:
            return 'img/shoes (7).png';
            break;
        default:
            return 'img/shoes (7).png';
            break;
    }
}

buildProducts(productsNew);

function buildProducts(productset){
    
    if (typeof productset !== 'undefined') {
         products = productset;
    }
    
    for (let i=0;i<products.length;i++) {
        var productContainer = $('<div>',{
           'data-product-id': products[i].id,
           'class': 'product'
        });
        productContainer.appendTo($('section.body'));

        var productHeader = $('<div>',{
           'class': 'product-header'
        });
        productHeader.appendTo(productContainer);

        var favIcon = $('<i>',{
           'class': 'fa fa-heart add-to-fav' 
        });
        favIcon.appendTo(productHeader);

        var productTitle = $('<h2>',{
           text: 'SHOES' 
        });
        productTitle.appendTo(productHeader);

        var cartIcon = $('<i>',{
           'class': 'fa fa-shopping-bag add-to-cart' 
        });
        cartIcon.appendTo(productHeader);


       var productDescription = $('<div>',{
           'class': 'product-description'
       });
       productDescription.appendTo(productContainer);

       var secondHeader = $('<h3>',{
          text: products[i].name 
       });
       secondHeader.appendTo(productDescription);

       var productImageCont = $('<div>',{
           'class': 'product-image'
       });
       productImageCont.appendTo(productContainer);

       var productImage = $('<img>',{
          src: products[i].img,
          alt: 'shoes'
       });
       productImage.appendTo(productImageCont);

       var productPriceCont = $('<div>',{
           'class': 'product-price-container'
       });
       productPriceCont.appendTo(productContainer);

       var discountPrice = $('<span>',{
          'class': 'product-discount-price',
           text: products[i].discountPrice          
       });
       discountPrice.appendTo(productPriceCont);

       var productPrice = $('<span>',{
           'class': 'product-price',
           text: products[i].price
       });
       productPrice.appendTo(productPriceCont);
       
        $('div.product').on('click',function(){
            var itemID = $(this).closest('div').attr('data-product-id');
            buildPopup(itemID);
            console.log('product clicked');
        });
    }
}
