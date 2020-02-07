/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1493360096740)

**Example**

- For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/ex1.jpg?_tm=1493360096945)

**Hint**
-   parseInt()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] string bishop**

Coordinates of the white bishop in the chess notation.

- **[input] string pawn**

Coordinates of the black pawn in the same notation.

- **[output] boolean**

true if the bishop can capture the pawn, false otherwise.
 */

function bishopAndPawn(a, b) {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  const bishopX = board[a[0]];
  const bishopY = parseInt[a[1]];
  const pawnX = board[b[0]];
  const pawnY = parseInt[b[1]];

  if (
    bishopX + pawnY == pawnX + bishopY ||
    bishopX + bishopY == pawnY + pawnX
  ) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn("a1", "c3"));
