function findLongestSubString(str){
    let counter = []
    let start = 0
    let end = 0
    let counterCount = 0

    while(end<str.length){
        //if counter does not include the value of str[end] then add the str[end] to the counter array [].
        if(!counter.includes(str[end])){
            counter.push(str[end])
            //return the maximum value out of the afterDelete length and the counter length
            counterCount= Math.max(counterCount,counter.length)
            end++
        }else{
        //if there's value found to have duplicates then start delete the start element out of the counter
            counter.splice(counter.indexOf(str[start]),1)
            //Once deleted, increase the start value by 1
            start++
        }
    }
    return counterCount
}

console.log(findLongestSubString('rithmschool'))

/*function findLongestSubString(str) {
    let counter = [];
    let start = 0;
    let end = 0;
    let counterCount = 0;
  
    while (end < str.length) {
      if (!counter.includes(str[end])) {
        counter.push(str[end]);
        counterCount = Math.max(counterCount, counter.length);
        end++;
      } else {
        counter.splice(counter.indexOf(str[start]), 1);
        start++;
      }
    }
  
    return counterCount;
  }
  
  console.log(findLongestSubString('rithmschool')); */