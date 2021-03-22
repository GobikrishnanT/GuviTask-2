1 .Printing Odd number in Array:(IIFE)

let newArr = [];

((MyArray) => {
   newArr =  MyArray.filter((item) => !(item%2 === 0));
})([1 , 2, 3 , 4 , 5]);

console.log(newArr);

2 . Convert all the strings to title caps in a string array
let newArr = [];
((myStrArr) => {
    newArr = myStrArr.map((item) => item[0].toUpperCase() + item.slice(1));
})(["gobi" , "kamal" , "bhuvi"]);
console.log(newArr);

3 .Sum of all numbers in an array 

let newArr = [];

((MyArray) => {
   newArr =  MyArray.reduce((Acc , curVal) => Acc + curVal , 0);
})([1 , 2, 3 , 4 , 5]);

console.log(newArr);

4 . Return all the prime numbers in an array 

let newArr = [];
let flag = 0;
((myStrArr) => {
    newArr = myStrArr.filter((item) => {
            for(let i = 2 ; i <= Math.floor(item / 2) ; i++) {
                flag = 0;
                if(item % i === 0) {
                    flag = 1;
                }
            }
            if(flag === 1) {
                return false;
            }
            else{
                return true;
            }

});
})([1 , 2, 3 , 4 , 5 , 6]);
console.log(newArr);

5 . Return all the palindromes in an array 

let newArr = [];
let sum = 0;
let hun = 1;
let temp = null;

((myArray) => {
    console.log(myArray);
    newArr = myArray.filter((item) => {
      item = Number(item);
      temp = item;
      sum = 0;

      while(temp) {
          rem = temp % 10;
          sum = (sum * (hun * 10)) + rem;
          temp = Math.trunc(temp/10);
          //console.log(temp);
          
      }
      //console.log(item , "===" , sum);

      if(sum === item) {
          return true;
      }
      else{
          return false;
      }
           
    });

})([111 , 424 , 254 , 122]);
console.log(newArr);



// 5 . Return median of two sorted arrays of same size 
let middle = 0;
let Avg = 0;

((Arr1 , Arr2) => {
    Arr1 = Arr1.concat(Arr2);
    Arr1.sort((a , b) => a - b);
    // console.log(Arr1);
    // console.log(Arr1.length);
    if(Arr1.length % 2 === 0) {
        middle = Math.floor(Arr1.length / 2);
        
        Avg = Math.floor((Arr1[middle]+Arr1[middle-1])/2);
    }
    else{
        middle = Math.floor(Arr1.length / 2);
        Avg = Arr1[middle];
    }
})([1 , 12 , 15 , 26 , 38] , [2 , 13 , 17 , 30 , 45]);
console.log(Avg);

6 . Remove duplicates from an array 

let newArr = [];

((MyArray) => {
   newArr =  MyArray.filter((item , index) => {
       if(MyArray.indexOf(item) !== index) {
           return false;
       }
       return true;
   });
})([1 , 2, 3 , 4 , 5 , 4 , 2 , 2]);
console.log(newArr);

7 . Rotate an array by k times and return the rotated array.
let newArr = [];

((MyArray , k) => {
    
     for(let i = 0 ; i < k ; i++) {
         MyArray.push(MyArray.shift());
     }
     newArr = MyArray;
   
})([1 , 2, 3 , 4 , 5 , 4 , 2 , 2] , 2);
console.log(newArr);

