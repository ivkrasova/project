import "./pagination.scss"
import '../../../node_modules/paginationjs/dist/pagination.js';


$(function () {


  $('#pagination-container').pagination({
    dataSource: function (done) {
      var result = [];
      for (var i = 1; i < 180; i++) {
        result.push(i);
      }
      done(result);
    },
    pageSize: 12,
    pageRange: 1,
    autoHidePrevious: true,
    autoHideNext: true,
    showNavigator: true,
    formatNavigator: '<%= currentPage %> - 12 из 100+ вариантов аренды',
    prevText: '',
    nextText: ''
    // callback: function (data, pagination) {
    //   var html = template(data);
    //   dataContainer.html(html);
    // },
  })
})