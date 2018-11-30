$('.list-silder-item-' + $('.list-silder-item-left:first').data('categorie')).removeClass('hide').show();
$('.list-silder-item-left').click(function() {
    var categorie = $(this).data('categorie');
    $('.list-silder-item-left').removeClass('list-silder-item-hover');
    $(this).addClass('list-silder-item-hover');
    $('.list-silder-item-right').hide();
    $('.list-silder-item-' + categorie).removeClass('hide').show();
});
$(document).pjax('.list-silder-item-right a', '.main', {
    fragment: '.main',
    timeout: 3000
});