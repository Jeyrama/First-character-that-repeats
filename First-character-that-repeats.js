/*
Find the first character that repeats in a String and return that character.
firstDup('tweet') => 't'
firstDup('like') => undefined

This is not the same as finding the character that repeats first. 
In that case, an input of 'tweet' would yield 'e'.

Another example:
  In 'translator' you should return 't', not 'a'.
  v      v  
  translator
    ^   ^
  While second 'a' appears before second 't', 
  the first 't' is before the first 'a'.
*/


// Solution

function firstDup(s) {
  const letters = [...s];
  const dict = letters.reduce((akk, l) => {
    akk[l] = akk[l] ? akk[l] + 1 : 1;
    return akk;
  }, {});
  return letters.find(l => dict[l] > 1);
}

// or