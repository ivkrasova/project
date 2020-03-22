import "./filter_date.scss"
import '../../../node_modules/air-datepicker/dist/js/datepicker.min'


$('.filter_date_input').datepicker({
  // inline: true, //-отобразить к
  range: true,
  startDate: new Date(2019, 7, 8),
  prevHtml: '<i class="material-icons date_dropdown_arrow">arrow_back</i>',
  nextHtml: '<i class="material-icons date_dropdown_arrow">arrow_forward</i>',
  navTitles: {
    days: 'MM yyyy',
    months: 'yyyy',
    years: 'yyyy1 - yyyy2'
  },
  multipleDatesSeparator: " - ",
  dateFormat: 'dd M'
});