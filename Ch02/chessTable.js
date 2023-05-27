const size = 8
let chessTable = ""

for (let a = 0; a < size; a++) {
    for (let b = 0; b < (size / 2); b++) {
        if (a % 2 == 0) {
            chessTable += "  #"
        } else {
            chessTable += "#  "
        }
    }
    chessTable += "\n"
}
console.log(chessTable)