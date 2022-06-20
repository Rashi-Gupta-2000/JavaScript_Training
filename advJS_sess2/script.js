// var str = 'hello'
// console.log(str)

// var multi = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// console.log(multi[0][0])

// let name = "rashi"

// function namefunc() {
//     var lastname = 'gupta'
//     name = 'pooja'
//    return lastname
// }
// //console.log(lastname)
// // console.log(name)

// console.log(namefunc())
// // console.log(name)

// var person = {
//     name: 'rashi',
//     age: 20,
//     lastname: 'gupta'
// }
// person.address = "rewari"
// console.log(person)

// function objectCase(val) {
//     var ans = '';
//     var lookup = {
//         1: 'alpha',
//         2: 'gamma',
//         3: 'beta'
//     }
//     ans = lookup[val]
//     return ans;
// }

// console.log(objectCase(2))

// var myobj = {
//     gift: 'a',
//     paper: 'news',
//     stone: 'rock'
// }

// function checkObj(checkprop){
//     return myobj.hasOwnProperty(checkprop)
// }

// console.log(checkObj("rock"))

// var obj = [
//     {
//         name: 'rashi',
//         lastname: 'gupta',
//         learns: ["aws", "js"]
//     },
//     {
//         name: 'rashi',
//         lastname: 'gupta',
//         learns: ["aws", "js"]
//     }
// ]

// console.log(obj)

// function testObj() {
//     const mathobject = {
//         pi: '3.14'
//     }
//     Object.freeze(mathobject)
//     // mathobject.pi = '10'
//     // var value = 3 * mathobject.pi
//     try {
//         mathobject.pi="10"
//     } catch (err) {
//         console.log(err)
//     }
//     return mathobject.pi
// }

// console.log(testObj())

// const realnum = [4, 5, 6, -9, 0.6, 10, -2, 10.2];

// const list = (realnum) => {
//     const numbers = realnum.filter((num) => Number.isInteger(num) && num > 0)
//     return numbers;
// }

// console.log(list(realnum))

// const sum = (...args) => {
//     //const args = [x, y, z];
//     return args.reduce((a, b) => a + b)
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

// document.getElementById("para").innerHTML = "Hello world"
// const myElement = document.getElementById("para")
// myElement.style.color = "red"
// console.log(myElement)

// const collection = document.getElementsByClassName('test demo');
// collection[0].style.background = "red"

// let collection = document.getElementsByName('fname')
// document.getElementById('tagname').innerHTML = collection[0].tagName

// let num = document.getElementsByName('animal')
// for (let i = 0; i < num.length; i++) {
//     if (num[i].type == 'checkbox') num[i].checked = true
// }

// const collection = document.getElementsByTagName('p')
// collection[0].innerHTML="Hello world"

// const para = document.createElement('p');
// para.innerText = "this is para"
// document.getElementById('mydiv').appendChild(para)
// //document.body.appendChild(para)
// console.log(para)

// const button = document.createElement('button')
// button.innerHTML = 'New Button'
// document.body.appendChild(button)

// function newfunction(){
// // const attr = document.createAttribute('class')
// // attr.value="paraclass"
// //#add this to p
// document.getElementsByTagName('p')[0].setAttribute("class","paraclass")
// }


// document.querySelector('#test').style.background ="yellow"

// function newfunction() {
//     var element = document.querySelector("div > p")
//     element.style.background = "green"
// }

// const collection= document.querySelectorAll(".test")

// for (let index = 0; index < collection.length; index++) {
//     collection[index].style.background="green";

// }

// let app = document.querySelector('#app')
// let langs = ['HTML', 'JS', 'CSS']

// let element=langs.map((lang)=>{
//     let li= document.createElement('li')
//     li.innerHTML=lang
//     return li
// })

// app.append(...element)
// function alertmsg() {
//     alert("Button is clicked")
// }
// document.getElementById("clickme").onclick = alertmsg;

// function getformval() {
//     var x = document.getElementById("form1")
//     for (var i = 0; i < x.length; i++) {
//         if (x.elements[i].value != "submit") {
//             x.elements[i].value = "new"
//             console.log(x.elements[i].value)
//         }
//     }
// }
// let form = document.querySelector("#form1")
// form.addEventListener("click", getformval)

// function removecolor() {
//     var color = document.getElementById('colorselect')
//     color.remove(color.selectedIndex)
// }
// document.querySelector('#remove').addEventListener("click", removecolor)

