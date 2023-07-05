function sameFrequency(a,b){
    //Create an object called frequencyCounter on each input for counting purposes
    
    const frequencyCounterA = {};
    const frequencyCounterB = {};
    
    //Change the number to String
    const aString = a.toString();
    for(let i=0;i<aString.length;i++){
        //loop through each of the character
        let char = aString[i]

        //the left side represents the [key]property
        //the right side represents the value
        frequencyCounterA[char] = (frequencyCounterA[char]||0)+1
    }

    const bString = b.toString()
    for(let i=0;i<bString.length;i++){
        let char = bString[i]
        frequencyCounterB[char] = (frequencyCounterB[char]||0)+1
        console.log(char)
    }
    console.log(frequencyCounterA)
    
    
    for(let i in frequencyCounterA){
        console.log(i in frequencyCounterB) // returns a boolean, use to check whether each key in frequencyCouterA is in frequencyCounterB
        if(!(i in frequencyCounterB)){
            return false
        }
        if(frequencyCounterA[i] !== frequencyCounterB[i]){
            return false
        }
        return true
    }
  }
  
  console.log(sameFrequency(22,222))