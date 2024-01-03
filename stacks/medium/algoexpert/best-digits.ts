/*
https://www.algoexpert.io/questions/best-digits

Write a function that takes a positive integer represented as a string number and an integer numDigits.
Remove numDigits from the string so that the number represented by the string is as large as possible afterwards.

Note that the order of the remaining digits cannot be changed. You can assume numDigits will always be less than the length
of the number and greater than or equal to 0.

Sample Input
number = '462839'
numDigits = 2

Sample Output
'6839' // remove digits 4 and 2
*/

export function bestDigits(number: string, numDigits: number) {
  const stack: string[] = []
  let removedDigits = 0
  for (const digit of number) {
    while (removedDigits < numDigits && digit > stack[stack.length - 1]) {
      stack.pop()
      removedDigits++
    }
    stack.push(digit)
  }

  while (removedDigits < numDigits) {
    stack.pop()
    removedDigits++
  }
  return stack.join('')
}
