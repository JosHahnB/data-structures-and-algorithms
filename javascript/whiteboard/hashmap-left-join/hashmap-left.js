function leftJoin(synonyms, antonyms) {
  const result = {};

  for (const [word, synonym] of Object.entries(synonyms)) {
    result[word] = [synonym, antonyms[word] || null];
  }

  for (const word in antonyms) {
    if (!result[word]) {
      result[word] = [null, antonyms[word]];
    }
  }

  return result;
}