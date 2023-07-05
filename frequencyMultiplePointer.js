function areThereDuplicates(...value){
    //use spread operator to create a new array with the inputs
    const arr = value.sort()
    console.log(arr)
    let indexPointer = 0
    
    for(let i=1+indexPointer;i<arr.length;i++){
        if(arr[i] !== arr[indexPointer]){
            indexPointer++
            arr[indexPointer] = arr[i]
        }else{
            return true
        }
        //how do i make sure that it only increase the indexPointer by 1 after it loops through the remaining and it does not fit the same value as arr[indexPointer]
    }
    return false
}

console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))

//Example Output
/*
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/