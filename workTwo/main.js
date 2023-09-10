const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placholder of placeholders){
   placholder.addEventListener('dragover', dragover)
   placholder.addEventListener('dragenter', dragenter)
   placholder.addEventListener('dragleave', dragleave)
   placholder.addEventListener('drop', drop)
}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(event){
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
    console.log('dragend')
}

function dragover(event) {
    event.preventDefault()
    console.log('dragover');
}
function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('dragenter');
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('dragleave');
}
function drop(event) {
    event.target.classList.remove('hovered')
    console.log('drop');
    event.target.append(item)
}