//write a function called same that receives two array
//Should only return true if every value has its corressponding value squared
//The frequency of the values also must be the same

const same = (arr1,arr2) =>{
    //check if arr1 or arr2 is a string then change it to number
    const arr1StrtoNum = arr1.map(element=>typeof element === "string" ? parseInt(element,10):element)

    const arr2StrtoNum = arr2.map(element=>typeof element === "string" ? parseInt(element,10):element)

    //the arr2 must be the arr1 but squared
    const squaredArr = arr1StrtoNum.map(element=>element**2)

    //Check if the array have the same length
    if(arr1StrtoNum.length !== arr2StrtoNum.length){
        return false
    }

    //create a counter frequency 
    const counterFrequency = {}
    for(let num of arr1StrtoNum){
        //check if the number in arr1 is existed or not
        //if the value exist, then get the value of the num key and add the value by 1
        //if not initialized the number to 1
        counterFrequency[num] = (counterFrequency[num]||0)+1
    }

    console.log(counterFrequency)
    

    //then return true or false by making comparison with the arr1 to arr2
    for(let i=0;i<arr1StrtoNum.length;i++){
        //checked whether the arr2 value existed in squaredArr1 if exist then false else true
        if(squaredArr.indexOf(arr2StrtoNum[i]) === -1){
            return false
        }
    }
    return true
}

console.log(same(['1','2','2'],['1','4','4']))