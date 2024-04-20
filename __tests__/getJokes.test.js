const {
  getTotalJokes,
  getJokeByIndex,
  getRandomJoke,
} = require("../utils/getJokes");

describe("getTotalJokes", () => {
  test("should return the total number of jokes", () => {
    expect(getTotalJokes()).toBe(22); // since there are 22 jokes in the array
  });
});

describe("getJokeByIndex", () => {
  test("should return the correct joke at a specified index", () => {
    expect(getJokeByIndex(0)).toBe(
      "Why do programmers prefer dark mode? Because light attracts bugs!"
    );
    expect(getJokeByIndex(1)).toBe(
      "Why don't programmers like nature? It has too many bugs."
    );
  });

  test("should handle out of range indices by returning undefined", () => {
    expect(getJokeByIndex(22)).toBeUndefined(); // as there's no joke at index 22
  });
});

describe("getRandomJoke", () => {
  test("should return a joke", () => {
    const joke = getRandomJoke();
    expect(joke).toBeDefined();
    expect(typeof joke).toBe("string");
  });

  test("should return a random joke from the array", () => {
    // To test randomness, check multiple calls
    const jokes = new Set(Array.from({ length: 100 }, () => getRandomJoke()));
    expect(jokes.size).toBeGreaterThan(1); // Ensure we're getting different jokes
  });
});
