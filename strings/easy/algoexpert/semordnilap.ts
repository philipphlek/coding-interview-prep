/*
https://www.algoexpert.io/questions/semordnilap

Write a function that takes in a list of unique strings and returns a list of 
semordnilaps pairs.

A semordnilap pair is defined as a set of different strings where the reverse
of one word is the same as the forward version of the other. For example the
words "diaper" and "repaid" are a semordnilap pair as are the words 
"palindromes" and "semordnilap".

The order of the returned pairs and the order of the strings within each pair
does not matter.

Sample Input
words = ["diaper", "abc", "test", "cba", "repaid"]

Sample Output
[["diaper", "repaid"], ["abc", "cba"]]
*/

export function semordnilap(words: string[]) {
  const wordTracker = new Set<string>()
  const result: string[][] = []
  for (const word of words) {
    const reverse = word.split('').reverse().join('')
    if (wordTracker.has(reverse)) {
      result.push([word, reverse])
      wordTracker.delete(reverse)
    } else {
      wordTracker.add(word)
    }
  }
  return result
}
