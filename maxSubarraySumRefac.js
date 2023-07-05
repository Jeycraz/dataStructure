function maxSubarraySum(arr1,num){
    // initialize maxSum and temperary sum
    let maxSum = 0
    let tempSum = 0
    
    //On the 1st iteration
    //[1,2,5,2]
    // i=0
    //i<2
    //maxSum = arr1[0]+arr1[1] = 3
    for(let i=0;i<num;i++){
        maxSum += arr1[i]
    }

    //tempSum = maxSum 
    //tempSum = 3

    tempSum = maxSum
    
    //i = 2
    //arr1.length-num + 1 = 7-2+1 = 6
    //for(let i=2;i<6;i++)
    //tempSum = 3-arr1[2-2]+arr1[2]
    //tempSum = 3-arr1[0] + arr1[2]
    //tempSum = 3 - 1 + 5
    //tempSum = 7
    //maxSum = Math.max(3,7)
    //maxSum = 7
    for(let i=num;i<arr1.length-num+1;i++){
        tempSum = tempSum-arr1[i-num]+arr1[i]
        console.log(maxSum,tempSum)
        maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([100,200,300,500],2))