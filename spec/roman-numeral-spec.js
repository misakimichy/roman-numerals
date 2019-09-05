import { convertToRomanNumeral } from './../src/main';

describe('convertToRomanNumeral', function() {
  it('should convert to roman numeral', function() {
      // verify 1..10
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
  });
});