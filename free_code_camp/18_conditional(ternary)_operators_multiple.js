function checkSign(num) {
  return (num > 0)? "positive" : (num < 0)? "negative" : "zero";
  }


console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(3.343));
console.log(checkSign(0.4523));
console.log(checkSign(-0.4523423));
console.log(checkSign(-55));
