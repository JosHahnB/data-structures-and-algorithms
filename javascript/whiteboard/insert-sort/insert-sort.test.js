const insertSort = require('./insert-sort');

describe('Insertion Sort', () => {
  test('should sort an unsorted array', () => {
    const unsortedArray = [5, 3, 1, 2, 4];
    const expectedSortedArray = [1, 2, 3, 4, 5];

    expect(insertSort(unsortedArray)).toEqual(expectedSortedArray);
  });

  test('should not change an already sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];

    expect(insertSort([...sortedArray])).toEqual(sortedArray);
  });
});