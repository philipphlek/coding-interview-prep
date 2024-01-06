/*
https://www.algoexpert.io/questions/first-non-repeating-character

Write a function that takes in a string of lowercase English-alphabet letters 
and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that
occurs only once.

If the input string doesn't have any non-repeating characters, your function
should return `-1`.

Sample Input
string = "abcdcaf"

Sample Output
1 // The first non-repeating character is "b" and is found at index 1.
*/

export function firstNonRepeatingCharacter(string: string) {
  const charTracker: Record<string, number> = {}
  for (const char of string) {
    if (!charTracker[char]) {
      charTracker[char] = 0
    }
    charTracker[char]++
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (charTracker[char] === 1) {
      return i
    }
  }
  return -1
}
