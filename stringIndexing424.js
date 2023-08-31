const pangram = "The Five Boxing Wizards Jump Quickly.";
const title = "the light FANTASTIC";

//One way to transform the Title frase stile to Regular sentence stile
function sentenceCase(sentence) {
    const firstCharacter = sentence[0];
    let result = firstCharacter.toUpperCase();
  
    for (let i = 1; i < sentence.length; i++) {
      const character = sentence[i];
      result += character.toLowerCase();
    }
  
    return result;
}

//Second way
function sentenceCase2(sentence) {
    const first = sentence.substring(0, 1);
    const rest = sentence.substring(1);
  
    return first.toUpperCase() + rest.toLowerCase();
}

//One way to Titleize a sentence
function titleize(title) {
    const words = title.split(" "); //Using .split(" ") method. We will remove the spaces and return an array
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const capitalized = sentenceCase(words[i]);
      result.push(capitalized);
    }
  
    return result.join(" "); //Using .join(" ") method. We will add the spaces and return a String
}

//Template literal
const bookTitle = "Alice in Wonderland";
const price = 9.50;
console.log(bookTitle + " is on sale for $" + price + "."); //Regular concatenation String
console.log(`${bookTitle} is on sale for $${price}.`); //Template literal using backticks ` and calling the variable using ${myVariable}
