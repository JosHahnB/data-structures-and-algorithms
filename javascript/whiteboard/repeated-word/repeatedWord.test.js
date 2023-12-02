const repeatedWord = require('./repeatedWord'); // Adjust the import path based on your project structure

// Test 1: Basic case with a repeated word
test('Find first repeated word', () => {
  const inputString = "This is a simple example. This example is simple.";
  expect(repeatedWord(inputString)).toBe('this');
});

// Test 2: Case with no repeated words
test('No repeated words', () => {
  const inputString = "This is a unique example.";
  expect(repeatedWord(inputString)).toBe(null);
});

// Test 3: Case with punctuation and mixed case
test('Ignore punctuation and case', () => {
  const inputString = "This! is a Simple Example. This example is simple.";
  expect(repeatedWord(inputString)).toBe('this');
});

// Test 4: Edge case with an empty string
test('Empty string', () => {
  const inputString = "";
  expect(repeatedWord(inputString)).toBe(null);
});
