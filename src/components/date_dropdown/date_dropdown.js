import './date_dropdown.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min'
import '../../../node_modules/inputmask/dist/jquery.inputmask.js';

$('.date_dropdown__input').inputmask('datetime', {
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  // max: today, //-указать max дату?
  placeholder: 'ДД.ММ.ГГГГ',
  clearMaskOnLostFocus: false
});

$('.date_dropdown__input_date').inputmask('datetime', {
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  // max: today, //-указать max дату?
  placeholder: '19.08.2019',
  clearMaskOnLostFocus: false
});

$('#start').datepicker({
  inline: true, //отобразить к
  range: true,
  startDate: new Date(2019, 7, 8),
  prevHtml: '<i class="material-icons date_dropdown_arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons date_dropdown_arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  multipleDatesSeparator: "-",
  onSelect: function (formattedDate, d, picker) {
    $("#start").val(formattedDate.split('-')[0]);
    $("#end").val(formattedDate.split('-')[1]);
  },
  // clearButton: true,
});

let myDatepicker = $('#start').datepicker().data('datepicker');

$("#end").on('click', function () {
  myDatepicker.show();
})