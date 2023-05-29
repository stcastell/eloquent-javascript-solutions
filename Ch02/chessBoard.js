const size = 8
let chessBoard = ""

for (let a = 0; a < size; a++) {
    for (let b = 0; b < (size / 2); b++) {
        if (a % 2 == 0) {
            chessBoard += "  #"
        } else {
            chessBoard += "#  "
        }
    }
    chessBoard += "\n"
}
console.log(chessBoard)
