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
    // var arabics = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    //     romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var userInput = parseInt($("input#user-input").val());

    if (userInput > 3999) {
      alert("Number is too big. Enter number less than 4000!")
    } else if (userInput >= 1000) {
      var thousands = userInput / 1000;
      concatRomans("M", thousands);
      console.log(concatRomans("M", thousands));
    }

  //  $(".result").show();
  });
});
