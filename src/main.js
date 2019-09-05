import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
    var userInput = $("input#user-input").val();
    var digits = userInput.split('').length;

    if (userInput > 3999 || userInput <= 0) {
      alert("Please enter number between 1 to 3999!");
    }

    var thousandsRem, hundredsRem, tensRem;

    if (digits >= 4) {
      thousandsRem = userInput % 1000;
      var digitThousands = (userInput - thousandsRem) / 1000;
      var numbsM = concatRomans("M", digitThousands);
      return numbsM;
    }
    if (digits >= 3) {
      var digitHundreds;
      //Define digitHundreds
      if (thousandsRem){
        hundredsRem = thousandsRem % 100;
        digitHundreds = (thousandsRem - hundredsRem) / 100;
      } else {
        hundredsRem = userInput % 100;
        digitHundreds = (userInput - hundredsRem) / 100;
      }

      if (digitHundreds  === 9){
        return "CM";

      } else if (digitHundreds >= 5) {
        var digitHundreds2 = digitHundreds - 5;
        var numbsC = concatRomans("C", digitHundreds2);
        return "D" + numbsC;

      } else if (digitHundreds === 4) {
        return "CD";

      } else {
        var smallNumbsC = concatRomans("C", digitHundreds);
        return smallNumbsC;
      }
    }
    if (digits >= 2) {
      var digitTens;
      // Define digitTens
      if (hundredsRem){
      tensRem = hundredsRem % 10;
      digitTens = (hundredsRem - tensRem) / 10;
    } else {
      tensRem = userInput % 10;
      digitTens = (userInput - tensRem) / 10;
    }
      if (digitTens  === 9){
        return "XC";

      } else if (digitTens >= 5) {
        var digitTens2 = digitTens - 5
        var numbsX = concatRomans("X", digitTens2);
        return "L" + numbsX;

      } else if (digitTens === 4) {
        return "XL";

      } else {
        var smallNumbsX = concatRomans("X", digitTens);
        return smallNumbsX;
      }
    }
    if (digits >= 1) {
      // Define digitOnes
      if(!tensRem) {
        tensRem === parseInt(userInput);
      }

      if (tensRem  === 9){
        return "IX";

      } else if (tensRem >= 5) {
        var numbsV = concatRomans("I", tensRem - 5);
        return "V" + numbsV;

      } else if (tensRem === 4) {
        return "IV";

      } else {
        var numbsI = concatRomans("I", tensRem);
        return numbsI;
      }
    }
  //  $(".result").show();
  });
});
