import './header_standart.scss';

//-Это не работает(
$(function () {

  $('.header_standart_menu_toggle').on('click', function () {
    console.log('1');
    $('.header_standart_menu').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });
  });
});