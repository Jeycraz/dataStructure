function minSubArrayLen(arr,value){
    let start = 0
    let end = 0
    let subArrayLength = Infinity
    if(arr.length === 0){
        return 0
    }
    
    //store the value of the sum
    let sum = 0

    while(end < arr.length ){
        //in each iteration,increase the sum of value of arr[end]
        sum += arr[end]

        //A while loop continuosly check the logic after the statement, where as an if method only performs the operation once
        while(sum >= value){
            subArrayLength = Math.min(subArrayLength,end-start+1)
            sum -= arr[start]
            start++
        }
        end++
        console.log(`start is ${start}`)
        console.log(`end is ${end}`)
        console.log(subArrayLength)
        
    }
    return subArrayLength === Infinity ? 0 : subArrayLength
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))

/* Test Output
-----------------
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)
*/