import './drop_guests.scss';

require('../../components/mixin_dropdown/mixin_dropdown.js');


$(function () {
  $('.iqdropdown_guests').iqDropdown({
    setSelectionText(itemCount, totalItems) {
      const guests = [
        totalItems == 1 ? "гость" :
        totalItems > 1 && totalItems < 5 ? 'гостя' :
        "гостей"
      ];
      const infant = [
        itemCount.item3 == 1 ? "младенец" :
        itemCount.item3 > 1 && itemCount.item3 < 5 ? 'младенца' :
        "младенецев"
      ];

      if (totalItems == 0) {
        return "Сколько гостей"
      } else if (totalItems > 0 && (itemCount.item3 == 0)) {
        return `${totalItems} ${guests}`;
      } else if ((totalItems > 0) && (itemCount.item3 > 0)) {
        return `${totalItems} ${guests}, ${itemCount.item3} ${infant}`;
      }
    },
  });

  // $('.iqdropdown_guests').on('click', function () {
  //   $('.iqdropdown_guests').css('border-radius', '4px 4px 0 0');
  // });

  // $('.iqdropdown_guests .iqdropdown-menu-clear').on('click', function () {
  //   $('.iqdropdown_guests .iqdropdown-selection').html('Сколько гостей');
  //   $('.iqdropdown_guests .iqdropdown-item-controls .counter').html('0');

  // });
})