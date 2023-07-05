// accepts an array of integers and a number called n
// calculate the maximum sum of n consecutive number in the array
function maxSubarraySum(arr1,num){
    // if arr1.length is lower than num then false
    if(arr1.length < num){
        return false
    }

    //Initialize max value
    let max = -Infinity //Take acccount when array is negative
    for(let i=0;i<arr1.length-num+1;i++){
        //a value initialize to get the total value of the sum
        let temp = 0

        //then run a nested for loop  //When i=0
        for(let j=0;j<num;j++){ //In the first iteration j=0 //Second Iteration j=1
            temp += arr1[i+j] //i+j = 0+0 = arr1[0] = 1 // i+j = 0+1 = arr1[1] = 2 //So temp = arr1[0] + arr1[1] = 3

            if(temp > max){
                max = temp
            }
        }
        console.log(max,temp)
    }
    return max
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2))

/* 
Let's break it down 

i = 0 (value of the outer loop variable i in the first iteration)
j = 0 (value of the inner loop variable j in the first iteration)
i + j = 0 + 0 = 0
arr1[i + j] becomes arr1[0]
arr1[0] is the first element of the array, which is 1
temp += 1; (add 1 to temp)
In this case, arr1[i + j] is equivalent to arr1[0], which accesses the first element of the array.

Now let's continue with the second iteration of the inner loop:

i = 0 (value of i remains the same in the outer loop)
j = 1 (value of j in the second iteration of the inner loop)
i + j = 0 + 1 = 1
arr1[i + j] becomes arr1[1]
arr1[1] is the second element of the array, which is 2
temp += 2; (add 2 to temp)

*/
