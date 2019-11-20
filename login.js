//File by David Dlott 11/13/2019
/*TODO:

> set listeners to respond to pressing login button or to return key being pressed while password/username field is highlighted
> write a function to respond to login button / return key while username/password field highlighted with checking the users dictionary 
for username, retrieving password from corresponding struct if username in dictionary, comparing password, and if the
password matches then it should call the login function from userdata.js and send the user to the landing 
page via a document.location.href = newUrl call.
> if username not in dict or password doesnt match, respond by displaying some message explaining that 
username + password combo not found.

*/

//Thanks to stackoverflow user Robert Siemer for inspiration for the following listener implementation/s, which made my life a good bit easier https://stackoverflow.com/questions/574941/best-way-to-track-onchange-as-you-type-in-input-type-text/26202266#26202266

var usernameField;
var passwordField;

var usernameCurrentValue;
var passwordCurrentValue;

const usernameHandler = function(e) {
  usernameCurrentValue = e.target.value;
}

const passwordHandler = function(e) {
  passwordCurrentValue = e.target.value;
}

document.addEventListener("DOMContentLoaded", function() {
	usernameField = document.getElementsByName("username")[0];
	passwordField = document.getElementsByName("password")[0];
	usernameField.addEventListener('input', usernameHandler); // register for oninput
	passwordField.addEventListener('input', passwordHandler);
});



function loginButtonPress() {
	if(userdict[usernameCurrentValue])
		if(checkUsernamePassword(usernameCurrentValue, passwordCurrentValue)) {
			logIn(usernameCurrentValue);
			document.location.href = "menu.html";
			return;
		}

	alert("The entered username or password was incorrect.");
}
