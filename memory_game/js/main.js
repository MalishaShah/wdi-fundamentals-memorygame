var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if(cardsInPlay.length === 2){
    let message = cardsInPlay[0] === cardsInPlay[1]? "You found a match!" : "Sorry, try again.";
    alert(message);
}