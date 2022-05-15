$(document).ready(function(){
    /* Agregando la clase al primer enlace */
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    /* Filtrando productos */
    $('.category_item').click(function(){
        var catProduct=$(this).attr('category');
        console.log(catProduct);
        /* Agregando clase active al enlace seleccionado */
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        /* Ocultando productos */
        $('.product-item').css('transform','scale(0)');

        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,500);
        //$('.product-item').hide();

        /* Mostrando productos */
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
        }setTimeout(showProduct,500);
        
        
    });
    /* Mostrando todos los productos */
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform','scale(1)');
        }setTimeout(showAll,500);
        
    });
});


