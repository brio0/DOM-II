import './less/index.less'

// Your code goes here!
const h2 = document.querySelector('.intro h2')
h2.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow'
})

const destination = document.querySelector('.content-destination h2');
destination.addEventListener('click', () => {
    destination.textContent = 'COME ON, JUST PICK A PLACE!!'
})

const foot = document.querySelector('.footer')
foot.addEventListener('dblclick', (evt) => {
    evt.target.outerHTML = ''
})