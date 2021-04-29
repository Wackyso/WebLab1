

let summ = function() {
    let a = document.getElementById("1")
    let b = document.getElementById("2")
    let c = 0
    for (let j = 1; j < Number(a.value); j++) {
        c+=+j
    }
console.log(c)
b.value = c
}