// function myFunction() {
//     var element = document.getElementById('mydiv')
//     element.classList.toggle("divstyle")
// }


// let keyboard = document.querySelector("#keyboard")
// keyboard.addEventListener("keydown", (event) => {
//     console.log(event)
//     if (event.key == "@") {
//         alert("Key not allowed")
//         event.preventDefault()
//     }
// })

// const card = document.querySelector('aside')
// card.addEventListener('mousedown', (event) => {
//     console.log(event)
//     document.getElementById("para").style.color = "red"
//     //card.classList.toggle('large');
// })
// console.log('File loaded')

// function logkey(event) {
//     //console.log(event)
//     screenlog.innerText = `
//     Screen X/Y : ${event.screenX} ${event.screenY}
//     Client X/Y : ${event.clientX} ${event.clientY}
//     Page X/Y : ${event.pageX} ${event.pageY}
//     offset X/Y: ${event.offsetX} ${event.offsetY}
//     `
// }
// let screenlog = document.querySelector("#screen-log")
// document.addEventListener("mousemove", logkey)

// const ul = document.createElement('ul')
// document.body.appendChild(ul)

// const li1 = document.createElement('li')
// li1.innerText = "This is first li tag"

// const li2 = document.createElement('li')
// li2.innerText = "This is 2nd li tag"

// ul.appendChild(li1)
// ul.appendChild(li2)

// function changeColor(event) {
//     console.log(event.target)
//     event.target.style.color = "red"
// }
// ul.addEventListener("click", changeColor)

// const text = document.getElementById('nametext')
// text.addEventListener('focus', () => {
//     text.style.background = "yellow"
// })

// text.addEventListener('blur', () => {
//     text.style.background = "red"
// })

// const selecttext = document.getElementById('selectTest')
// selecttext.addEventListener('change', (event) => {
//     console.log(event.target.value)
// })

// const form1 = document.getElementById('form1')
// form1.addEventListener('submit', (event) => {
//     console.log(event.target.elements)
//     event.preventDefault()
// })

// const timeIdentifier = setTimeout(() => {
//     console.log("This is timeout")
// }, 500);

// const intervalIdentifier = setInterval(() => {
//     console.log("this is interval")
// }, 500);

// clearTimeout(timeIdentifier)

// clearInterval(intervalIdentifier)

// let name = "rashi"

// function welcome() {
//     let message = "Hi"
//     console.log(message + " " + name)
// }
// welcome()

// function greeting() {
//     let newmessage = "hello"

//     function sayhello() {
//         console.log(newmessage)
//     }
//     //sayhello()
// }
// greeting()

// function welcomeall() {
//     let welcome = "new message"

//     function sayhi() {
//         console.log(welcome)
//     }
//     return sayhi
// }

// let hi = welcomeall()
// hi()

// function myFunction(message) {
//     console.log(message)
//     return function (name) {
//         return message + ' ' + name
//     }
// }
// let ret = myFunction("hello")
// console.log(ret("rashi"))

// const vidplay = {
//     title: "new title",
//     tags: ["a", "b"],
//     showTags() {
//         this.tags.forEach((tag) => {
//             console.log(this)
//         })
//     }
// }

// vidplay.showTags();
//  const obj ={10:'arry', 21:'barry',23:'mkc'}
//  console.log(Object.entries(obj)[2])

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("")
//     };
// }

// const circle3 = new Circle(12)

// let x = 10
// let y = x
// x = 20

// console.log(x, y)

// let ob1 = { value: 10 }
// let ob2 = ob1
// ob1.value = 30
// console.log(ob1, ob2)
// var num=10
// function increase(num){
//     num++
// }

// increase(num)
// console.log(num)

// let ob3={value:10}

// function increment(obj){
//     obj.value++
// }

// increment(ob3)
// console.log(ob3)

// function FirstCircle(radius) {
//     this.radius = radius
//     this.defaultLocation = { pi: 3.14 }
//     this.computeLocation = function () {
//         //
//     }
//     this.draw = function () {
//         this.computeLocation();
//         console.log("Juat a method")
//     }
// }

// const circle4 = new FirstCircle(20)

