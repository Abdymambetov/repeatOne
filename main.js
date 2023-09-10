// const slides = document.querySelectorAll('.slide')

// for(const slide of slides){
//     slide.addEventListener('click', () => {
//         clearClassActive()
//         slide.classList.add('active')
//     })
// }

// function clearClassActive(){
//     slides.forEach((slide) => {
//         slide.classList.remove('active')
//     })
// }

const container = document.querySelector('.container'); 

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('slide')) {
    // Уберем класс 'active' у всех слайдов в контейнере
    container.querySelectorAll('.slide').forEach((slide) => {
      slide.classList.remove('active');
    });
    // Добавим класс 'active' только на текущий слайд
    event.target.classList.add('active');
  }
});