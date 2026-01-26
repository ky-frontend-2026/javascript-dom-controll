
const wrap = document.querySelector('#wrap')
const menuToggle= document.querySelector('.menu.toggle')


menuToggle.addEventListener('click',()=>{
    wrap.classList.toggle('toggle-box')
})