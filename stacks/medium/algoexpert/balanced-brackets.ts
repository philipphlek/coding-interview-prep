/*
https://www.algoexpert.io/questions/balanced-brackets

Write a function that takes in a string made up of brackets and other optional characters.
The function should return a boolean representing whether the string is balanced with regards to brackets.

A string is said to be balanced if this has as many opening brackets of a certain type as it has closing brackets of that type
and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it,
and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(])

Sample Input
string = '([])(){}(())()()'

Sample Output
true // it's balanced
*/

export function balancedBrackets(string: string) {
  const OPENING_BRACKETS = ['(', '[', '{']
  const CLOSING_BRACKETS = [')', ']', '}']
  const CLOSING_BRACKET_LOOKUP: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack: string[] = []
  for (let i = 0; i < string.length; i++) {
    const bracket = string[i]
    if (OPENING_BRACKETS.includes(bracket)) {
      stack.push(bracket)
    } else if (CLOSING_BRACKETS.includes(bracket)) {
      if (!stack.length) {
        return false
      }
      const previousBracket = stack[stack.length - 1]
      if (CLOSING_BRACKET_LOOKUP[previousBracket] === bracket) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
