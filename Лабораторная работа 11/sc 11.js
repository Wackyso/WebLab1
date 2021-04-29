let ert = function(surname,name, task) {
    return {surname: surname,
    name: name,
    task: task}
}
var mas = []
let summ = function() {
    let a = document.getElementById("1").value
    let b = document.getElementById("2").value
    let c = document.getElementById("3").value
    let s = new ert(a,b,c);
    console.log(s)
    document.getElementById("4").value = "name: " + s.surname + " surname: " + s.name+ " task: " + s.task
}

