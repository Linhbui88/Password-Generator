// Assignment Code
var generateBtn = document.querySelector("#generate");
// Start Password variable values:

specialChars =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];;
number  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

characters = 'abcdefghijklmnopqrstuvwxyz'
upperChars = characters.toUpperCase()

function getRandomUpper() { 
    return upperChars[Math.floor(Math.random()*characters.length)]
}


function getRandomLower(){
    return characters[Math.floor(Math.random() * characters.length)]
}

function getRandomNumber() {
    return number[Math.floor(Math.random() * number.length)]
}

function getrandomSpecialChars() {
    return specialChars[Math.floor(Math.random() * specialChar.length)]
}

var randomChoice = {
    
}

// function upperCase() {
//     // return character.map(c => c.toUpperCase())

//     // return character.map(function(c){
//     //     return c.toUpperCase();
//     // })

//     for ( var i = 0; i < character.length; i++) {
//         character[i] = character[i].toUpperCase();
//     }
//     return character
// }
// function lowerCase() {
//     for ( var i = 0; i < character.length; i++) {
//         character[i] = character[i].toLowerCase();
//     }
//     return character
// }
// // upper=upperCase()
// // lower=lowerCase()
// function getRandomLower() {
//     var lower= lowerCase()
//    return lower[Math.floor( Math.random() * lower.length)];
// }
// console.log(getRandomLower());

// function getRandomUpper() {
//     var upper= upperCase()
//    return upper[Math.floor( Math.random() * upper.length)];
// }
// console.log(getRandomUpper());


// // function getRandomLower() {
// //     return lowerCase
// // }
// // getRandomLower()






// // Write password to the #password input
// function writePassword() {

//     // start loop
//     var passwordLength = prompt('How many characters you want in Password? It should be at least 8 characters and less than 128 charaters.')

//     if (passwordLength >=8 && passwordLength <= 128)
//     {
//         console.log('OK');
//         //  stop loop
//     } else{
//         alert("It's invalid")
//         // reloop
//     };


//     var upperCase = confirm(' Do you want to use Uppercase Character?')

//    console.log(upperCase)

//    var lowerCase = prompt(' Do you want to use Lowercase Character?')

//    console.log(lowerCase)

//    var specialChar = prompt(' Do you want to use Special Character ?')
//    console.log(specialChar)

//    var num =prompt(' Do you want to use number?', 'Yes/No?')
//    console.log(num)


//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
