const btn = document.querySelector(".btn");


btn.addEventListener('click',()=>{

    anime({
       targets: ".name path",
       strokeDashoffset: [anime.setDashoffset, 0],
       duration:1000,
       delay:function(el,i) {return i*250},
       easing:'easeInOutSine'
     });
})

