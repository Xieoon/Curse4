import Card from "./cardClass";
import template from '../screens/win_lose.hbs'

export default class Table{
    constructor(allCards){
        this.allCards = allCards
        this.clicCounter = 0
        allCards.forEach(el =>{
            el.cardPosition.onclick = ()=>{
              if(!el.flipped){
                el.cardOpen()
                this.clicCounter++  
                if(this.clicCounter % 2 === 0){
                    this.secondCard = el.cardFace
                    if(this.firstCard ===  this.secondCard){
                        if(this.clicCounter === window.store.dificulty){
                        setTimeout(()=>document.body.innerHTML = template({status:'победили'}),400)
                        }
                    }else{
                        setTimeout(()=>document.body.innerHTML = template({status:'проиграли'}),400)
                    }
                }else{
                    this.firstCard = el.cardFace
                }
              }
            }
        })
    }

    openCards(){
        this.allCards.forEach(el =>el.cardOpen());
    }

    closeCards(){
        this.allCards.forEach(el =>el.cardClose());
    }
}