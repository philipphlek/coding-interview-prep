/*
https://leetcode.com/problems/valid-sudoku/

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

function isValidSudoku(board: string[][]): boolean {
  const rowSet: Record<number, Set<string>> = {}
  const colSet: Record<number, Set<string>> = {}
  const boxSet: Record<number, Set<string>> = {}

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      if (cell === '.') {
        continue
      }
      const box = 3 * Math.floor(i / 3) + Math.floor(j / 3)
      if (!rowSet[i]) rowSet[i] = new Set()
      if (!colSet[j]) colSet[j] = new Set()
      if (!boxSet[box]) boxSet[box] = new Set()

      if (rowSet[i].has(cell) || colSet[j].has(cell) || boxSet[box].has(cell)) {
        return false
      }
      rowSet[i].add(cell)
      colSet[j].add(cell)
      boxSet[box].add(cell)
    }
  }
  return true
}
