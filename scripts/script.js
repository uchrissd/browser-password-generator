// This JavaScript program is designed to generate a password for a user and then allow them to copy the generated password to their clipboard.
// The user has to select at least one of four password criteria options in order for the password to generate.

//Possible password values
var passwordCharacters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVYXYZ",
  numerals: "1234567890",
  special: "!#$%&()*+,-./:;<=>?@[]^_`{|}~ "
};

console.log(
  "special character string length: ",
  possiblePassVals.special.length
);

//This function sets the password length required to be between 8 and 128

function isValidPasswordLength(passwordLength) {
  return (
    isNaN(passwordLength) === false &&
    passwordLength > 8 &&
    passwordLength < 128
  );
}

//This function validates the password length and prompts the user to enter a desired length
//Between 8 and 128

function getPasswordLength() {
  let passwordLength = 0;
  let question = "Password length? Valid values are between 8 and 128.";
  while (isValidPasswordLength(passwordLength) === false) {
    passwordLength = parseInt(prompt(question));
    question = "Uh oh! Try again.";
  }
  return passwordLength;
}

//Propt user with password generator alert window
//Prompt user to declare a password length between 8 and 128 characters
//Prompt user to decide yes or no for lowercase characters
//Prompt user to decide yes or no for uppercase characters
//Prompt user to decide yes or no for numbers
//Prompt user to decide yes or no for special characters

//When user declares desired length of password, store password length to a variable.
//Save user criteria, all of which is pre-stored in an object, and add the valid characters to an array through a
//funciton using if else conditionals to validate if the criteria is true or not.
// For the length of the array of valid choices, run a loop for the number of the desired pw length and
//Generate a random number every loop that corresponds to an index from the array and append that character to
//Another array to generate the password..
//Validate the password
//Deliver the password to the user
//Allow the user to copy the password to their clipboard
