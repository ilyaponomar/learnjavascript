"use strict";
// alert ("who is your daddy?");

let message = 'some text example';
// alert (message);



let admin;
let name;
name = "Джон";
admin = name;
// alert (admin);


  // let name = "ilya";
  // let age = 31;
  // let gegder = 'male';
  // alert(age);

let ourPlanetEarth;
let currentVisitor;

let compareNumbers = 4 > 2;
// alert (compareNumbers);
console.log(typeof compareNumbers);// true это булин
compareNumbers = String(compareNumbers);// делаем из булина текст
console.log( typeof compareNumbers); // тут "true" это уже текст

let six ="6";// текст
let two = "2";// текст
let sum = six / two; // результат 3
console.log (typeof sum); // number 

console.log(""-1+0);
console.log(" \t \n" - 2);
// alert((2 + 2 + '1') );
let i=4;
console.log(15/++i);

//let a = 1, b = 1;

//let c = ++a; // ?
//let d = b++; // ?
//console.log("a "+a);
// console.log("b "+b);
// console.log("c "+c);
// console.log("d "+d);

let j=0;
let k=j++//postfix form of increment
console.log ( "k = "+ k);
console.log ("j = "+ j);



let t=0;
let l=++t //prefix form of increment
console.log ("l = "+ l);
console.log ( "t = "+ t);

let a = 2;
let x = 1 + (a *= 2);
console.log(a);
console.log(x);
console.log("1">1);
console.log(null===undefined);
console.log (''==false);
console.log ("сравнение");
console.log(5 > 4 );//true
console.log("ананас" > "яблоко");//false
console.log("2" > "12");//true (идет сравнение 2 с 1 и 2>1)
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(null == "\n0\n");//false
console.log(null === +"\n0\n")//false


//let love = prompt('how deep is your love?','like the ocean');
//alert(`my love is ${love}`); // тут обратные кавычки иначе не работает буква Ё 
//let bubu = confirm ("ты дилдомейкер?");
//alert(bubu);

// let userName = prompt("Как тебя зовут?",'Введите свое имя');
// alert(`Ваше имя ${userName}`);
// if (userName=="Илья") {alert("Хозяин пришел");}// если без else ,то ; ставится после скобок
// else{ 
// alert(`привет, гость ${userName} `);
// }

// let weather = prompt("А я ясные дни...","");
// if(weather=="оставляю себе"){alert("Молодец, оставляй!");}
// else{
//   alert("Газманов это не твоё");
// };
// let badWeather = prompt("а я хмурые дни ...","");
// if(badWeather=="оставляю судьбе"){alert("Газманов одобряет");}
// else{
//   alert("нужно послушать еще раз газманова")
// };


// let age = prompt("how old are you?",18);
// let access = (age>=18)?alert(`тебе уже на ${age-18} лет больше`):alert(`тебе еще ${18-age} лет подождать`);

// let gender = prompt("Specify your gender","male");
// let messages = (gender=="male")? "Hello fellow" : 
// (gender=="female")? "Hey beauty":
// "make your choice";
// alert (messages);

// let answer = prompt("Какое «официальное» название JavaScript?","");
// if(answer=="ECMAScript"){
//  alert("Верно!");
// }else{alert("Не знаете? ECMAScript!");}

// let randomNumer = prompt ("Введите число","" );
// if (randomNumer>0){alert(1);
// }
// else if (randomNumer<0){alert(-1);
// }
// else{alert(0)};

//let a, b;
//let result= (a + b < 4)?"Мало":"Много";


// let age=15;
// if(age>=14 && age<=90){;
// console.log("Вы в диапазоне");
// }

let agenot=100;
if(!(agenot>=14 && agenot<=90)){;
console.log("Вы не в диапазоне");
}

let agenot2=100;
if(agenot2>=14 || agenot2<=90){;
  console.log("Вы не в 2 диапазоне");
  }

  // let password;
  // let login = prompt("Введите логин",'');

  // if (login == "admin") {
  //   password = prompt("Введите пароль",'');
  //   if (password == "im the boss") {
  //     alert("Hello boss!");
  //   } else if (password == null) {
  //     alert("Declined");
  //   }
  //   else {
  //     alert ("Wrong password");
  //   }
    
  // } else if (login == null) {
  //   alert("Declined")
  // }
  // else{
  //   alert("I don't know you")
  // };


//  

// let ages;
// let whatIsYourAge = prompt("what is your age",'');
// if (ages>=18){
// console.log("больше 18");
// }
// else {
   
// }


// let login,password,gender,age;
// login = prompt("Enter login",'');
// if (login =="validlogin") {
//   password = prompt("Enter password",'')
//   if(password =="validpassword"){
//     gender = prompt("Select your gender","male/female");
//     if(gender == "male"|| gender== "female"){
//       age = prompt("Specify your age","");
//       if(age >= 18 && gender == "male"){
//         alert("Here's your reward https://pornhub.com")
//       }
//       else if (age>=18 && gender == "female"){
//         alert("Here's your reward https://cosmetics.ua");
//       }
//       else if (age == null || age== ''){
//         alert("Age specification declined!");
//       }
//       else {
//         alert("invalid age!");
//       }

//     }
//     else if(gender == null||gender == ''){
//       alert("gender selection declined");
//     }
//     else {
//       alert("You need to select your gender!");
//     }

//   }
//   else if (password == null || password == '' ){
//     alert("Password insert declined!");
//   }
//   else{
//     alert("Wrong password");
//   }
// } 
// else if (login == null||login =='') {
//   alert("Login declined!")
// }
// else {
//   alert("Invalid login")
// }



