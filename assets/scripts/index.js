
const cards = document.querySelectorAll('.z-card')
var timer





cards.forEach((card) =>{


    card.onmouseenter = ()=>{
        const windoWidth = window.innerWidth

        if(windoWidth > "768"){
            startHover(card)
            // timer = setTimeout(()=>{ showTrailer(card) },3000)

        }


    }

    card.onmouseleave = ()=>{
        const windoWidth = window.innerWidth

        if(windoWidth > "768"){
            clearTimeout(timer)
            exitHover(card)
            // closeTrailer(card)

        }

    }




   
    

})










function showTrailer(card){
    const gameTrailer = document.querySelector(`.trailer-video__${card.id}`)

    gameTrailer.style.display = "block"
    gameTrailer.play()
}

function closeTrailer(card){
    const gameTrailer = document.querySelector(`.trailer-video__${card.id}`)

    gameTrailer.style.display = "none"
    gameTrailer.pause()

}


function startHover(card){
    const windoWidth = window.innerWidth

    const cardPassToChild = document.querySelector(`#${card.id} .z-card__image`)


    card.classList.add('z-card--hovered')

    document.body.id = `${card.id}--hovered`

    windoWidth <= "867"? document.querySelector('.container-content').style.gap = "250px":
    document.querySelector('.container-content').style.gap = "450px"

    card.id == "zelda-game-1"? cardPassToChild.style.paddingRight = "100px" :
    cardPassToChild.style.paddingLeft = "100px"

    card.id == "zelda-game-2"? cardPassToChild.style.left = "-100px": ""



}


function exitHover(card){
    const windoWidth = window.innerWidth
    const cardPassToChild = document.querySelector(`#${card.id} .z-card__image`)


    card.classList.remove('z-card--hovered')

    document.body.id = ``

    windoWidth > "768"?document.querySelector('.container-content').style.gap = "200px" : document.querySelector('.container-content').style.gap = "10px"
    

    cardPassToChild.style.padding = "0px"
    cardPassToChild.style.left = "0px"

}


