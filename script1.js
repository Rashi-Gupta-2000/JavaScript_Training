// function myfun(){
//     var a=10;

//     this.a = 20;
//     console.log(a)
// }

// class Student {
//     fullname = "Mayur Patil";
//     printname(){
//         this.fullname
//     }
// }

const user = {
    fullname: "Mayur Patil",
    myage: 37,
    teach: function(){
        console.log(this)
        // This this will output teach's parent user object
    }
}
user.teach();

const anotherinstance = user.teach; /*(If we want to make the teach function avaliable to root then we should use this detachment)*/
// (We are not calling teach function... we are detaching it from user object and attaching it to anotherinstance)
console.log(anotherinstance)
anotherinstance();
// (Here this keyword will go and submit it to window(root element))
/* Window-
    - Document
    -anotherinstance 
*/



// var a=15;
// function fun1(){
//     // let a=11;
//     //  var a=11;
//     a=11;
//     for(var i=0;i<1;i++)
//     {
//         var a=12; /*(This a is different)*/
//         console.log(a);
//         console.log(this.a);
//         //(It will print the global value of a=15 which is functions's parent)
//     }
//     console.log(a);
// }
// fun1();

// Array
const task = [
    {
        id: 1,
        title: "Task 1",
        status: "In PRogress"
    },
    {
        id: 2,
        title: "Task 2",
        status: "Completed"
    },
    {
        id: 3,
        title: "Task 3",
        status: "In PRogress"
    },
    {
        id: 4,
        title: "Task 4",
        status: "Completed"
    }

];

const completedTask= task.filter( function(currenttask){

    return currenttask.status === "Completed";
});
console.log(completedTask)

const conTask= task.filter((currenttask) => currenttask.status === "Completed")
console.log(conTask);




const newuser = {
    fullname: "Mayur Patil",
    age: 37,
    discuss(){
        setTimeout( function(){ /*Traditional function  and unbinding process
                                    will change the parent*/
            console.log("THis keyword",this);
        } , 3000); /*3000millisec ka delay hein*/
    }
    /*settimeout ka parent is window(root) so this keyword is detaching it from current parent to window*/
}
newuser.discuss();

// const newuser2 = {
//     fullname: "Mayur Patil",
//     age: 37,
//     discuss(){
//         setTimeout( ()=> { /* No Unbinding process*/
//             console.log("THis keyword will Arrow funcion",this);
//         } , 3000); /*3000millisec ka delay hein*/
//     }
    
    /*Arrow function will not detach the function and put it in window...Arrow
     funtion will here call object and will has no change in the parent and is superfast than 
     traditional function*/
// }
// newuser2.discuss();



// const color = ["Red","Yellow","Black","Blue"];
// for(let i=0;i<color.length;i++){
//     console.log("<b>"+color[i]+"</b>")
// }
// console.log(color);

// const htmlcolors = color.map((currentColor) => `<b> $(currentColor) </b>`)
// console.log(htmlcolors)


// Destructuring
const address = {
    street: "My street",
    city: "My city",
    state: "MY state",
    country: "India"
}

// const mystreet = address.street;
// const mycity= address.city;
// const mystate = address.state;
// const mycountry = address.country;

// THis same thing can be done by line below this
// IN Below line mystreet name ka variable nhi chal sakta..street same as address object hi chalega
// const {street,city,state,country} = address;
// console.log( `${street} ${city} ${state} ${country}` )

const{street,country}= address;
console.log(`${street} ${country}`);


//Spread Operator
const arr1 =[1,2,3];
const arr2 = [5,6,7];
const finalarray = arr1.concat(arr2);
console.log(finalarray)

// Alternate way is to use spread opeartor
const finalarray2 = [ ...arr1, ...arr2 ];
console.log(finalarray2)
const finalarray3 = [ ...arr1,4,6,7, ...arr2 ];
console.log(finalarray3)

const firstname= {firstname:"Mayur"};
const lastname = {lastname: "Patil"};
const fullname={ ...firstname, ...lastname};
console.log(fullname);
const fullname1={ ...firstname,middlename:"K", ...lastname};
console.log(fullname1);



const myaddress = {
    mystreet: "My street",
    mycity: "My city",
    mystate: "MY state",
    mycountry: "India"
}

const{mystate,mycountry}= myaddress;
console.log(mycountry,mystate);


const arr10=[1,2,3,4,5,6];
const [, , ...arr12]= arr10;
console.log(arr12)
// It ignored the first two values of arr10 
