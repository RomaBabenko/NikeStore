import loader from "./modules/loader.js";
loader();

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  parallax: true,
  speed: 1000,
  
  keyboard: {
    enabled: false,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  
});

document.querySelectorAll('.pagination-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
      // Активируем соответствующий слайд
      swiper.slideTo(index); // swiper - ваш экземпляр Swiper
  });
});

function updatePaginationButtons() {
  const activeIndex = swiper.activeIndex;
  const paginationButtons = document.querySelectorAll('.pagination-btn');

  paginationButtons.forEach(button => {
    button.classList.remove('active');
  });

  paginationButtons[activeIndex].classList.add('active');
}

// Добавляем обработчик события, который будет отслеживать изменение слайда
swiper.on('slideChange', updatePaginationButtons);

// При инициализации Swiper также обновляем классы кнопок пагинации
updatePaginationButtons();