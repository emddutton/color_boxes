/**
 * Created by emddutton on 2/24/2015.
 */
$(document).ready(function(){

    $('td').on('mouseenter', function(){
        var color = Math.random().toString(16).slice(2,8);
        $(this).css('background-color', "#" + color);
    })
});