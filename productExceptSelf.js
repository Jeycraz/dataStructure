function productExceptSelf(arr){
    let prefix = []
    let prefixTotal = 1
    //1.create the prefix value
    for(let i = 0;i<arr.length;i++){
        prefixTotal *= arr[i]
        prefix.push(prefixTotal)
    }
    

    let postFix = []
    let postfixTotal = 1
    for(let j = arr.length-1;j>=0;j--){
        postfixTotal *= arr[j]
        postFix.unshift(postfixTotal)
    }

    //initialize output = []
    //if output = []
    let output = []
    
    for(k=0;k<arr.length;k++){
        let product = 1

        if(k > 0){
            product *= prefix[k-1]
        }

        if(k < arr.length - 1){
            product *= postFix[k+1]
        }
        output.push(product)
    }

    return output   
}

console.log(productExceptSelf([1,2,3,4]))