const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length
let activeSlideIndex = 0
sideBar.style.top = `-${(slidesCount -1 )*100}vh`

upBtn.addEventListener('click', () => {
    changeSLide('up')
})
downBtn.addEventListener('click', () => {
    changeSLide('down')
})

function changeSLide(text) {
    if(text === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if(text === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}