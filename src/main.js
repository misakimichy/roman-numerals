import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const concatRomans = (letter, number) => {
  let text= '';
  for(let i = 0; i < number; i++) {
    text += letter;
  }
  return text;
};

export const convertToRomanNumeral = (userInput) => {
  const digits = userInput.length;
  if (userInput > 3999 || userInput <= 0) {
    alert("Please enter number between 1 to 3999!");
  }

  let thousandsRem, hundredsRem, tensRem;
  let romanNumeral = '';
  // Bigger than 1000 (4 digits)
  if (digits >= 4) {
    thousandsRem = userInput % 1000;
    const digitThousands = (userInput - thousandsRem) / 1000;
    const numbsM = concatRomans("M", digitThousands);
    romanNumeral += numbsM;
  }

  // Bigger than 100 and less than 1000 (3 digits)
  if (digits >= 3) {
    let digitHundreds;
    //Define digitHundreds
    if (thousandsRem){
      hundredsRem = thousandsRem % 100;
      digitHundreds = (thousandsRem - hundredsRem) / 100;
    } else {
      hundredsRem = userInput % 100;
      digitHundreds = (userInput - hundredsRem) / 100;
    }

    if (digitHundreds  === 9){
      romanNumeral += "CM";

    } else if (digitHundreds >= 5) {
      const digitHundreds2= digitHundreds - 5;
      const numbsC = concatRomans("C", digitHundreds2);
      romanNumeral += "D" + numbsC;

    } else if (digitHundreds === 4) {
      romanNumeral += "CD";

    } else {
      var numbsC = concatRomans("C", digitHundreds);
      romanNumeral += numbsC;
    }
  }

  // Bigger than 10 and less than 100 (2 digits)
  if (digits >= 2) {
    let digitTens;
    // Define digitTens
    if (hundredsRem){
      tensRem = hundredsRem % 10;
      digitTens = (hundredsRem - tensRem) / 10;
    } else {
      tensRem = userInput % 10;
      digitTens = (userInput - tensRem) / 10;
    }
    if (digitTens  === 9){
      romanNumeral += "XC";

    } else if (digitTens >= 5) {
      const digitTens2 = digitTens - 5;
      const numbsX = concatRomans("X", digitTens2);
      romanNumeral += "L" + numbsX;

    } else if (digitTens === 4) {
      romanNumeral += "XL";

    } else {
      const numbsX = concatRomans("X", digitTens);
      romanNumeral += numbsX;
    }
  }

  // less than 10
  if (digits >= 1) {
    // Define digitOnes
    if(!tensRem) {
      tensRem = parseInt(userInput);
    }

    if (tensRem  === 9){
      romanNumeral += "IX";

    } else if (tensRem >= 5) {
      const numbsV = concatRomans("I", tensRem - 5);
      romanNumeral += "V" + numbsV;

    } else if (tensRem === 4) {
      romanNumeral += "IV";

    } else {
      const numbsI = concatRomans("I", tensRem);
      romanNumeral += numbsI;
    }
  }
  return romanNumeral;
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const userInput = $("input#user-input").val();
    const romanNumeral = convertToRomanNumeral(userInput);
    $(".result").show();
    $("#roman-numeral").text(romanNumeral);
  });
});