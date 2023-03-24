//The following programs are done by Ananoymous function and IIFE
//a.Print odd numbers in an array

//anonymous function

//PRINT ODD NUMBERS IN AN ARRAY

//Anonymous Function

var arrNew=[]
var res=function(array){
for(var i=0;i<=array.length-1;i++){
  if(array[i]%2 != 0){
   arrNew.push(array[i]);
  }
}
return arrNew
}
console.log(res([12,13,14,15]));

//IIFE

(function(array){
for(var i=0;i<array.length;i++){
  if(array[i]%2 != 0){
   console.log(array[i]);
  }
}

}) ([12,13,14,15]);


//Arrow  function

var arr=[];
var res =(array) =>{
for(var i=0;i<array.length;i++){
  if(array[i]%2 != 0){
   arr.push(array[i])
  }
}
return (arr);
}
console.log(res([1,2,3,4]))


//CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY

//Anonymous

var res= function (str) {
   str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);  
    }  
    return(str.join(' '))
}
console.log(res("HeLLo WoRLD"));


//IIFE

 (function (str) {
   str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);  
    }  
    console.log(str.join(' '))
})("HeLLo WoRLD")


//Arrow Function

var res=(str)=>{
 str=str.toLowerCase().split(' ')
    for(var i=0;i<str.length;i++){
      str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);  
    }
    return str.join(' ')
}
console.log(res("HeLLo WoRLD"));

//SUM OF ALL NUMBERS IN AN ARRAY

//Anonymous

var res=function(array){
var sum=0
 for (var i=0;i<array.length;i++){
    sum +=array[i]
 
 }
 return(sum)
}
console.log(res([1,2,3,4]))

//IIFE

(function(array) {
var sum=0
 for (var i=0;i<array.length;i++){
    sum +=array[i]
}
console.log(sum);
})([1,2,3,4]);

//Arrow function

var res=(array)=>{
var sum=0
 for (var i=0;i<array.length;i++){
    sum +=array[i]
 
 }
 return(sum)
}
console.log(res([1,2,3,4]))

//RETURN ALL THE PRIME NUMBERS IN AN ARRAY

//Anonymous Function

var res=function(array){
 for(var i=0;i<array.length;i++){
if(array[i]%2==0 && array[i]%1==0) {
console.log(array[i])
}
 }
}
console.log(res([2,3,17,67]));

//IIFE

(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0 && array[i]%1==0) {
        console.log(array[i])
        }
         }
})([2,3,17,67]);

//Arrow Function

var res=(array)=>{
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0 && array[i]%1==0) {
        console.log(array[i])
        }
         }  
}
console.log(res([2,3,17,67]));

//Return all the palindromes in an array

//Anonymous function

var res=function (string){
   const len = string.length;

   for (let i = 0; i < len / 2; i++) {
       if (string[i] !== string[len - 1 - i]) {
           return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}
console.log(res("malayalam"))

//IIFE

(function(string){
    const len = string.length;

   for (let i = 0; i < len / 2; i++) {
       if (string[i] !== string[len - 1 - i]) {
          console.log('It is not a palindrome');
       }
   }
   console.log('It is a palindrome');
})("malayalam")

//Arrow function

var res=(string)=>{
    const len = string.length;

   for (let i = 0; i < len / 2; i++) {
       if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}
console.log(res("word"))

//Prind duplicate in array

//Anonymous function
var res=function removeDuplicates(arr) {
    var unique = [];
    for(var i=0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(["apple", "mango",
"apple", "orange", "mango", "mango"]));

//IIFE

(function removeDuplicates(arr) {
    var unique = [];
    for(var i=0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    console.log(unique);
})(["apple", "mango",
"apple", "orange", "mango", "mango"])

//Arrow method

var res=(arr) =>{
    var unique = [];
    for(var i=0; i < arr.length; i++){
        if(unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
}
onsole.log(removeDuplicates(["apple", "mango",
"apple", "orange", "mango", "mango"]));