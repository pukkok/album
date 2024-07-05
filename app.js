const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        boxTop < triggerBottom ?
        box.classList.add('show') :
        box.classList.remove('show')
    })
}

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach(item => {
        item.classList.remove('active')
        this.classList.add('active')
    })
}
list.forEach(item => {
    item.addEventListener('click', activeLink)
});