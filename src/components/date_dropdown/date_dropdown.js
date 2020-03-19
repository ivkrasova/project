import './date_dropdown.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min'
import '../../../node_modules/inputmask/dist/jquery.inputmask.js';

$('.date_dropdown__input').inputmask('datetime', {
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  // max: today, //-указать max дату?
  placeholder: 'ДД.ММ.ГГГГ',
  clearMaskOnLostFocus: false
})

$('.date_dropdown__input_date').inputmask('datetime', {
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  // max: today, //-указать max дату?
  placeholder: '19.08.2019',
  clearMaskOnLostFocus: false
})

$('.date_dropdown__input').datepicker({
  inline: true, //отобразить к
})