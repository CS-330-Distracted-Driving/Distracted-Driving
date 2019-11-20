var headbar;
var headbarNameField;
var headbarUsernameField;
var headbarProgressLabelField;
var headbarProgressBarField;
var headbarCurrentUser;

document.addEventListener("DOMContentLoaded", function() {
	headbarCurrentUser = getCurrentUser();

	headbar = document.getElementsByClassName("head-bar")[0];
	headbarNameField = headbar.getElementsByClassName("name")[0];
	headbarUsernameField = headbar.getElementsByClassName("username")[0];
	//headbarProgressLabelField = headbar.getElementsByClassName("sr-only")[0];
	headbarProgressBarField = headbar.getElementsByClassName("progressbarProgress")[0];	

	headbarNameField.innerHTML = "Welcome, " + headbarCurrentUser.name;
	headbarUsernameField.innerHTML = headbarCurrentUser.username;
	headbarProgressBarField.innerHTML = headbarCurrentUser.nextRewardProgress.toString() + "%";
	headbarProgressBarField.style.width = headbarCurrentUser.nextRewardProgress.toString() + "%";
});