// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n.

let arr = [5,3,2,0,1];

function sum(n){
    let isOdd = n %2 !=0;
    if(n == 0){
        return isOdd ? arr[n] : 0;

    }
    return arr[n] + sum(n-1)
}
console.log(sum(arr.length-1))