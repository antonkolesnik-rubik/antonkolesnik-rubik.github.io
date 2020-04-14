$(function() {
    $(document).mousemove(function(event){
        $('#cube').css({
            'transform':`rotateX(${event.pageY}deg) rotateY(${event.pageX}deg)`
        })
    })
})

$(function() {
    $('#cube').draggable();
});