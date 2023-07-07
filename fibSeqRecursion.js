//A fibonnaci sequence of fib(4) = 
// fibonnccai start at [0,1]

function fib(num){
    //if the num is 0 or 1 then the answer should be num
    if(num === 0 || num === 1) return num
    //where every number thereafter is equal to the sum of the previous two numbers.
    return fib(num-1) + fib(num-2)
  }

  console.log(fib(4))