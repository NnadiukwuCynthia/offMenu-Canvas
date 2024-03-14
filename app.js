const Body = document.body
const Button = document.querySelector('.menu-btn')

Button.addEventListener('click', event => {
    console.log('Button clicked');
    Body.classList.toggle('offsite-is-open');
})