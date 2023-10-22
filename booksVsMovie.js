//Recap
let myVariable = "Anu";
const myConstantine = "Constantine";
myVariable = "Stevia";
//if const myVariable="Anu" it gives a typeerror
// Store the user's response
const response = prompt("books vs movies")

if (response === "books") {
  // The response is "books"
  console.log("📚")
}
else if(response === "movies"){ //curly brackets highlight what you're defining
  // The response is not "books" //JS doesnt care if everything is in one line :)
  console.log("🧙")
}
else {
  // The response is not "books"
  console.log("🍿🍿")
}
//function

const emoji1 = "🎢";
const emoji2 = "💻";

function addEmoji(message) {
  return emoji1 + message + emoji2;
}

const ourValue = addEmoji("Hello Everyone!");
console.log(emoji1);
