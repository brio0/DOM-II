import './less/index.less'

// Your code goes here!
const h2 = document.querySelector('.intro h2')
h2.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow'
})
