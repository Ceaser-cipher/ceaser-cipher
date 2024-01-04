

//ENCODE TEST

// "aaaa" key 2 encoded should give "cccc"
// "aaaa" key -2 encoded should give "yyyy"
// "bb5bb" key 2 encoded should give "dd2dd"
// "bb bb" key 2 encoded should give  "dd dd"


///DECODE TEST

// "cccc" key 2 decoded should give "aaaa"
// "aaaa" key -2 decoded should give "cccc"






const cipherEncode = (testInput, testKey) => {

   
    
        const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let input = testInput.toLowerCase()
        let key = testKey
        let result = "";
    
        for (let i = 0; i < input.length; i++){
            console.log("function decode working")
            let char = input[i]
            if (array.includes(char)) {
                let index = (array.indexOf(char) + key + array.length) % array.length;
                result += array[index];
            } else {
                // If character is not in the array, just add it as it is
                result += char;
               
            }
           
        }
        // output.innerText = result;
        return result;
       
    }
      
    
    
    
    
    
    module.exports = cipherEncode;