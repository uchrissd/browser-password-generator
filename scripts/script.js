// This JavaScript program is designed to generate a password for a user and then allow them to copy the generated password to their clipboard.
// The user has to select at least one of four password criteria options in order for the password to generate.

//Possible password values

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVYXYZ";
var numerals = "1234567890";
var special = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";

//Variable length set between range of 9 and 128
var length = Math.round(Math.random() * (128 - 8) + 8);

//Generated password
var password = "";

// User selects criteria, at least one, for password

//Use conditionals to run through possible user combinations for the password

//Run a loop to determine the undefined password variable

//Copy password to clipoard
