let result = "#";
for (let a = 1; a < 7; a++) {
    result += "\n#"
    for (let b = 0; b < a; b++) {
        result += `#`
    }
}
console.log(result)