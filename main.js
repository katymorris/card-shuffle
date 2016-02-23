var cardList = new Array();

function shuffle(array) {
  var remainingCards = array.length, t, i;
  // While there remain elements to shuffle…
  while (remainingCards) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * remainingCards--);
    // And swap it with the current element.
    t = array[remainingCards];
    array[remainingCards] = array[i];
    array[i] = t;
  }
  return array;
}
// var card = {
// 	color: "black",
// 	suit: "spades",
// 	value: "King",
// 	logValue: function() {
// 		console.log(this.value);
// 	}
// }
var Card = function(s, v) {
	this.suit = s;
	this.value = v;
}

for(i=2; i<=10; i++) {
	cardNumber = i;
	var x = new Card("hearts", i)
	cardList.push( x );
}
for(i=2; i<=10; i++) {
	cardNumber = i;
	var x = new Card("spades", i)
	cardList.push( x );
}
for(i=2; i<=10; i++) {
	cardNumber = i;
	var x = new Card("diamonds", i)
	cardList.push( x );
}
for(i=2; i<=10; i++) {
	cardNumber = i;
	var x = new Card("clubs", i)
	cardList.push( x );
}
//King cards
var x = new Card("king of hearts", 'k');
cardList.push(x);

var x = new Card("king of spades", 'k');
cardList.push(x);

var x = new Card("king of diamonds", 'k');
cardList.push(x);

var x = new Card("king of clubs", 'k');
cardList.push(x);

//Queen cards
var x = new Card("queen of hearts", 'q');
cardList.push(x);

var x = new Card("queen of spades", 'q');
cardList.push(x);

var x = new Card("queen of diamonds", 'q');
cardList.push(x);

var x = new Card("queen of clubs", 'q');
cardList.push(x);

//Jack cards
var x = new Card("jack of hearts", 'j');
cardList.push(x);

var x = new Card("jack of spades", 'j');
cardList.push(x);

var x = new Card("jack of diamonds", 'j');
cardList.push(x);

var x = new Card("jack of clubs", 'j');
cardList.push(x);

//Ace cards
var x = new Card("ace of hearts", 'a');
cardList.push(x);

var x = new Card("ace of spades", 'a');
cardList.push(x);

var x = new Card("ace of diamonds", 'a');
cardList.push(x);

var x = new Card("ace of clubs", 'a');
cardList.push(x);

console.log(cardList);

$('button').on('click', function() {
shuffle(cardList)
console.log(cardList)

})