const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const input = document.getElementById("input")
const key = document.getElementById("keyInput")
let encode = document.getElementById("encode")
let checked = true

if (encode.checked) {
checked = true;
} else {
    checked = false;
}
 
let index= array.indexOf("input")

let decodedLetter = ""

let result = "";



 

function cipherSolve(){

    for (let i = 0; i <= array.length; i++){
        let index= array.indexOf("input")
        let decodedLetter = array[index+key]
        result.push(decodedLetter)
        console.log(result)
    }
}

function cipherEncode(){

    for (let i = 0; i <= array.length; i++){
        let index= array.indexOf("input")
        let decodedLetter = array[index-key]
    }
}