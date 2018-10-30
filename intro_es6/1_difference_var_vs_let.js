// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

// This error can be seen in the console of your browser.

// So unlike var, when using let, a variable with the same name can only be declared once.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
console.log(catTalk());