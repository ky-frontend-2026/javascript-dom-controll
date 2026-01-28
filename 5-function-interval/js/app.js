const container = document.querySelector('#container')
const title= document.querySelector('#container h1')
const playBtn = document.querySelector('a.play')
const stopBtn = document.querySelector('a.stop')



let play = setInterval(bgChange,1000)

function getRandomColor(){

    const hex = '#'+Math.random().toString(16).slice(2,8).padEnd(6,'0')
    console.log(hex)

    return hex
}

container.style.backgroundColor=getRandomColor()

function bgChange(){
    const ramdomColor = getRandomColor()
    container.style.backgroundColor=ramdomColor
    title.textContent=ramdomColor.toUpperCase()
}

stopBtn.addEventListener('click',()=>{
    clearInterval(play)
    play=null
})

playBtn.addEventListener('click',()=>{
    if(!play){
        play=setInterval(bgChange,3000)
    }
})