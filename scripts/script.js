//This program is a password generator. User confirms which criteria they want to include in the password though a series of prompts.
//Program sets lowercase letters as the default in the event a user declines all of the criteria confirmation prompts.
//The user then chooses a number between 8 and 128 for the length of the password.
//After they hit the "generate" button, the password appears in the text-area.
//The "copy to clipboard" button copies the generated password to the clipboard.

//User hits the "generate" button and initiates the program.
var generateEl = document.getElementById("generate");

generateEl.addEventListener("click", function(event) {
  event.preventDefault();

  //Constan variables for containing necessary password information for later password generation.

  const validPasswordCharacters = setUpPassWordCharacters();
  const passwordLength = getPasswordLength();
  const password = generatePassword(validPasswordCharacters, passwordLength);
  const passwordEl = document.getElementById("password");

  passwordEl.value = password;
  //Console logs for debugging the variable values throughout the development process.
  console.log(validPasswordCharacters);
  console.log(passwordLength);
  console.log(password);
});

//The keys in this object contain the possible character passwords that can be used in the password.
let passwordCharacters = [
  {
    description: "Do you want uppder case letters in your password?",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    description: "Do you want numbers in your password?",
    chars: "0123456789"
  },
  {
    description: "Do you want special characters in your password?",
    chars: ".!@#$%^&*()_+-="
  }
];

function setUpPassWordCharacters() {
  let validPasswordCharacters = "abcdefghijklmonpqrstuvwxyz";
  for (let i = 0; i < passwordCharacters.length; ++i) {
    const passSetting = passwordCharacters[i];
    const answer = confirm(passSetting.description);
    if (answer) {
      validPasswordCharacters += passSetting.chars;
    }
  }
  return validPasswordCharacters;
}

function isValidPasswordLength(passwordLength) {
  return (
    isNaN(passwordLength) === false &&
    passwordLength >= 8 &&
    passwordLength <= 128
  );
}

function getPasswordLength() {
  let passwordLength = 0;
  let question = "Password length? Valid values are between 8 and 128.";
  while (isValidPasswordLength(passwordLength) === false) {
    passwordLength = parseInt(prompt(question));
    question = "Uh oh! Try again.";
  }
  return passwordLength;
}

function generatePassword(validPasswordCharacters, passwordLength) {
  let password = "";
  for (let i = 0; i < passwordLength; ++i) {
    password +=
      validPasswordCharacters[
        Math.floor(Math.random() * validPasswordCharacters.length)
      ];
  }
  return password;
}

function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
