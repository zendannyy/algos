// 1 array with numbers 1 to 255
var newArr = [];
function counter(num){
    for (var i=1; i <= 255; i++){
        newArr.push(i)
    }
    console.log(typeof(newArr))
    return newArr
}
console.log(counter(255))
console.log("counter done")
console.log("\n")

// 2 sum of even numbers from 1 to 1000
var num=1
function sumEven(){
    for (sum = 0; num <= 1000; num++){
        if (num % 2 == 0){
            sum = sum + num

        }
    }
    console.log(sum)
    
}
sumEven()
console.log("sumEven done")
console.log("\n")

// / 3 sum of odd numbers from 1 to 5000, in other words the sum of 1, 3, 5, and so on 
var num=1
function sumOdd(){
    for (sum = 0; num <= 5000; num++){
        if (num % 2 != 0){
            sum = sum + num

        }
    }
    console.log(sum)
    
}
sumOdd()
console.log("sumOdd done")
console.log("\n")

// 4 return sum of array values 
sum = 0;
function iterate(arr){
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
iterate([2, 3, 4])
console.log("Iterate an Array is done")
console.log("\n")

// 5 find max of an array
function maxArray(arr){
    var value = arr[0]
    for (var i = 0; i < arr.length; i++){
        if (value < arr[i]) {
            value = arr[i]
        }
       
    }
    console.log(typeof(value))
    return value 
}

console.log(maxArray([2, 4, 6, -3]))
console.log("Find Max is done")
console.log("\n")


// 6 Find average of an array
function avgArray(arr){
    var sum = 0;
    for (var i = 0; i <arr.length; i++){
        sum = sum + arr[i]
    }
        return sum / arr.length

}

console.log(avgArray([1, 4, 6, 8]))
console.log("Finding average done")
console.log("\n")

// 7 return an array of all the odd numbers 
function oddOnly(){
    var odd_arr = [];
    for (i = 1; i < 50; i+=2){
        odd_arr.push(i)
        
    }
    return odd_arr
}

console.log(oddOnly())
console.log("Array odds done")
console.log("\n")

// 8 Given value of Y, take an array and return the number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. 
function greaterY(arr, y){
    var counter = 0
    for (var i = 0; i <arr.length; i++){
        if (arr[i] > y){
            counter++
        }
    }
    return counter + " values are greater than Y"
}

console.log(greaterY([1, 3, 5, 7], 3))
console.log("Greater than Y is done")
console.log("\n")

// 9 replace each value in the array with the value squared by itself 
function squared(arr){
    var newArr = [];
    for (var i = 0; i <arr.length; i++){
        square = arr[i] * arr[i]
        newArr.push(square)
    }
    return newArr

}

console.log(squared([2, 4, 6]))
console.log("Squared done")
console.log("\n")

// 10 replace any negative numbers within the array with the value of 0. 
function negative(neg_arr){
    for (var i = 0; i <neg_arr.length; i++){
        if (neg_arr[i] < 0){
            neg_arr[i] = 0
        }
    }
    return neg_arr
}
console.log(negative([1,5,10,-2]))
console.log("Negatives done")
console.log("\n")


// 11 Max/Min/Avg - Given an array with multiple values, return a new array that only contains
// maximum, minimum, and average values of the original array.
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function max_min_avg(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        if (arr[i] > max){
            max = arr[i]
        }
        else if (arr[i] < min){
            min = arr[i]
        }
    }
    arr.push(max)
    arr.push(min)
    var avg = sum / arr.length
    arr.push(avg)
    return arr
 }
 console.log(max_min_avg([1, 5, 10, -2]))
 console.log("Max/Min/Avg is done")
 console.log("\n")


// 12 swap the first and last values of the array
function swap(newArr){
    var first=newArr[0]
    // this makes last as the first, therefore first and last are the same at this line 
    newArr[0]=newArr[newArr.length -1]      
    newArr[newArr.length -1]=first
    return newArr
}

console.log(swap([2, 4, 6, -3]))
console.log("Swap Values is done")
console.log("\n")


// 13 Number to String of 'Dojo'
function numString(arr){
    for (var i = 0; i <arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo'
        }
    }
    return arr
}

console.log(numString([0, -1, -3, -6]))
console.log("Number to string done")