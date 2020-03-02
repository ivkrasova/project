import './drop_guests.scss';

require('../../components/mixin_dropdown/mixin_dropdown.js');


$(document).ready(() => {
  $('.iqdropdown').iqDropdown({
    setSelectionText(itemCount, totalItems) {
      const guests = [
        totalItems == 1 ? "гость" :
        totalItems > 1 && totalItems < 5 ? 'гостя' :
        "гостей"
      ];
      const infant = [
        // itemCount.item3 == 0 ? " " : //как убрать 0?
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
    beforeIncrement: (id, itemCount) => {
      if (id === 'item3' || id === 'item2') {
        return itemCount.item1 >= 1;
      }
      return true;
    },
    beforeDecrement: (id, itemCount) => {
      if (id === 'item1') {
        return itemCount.item1 > itemCount.item3;
      }
      return true;
    }
  });
});