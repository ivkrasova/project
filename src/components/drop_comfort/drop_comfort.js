import './drop_comfort.scss';

require('../../components/mixin_dropdown/mixin_dropdown.js');


$(function () {
  $('.iqdropdown_comfort').iqDropdown({
    setSelectionText(itemCount, totalItems) {
      const bedrooms = [
        itemCount.item1 == 1 ? "спальня" :
        itemCount.item1 > 1 && itemCount.item1 < 5 ? 'спальни' :
        "спален"
      ];
      const bed = [
        itemCount.item2 == 1 ? "кровать" :
        itemCount.item2 > 1 && itemCount.item2 < 5 ? 'кровати' :
        "кроватей"
      ];
      const bathroom = [
        itemCount.item3 == 1 ? "ванная комната" :
        itemCount.item3 > 1 && itemCount.item3 < 5 ? 'ванных комнаты' :
        "ванных комнат"
      ];


      if (totalItems == 0) {
        return "Выберите..."
      } else if ((totalItems > 0)) {

        let text = `${itemCount.item1} ${bedrooms}, ${itemCount.item2} ${bed}, ${itemCount.item3} ${bathroom}`;

        return truncate(text, 21);
      }

      function truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '…' : str;
      }
    },
  });

  //   $('.drop_comfort .iqdropdown-menu-clear').on('click', function () {
  //     $('.drop_comfort .iqdropdown-selection').html('Выберите...');
  //     $('.drop_comfort .iqdropdown .iqdropdown-item-controls .counter').html('0');
  //   });
})