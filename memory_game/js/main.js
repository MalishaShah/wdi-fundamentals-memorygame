var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"

    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function checkForMatch(){
    if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId]);
    if(cardsInPlay.length === 2){
        checkForMatch();
    }
}

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
}

function createBoard (){
    for(var i = 0; i<cards.length; i++){
        var newCard = document.createElement('img');
        newCard.setAttribute('src', 'images/back.png');
        newCard.setAttribute('data-id', i);
        newCard.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(newCard);
    }
}
function clearBoard(){
    var board = document.getElementById('game-board');
    board.innerHTML = "";
}
function reset(){
    clearBoard();
    cardsInPlay = [];
    shuffle(cards);
    createBoard();
}

let resetButton = document.querySelector('button');
resetButton.addEventListener('click', reset);

createBoard();
