/*
https://www.algoexpert.io/questions/caesar-cipher-encryptor

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter `z` shifted by one returns the letter `a`.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
*/

export function caesarCipherEncryptor(string: string, key: number) {
  const newStringArray: string[] = []
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (const letter of string) {
    const newLetterIndex = letters.indexOf(letter) + key
    const newLetter = letters[newLetterIndex % letters.length]
    newStringArray.push(newLetter)
  }
  return newStringArray.join('')
}
