/*
https://www.algoexpert.io/questions/common-characters

Write a function that takes in a non-empty linst of non-empty strings and 
returns a list of the characters that are common to all strings in the list,
ignoring multiplicity.

Note that the strings are not garanteed to only contain alphanumeric characters.
The list you return can be in any order.

Sample Input
strings = ["abc", "bcd", "cbaccd"]

Sample Output
["b", "c"] // The characters could be ordered differently.
*/

export function commonCharacters(strings: string[]) {
  const charTracker: Record<string, number> = {}
  for (let i = 0; i < strings.length; i++) {
    for (const char of new Set(strings[i])) {
      charTracker[char] = (charTracker[char] || 0) + 1
    }
  }

  const commonChars: string[] = []
  for (const [char, count] of Object.entries(charTracker)) {
    if (count === strings.length) {
      commonChars.push(char)
    }
  }
  return commonChars
}
