//COnstraints includes:
//Time Complexity - O(N + M) - combined complexity of two separate loops
//Space Complexity - O(1)

//expected output
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


//Solution Approach:
// initialize p1(pointer1),p2(pointer2) to check string1 & string2 char index
// create a loop only when p1&p2 value is less than corresponding value length
// if the the char in p1 is the same as char in p2, increase both p1 and p2
// else increase p2
// After the loop, check whether p1 value is bigger than 1. If bigger than 1, meaning the string in string1 have more than 1 subsequent string found in string2.
// If p1 > 1, return true
// else, return false

function isSubsequence(string1,string2){
    let p1 = 0
    let p2 = 0

    while(p1<string1.length && p2<string2.length){
        if(string1[p1] === string2[p2]){
            p1++
            p2++
        }else{
            p2++
        }
        
    }
    if(p1 === string1.length){
        return true
    }else{
        return false
    }
}

console.log(isSubsequence("hello",'hello world'))


