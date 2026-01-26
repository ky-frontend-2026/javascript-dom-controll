const menuClose= document.querySelector('.menu.close')
const menuOpen= document.querySelector('.menu.open')
const wrap = document.querySelector('#wrap')




// menuClose
menuClose.addEventListener('click',()=>{
    wrap.classList.add('close-box')
})
menuOpen.addEventListener('click',()=>{
    wrap.classList.remove('close-box')
})