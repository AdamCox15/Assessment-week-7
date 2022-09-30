// Question #1

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] !== arr[j] && arr[i] + arr[j] ===0){
                return true
            }
        }
    }
    return false
}

//Answer runtime = O(n^2) 


//Questions #2

const hasUniChar = (letArr) => {
    let uniChar = ''
    for(let i = 0; i < letArr.length; i++){
        if(uniChar.includes(letArr[i]) === false){
            uniChar += letArr[i]
        }else{
            return false
        }
    }
    return true
}
console.log(hasUniChar('monday'))

//Answer: runtime = O(n) 


//Question #3

const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let wholeAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < wholeAlphabet.length; i++) {
      if(strArr.indexOf(wholeAlphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

//Answer: runtime = O(n) 


//Question#4


const findLongestWord = arr => {
    let longWord = 'm'
    for(let i = 0; i < arr.length; i++){
   
        if(arr[i].length > longWord.length){
          console.log(arr[1])
            longWord = arr[1].length
            
            console.log(longWord)
        }
    }
    return longWord
}

//Answer: runtime = Object(n) 