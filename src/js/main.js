import '../scss/style.scss'
import Swiper from 'swiper';
import 'swiper/css';


const swiper = new Swiper('.swiper', {
  direction: 'vertical',

  mousewheel: {
    enabled: true,
    sensitivity: 1, 
  },
});


const arrow = document.querySelector('.img-arrow');

  arrow.addEventListener('click', function () {
    swiper.slideNext();
  });


