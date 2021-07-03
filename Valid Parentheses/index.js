"use strict";
function validParentheses(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    (parens[i] == '(') ? n++ : n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}