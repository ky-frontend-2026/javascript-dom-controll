const tl = anime.timeline({ autoplay: true });
const path = anime.path('.circle path')
  tl.add({
    
    targets: ".name path",
    strokeDasharray: [anime.setDashoffset, anime.setDashoffset], // 선택 (안 해도 되지만 안정적)
    strokeDashoffset: [anime.setDashoffset, 0],
    stroke: ['transparent', '#EBD55A'],  // ✅ 유효한 색상
    duration: 3000,
    delay: (el, i) => i * 250,
    easing: 'easeInOutSine'
  });
  tl.add({
    targets: ".circle-wrap",
    duration: 1000,
opacity:1,

  })
  tl.add({
    targets: ".circle-wrap",
    duration: 500,
opacity:1,

  })

setTimeout(function(){

anime({
  
  targets: ".circle path",
  strokeDasharray: [anime.setDashoffset, anime.setDashoffset], // 선택 (안 해도 되지만 안정적)
  strokeDashoffset: [anime.setDashoffset, 0],
  stroke: ['transparent', '#EBD55A'],  // ✅ 유효한 색상
  duration: 2000,
  easing: 'easeInOutSine'
});


anime({
  targets:'.ico',
  translateX:path('x'),
  translateY:path('y'),
  rotate:path('angle'),
  easing: 'easeInOutSine',
    // loop:true,
    duration:1900
})

},5500)  


