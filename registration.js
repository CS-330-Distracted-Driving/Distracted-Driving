//File by David Dlott 11/13/2019
/* TODO:

	> respond to users pressing the enter key while a registration field is highlighted, or to the user pressing the register button,
	by checking if their username is already in the dictionary and complaining if it is, and if it is not in the dictionary then add
	it to the dictionary mapping to a struct of the rest of their data, write the new dictionary + struct/s into users.txt, call
	the login function passing it the user's new username as an argument, and call document.location.href = newUrl to 
	send the user to the landing page.
	
*/
var usernameRegistrationCurrentValue = "";
var passwordRegistrationCurrentValue = "";
var emailCurrentValue = "";
var mobilenumberCurrentValue = "";
var firstnameCurrentValue = "";
var lastnameCurrentValue = "";
var passwordconfirmCurrentValue = "";
var boolRewardsInfoCurrentValue = false;

var firstnameField;
var lastnameField;
var emailField;
var mobilenumberField;
var usernameFieldRegistration;
var passwordFieldRegistration;
var passwordconfirmFieldRegistration;

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

document.addEventListener("DOMContentLoaded", function() {

	firstnameField = document.getElementsByName("First_Name")[0];
	lastnameField = document.getElementsByName("Last_Name")[0];
	emailField = document.getElementsByName("Email_Id")[0];
	mobilenumberField = document.getElementsByName("Mobile_Number")[0];
	usernameFieldRegistration = document.getElementsByName("Username")[0];
	passwordFieldRegistration = document.getElementsByName("Password")[0];
	passwordconfirmFieldRegistration = document.getElementsByName("Confirm_Password")[0];

	usernameFieldRegistration.addEventListener('input', usernameRegistrationHandler); // register for oninput
	passwordFieldRegistration.addEventListener('input', passwordRegistrationHandler);
	emailField.addEventListener('input', emailHandler);
	mobilenumberField.addEventListener('input', mobilenumberHandler);
	firstnameField.addEventListener('input', firstnameHandler);
	lastnameField.addEventListener('input', lastnameHandler);
	passwordconfirmFieldRegistration.addEventListener('input', passwordconfirmHandler);

});

function submitButtonPress() {

	if(usernameRegistrationCurrentValue === "admin_override_cleardict") {
		alert("clearing userdict");
		userdictClear();
		return;
	}

	if((usernameRegistrationCurrentValue === "") || (passwordRegistrationCurrentValue === "") || (emailCurrentValue === "") || (mobilenumberCurrentValue === "") || (lastnameCurrentValue === "") || (firstnameCurrentValue === "") || (passwordconfirmCurrentValue === "")) {
		alert("One or more fields was left blank.")
		return;
	}

	if(userdict[usernameRegistrationCurrentValue]) {
		alert("Sorry, that username is already in use.");
		return;
	}

	if(passwordRegistrationCurrentValue !== passwordconfirmCurrentValue) {
		alert("Password entry fields do not match. Please check that your password and password confirmation are the same.");
		return;
	}

	addNewUser(firstnameCurrentValue, lastnameCurrentValue, usernameRegistrationCurrentValue, emailCurrentValue, mobilenumberCurrentValue, passwordRegistrationCurrentValue, boolRewardsInfoCurrentValue);
	logIn(usernameRegistrationCurrentValue);
	document.location.href = "landing-page.html";
}
