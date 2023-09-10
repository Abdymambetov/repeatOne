const board = document.querySelector('#board');
const SQUARES_NUMER = 600;
// const colors = ['red', 'blue', 'green', 'white', 'pink', 'orange', 'yellow', 'purple']
const colors = ['#ff00cf', '#ff00cf', '#3498db', '#a3ff00', '#00ffbb']

for(let i=0; i<SQUARES_NUMER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(square) {
    const color = getRandomColor()
    square.style.background = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(square){
    square.style.background = '#1d1d1d'
    square.style.boxShadow = `0 0 2px #000`
}
function getRandomColor(){
    const index = Math.floor( Math.random() * colors.length)
    return colors[index]
}