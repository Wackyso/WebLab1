let stud = function(name, age) {
    return {age: age,
    name: name}
}

var mas = []
let summ = function() {
    
    
    let rt = axios({
            method: 'get',
            url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
            responseType: 'application/json'
    }).then(resp => {
        let res = resp.data    
        console.log(res)
        let main = document.getElementById("main")
        
        res.forEach(q => {
            main.insertAdjacentHTML('beforeend', `<div class=\"ib card\" style="color: #ffffff"> ${q.ccy}: ${q.base_ccy} 
            <div> buy: ${q.buy} </div>
            <div>sale: ${q.sale} </div>
            </div>`
            )
        });
    })
}

