function concatRomans(letter, number) {
  var text= '';
  for(var i = 0; i < number; i++) {
    text += letter;
  }
  return text;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#user-input").val());

    if (userInput > 3999) {
      alert("Number is too big. Enter number less than 4000!")
    } else if (userInput >= 1000) {
      var thousands = userInput / 1000;
      concatRomans("M", thousands);
      console.log(concatRomans("M", thousands));

    } else if (userInput >= 900) {
      // concatRomans("CM", 1);
      console.log("CM");

    } else if (userInput >= 500) {
      var handreds2 = userInput / 100 - 5;
      var numbsC = concatRomans("C", handreds2);
      console.log("D" + numbsC);

    } else if (userInput >= 400) {
      console.log("CD");

    } else if (userInput >= 100) {
      var handreds1 = userInput / 100;
      var numbsD = concatRomans("D", handreds1);
      console.log(numbsD);

    } else if (userInput >= 90) {
      console.log("XC")

    } else if (userInput >= 50) {
      var tens2 = userInput / 10 - 5;
      var numbsX = concatRomans("X", tens2);
      console.log("L" + numbsX);

    } else if (userInput >= 40) {
      console.log("XL");

    } else if (userInput >= 10) {
      var tens1 = userInput / 10;
      var numbsX = concatRomans("X", tens1);
      console.log(numbsX);

    } else if (userInput === 9) {
      console.log("IX");

    } else if (userInput >= 5) {
      var ones2 = userInput - 5;
      var numbsI = concatRomans("I", ones2)
      console.log("V" + numbsI);

    } else if (userInput === 4) {
      console.log("IV");

    } else {
      var numbsI = concatRomans("I", userInput);
      console.log(numbsI);
    }



  //  $(".result").show();
  });
});
