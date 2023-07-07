var myPow = function(x, n) {
    if(n === 0) return 1;
    

    //if n = -2 , then return 1/2^-(-2)
    if(n<0) return 1/ myPow(x,-n)

    const isOdd = n%2 !== 0 
    const half = myPow(x,Math.floor(n/2))   
    if(isOdd){
        console.log(` this is odd ${n}`)
        return x * half * half
    }else{
        console.log(` this is even ${n}`)
        return half * half
    }
};

const arr = [1,2,3]
console.log(arr.length -1)
console.log(myPow(2,5))


/*
 var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n<0) return 1/ (x*myPow(x,((-n) - 1)))
    console.log(x,n)
    return x*myPow(x,n-1)
};
*/