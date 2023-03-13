// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birth day to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll,"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added abow!`);
        //debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    var messages = [];
    for (var i = 0; i < names.length; i++) {
      var message = `Thank you, ${names[i]}, for attending the ${event}!`;
      messages.push(message);
    }
    return messages;
  }
  
  var names = ["Charlie", "Samip", "Ali"];
  var event = "birthday";
  var messages = writeCards(names, event);
  console.log(messages);
  writeCards(["Charlie", "Samip", "Ali"], "birthday");
  

