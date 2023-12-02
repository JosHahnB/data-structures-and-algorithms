'use strict'



function repeatedWord(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g); // Extract words from the string
  if (!words) return null; // No words found

  const wordSet = new Set();

  for (const word of words) {
    if (wordSet.has(word)) {
      return word; // Found the first repeated word
    }
    wordSet.add(word);
  }

  return null; // No repeated words found
}

module.exports = repeatedWord;