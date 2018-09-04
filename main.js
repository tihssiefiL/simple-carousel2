let prev = document.querySelector('.prev-btn');
let next = document.querySelector('.next-btn');
let log = e => {
    console.log(e)
}
prev.addEventListener('click', function () {
    change('prev')
});
next.addEventListener('click', function () {
    change()
});

let change = (dir = 'next') => {
    if (dir == 'next') {
        let curritem = document.querySelector('.current');
        let prevItem = document.querySelector('.previous');
        let nextItem = curritem.nextElementSibling
        if (nextItem) {
            curritem.classList.remove('current')
            curritem.classList.add('previous')
            prevItem.classList.remove('previous')
            prevItem.classList.add('next')
            nextItem.classList.remove('next')
            nextItem.classList.add('current')

        } else {
            let nextItem = document.querySelector('.next')
            curritem.classList.remove('current')
            curritem.classList.add('previous')
            prevItem.classList.remove('previous')
            prevItem.classList.add('next')
            nextItem.classList.remove('next')
            nextItem.classList.add('current')
        }
    } else {
        let curritem = document.querySelector('.current');
        let prevItem = document.querySelector('.previous');
        let nextItem = prevItem.previousElementSibling
        if (nextItem) {
            curritem.classList.remove('current')
            curritem.classList.add('next')
            prevItem.classList.remove('previous')
            prevItem.classList.add('current')
            nextItem.classList.remove('next')
            nextItem.classList.add('previous')
        } else {
            let parent = prevItem.parentElement
            let nextItem = parent.lastElementChild
            curritem.classList.remove('current')
            curritem.classList.add('next')
            prevItem.classList.remove('previous')
            prevItem.classList.add('current')
            nextItem.classList.remove('next')
            nextItem.classList.add('previous')
        }
    }
}