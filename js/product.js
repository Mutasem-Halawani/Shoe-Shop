/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var products = [
    {
        'id' : 1,
        'name' : 'ADIDAS SHOES BOXING',
        'img' : 'img/shoes (7).png',
        'discountPrice' : '',
        'price' : '$375.21'
    },
    {
        'id' : 2,
        'name' : 'ADIDAS YEEZY BOOST',
        'img' : 'img/Adidas-Yeezy-350-Boost-Black.png',
        'discountPrice' : '',
        'price' : '$196.18'
    },
    {
        'id' : 3,
        'name' : 'CONVERSE ALL STAR',
        'img' : 'img/shoes (6).png',
        'discountPrice' : '$168.00',
        'price' : '$119.99'
    }
];

function buildProducts(){
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
    }
}
