/*
https://www.algoexpert.io/questions/reverse-words-in-string

Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order.

For example, given the string
"tim is great", your function should return "great is tim".

For this problem, a word can contain speclal characters, punctuation, and numbers. The words in the string wilfe separated by one or more whitespaces, 
and the reversed string must contain the same whitespaces as the original string. For example, given the string
"whitespaces    4" you would be expected to return "4    whitespaces"

Note that you're not allowed to to use any built-in split reverse
methods/functions. However, you are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to always contain words.

Sample Input
string = "AlgoExpert is the best!"

Sample Output
"best! the is AlgoExpert"
*/

export function reverseWordsInString(string: string) {
  const parts: string[] = []

  let start = 0
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (char === ' ') {
      if (start !== i) {
        parts.push(string.slice(start, i))
      }
      parts.push(' ')
      start = i + 1
    }
  }
  if (start !== string.length) {
    parts.push(string.slice(start))
  }

  reverseList(parts)
  return parts.join('')
}

function reverseList(list: string[]) {
  let left = 0
  let right = list.length - 1
  while (left < right) {
    const temp = list[left]
    list[left] = list[right]
    list[right] = temp
    left++
    right--
  }
}
