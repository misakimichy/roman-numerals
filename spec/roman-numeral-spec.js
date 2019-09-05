import { convertToRomanNumeral } from './../src/main';

describe('convertToRomanNumeral', function() {
  it('should convert to roman numeral', function() {
    expect(convertToRomanNumeral(1)).toEqual("I");
    expect(convertToRomanNumeral(2)).toEqual("II");
    expect(convertToRomanNumeral(3)).toEqual("III");
    expect(convertToRomanNumeral(4)).toEqual("IV");
    expect(convertToRomanNumeral(5)).toEqual("V");
    expect(convertToRomanNumeral(6)).toEqual("VI");
    expect(convertToRomanNumeral(7)).toEqual("VII");
    expect(convertToRomanNumeral(8)).toEqual("VIII");
    expect(convertToRomanNumeral(9)).toEqual("IX");
    expect(convertToRomanNumeral(10)).toEqual("X");
    expect(convertToRomanNumeral(100)).toEqual("C");
    expect(convertToRomanNumeral(1000)).toEqual("M");
    expect(convertToRomanNumeral(1234)).toEqual("MCCXXXIV");
  });
  it('should return an error besides 1 - 3999', function() {
    expect(function(){convertToRomanNumeral(0);}).toThrow(new Error("Please enter number between 1 to 3999!"));
    expect(function(){convertToRomanNumeral(4000);}).toThrow(new Error("Please enter number between 1 to 3999!"));
  });
});