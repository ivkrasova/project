import '../../../node_modules/inputmask/dist/jquery.inputmask.js';
import "./masked_text_field.scss"

$(function () {

  var data = new Date();
  var today = data.toLocaleDateString();

  $('.text_field__input-mask').inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    min: '01.01.1900',
    max: today, //-текущая дата
    placeholder: 'ДД.ММ.ГГГГ',
    clearMaskOnLostFocus: false
  })
})