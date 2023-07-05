function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
  
    //Compare between the length of str2 is the same as str1
    if(str1.length !== str2.length){
       return false
    }
    
    //Create an object to store the occurence of each string
    let stringCounterFrequency1 = {}
    let stringCounterFrequency2 = {}
    
    //run a for loop and give the value based on whether is element existed already 
    for(let i=0;i<str1.length;i++){
        let char = str1[i]
        stringCounterFrequency1[char] = (stringCounterFrequency1[char]||0)+1
    }
    
    for(let char in str2){
        //if you use for..in..the char will print out the indices only
        //to access the actual string, you have to type str2[char]..like str2[0],str2[1],str2[2]...
        stringCounterFrequency2[str2[char]] = (stringCounterFrequency2[str2[char]] || 0 ) + 1
    }
    console.log(stringCounterFrequency1)
    console.log(stringCounterFrequency2)
      
    for(let char in stringCounterFrequency1){
        //if stringCounterFrequency1's character not inside stringCounterFrequency2 return false
        if(!(char in stringCounterFrequency2)){
            return false
        }
        
        //if the value of stringCounterFrequency1[char] not the same as stringCounterFrequency2[char] return false
        if(stringCounterFrequency1[char] !== stringCounterFrequency2[char]){
            return false
        }
        
    }
    return true
  }
  console.log(validAnagram("azz","zza"))
  