const baseHexConvertor = function (num) {

  switch (num) {
    default:
      return num;
    case 10:
      return 'a';
    case 11:
      return 'b';
    case 12:
      return 'c';
    case 13:
      return 'd';
    case 14:
      return 'e';
    case 15:
      return 'f';
  }
}

const convertorToHex = function (num){
  if (num > 255 || num < 0) { return 'error' }

  const first_digit = num%16;
  const hex_first_digit = baseHexConvertor(first_digit);

  const second_digit = (num - num%16)/16;
  const hex_second_digit = baseHexConvertor(second_digit);

  return hex_second_digit + hex_first_digit.toString();
}
//////////////////////////////////////////////////////////////
const baseRGBConvertor = function (char) {
  switch (char) {
    default:
      return Number(char);
    case 'a':
      return 10;
    case 'b':
      return 11;
    case 'c':
      return 12;
    case 'd':
      return 13;
    case 'e':
      return 14;
    case 'f':
      return 15;
  }
}
const convertorToRGB = function (str){
  const rgb = baseRGBConvertor(str[0])*16+baseRGBConvertor(str[1]);
  return rgb;
}
////////////////////////
