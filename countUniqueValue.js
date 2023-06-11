function countUniqueValues(arr){
    if(arr.length===0) return 0
    let i = 0
    for(let j=1;j<arr.length;j++){
        //if key i is not the same as key J then i will increase the index by 1 and replace the currentIndex with key of J
        if(arr[j] !== arr[i]){
            i++
            arr[i] = arr[j]
        }    
    }
    console.log(i+1)
  }
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])

/*
function countUniqueValues(arr){
    //Create a nested for loop with I and J
    for(let i=0;i<arr.length;i++){
        let uniqueValueArr = []
        let currentIIndex = 0
        console.log(arr[currentIIndex])
        
        for(let j=0;j<arr.length;j++){
            //The J is the tracker that compare the key of i 
          if(arr[j]!==arr[i]){
              uniqueValueArr.push(arr[j])
              currentIIndex++
          } else{
              currentIIndex
          }
        }
        let uniqueValue = uniqueValueArr.length + 1
        return uniqueValue
    }
    //if key i is not the same as key J then i will increase the index by 1 and replace the currentIndex with key of J
  }
// console.log(countUniqueValues([1,1,1,1,1,2]))
*/