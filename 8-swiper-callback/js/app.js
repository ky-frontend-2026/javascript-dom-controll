const bgWrap= document.querySelectorAll('.bg-wrap > div ')

bgWrap[0].classList.add('active')
// active

var swiper = new Swiper(".callback-slider", {
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on:{
    activeIndexChange:function(){
        const i = this.realIndex

        console.log(`현재 index ${i}`)
        bgWrap.forEach((bg)=>bg.classList.remove('active'))
        bgWrap[i].classList.add('active')

    }
  }
});
