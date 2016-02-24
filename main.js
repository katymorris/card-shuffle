var cardList = new Array();
var specialCards = ["Jack", "Queen", "King", "Ace"];
var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];

/* ---------- OBJECT PROTOTYPES ---------- */
var Card = function(s, v) {
	this.suit = s;
	this.value = v;
}

/* ---------- FUNCTIONS ---------- */
function shuffle(array) {
  var remainingCards = array.length, t, i;
  while (remainingCards) {
    i = Math.floor(Math.random() * remainingCards--);
    t = array[remainingCards];
    array[remainingCards] = array[i];
    array[i] = t;
  }
  return array;
}

function buildCard(obj) {
	return("<div class=''></div>")
}

/* ---------- INSTANTIATE OBJECTS ----------- */
// Standard card loop
for(i=2; i<=10; i++) {
	for(j=0; j<suits.length; j++) {
		var x = new Card(suits[j], i);
		cardList.push( x );
	}
}
// Special card loop
for(i=0; i<specialCards.length; i++) {
	for(j=0; j<suits.length; j++) {
		var x = new Card(suits[j], specialCards[i]);
		cardList.push( x );
	}
}

/* ---------- DOCUMENT READY ----------- */
$(document).ready(function() {
	$('button').on('click', function() {
		shuffle(cardList);
		$('#card-list').empty();
		for(i=0; i<=50; i++) {
			$('#card-list').append( buildCard(cardList[i]) );
			console.log(cardList[i].value + ' of ' + cardList[i].suit + '<br />');
		}	
	});
});