document.addEventListener("DOMContentLoaded", function() {

	nameField = document.getElementsByName("Name")[0];
	emailField = document.getElementsByName("Email_Id")[0];
	mobilenumberField = document.getElementsByName("Mobile_Number")[0];
	usernameField = document.getElementsByName("Username")[0];
	rewardsEmailsField = document.getElementsByName("Rewards_Emails")[0];

	nameField.innerHTML = currentuser.Name;
	emailField.innerHTML = currentuser.email;
	mobilenumberField.innerHTML = currentuser.phoneNumber;
	usernameField.innerHTML = currentuser.username;
	rewardsEmailsField.checked = currentuser.boolRewardsInfo;

});

