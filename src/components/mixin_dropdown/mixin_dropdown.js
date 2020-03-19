import './mixin_dropdown.scss';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';



$('.iqdropdown').on('click', function () {
  $('.iqdropdown').toggleClass('iqdropdown-clicked');
});

// $('.iqdropdown .iqdropdown-menu-clear').on('click', function () {
//   $('.iqdropdown .iqdropdown-selection').html('ХЗ');
//   $('.iqdropdown .iqdropdown-item-controls .counter').html('0');
// });