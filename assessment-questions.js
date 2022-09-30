// Question #1

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] !== arr[j] && arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

const addToZero1 = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}
//console.log(addToZero1([1,2,3,-2]))


// Answer runtime = O(n^2) 
// Space  = 0(n)


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
// const hasUniChar1 = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }

// const hasUniqueChars = (arr) => {
    
//     const mySet = new Set()
    
//     for(let i = 0; i < arr.length; i++){
//         mySet.add(arr[i])
//     }

//     if(mySet.size === arr.length){
//         return true
//     }else{
//         return false
//     }
 
// }

console.log(hasUniChar('monday'))

//Answer: runtime = O(n) 
//Space: 0(n)


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

let stringMap = {}
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (i = 0; i < alphabet.length; i++){
        stringMap[alphabet[i]] = 0
    }
    // const isPangram = (str) => {
    //     str = str.toLowerCase().split('')
        
    //     const alphabet = {
    //         a: 0,
    //         b: 0,
    //         c: 0,
    //         d: 0,
    //         e: 0, 
    //         f: 0,
    //         g: 0, 
    //         h: 0, 
    //         i: 0,
    //         j: 0,
    //         k: 0, 
    //         l: 0,
    //         m: 0,
    //         n: 0,
    //         o: 0,
    //         p: 0,
    //         q: 0,
    //         r: 0,
    //         s: 0,
    //         t: 0,
    //         u: 0,
    //         v: 0,
    //         w: 0,
    //         x: 0,
    //         y: 0,
    //         z: 0
    //     }
    
    //     for(let i = 0; i < str.length; i++){
    //         if(alphabet[str[i]] === 0){
    //             alphabet[str[i]] += 1
    //         }
    //     }
    
    //     for(let key in alphabet){
    //         if(alphabet[key] === 0){
    //             return false
    //         }
    //     }
        
    //     return true
    // }


//Answer: runtime = O(n) 
//Space: 0(n)


//Question#4


// const findLongestWord = arr => {
//     let longWord = 'm'
//     for(let i = 0; i < arr.length; i++){
   
//         if(arr[i].length > longWord.length){
//           console.log(arr[1])
//             longWord = arr[1].length
            
//             console.log(longWord)
//         }
//     }
//     return longWord
// }

const findLongestWord1 = (arr) => {
    let longestLength = 0;
   arr.forEach((word) => {
    if(word.length > longestLength){
        longestLength = word.length;
    }
   })
   return longestLength
}
//Answer: runtime = O(n) 
//Space: 0(n)