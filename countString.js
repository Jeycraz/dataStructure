//Write a function which takes in a string and returns counts of each characters in the string
//charCount("aaaa") // {a:4}
function countString(str){
    let charCount = {}
    for(let i=0;i<str.length;i++){
        let character = str[i]
        console.log(charCount[str[i]])

        if(charCount[character]){
            charCount[character]++
        }else{
            //create a new property in an object by assigning a value to it using the following syntax://
            //a new property is created with the character as the key and its value is set to 1 //
            charCount[character] = 1
        }
    }
    return charCount
}

console.log(countString("aaaa"))
