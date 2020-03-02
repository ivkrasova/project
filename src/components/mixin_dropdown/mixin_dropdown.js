import './mixin_dropdown.scss';

import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';
// import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(function () {

  $('.iqdropdown').on('click', function () {
    $('.iqdropdown').css('border-radius', '4px 4px 0 0');
  });

  $('.iqdropdown-menu-clear').on('click', function () {
    $('.iqdropdown-selection').html('Сколько гостей');
    $('.iqdropdown .iqdropdown-item-controls .counter').html('0');
  });

})