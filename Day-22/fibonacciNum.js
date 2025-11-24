// What is a Fibonacci Number?
// The Fibonacci sequence is a famous mathematical series in which each number is the sum of two preceding ones It’s defined by the recurrence relation:

// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2) for n > 1

var fib = function(n){
    if(n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));   // Output: 5
