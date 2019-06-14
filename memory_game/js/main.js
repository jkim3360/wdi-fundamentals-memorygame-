console.log("Up and running!");


var cards = [
	queen1 = {
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	}, 
	queen2 = {
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"		
	}, 
	king1 = {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	king2 = {
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again.");

	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2) {
			checkForMatch();
	}
}

flipCard(0)
flipCard(2)

