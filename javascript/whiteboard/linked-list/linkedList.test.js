"use strict";

const { LinkedList } = require("./linkedList.js");
// "{ a } -> { b } -> { c } -> NULL"
const dummyLL = {
  value: "a",
  next: {
    value: "b",
    next: {
      value: "c",
      next: null,
    },
  },
};

describe("linked list test suite", () => {
  test("toString method returns the node values in the right format", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
  });
  test("includes method returns true if a value exists, else false", () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.includes("b")).toEqual(true);
    expect(testLL.includes("z")).toEqual(false);
  });
  test("insert should take a new value and add it to the front of the list", () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      "{ 1 } -> { a } -> { b } -> { c } -> NULL"
    );
  });
  // -----------------------------------------------------------------------------
  test('Where k is greater than the length of the linked list', () => {
    const testLL = new LinkedList(dummyLL);

    expect();
  })

  test('Where k and the length of the list are the same', () => {
    const testLL = new LinkedList(dummyLL);

    expect();
  })

  test('Where k is not a positive integer', () => {
    const testLL = new LinkedList(dummyLL);

    expect();
  })

  test('Where the linked list is of a size 1', () => {
    const testLL = new LinkedList(dummyLL);

    expect();
  })

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const testLL = new LinkedList(dummyLL);

    expect();
  })


});