// function SecondCircle(radius) {
//     let color = 'red'
//     this.radius = radius //globally available
//     let defaultLocation = { x: 20 } //not available
//     let computeLocation = function () {
//         //
//         console.log("in computeLocation")
//     }
//     this.draw = function () {
//         computeLocation();
//         console.log("Juat a method")
//         console.log(defaultLocation)
//     }
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             console.log(defaultLocation)
//         },
//         set: function(num){
//             defaultLocation= num
//         }
//     })
// }

// const circle5 = new SecondCircle(10)
// circle5.defaultLocation
// circle5.defaultLocation = {x:60}
// circle5.defaultLocation
//console.log(circle5.draw())




//startime, endtime, running, duration

// function Myfunction() {
//     this.startTime = Date.now()
//     this.endTime = Date.now()
//     let duration = this.endTime - this.startTime
//     let running = false

//     this.start = function(){
//         if (running === true) {
//             throw new error()
//         }
//         else {
//             running = true
//             startTime = new Date().getTime()
//             console.log("The clock is started now")
//         }
//     }

//     this.stop = function(){
//         if(running == false){
//             console.log("Clock is already stopped")
//         }else{
//             running = false
//             endTime= Date.now()
//             duration += (this.endTime- this.startTime)/1000
//             console.log("Clock is stopped")
//         }
//     }

//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             console.log(duration)
//         }
//     })
//     Object.defineProperty(this, 'running', {
//         get: function () {

//         },
//         set: function (value) {
//             running = value
//         }
//     })
// }

// const obj = new Myfunction()
// obj.start()
// obj.start()
// obj.duration
// obj.stop()


// function timer() {
//     let startTime = 0;
//     let endTime = 0;
//     let running = false;
//     let duration = 0;
//     let seconds = 0;


//     this.start = function () {
//         if (running) {
//             throw new Error("Its already running");
//         }
//         else {
//             running = true;
//             startTime = new Date().getTime();
//             console.log("started")
//         }
//     }

//     this.stop = function () {
//         if (!running) {
//             throw new Error("Its already stopped");
//         }
//         else {
//             running = false
//             endTime = new Date().getTime();
//             seconds = (endTime - startTime) / 1000;
//             console.log("It ran " + seconds / 1000 + " seconds in this session");
//             duration += (endTime - startTime) / 1000;
//         }
//     }

//     this.reset = function () {
//         startTime = new Date().getTime();
//         endTime = 0;
//         running = false;
//         duration = 0;
//         seconds = 0;
//     }


//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             console.log(duration);
//         }
//     });

// }

// const obj = new timer();

// class Rectangle {
//     constructor() {
//         console.log("class is created")
//         this.width = 5
//         this.height = 10
//     }
//     getArea() {
//         return this.width * this.height
//     }
//     get area() {
//         return this.width * this.height
//     }
//     set area(a) {
//         this.width = a
//     }
//     static hello(x){
//         console.log(x.width)
//     }
// }

// let rect2 = new Rectangle()
// rect2.area = 102
// Rectangle.hello(rect2)


// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     describe() {
//         console.log(`I am ${this.name} and I am ${this.age} years old`)
//     }
// }

// class User extends Person {
//     constructor(name, age, exp) {
//         super(name, age)
//         this.exp = exp
//     }
//     code() {
//         console.log("echo")
//     }
// }

// const person1 = new Person('rashi', 21)
// const user1 = new User('gupta', 20, 5)

// console.log(person1)
// console.log(user1)
// user1.describe()
// user1.code()

// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     printWord(){
//         console.log("this is from animal class")
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     printWord(){
//         super.printWord()
//         console.log("This is from Dog Class")
//     }
// }

// const animal = new Animal("Tom")
// const dog = new Dog("Tommy")

// console.log(animal.printWord())
// console.log(dog.printWord())

// const posts = [
//     { title: "post 1", body: "this is body 1" },
//     { title: "post 2", body: "this is body 2" },

// ]

// function getPost() {
//     setTimeout(() => {
//         let output = "";
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//         //getPost()
//     }, 2000)
// }
// createPost({ title: "post 3", body: 'this is post 3' })
// function createPost2(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject("Something went wrong")
//             }
//         }, 2000)
//     })
// }

// createPost2({ title: "post 4", body: "this is body 4" })
//     .then(getPost)
//     .catch((err) => console.error(err))

// const p1 = Promise.resolve()
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// })
// Promise.all([p1, p2]).then((v) => {
//     console.log(v)
// })

const p4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then((res) => console.log(res));

async function init() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    console.log(data)
}

init()