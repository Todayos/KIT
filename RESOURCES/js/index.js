$('.top-menu ul li').hover(function () {
    $(this).css("color", '#6c1');
}, function () {
    $(this).css("color", '#fff');
})

$('.view ul li').hover(function () {
    $(this).css('backgroundColor', '#1B1B1B');
    $(this).css('color', '#6c1');
}, function () {
    $(this).css('backgroundColor', 'transparent');
    $(this).css('color', '#fff');
})

$('.details').hover(function () {
    $(this).css('backgroundColor', '#1B1B1B');
    $(this).css('color', '#6c1');
}, function () {
    $(this).css('backgroundColor', 'transparent');
    $(this).css('color', '#1B1B1B');
})

// $('.active').hover(function () {
//     $(this).css('backgroundImage')
// }, function () {

// })