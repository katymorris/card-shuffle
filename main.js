var cardList = new Array();
var specialCards = ["J", "Q", "K", "A"];
var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
var joker = "Joker";
var cardImage;
/* ---------- OBJECT PROTOTYPES ---------- */
var Card = function(s, v) {
	this.suit = s;
	this.value = v;
}
//var 
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
//builds cards
function buildCard(obj) {
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "150px";
	div.style.background = "white";
	div.style.color = "black";
	div.style.border = "solid black 1px";
	div.style.float = "left";
		//functions to build special cards
		function kingCard() {
			document.body.appendChild(div);
			div.innerHTML = "<p>K</p><p>" + cardSuit + "</p><div class='inner-div'><img src='images/" +cardSuit+ ".svg' height='70' width='70' /></div>";
			$('.inner-div').css({'width':'70px','height':'120px'});
		}
		function queenCard() {
			document.body.appendChild(div);
			div.innerHTML = "<p>Q</p><p>" + cardSuit + "</p><div class='inner-div'><img src='images/hearts.svg' height='70' width='70' /></div>";
			$('.inner-div').css({'width':'70px','height':'120px'});
		}
		function jackCard() {
			document.body.appendChild(div);
			div.innerHTML = "<p>J</p><p>" + cardSuit + "</p><div class='inner-div'><img src='images/hearts.svg' height='70' width='70' /></div>";
			$('.inner-div').css({'width':'70px','height':'120px'});
		}
		function aceCard() {
			document.body.appendChild(div);
			div.innerHTML = "<p>A</p><p>" + cardSuit + "</p><div class='inner-div'><img src='images/hearts.svg' height='70' width='70' /></div>";
			$('.inner-div').css({'width':'70px','height':'120px'});
		}
		function numberCard() {
			document.body.appendChild(div);
			div.innerHTML = "<p>" + obj.value + "</p><div class='inner-div'>" + cardSuit + "</div>";
			$('.inner-div').css({'width':'70px','height':'120px'});
		}
		//if statements for generating special cards
		function specialCardDecision() {
				if (obj.value === 'K') {
					kingCard();
				}
				if (obj.value === 'Q') {
					queenCard();
				}
				if (obj.value === 'J') {
					jackCard();
				}
				if (obj.value === 'A') {
					aceCard();
				}
		}
		//check for card and output card
		if (obj.suit === 'Hearts') {
			cardSuit = "<img src='images/hearts.svg' height='20' width='20' />";
			if (jQuery.type(obj.value) === 'string') {
				//create special card
				specialCardDecision()
			} else {
			  numberCard();
			}
		}
		if (obj.suit ==='Clubs') {
			cardSuit = "<img src='images/clubs.svg' height='20' width='20' />";
			if (jQuery.type(obj.value) === 'string') {
				//create special card
				specialCardDecision()
			} else {
				numberCard();
			}
		}
		if (obj.suit === 'Diamonds') {
			cardSuit = "<img src='images/diamonds.svg' height='20' width='20' />";
			if (jQuery.type(obj.value) === 'string') {
				//create special card
					specialCardDecision()
				} else {
				console.log('number card')
					numberCard();
				}
		}
		if ( obj.suit === 'Spades') {
			cardSuit = "<img src='images/spades.svg' height='20' width='20' />";
				if (jQuery.type(obj.value) === 'string') {
				//create special card
				specialCardDecision()
			} else {
				numberCard();
			}
		}
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
// Joker card loop
for(i=0; i<=2; i++) {
		var x = new Card(joker);
		cardList.push( x );
}
console.log(cardList)
/* ---------- DOCUMENT READY ----------- */
$(document).ready(function() {
	$('button').on('click', function() {
		shuffle(cardList);
		$('#card-list').empty();
		for(i=0; i<=50; i++) {
			var val = buildCard(cardList[i]);
			$('#card-list').append( val );
			console.log(cardList[i].value + ' of ' + cardList[i].suit + '<br />');
		}	
	});
});