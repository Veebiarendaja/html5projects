$(document).ready(function(){
    var items = $('#gallery li'),
        itemsByTags = [];

    //Loop

    items.each(function() {
        var element = $(this),
            tags = element.data('tags').split(',');

        /*Add data attribute for quicksand*/
        element.attr('data-id',i);

        $.each(tags, function(key, value) {
            value = $.trim(value);

            if(!(value in itemsByTags)) {
                //Add empty value
                itemsByTags[value] = [];
            }

            //Add image to the array

            itemsByTags[value].push(element);
        });
    });

    //Create 'all items'
    createList('All items', items);

    $.each(itemsByTags, function(k, v){
        createList(k, v);
    })
});