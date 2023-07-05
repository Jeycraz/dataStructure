function maxSubarraySum(arr,num){
    // add whatever parameters you deem necessary - good luck!
    
    let maxSum = 0
    let tempSum = 0
    
    if(num>arr.length){
        return null
    }
    
    for(let i=0;i<num;i++){
        maxSum += arr[i]
    }
    
    tempSum = maxSum
    
    for(let i=num;i<arr.length;i++){
        maxSum = tempSum - arr[i-num] + arr[i]
        //If maxSum is bigger than tempSum, record the tempsum value to maxSum
        //For example, if maxSum is 500, the tempsum(300) will be replaced to 500.
        if(maxSum > tempSum){
            tempSum = maxSum
        }
        console.log(tempSum,maxSum)
        maxSum = Math.max(tempSum,maxSum)
    }
    return maxSum
    
  }

  console.log(maxSubarraySum([100,200,300,500],2))