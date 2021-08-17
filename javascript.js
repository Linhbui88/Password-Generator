// Assignment Code
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];;
var numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerChars = 'abcdefghijklmnopqrstuvwxyz'
var upperChars = lowerChars.toUpperCase()

function getRandomUseableChar(x) {
 return x[Math.floor(Math.random() * x.length)]
}

var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', function() {

    var passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");

    if(!passwordLength) {
        alert('You must enter a value');
    }  else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt('You must choose between 8 and 128');
    } else {
        var hasNumber = confirm('Will this contain Numbers?')
        var hasSpecialChars = confirm("Will this contain Special Characters?");
        var hasUpper= confirm("Will this contain Uppercase letters?");
        var hasLower = confirm("Will this contain Lowercase letters?");

        // GENERATE PASSWORD
        var generatePassword = ''
        var useableCharacters = ''
        if( hasUpper === true) {
            useableCharacters = useableCharacters + upperChars
        }
        if ( hasSpecialChars === true) {
            useableCharacters = useableCharacters + specialChars.join('')
        }
        if(hasLower === true) {
            useableCharacters = useableCharacters + lowerChars

        }
        if(hasNumber === true) {
            useableCharacters = useableCharacters + numbers.join('')
        }

        console.log(useableCharacters)

        for (var i = 0; i < passwordLength; i++) {
            var randomUseableChar = getRandomUseableChar(useableCharacters)
            generatePassword = generatePassword + randomUseableChar
        }   

       var passwordText = document.querySelector("#password");
        passwordText.value = generatePassword;

    }
});

 