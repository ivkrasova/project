import './selection_room'
import '../../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css'

import './img/room888-1.jpg';
import './img/room888-2.jpg';


// import '../../components/selection_room/img/room888-1.jpg';
// import '../../components/selection_room/img/room888-2.jpg';

$(document).ready(function () {
  $('.selection_room_slider').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [],
    dotsEach: true
  });
});