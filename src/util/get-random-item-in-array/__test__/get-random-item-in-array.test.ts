import { describe, it, expect } from "vitest";
import { getRandomItemInArray } from "..";

describe("getRandomItem", () => {
  it("should return an item from the array", () => {
    const items = ["apple", "banana", "cherry", "date"];
    const randomItem = getRandomItemInArray(items);
    expect(items).toContain(randomItem);
  });

  it("should throw an error if the array is empty", () => {
    const emptyArray: unknown[] = [];
    expect(() => getRandomItemInArray(emptyArray)).toThrow("Array is empty.");
  });

  it("should handle arrays with one item correctly", () => {
    const singleItemArray = ["onlyItem"];
    const randomItem = getRandomItemInArray(singleItemArray);
    expect(randomItem).toBe("onlyItem");
  });
});
