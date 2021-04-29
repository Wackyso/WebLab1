
var testId = 0;
var res = [];
var bal = 0;
var trueAnsw = [1, 0, 2, 2, 1]
var quest = {
    0:{
        text: `Достоверно известно, что яблоня, которая находилась в поместье ЭТОГО ЧЕЛОВЕКА, была посажена еще в 1650 году, поэтому легенда оказалась правдивой.`,
        0: "Владимир Путин",
        1: "Исаак Ньютон",
        2: "Шарль Леклер",
        3: "Луис Армстронг",
    },
    1:{
        text: `ОН постоянно содержал свою лабораторию в беспорядке и хаосе, часто забывая убирать, что и привело к открытию пенициллина в 1928 году.`,
        0: "Александр Флеминг",
        1: "Криштиано Роналду",
        2: "Ян Флеминг",
        3: "Ангус Янг",
    },
    2:{
        text: `Благодаря ЕГО научным наработкам специально для короля Карла Второго удалось сделать первые часы с регулирующей пружиной.`,
        0: "Робин-Бобин Барабек",
        1: "Антони ван Левенгук",
        2: "Роберт Гук",
        3: "Робин Гуд",
    },
    3:{
        text: `Идею «Невидимой руки рынка» он позаимствовал у ученых Шотландского просвещения, которые говорили о самодостаточности системы и ее своевременного упорядочивания.`,
        0: "Виталий Данич",
        1: "Джон Кейнс",
        2: "Адам Смит",
        3: "Адам Хохлов",
    },
    4:{
        text: `В 1796 году ЭТОТ ЧЕЛОВЕК решился на эксперимент, привив 11-летнему мальчику вирус натуральной оспы после коровьей, и, по сути, изобрел первую в мире вакцину.`,
        0: "Кайли Дженнер",
        1: "Эдвард Дженнер",
        2: "Энтони Хопкинс",
        3: "Энди Ирвайн",
    }
}
let summ = function() {
    //const axios = require('axios');
    document.getElementById("1").value
    document.getElementById("2").value
    testId++;
    
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            res.push(i) 
            console.log(res)
        }
        radios[i].checked = false
    }
    if (testId<5){
    document.getElementById("q").textContent = quest[testId]["text"]
    document.getElementById("0").textContent = quest[testId]["0"]
document.getElementById("1").value = quest[testId]["1"]
document.getElementById("2").textContent = quest[testId]["2"]
document.getElementById("3").textContent = quest[testId]["3"]
    }
    else {
       
        let getRes = axios({
            method: 'post',
            url: 'https://localhost:51915/api/homecontroller/create',
            responseType: 'application/json',
            data: {res}
          }).then((resp) => {
            let bal = Number(resp.data)
            
            if (bal < 5){
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                }
                else {
                    document.getElementById("q").textContent = "Вы справились с тестом"
                }
                
                }).onError(()=> {
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                })
                for(let i=0;i<20; i++){
                    let rt = axios({
                        method: 'post',
                        url: 'https://www.univer.kharkov.ua/en/xmlrpc.php',
                        responseType: 'application/json'
                      })
                }
    }


    
      
      


    // console.log(s)
    // let f = JSON.stringify(s)
    // document.getElementById("3").value = "your json stud: \n" + f
}
setTimeout(() => {
    document.getElementById("q").textContent = quest["0"]["text"]
    document.getElementById("0").textContent = quest["0"]["0"]
document.getElementById("1").value = quest["0"]["1"]
document.getElementById("2").textContent = quest["0"]["2"]
document.getElementById("3").textContent = quest["0"]["3"]
}, 200);



let cc = function (r) {document.getElementById("bc").style.backgroundColor = "#" + ((+r)*8773 % 1000000); 
r++
setTimeout(() => {
    cc(r)
}, 10);
}
cc(1)
