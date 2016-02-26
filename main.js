var cardList = new Array();
var specialCards = ["Jack", "Queen", "King", "Ace"];
var suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
var joker = "Joker";
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
// function cardStructure(v, s) {
// 	var div = document.createElement("div");
// 	div.style.width = "100px";
// 	div.style.height = "150px";
// 	div.style.background = "white";
// 	div.style.color = "black";
// 	div.style.border = "solid black 1px";
// 	div.style.float = "left";
// 	document.body.appendChild(div);
// }
//checks object value
// function strNumCheck(obj) {
// 	console.log(obj)
// 	var objectValue = obj.value;
//  	if (Number.isInteger(objectValue) === true) {
// 		var number = objectValue;
// 		return number;
// 	}
// 	if (jQuery.type(objectValue) === 'string') {
// 		var string = objectValue;
// 		return string;
// 	}
// }
//builds cards
function buildCard(obj) {
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "150px";
	div.style.background = "white";
	div.style.color = "black";
	div.style.border = "solid black 1px";
	div.style.float = "left";
		if (obj.suit === 'Hearts') {
			if (jQuery.type(obj.value) === 'string') {
				//create special card
				console.log('special card')
				document.body.appendChild(div);
			} else {
				console.log('number card')
				document.body.appendChild(div);
				div.innerHTML = "<p>" + obj.value + "</p><div class='inner-div'></div>";
				$('.inner-div').css({'width':'70px','height':'120px'});
			}
		}
		if (obj.suit ==='Clubs') {
			if (jQuery.type(obj.value) === 'string') {
				//create special card
				console.log('special card')
				document.body.appendChild(div);
			} else {
				console.log('number card')
				document.body.appendChild(div);
				div.innerHTML = "<p>" + obj.value + "</p><div class='inner-div'></div>";
				$('.inner-div').css({'width':'70px','height':'120px'});
			}
		}
		if (obj.suit === 'Diamonds') {
				if (jQuery.type(obj.value) === 'string') {
				//create special card
				console.log('special card')
				document.body.appendChild(div);
			} else {
				console.log('number card')
				document.body.appendChild(div);
				div.innerHTML = "<p>" + obj.value + "</p><div class='inner-div'></div>";
				$('.inner-div').css({'width':'70px','height':'120px'});
				$('p').css('width', '10px')
			}
		}
		if ( obj.suit === 'Spades') {
				if (jQuery.type(obj.value) === 'string') {
				//create special card
				console.log('special card')
				document.body.appendChild(div);
			} else {
				console.log('number card')
				document.body.appendChild(div);
				div.innerHTML = "<p>" + obj.value + "</p><div class='inner-div'></div>";
				$('.inner-div').css({'width':'70px','height':'120px'});
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