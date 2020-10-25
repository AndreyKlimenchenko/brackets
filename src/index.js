

var bracketsLeft = ['{', '(', '['];
var bracketRight = ['}', ')', ']'];

module.exports = function check(str, bracketConfig) {
  var openingChars = [];
  var closingChars = [];
var theSame =false;

  bracketConfig.flat().forEach( (item) => {
    if(item === '|'){
     theSame = true;
    }
    if(bracketsLeft.indexOf(item) >-1){
      openingChars.push(item);
    } else if (bracketRight.indexOf(item) > -1){
      closingChars.push(item);
    }
  });

  var stack = [];
var theSameBrackets = [];
  for (var i = 0, len = str.length; i < len; i++) {
      var char = str[i];
      var openIdx = openingChars.indexOf(char);
      var closeIdx = closingChars.indexOf(char);
    if(theSame && char === '|'){
      theSameBrackets.push(i)
    }
      if (openIdx > -1) {
          stack.push(openIdx);
      } else if (closeIdx > -1) {            
          if (stack.length === 0) return false;
          lastIdx = stack.pop();
          if(lastIdx !== closeIdx) return false;
      }
  }

if(theSameBrackets.length !==0 && theSameBrackets.length % 2 === 0) {
      return true;
}
  if (stack.length !== 0) return false;
  return true;     
};
