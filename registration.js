//File by David Dlott 11/13/2019
/* TODO:

	> respond to users pressing the enter key while a registration field is highlighted, or to the user pressing the register button,
	by checking if their username is already in the dictionary and complaining if it is, and if it is not in the dictionary then add
	it to the dictionary mapping to a struct of the rest of their data, write the new dictionary + struct/s into users.txt, call
	the login function passing it the user's new username as an argument, and call document.location.href = newUrl to 
	send the user to the landing page.
	
*/

const $firstnameField = document.getElementsByName("First_Name");
const $lastnameField = document.getElementsByName("Last_Name");
const $emailField = document.getElementsByName("Email_Id");
const $mobilenumberField = document.getElementsByName("Mobile_Number");
const $usernameFieldRegistration = document.getElementsByName("Username");
const $passwordFieldRegistration = document.getElementsByName("Password");
const $passwordconfirmFieldRegistration = document.getElementsByName("Confirm_Password");
var usernameRegistrationCurrentValue;
var passwordRegistrationCurrentValue;
var emailCurrentValue;
var mobilenumberCurrentValue;
var firstnameCurrentValue;
var lastnameCurrentValue;
var passwordconfirmCurrentValue;

const usernameRegistrationHandler = function(e) {
  usernameRegistrationCurrentValue = e.target.value;
}

const passwordRegistrationHandler = function(e) {
  passwordRegistrationCurrentValue = e.target.value;
}

const emailHandler = function(e) {
  emailCurrentValue = e.target.value;
}

const mobilenumberHandler = function(e) {
  mobilenumberCurrentValue = e.target.value;
}

const firstnameHandler = function(e) {
  firstnameCurrentValue = e.target.value;
}

const lastnameHandler = function(e) {
  lastnameCurrentValue = e.target.value;
}

const passwordconfirmHandler = function(e) {
  passwordconfirmCurrentValue = e.target.value;
}

$usernameFieldRegistration.addEventListener('input', usernameRegistrationHandler) // register for oninput
$passwordFieldRegistration.addEventListener('input', passwordRegistrationHandler)
$emailField.addEventListener('input', emailHandler)
$mobilenumberField.addEventListener('input', mobilenumberHandler)
$firstnameField.addEventListener('input', firstnameHandler)
$lastnameField.addEventListener('input', lastnameHandler)
$passwordconfirmFieldRegistration.addEventListener('input', passwordconfirmHandler)

function submitButtonPress() {

	if(userdict[usernameCurrentValue]) {
		alert("Sorry, that username is already in use.");
		return;
	}

	if(passwordCurrentValue !== passwordconfirmCurrentValue) {
		alert("Password entry fields do not match. Please check that your password and password confirmation are the same.");
		return;
	}

	addNewUser(firstnameCurrentValue, lastnameCurrentValue, usernameRegistrationCurrentValue, emailCurrentValue, mobilenumberCurrentValue, passwordRegistrationCurrentValue, boolRewardsInfo);
	logIn(usernameCurrentValue);
	document.location.href = "landing-page.html";
}
