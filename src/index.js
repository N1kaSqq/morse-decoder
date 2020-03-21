const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function splitwords(str) {
  
    let arr = str.split("*");
    for(let i =0; i<arr.length;i++){
      if(arr[i]==""){
       arr.splice(i,1);
       i--;
      }
    }
    return arr;
  }

function splitLetters(wordsArr){
    for(let i=0; i<wordsArr.length;i++){  
       wordsArr[i] = (wordsArr[i]).split("");
       wordsArr[i] = (chunk((wordsArr[i]), 10))
    }
    return(wordsArr);
    
}


function translateToMorse(wordsArr){
  for(let i=0; i<wordsArr.length;i++){ 
    for(let j=0;j<(wordsArr[i]).length;j++){
     let letter = (wordsArr[i][j]).split("");
      for(let k=0;k<letter.length;k++){
        if(letter[k]=="0"){
          letter.splice(k,1);
          k--;
        } else {
          break;
        }
      }
      letter = letter.join("");
      wordsArr[i][j] = letter;
    }

  }
  return wordsArr;
}

function translateToDashes(morseCode){
  for(let i=0; i<morseCode.length;i++){ 
    for(let j=0;j<(morseCode[i]).length;j++){
      let letter = (morseCode[i][j]).split("");
      
        morseCode[i][j] = (chunk((letter), 2));

        
        for(let k=0; k<(morseCode[i][j]).length;k++){
          if(morseCode[i][j][k]=="10"){
            morseCode[i][j][k]=".";
          } else {
            morseCode[i][j][k]="-";
          }
        }
        morseCode[i][j]=(morseCode[i][j]).join("");
     

    }
  }
  return morseCode;
}

function translateToAlphabet(morseCode){
  for(let i=0; i<morseCode.length;i++){
     for(let j=0;j<(morseCode[i]).length;j++){
       for (var key in MORSE_TABLE){
         if(morseCode[i][j]==key){
           morseCode[i][j]=MORSE_TABLE[key];
         }
       }
     }
   }
   for(let i=0; i<morseCode.length;i++){
     morseCode[i]=(morseCode[i]).join(""); 
   }
   morseCode = morseCode.join(" ");
   return morseCode;
}

function decode(expr) {
    str = expr;
    let wordsArr = splitwords(str);
    wordsArr = splitLetters(wordsArr);
    console.log(wordsArr);
    let morseCode = translateToMorse(wordsArr);
    console.log(morseCode);
    morseCode = translateToDashes(morseCode);
    console.log(morseCode);
    morseCode = translateToAlphabet(morseCode);
    console.log(morseCode);
    return morseCode;
}

function chunk(arr, n) {
    var chunks = [];
    while(arr.length > n) {
       chunks.push(arr.slice(0, n));
       arr = arr.slice(n, arr.length);
    }
    chunks.push(arr);
    for(let d=0; d<chunks.length;d++){
      chunks[d]=(chunks[d]).join("");
    }
    return chunks;    
}

module.exports = {
    decode
}