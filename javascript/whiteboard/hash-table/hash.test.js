const Hashtable = require('./hash');

// Test 1: Basic set and get
test('Hashtable set and get', () => {
  const hashtable1 = new Hashtable();
  hashtable1.set('name', 'Alice');
  expect(hashtable1.get('name')).toBe('Alice');
});

// Test 2: Update existing key
test('Hashtable update existing key', () => {
  const hashtable2 = new Hashtable();
  hashtable2.set('age', 30);
  hashtable2.set('age', 31); // Updating the value for the existing key "age"
  expect(hashtable2.get('age')).toBe(31);
});

// Test 3: Check if key exists and get all keys
test('Hashtable has key and get all keys', () => {
  const hashtable3 = new Hashtable();
  hashtable3.set('city', 'New York');
  expect(hashtable3.has('city')).toBe(true);
  expect(hashtable3.keys()).toEqual(['city']);
});