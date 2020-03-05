import './drop_comfort.scss';

require('../../components/mixin_dropdown/mixin_dropdown.js');


$(function () {
  $('.iqdropdown_comfort').iqDropdown({
    setSelectionText(itemCount, totalItems) {
      const bedrooms = [
        totalItems == 1 ? "спальня" :
        totalItems > 1 && totalItems < 5 ? 'спальни' :
        "спален"
      ];
      const bed = [
        itemCount.item2 == 1 ? "кровать" :
        itemCount.item2 > 1 && itemCount.item2 < 5 ? 'кровати' :
        "кроватей"
      ];

      if (totalItems == 0) {
        return "Выберите..."
      } else if (totalItems > 0 && (itemCount.item2 == 0)) {
        return `${totalItems} ${bedrooms}`;
      } else if ((totalItems > 0) && (itemCount.item2 > 0)) {
        return `${totalItems} ${bedrooms}, ${itemCount.item2} ${bed}`;
      }
    },
  });

  //   $('.drop_comfort .iqdropdown_comfort').on('click', function () {
  //     $('.iqdropdown_comfort').css('border-radius', '4px 4px 0 0');
  //   });

  //   $('.drop_comfort .iqdropdown-menu-clear').on('click', function () {
  //     $('.drop_comfort .iqdropdown-selection').html('Выберите...');
  //     $('.drop_comfort .iqdropdown .iqdropdown-item-controls .counter').html('0');
  //   });
})