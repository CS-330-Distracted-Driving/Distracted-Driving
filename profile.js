var nameField;
var emailField;
var mobilenumberField;
var usernameField;
var rewardsEmailsField;

document.addEventListener("DOMContentLoaded", function() {

	nameField = document.getElementsByName("Name")[0];
	emailField = document.getElementsByName("Email_Id")[0];
	mobilenumberField = document.getElementsByName("Mobile_Number")[0];
	usernameField = document.getElementsByName("Username")[0];
	rewardsEmailsField = document.getElementsByName("Rewards_Emails")[0];

	nameField.innerHTML = currentuser.name;
	emailField.innerHTML = currentuser.email;
	mobilenumberField.innerHTML = currentuser.phoneNumber;
	usernameField.innerHTML = currentuser.username;
	rewardsEmailsField.checked = currentuser.boolRewardsInfo;

	rewardsEmailsField.addEventListener('change', rewardsEmailHandler);
});

const rewardsEmailHandler = function(e) { //obstinate and hacky way of preventing users from changing the checkbox's value
	if(currentuser.boolRewardsInfo) {
		rewardsEmailField.checked = true;
	}
	else {
		rewardsEmailField.checked = false;
	}
}

