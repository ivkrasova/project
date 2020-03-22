import './expandable_list'


$('.expandable_list_label').on('click', function () {
  $('.expandable_list_content').toggleClass('expandable_list_content-active');
  $('.expandable_list_label').toggleClass('expandable_list_label-active');
})