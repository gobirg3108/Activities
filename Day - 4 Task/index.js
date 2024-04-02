//Do the below programs in anonymous function & IIFE
//a.print odd numbers in array

//Anonymous function
var array = [0,1,2,3,4,5,6,7,8,9];
var oddNumber = function (array){
var oddNumber = array.filter(num => num %2 ==1);
console.log("Odd numbers in array Anonymous Method :",oddNumber);
}
oddNumber(array);

// IIFE
var array =[0,1,2,3,4,5,6,7,8,9,];
(function (array) {
    var oddNumber = array.filter(num=>num%2 ==1);
    console.log("Odd numbers in array IIFE Method :",oddNumber);

    }) (array);

// b.Convert all the strings to title caps in a string array

//Anonymous
    var str = "my name is gobi";
 var string = function ( str){
    str = str.toLowerCase().split(" ");
    for (var i = 0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log("Tittle caps in a string array Anonymous Method :",str.join(" "))
 }
string(str);

//IIFE
var str = "my name is gobi";
(function ( str){
    str = str.toLowerCase().split(" ");
    for (var i = 0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log("Tittle caps in a string array IIFE Method :",str.join(" "))
}) (str);

//c.Sum of all numbers in an array

//Anonymous:
var array = [5,10,15,20,25,30];

var addition=function(array) {
var sum = 0;
for(var i= 0 ; i<array.length; i++){
    sum += array[i];
}
console.log("Sum of all numbers is an array Anonymous Method :",sum);

}
addition(array);

// IIFE
var array = [5,10,15,20,25,30];

(function(array) { 
    var sum = 0;
    for(var i= 0 ; i<array.length; i++){
    sum += array[i];
}
console.log("Sum of all numbers is an array IIFE Method :",sum);
}) (array);

// d.Return all the prime numbers in an array

//Anonymous

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var primeNumbers = function (array ) {
    
        array= array.filter((number) => {
  
        for (var i = 2; i<= Math.sqrt(number); i++) {
        if(number % i=== 0) return false;
  }
  return true;
 })
        console.log("Prime numbers in array Anonymous Method :",array)
 }
 primeNumbers(array);

 //IIFE
 var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 (function (array){ 
        array= array.filter((number) => {
        for (var i = 2; i<= Math.sqrt(number); i++) {
        if(number % i=== 0) return false;
 }
 return true;
})
console.log("Prime numbers in array IIFE Method :",array)
}) (array);

// e.Return all the palindromes in an array
// Anonymous

var array =["amma","appa","me","you"];

var palindromes =function (array) {
    var palindromes = array.filter(s=>{
        var len = s.length;
        for (var i = 0; i < len/2 ; i++) {
            if (s[i] == s[len - i - 1]){
                return true;
            }else{
                return false;
            }
        
    }

});
console.log("Palindromes in array Anonymous method :",palindromes);
}
palindromes(array);

//IIFE

var array =["amma","appa","me","you"];

(function(array){
var palindromes = array.filter(s=>{
    var len = s.length;
    for (var i = 0; i < len/2 ; i++) {
        if (s[i] == s[len - i - 1]){
            return true;
        }else{
            return false;
        }
    }
});
console.log("Palindromes in array IIFE method :",palindromes);
}) (array);

//g.Remove duplicates from an array

//Anonymous
var duplicateArray=[1,2,3,4,5,6,6,8,3,4,2,1,4,5,];

var array=function (duplicateArray) {    
    var duplicateArray=[...new Set(duplicateArray)];
    console.log("Remove duplicates array in Anonymous Method :",duplicateArray);
};
array(duplicateArray);

//IIFE
var duplicateArray=[1,2,3,4,5,6,6,8,3,4,2,1,4,5,];
(function (duplicateArray) {
        var duplicateArray=[...new Set(duplicateArray)];
        console.log("Remove duplicates array in IIFE Method :",duplicateArray);
}) (duplicateArray);

//h.Rotate an array by k times

//Anonymous
var array = [1,2,3,4,5,6,7];
var rotateArray = function(array ) {
    var k =4;
    for(var i = 0 ; i<k; i++){
    array.unshift(array.pop());

}
console.log("Rotate an array by k times in Anonymous Method :",array)
}
rotateArray(array);

//IIFE
var array = [1,2,3,4,5,6,7];
(function (array ){
    var k =4;
    for(var i = 0 ; i<k; i++){
    array.unshift(array.pop());
    }
console.log("Rotate an array by k times in IIFE Method :",array)
    
})(array);


//Arrow Function
// a.Print odd numbers in an array

var  array = [0,1,2,3,4,5,6,7,8,9];
var oddNumber = (array)=>{
var oddNumber = array.filter(num => num %2 == 1);
return oddNumber;
}
console.log("Odd numbers in Arrow Function :",oddNumber(array));

//b.Convert all the strings to title caps in a string array

var str = "my name is gobi";
 var string =(str)=>{
    str = str.toLowerCase().split(" ");
    for (var i = 0; i<str.length; i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join (" ");
 }
 console.log("Strings to capital arrow function : ",string(str));

 //c.Sum of all numbers in an array

var array = [5,10,15,20,25,30];
var addition = (array)=> {
var sum = 0;
for(var i= 0 ; i<array.length; i++){
    sum += array[i];

}
return sum;
}
console.log("Sum of all numbers in Arrow function :",addition(array));

// d.Return all the prime numbers in an array

// Define the array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Define an arrow function to filter prime numbers
var primeNumbers = (array) => {
    return array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return number > 1;
    });
};

// Call the function and store the result
var result = primeNumbers(array);

// Print the result
console.log("Prime numbers in Arrow function:", result);

//e.Return all the palindromes in an array

var array = ["amma", "appa", "me", "you"];

// Define an arrow function to filter palindromes
var palindromes = (array) => {
    return array.filter(s => {
        var len = s.length;
        for (var i = 0; i < len / 2; i++) {
            if (s[i] != s[len - i - 1]) {
                return false;
            }
        }
        return true;
    });
};

// Call the function and store the result
var result = palindromes(array);

// Print the result
console.log("Palindromes in array Arrow function:", result);
