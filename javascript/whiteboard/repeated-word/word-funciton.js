'use strict'



function repeatedWord(str) {
  const words = str.split(/\W+/);

  for (let i = 0; i < words.length; i++) {
    const word1 = words[i];
    for (let j = i +1; j < words.length; j++) {
      const word2 = words[j];
      if (word1 === word2) {
        return word1
      }
    }
  }
  return 'no repeats found...'; 
}