console.log("Script works")
var fullname="Mayur Patil"
console.log("Myy name is" + fullname)
fullname="Rashi"
console.log("My name is now"+fullname)

function printloop(){

    for(var i=0;i<5;i++)
    {
        console.log("Current loop is"+i)
    }
    console.log("My value of i is "+i)  
    // (var can be accessed inside whole the function)

    for(let j=0;j<5;j++)
    {
        console.log("Current loop is"+j)
    }
    // console.log("My value of j is "+j)  
    // (let cannot be accessed outside the for loop)
}

printloop();

let isMale=true
/*
	Variables->var,let,const
	var name="Rashi" (can be declared and updated)
	var name="pooja"
	
	let m1="m" (can be updated )
	m1="n"
	
	const a=12
*/


/*
Datatypes
    1. undefined
    2.null
    3.boolean
    4.string
    5.symbol
    6.number
    7.object

*/

 const myage=37; 
//  (we freezed the value now myage cannot be change)

const a=10;
const b=20;
const sum = a+b;
console.log("Sum is" + sum)
const deduct =b-a;
console.log("Deduction value is "+ deduct)
const mul= a*b;
console.log("Multiplication value is "+ mul)
const div=b/a;
console.log("Div value is "+ div)


var num1 =22;
num1 += 5;
console.log("Num1 value is "+ num1);

var myname1 = "Mayur";
var myname2 ='Mayur';
// var myname3 = 'Mayur's book';
var myname3 = 'Mayur\'s book';
var myname4 = "Mayur\"s\" book";
console.log(myname4)

var todnews = `Mayurs's full name is "Myur patil"` 
// (Backtick) (With backtick we can have multiline text)
todnews = `Num1 val is ${num1}`
console.log(todnews)

var mypara = "THis is LIn1 \n thus is lin2 \n this is line3"
console.log(mypara)

/*
'
""
`

\n
\r
\t
\b



*/

var country = ["India","USA","UK","Aus"]
console.log(country);
var country = ["India","USA","UK","Aus",1,5,6,true]




// can create a array of mix datatype
// Dynamic type or loosely coupled

var multi = [
    ["Mayur","Patil"],
    [1,4,5,6],
    [true,false,true]   
];
console.log(multi);
console.log("My country is" + country[0]);
console.log("My last name is "+ multi[0][1]);

multi[0][1]="Patel"
console.log("My last name is" + multi[0][1]);

var arr1 = [1,2,3,4,5];
arr1.pop();
console.log(arr1);
const p1=arr1.pop();
console.log(p1)
arr1.shift();
// shift removes the first item
console.log(arr1);
const p2=arr1.shift();
console.log(p2);

arr1.unshift(99);
// unshift adds the value at beginning
console.log(arr1);
arr1.push(100);
console.log(arr1);


function myfun(a,b){
    console.log(`Value of a is ${a} and b is ${b}`);
}

myfun(44,"data")

function addition(a,b){
    return a+b;
}
console.log("The addition is "+ addition(33,44));

var myglobal =33;
function somefun(){
    myglobal=22;
    console.log(myglobal)
}
somefun();

let myfun3 =  function(val1){
    return "MY val is"+ val1;
}
console.log(myfun3(33))

let myfun4 = (val1) =>  "MY val is" +val1
console.log(myfun4(33))

function trueorFalse(isItTrue){
    if(isItTrue == true) return "True value"
    else return "False value"
}
console.log(trueorFalse(true))

function equalTo(val){
    if(val === 12) return "Val is 12";
    else return "Val is not 12"

    // if(val !=== 12) return "Val is not 12";
}
// == for value(it can be number or string), ===(it will check the datatype also)
console.log(equalTo(12));
console.log(equalTo("12"));

function checkSpeed(speed){
    if(speed >0 && speed <12 ){
        return "Slow speed"
    }
    else if(speed>10 && speed<20){
        return "High speed"
    }
}
console.log(checkSpeed(15));

function checkSpeed2(speed){
    if(speed <100 || speed >150){
        console.log("High Speed")
    }else{
        console.log("Low Speed")
    }
}
checkSpeed2(150)

function shortif(val){

    // if(val == null){
    //     return "It's a null value"
    // }else{
    //     return "It's not a null value"
    // }


    return(val === null)? "It's a null value" :" It's not a null value";
}

let i=0;
while (i<5) {
    console.log("My current i is" + i);
    i++;
}

var myarray =[];
var i1=0;
do{
    myarray.push(i1);
    i1++;
}while(i1<5)
console.log(myarray)

function getRandomNum(){
    return Math.random();
}
console.log(getRandomNum());

function getRandomNum2(){
    return Math.floor(Math.random() *20)
}
console.log(getRandomNum2());

function getRandomNum3(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(getRandomNum3(100,110))














