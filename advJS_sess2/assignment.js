let q1 = document.getElementById("container")
console.log(q1)

let q2 = document.querySelector("#container")
console.log(q2)

var q3 = document.querySelectorAll('.second')
for (let i = 0; i < q3.length; i++) {
    console.log(q3[i].innerText)
}

var q4 = document.querySelector('ol > li.third')
console.log(q4.innerHTML)

var q5 = document.getElementById("container")
q5.insertAdjacentHTML("beforeBegin", "hello")

var q6 = document.querySelector('.footer')
q6.classList.add("main")

var q7 = document.querySelector('.main')
q7.classList.remove("main")

var q8 = document.createElement('li')
q8.innerText = "four"

const ul = document.querySelector('ul')
ul.appendChild(q8)

const q11 = document.querySelectorAll('ol > li')
for (let i = 0; i < q11.length; i++) {
    q11[i].style.background = "green"
}

const q12 = document.querySelectorAll(".footer")
for (const q of q12) {
    q.parentNode.removeChild(q)
}

//----- assignment 2-------

const arr = [
    {
        firstName: "daksh",
        lastName: "bindal",
        number: "999",
        likes: ["a", "b", "c"]
    },
    {
        firstName: "tarun",
        lastName: "kochar",
        number: "999",
        likes: ["a", "b", "c"]
    },
    {
        firstName: "xxx",
        lastName: "yy",
        number: "555",
        likes: ["x", "y", "z"]
    },
    {
        firstName: "abc",
        lastName: "bindal",
        number: "888",
        likes: ["ab", "bc", "cd"]
    },
    {
        firstName: "fff",
        lastName: "ager",
        number: "97979",
        likes: ["ag", "gg", "rr", "ef"]
    }
]

function myfunc(name, property) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].firstName == name) {
            return arr[i].hasOwnProperty(property)
        }
    }
}

console.log(myfunc("daksh", "stone"))

//----------assignment 3--------------


function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    c1.innerHTML = "New cell";
    c2.innerHTML = "New cell";
}

const employee = [
    {
        id: 1,
        name: 'daksh',
        age: 21,
        desgination: 'developer',
        salary: 120,
        phone: '999'
    },
    {
        id: 2,
        name: 'tarun',
        age: 22,
        desgination: 'developer',
        salary: 100,
        phone: '999'
    },
    {
        id: 3,
        name: 'sarthak',
        age: 25,
        desgination: 'accountant',
        salary: 25,
        phone: '999'
    },
    {
        id: 4,
        name: 'ritik',
        age: 23,
        desgination: 'accountant',
        salary: 50,
        phone: '093'
    },
    {
        id: 5,
        name: 'rahul',
        age: 35,
        desgination: 'manager',
        salary: 500,
        phone: '093'
    }
]
console.log("list of developers: ")
const q111 = employee.filter((employee) => employee.desgination == "developer")
console.log(q111)

console.log("List of people below 30: ")
const q22 = employee.filter((employee) => employee.age < 30)
console.log(q22)

console.log("List of people below 30- having salary more than 70k")
const q33 = employee.filter((employee) => employee.age < 30 && employee.salary > 70)
console.log(q33)

console.log("list of accountants having salary less than 40k")
const q44 = employee.filter((employee) => employee.desgination == "accountant" && employee.salary < 40 )
console.log(q44)


var devs=[];
var b30=[];
var ab70=[];
var accnt=[];
function func() {
    
    for (let i = 0; i < employee.length; i++) {
        const obj= employee[i];
        if(obj.desgination=="developer"){
            devs.push(obj.name)
        }
        if(obj.age<30){
            b30.push(obj.name)
        }
        if(obj.age<30 & obj.salary>70){
            ab70.push(obj.name)
        }
        if(obj.desgination=="accountant" && obj.salary<40){
            accnt.push(obj.name)
        }
    }
}
func();
console.log("list of developers: ")
console.log(devs)
console.log("List of people below 30: ")
console.log(b30)
console.log("List of people below 30- having salary more than 70k")
console.log(ab70)
console.log("list of accountants having salary less than 40k")
console.log(accnt)