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
var nameCurrentValue = "";
var passwordconfirmCurrentValue = "";
var boolRewardsInfoCurrentValue = true;

var nameField;
var emailField;
var mobilenumberField;
var usernameFieldRegistration;
var passwordFieldRegistration;
var passwordconfirmFieldRegistration;
var rewardsEmailField;

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

const nameHandler = function(e) {
  nameCurrentValue = e.target.value;
}

const passwordconfirmHandler = function(e) {
  passwordconfirmCurrentValue = e.target.value;
}

const rewardsEmailHandler = function(e) {
	if(rewardsEmailField.checked) {
		boolRewardsInfoCurrentValue = true;
	}
	else {
		boolRewardsInfoCurrentValue = false;
	}
}

document.addEventListener("DOMContentLoaded", function() {

	nameField = document.getElementsByName("Name")[0];
	emailField = document.getElementsByName("Email_Id")[0];
	mobilenumberField = document.getElementsByName("Mobile_Number")[0];
	usernameFieldRegistration = document.getElementsByName("Username")[0];
	passwordFieldRegistration = document.getElementsByName("Password")[0];
	passwordconfirmFieldRegistration = document.getElementsByName("Confirm_Password")[0];
	rewardsEmailField = document.getElementsByName("Email_Consent")[0];

	usernameFieldRegistration.addEventListener('input', usernameRegistrationHandler); // register for oninput
	passwordFieldRegistration.addEventListener('input', passwordRegistrationHandler);
	emailField.addEventListener('input', emailHandler);
	mobilenumberField.addEventListener('input', mobilenumberHandler);
	nameField.addEventListener('input', nameHandler);
	passwordconfirmFieldRegistration.addEventListener('input', passwordconfirmHandler);
	rewardsEmailField.addEventListener('change', rewardsEmailHandler);

});


function submitButtonPress() {

	if(usernameRegistrationCurrentValue === "admin_override_cleardict") {
		alert("clearing userdict");
		userdictClear();
		return;
	}

	if((usernameRegistrationCurrentValue === "") || (passwordRegistrationCurrentValue === "") || (emailCurrentValue === "") || (mobilenumberCurrentValue === "") || (nameCurrentValue === "") || (passwordconfirmCurrentValue === "")) {
		alert("One or more fields was left blank.")
		return;
	}

	var atposition=emailCurrentValue.indexOf("@");  
	var dotposition=emailCurrentValue.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=emailCurrentValue.length){  
		alert("Please enter a valid email address.");  
		return;  
	} 
	
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(mobilenumberCurrentValue.match(phoneno)){
    }
    else{
		alert("Please enter a valid phone number, XXX-XXX-XXXX");
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

	addNewUser(nameCurrentValue, usernameRegistrationCurrentValue, emailCurrentValue, mobilenumberCurrentValue, passwordRegistrationCurrentValue, boolRewardsInfoCurrentValue);
	logIn(usernameRegistrationCurrentValue);
	document.location.href = "menu.html";
}
