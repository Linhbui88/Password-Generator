// Assignment Code

// Start Password variable values:

specialChars =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];;
numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lowerChars = 'abcdefghijklmnopqrstuvwxyz'
upperChars = lowerChars.toUpperCase()

var password = [ 'specialChars', 'numbers', 'lowerChars','upperChars']

function getRandomUpper() { 
    return upperChars[Math.floor(Math.random()*lowerChars.length)]
}
function getRandomLower(){
    return lowerChars[Math.floor(Math.random() * lowerChars.length)]
}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandomSpecialChars() {
    return specialChars[Math.floor(Math.random() * specialChars.length)]
}

var hasUpper = getRandomUpper()
var hasLower = getRandomLower()
var hasNumber = getRandomNumber()
var hasSpecialChars = getRandomSpecialChars()

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', function() {
pw = generatePassword();
DocumentTimeline.getElementById('password').placeholder = pw;
});

var enter
function generatePassword() {
enter = prompt("How many characters would you like your password? Choose between 8 and 128");
if(!enter) {
    alert('You must enter a value');
}  else if (enter < 8 || enter > 128) {
    enter = prompt('You must choose between 8 and 128');
}
    
   else {
       hasNumber = confirm('Will this contain numbers?')
       hasSpecialChars = confirm("Will this contain special characters?");
       hasUpper= confirm("Will this contain Uppercase letters?");
       hasLower = confirm("Will this contain Lowercase letters?");
       };

}
if (!hasLower && !hasUpper && !hasNumber && !hasSpecialChars) {
    choices = alert("You must choose a criteria!");

} else if(hasLower && hasUpper && hasNumber && hasSpecialChars) {
    choices = hasSpecialChars.concat(hasUpper,hasLower,hasNumber);

    // Else if for 3 positive options
} else if(hasUpper && hasNumber && hasSpecialChars) {
    choices = hasUpper.concat(hasNumber,hasSpechialChars);

}  else if(hasLower&& hasNumber && hasSpecialChars) {
    choices = hasLower.concat(hasNumber,hasSpechialChars);
}
    else if (hasLower && hasUpper && hasSpecialChars) {
    choices = hasLower.concat(hasUpper,hasSpechialChars);
}
    else if (hasLower && hasUpper && hasNumber ) {
    choices = haslower.concat(hasUpper,hasNumber);
}
// Else if for 2 positive option
    else if (hasLower && hasUpper) {
    choices=hasLower.concat(hasUpper);
}
    else if (hasLower && hasNumber) {
    choices = hasLower.concat(hasNumber);
}
    else if (hasLower && hasSpecialChars) {
    choices = hasLower.concat(hasSpechialChars);
}
    else if (hasUpper && hasNumber) {
    choices = hasUpper.concat(hasNumber);
}
    else if (hasUpper && hasSpecialChars) {
    choices = hasUpper.concat(hasSpecialChars);
}
// Else if for 1 positive option
    else if (hasSpecialChars) {
    choices = hasSpecialChars;
}
    else if (hasUpper) {
    choices = hasUpper;
}
    else if (hasLower) {
    choices = hasLower;
}
    else if (hasNumber) {
    choices = hasNumber;
}





// var randomFunc = {
//     lower : getRandomLower(),
//     upper : getRandomUpper(),
//     number : getRandomNumber(),
//     symbol :  getRandomSpecialChars(),
// }

//  var generateBtn = document.querySelector('#generate');
//  generateBtn.addEventListener('click',generatePassword())

// var confirmNumber = getRandomNumber()
// var confirmSymbol = getRandomSpecialChars()
// var confirmUppercase= getRandomUpper()
// var confirmLowercase = getRandomLower()
// var enter

//  function generatePassword() {
//     enter  = prompt('How many characters you want in Password? It should be at least 8 characters and less than 128 charaters.');
//         if (!enter) {
    //      alert('You must enter a value');
    //  }  else if (enter < 8 || enter > 128) {
    //      enter = prompt('You must choose between 8 and 128');
    //  }
         
    //     else {
    //         confirmNumber = confirm('Will this contain numbers?')
    //         confirmSymbol = confirm("Will this contain special characters?");
    //         confirmUppercase = confirm("Will this contain Uppercase letters?");
    //         confirmLowercase = confirm("Will this contain Lowercase letters?");
    //         };

    
    //  if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    //     choices = alert("You must choose a criteria!");
    // }
    // else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {
    //     result = randomFunc.symbol.concat(randomFunc.lower,randomFunc.upper,randomFunc.number);
    // }







// Write password to the #password input
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
