import "./range_slider.scss"
import "../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min"

var currentRange = $('.range_slider_topic_range');

$("#range_slider").ionRangeSlider({
  type: "double",
  min: 500,
  max: 15500,
  from: 5000,
  to: 10000,
  step: 10,
  hide_min_max: true,
  hide_from_to: true,
  postfix: "₽",
  prettify_separator: " ",
  onChange: function (data) {
    let from = data.from;
    let to = data.to;
    currentRange.html(from + '₽ - ' + to + '₽');
    console.log(data);
  },
  onStart: function (data) {
    currentRange.html(data.from + '₽ - ' + data.to + '₽');
  }
});