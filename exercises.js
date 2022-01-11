// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------
myFunction = function(str, i){
    let myArr = [];

    for (let j = 0; j< i; j++) {
        myArr.push(str)
    };

    return myArr;
};


console.log(myFunction('moon', 3))









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

myPets = ['Luna', 'Bruce', 'Chunky']
const reverseArr= function(arr){
    let reverse =arr.slice().reverse()
    return reverse;
    
}
console.log(reverseArr(myPets))







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------
let falsyArr = ["", 0, false, undefined, NaN, null, 1, 2, 3]
const noFalsy = function(arr){
    let truth = arr.filter(Boolean)
    return truth
}

console.log(noFalsy(falsyArr))





// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

let myself = [['name', 'Shaun'], ['color', 'green'], ['age', 35]]

const myFunction2 = function(arr){
    return Object.fromEntries(arr)
}

console.log(myFunction2(myself))





// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
numArr = [1,1,1,2,2,3,4,5,5,4,3]
const removeDuplicate = function(arr){
    newArr = [...new Set(arr)];
    return newArr;
}
console.log(removeDuplicate(numArr))








// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

let anotherArr1 = [1,2,3,4]
let anotherArr2 = [1,2,3,4]
let anotherArr3 = [1,2,3,4,7,5]
let anotherArr4 = [1,4,3,2]

const anotherFunction = function(arr1, arr2){
    arr1 = arr1.sort()
    arr2= arr2.sort()
    if(arr1.length === arr2.length){
        for(let i=0; i< arr1.length; i++)
            if (arr1[i] === arr2[i]){
                return true;
            }
    }else{
        return false;
    }
}
console.log(anotherFunction(anotherArr3, anotherArr4))







// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
