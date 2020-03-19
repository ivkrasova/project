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
    // onChange: buttonClear(),
  });


  $('.iqdropdown_guests .iqdropdown-menu-clear').on('click', function () {
    $('.iqdropdown_guests .iqdropdown-selection').html('Сколько гостей');
    $('.iqdropdown_guests .iqdropdown-item-controls .counter').text('0');
  });

  // function buttonClear() {
  //   let but = $('<button class="iqdropdown-menu-clear">Кнопка</button>');
  //   let p = $('.iqdropdown_guests .iqdropdown-selection');

  //   if (p.not("Сколько гостей")) {
  //     $('.iqdropdown-menu-buttons').prepend(but);
  //   };
  // };
})