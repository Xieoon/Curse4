export default class Card{
    constructor(cardPosition){
        this.cardPosition = cardPosition
        
        this.cardFace = cardPosition.src
        this.cardBack = '../static/shirt.svg'
        this.flipped = true

        // this.cardFlip = this.cardFlip.bind(this);
        // this.cardPosition.onclick = this.cardFlip;
    }

   cardClose(){
    this.cardPosition.src = this.cardBack
    this.flipped = false
   }

   cardOpen(){
    this.cardPosition.src = this.cardFace
    this.flipped = true
   }

  
}



