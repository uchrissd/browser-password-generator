// This JavaScript program is designed to generate a password for a user and then allow them to copy the generated password to their clipboard.
// The user has to select at least one of four password criteria options in order for the password to generate.

var generateEl = document.getElementById("generate");

generateEl.addEventListener("click", function(event) {
  event.preventDefault();

  const validPasswordCharacters = setUpPassWordCharacters();
  const passwordLength = getPasswordLength();
  const password = generatePassword(validPasswordCharacters, passwordLength);
  const passwordEl = document.getElementById("password");

  passwordEl.value = password;

  console.log(validPasswordCharacters);
  console.log(passwordLength);
  console.log(password);
});

let passwordCharacters = [
  {
    description: "Enable uppercase characters",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  {
    description: "Enable numbers",
    chars: "0123456789"
  },
  {
    description: "Enable special characters",
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
