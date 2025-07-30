
// arithmetic operator
// console.log("   arithmetic operator  ")
//  let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);

// let c=5;
// let d=25;
// console.log(c*d)


// let e=12;
// let f=2;
// console.log(e/f)
// console.log(e%f)

// let g=2;
// let h=2;
// console.log(g**h);
// console.log(g++);
// console.log(g--);



// assigment operator
// console.log("assigment operator     ")

// let a=12;
// let b=10;

// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a%=b);
// console.log(a**=b);




// comparison operator
// let x=5;
// let y="5";
// console.log("comparison operator")
// console.log(x==y);
// console.log(x===y);
// console.log(x!=y);
// console.log(x!==y);
// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);

// condition statement
// console.log("if  statement");

// if statement
// let age=18;
// if (age>=18){
//     console.log("you are an adult")
// }



// if else statement
// console.log("if else statement");

// let age=18;
// if (age>=18){
//     console.log("you are an adult")
// }
// else{
//     console.log("you are a minor");
    
// }

// else if statement


// let mark=30;

// if(mark>=85)
// {
//     console.log("your grade A")
// }

//  else if(mark>=75)
// {
//     console.log("your grade B")
// }

// else if(mark>=65)
// {
//     console.log("your grade C")
// }

// else if(mark>=35)
// {
//     console.log("your grade d")
// }

// else
// {
//     console.log("you are faild")
// }

// switch

/*switch statement*/

// let month=7
// switch(month){
//     case 1:console.log("januvery")
//     break;
//     case 2:console.log("february")
//     break;
//     case 3:console.log("march")
//     break;
//     case 4:console.log("april")
//     break;
//     case 5:console.log("may")
//     break;
//     case 6:console.log("june")
//     break;
//     case 7:console.log("july")
//     break;
//     case 8:console.log("august")
//     break;
//     case 9:console.log("september")
//     break;
//     case 10:console.log("october")
//     break;
//     case 11:console.log("november")
//     break;
//     case 12:console.log("december")
//     break;
  
    
// }

// ternary operator
// let num=10;
// let res=num>0?"positive":"negative"
// console.log(res);

/* nested ternary operator*/

// let score = 85;
// let grade = score >= 85 ? "A" : score >= 75 ? "B" : score >= 65 ? "c" : score >= 45 ? "D" : "E you are failed";
// console.log(grade);


/* for loop*/

//  for(let i=0;i<=10;i++){
//     console.log(i);
//     console.log("zahiya")



//    }




/* do-while-loop*/

// let a = "zahiya";
// while (a = "zahiya"); {
//     a = prompt("enter integer exit the loop");
//     alert("entered string");
// }

/* for-of-loop*/

// let grade=["A","B","C","D","FAIL"]
// for
//     (let r of grade){
//    console.log(r);
//     }


/* project*/

/* for-in*/

// let obj={
//     rahul:90,
//     sooraj:80,
//     rifad:70,
//     nabeel:67
// }

// for(key in obj){
// console.log(key +" :"+ obj [key]);
// }




/* for-of*/
// let id=["fathima:50","aysha:60","khadeeja:70"]
// for(let r of id){
//     console.log(r)
// }

// for (let i=0;i<=100;i++){

//       if (i%2==0 && i!=0){
//         console.log(i);
//   }
// }


// strings in js

// length property
// let a="khadeejath zahiya vs";
// let b=a.length;
// console.log(b)



// case coverter property
// let a="khadeejath zahiya vs";
// let b=a.toLocaleLowerCase();
// let c=a.toLocaleUpperCase();
// console.log(b);
// console.log(c);

// concat
// let a="welcome";
// let b="here";
// let c=a.concat(" ", b , " all of them")
// console.log(c);


// slice
// let a="hello world";
// let b=a.slice(0,5)
// console.log(b);

// replace
// let a="khadeejath zahiya";
// let b=a.replace("zahiya","shihana")
// console.log(b);

// charAt

// let a="hello world";
// let b=a.charAt(0)
// console.log(b);



/*  arrays method*/


/*  push*/

// let name=["zahiya","shihana","fathima"];
// name.push=["aysha","khadeja"];
// console.log(name)



// let name=["zahiya","shihana","fathima"];
// let nm=prompt();
// name.push(nm);

// console.log(name)

/*  pop*/

// let name=["zahiya","shihana","fathima"];
// name.pop()
// console.log(name)

/* tostring*/


// let name=["zahiya","shihana","fathima"];
// let names= name.tostring();
// console.log(names);

/* unshift*/

// let fruits=["mango","apple","orange"]; 
// fruits.unshift("kiwi","stawberry")
// console.log(fruits);

/* shift*/
// let fruits=["mango","apple","orange","kiwi","stawberry"]; 
// fruits.shift()
// console.log(fruits)

/* sort*/

// let name=["zahiya","shihana","fathima","aysha","khadeja"];
// name.sort();
// console.log(name);




/* map*/

// let numbers=[4,6,8,10,12,14];
// let num= numbers.map((element,i)=>{
//     return element*2
// })
// console.log(num);



/* filter*/

// let age=[12,13,14,15,18,17,18,13,18,15,18];
// let newage=age.filter((ele)=>{
//     return ele===18
// })
// console.log(newage);


// let name=["zahiya","fathima","zahiya","shiyana","khadeeja","shihana"]
// let search=prompt("enter name")
// let newName=name.filter((val)=>{
//     return val==="zahiya"
// })
// console.log(newName)



// reduce

// let price=[1500,200,300,400,20,760]
// let totalprice=price.reduce((result,element)=>{
//     return result+element;

// });
// console.log(totalprice);


// max

// let num=[1200,3948,3039,10000,747490,200000,7840,820,3048,280450,74902,83999,3000]
// let max=num.reduce((intial,currentnum)=>{
// return currentnum > intial?currentnum:intial
// })
// console.log(max);

// min

// let num=[1200,3948,3039,10000,747490,200000,7840,820,3048,280450,74902,83999,3000,30]
// let min=num.reduce((intial,currentnum)=>{
// return currentnum < intial?currentnum:intial
// })
// console.log(min);

/* DEFINITION FUNCTION*/
// function city(place){
//     return `i am coming from ${place}`
// }
// console.log(city("kasargod"));
// console.log(city("kannur"));
// console.log(city("kozhikode"));
// console.log(city("ernakulam"));
// console.log(city("kollam"));


/* function expression*/

// let greet=function(name,name2){
//     let a =` my name is ${name} ${name2}`
//     return a;
// }
// let a="khadeejath";
// let b="zahiya";
// let c=greet(a,b);
// console.log(c)


/* arrow function*/
// let greet=(name)=>{
//     let a=`hello ${name}`
//     return a;
// }
// let b="world";
// let c=greet(b);
// console.log(c);









































