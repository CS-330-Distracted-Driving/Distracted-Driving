//File by David Dlott 11/13/2019
/*
This file will be included all over the place. Essentially, in a javascript file, we can refer to another javascript file's stuff
as long as that javascript file is included in the html documents earlier. So, pretend this file is included in all the other JS
stuff.

TODO:
> define struct for storing user data, doesn't have to be encrypted as long as we don't actually take anybody's real data
> define dictionary mapping usernames to instances of that struct
> write a function that will run on initialization which will try to load information on a current user from current-user.txt
-> The previous line is necessary so that we can tell who the current user is
> write a function that will run on initialization which will try to load a pre-existing usernames dictionary + pre-existing userdata
from the file users.txt. Can be part of the same function as the previous line.
-> The previous line is necessary so that e.g. registration.js can run properly.
> write a function to log the user out. Should blank current-user.txt and send the user to the login 
page via a document.location.href = newUrl call
> write a function to log the user in. Should take as argument a username and write the appropriate userdata 
from users.txt to current-user.txt
> write a function to modify the userdata for a username. Should take as arguments all the things that we ask for on the registration
page, write everything but the username into a struct, and replace the struct that the username currently maps to with the new struct,
by way of writing the new struct to users.txt (and possibly current-user.txt?)
*/

var userdict = {};
var currentuser;

class user {
	constructor(name, username, email, phoneNumber, password, boolRewardsInfo) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.boolRewardsInfo = boolRewardsInfo;
		this.nextRewardProgress = 0; //change this in future versions lol...
		this.rewardLevel = 0;
	}
}

function userdictLoad() {
	userdict = JSON.parse(localStorage.getItem("userdictDISTDRIVING"));
	if(userdict == null)
		userdict = {};
}

function currentUserLoad() {
	console.log(localStorage.getItem("currentuserDISTDRIVING"));
	currentuser = JSON.parse(localStorage.getItem("currentuserDISTDRIVING"));
}

document.addEventListener("DOMContentLoaded", function() {
	userdictLoad();
	currentUserLoad();
});

function addNewUser(name, username, email, phoneNumber, password, boolRewardsInfo) {
	//use this to add a new user. Returns 0 if it fails for some reason, 1 otherwise.
	if(userdict[username]) {
		console.error("called addNewUser with a username already in use");
		return 0;
	}
	var newuser = new user(name, username, email, phoneNumber, password, boolRewardsInfo);
	userdict[username] = newuser;

	localStorage.setItem("userdictDISTDRIVING", JSON.stringify(userdict, null, 2));

	return 1;
}


function logOut() {
	//logs the current user out. Does NOT send the user to a different page.
	localStorage.removeItem("currentuserDISTDRIVING");
}

function logOutSend() {
	//logs the current user out. Sends the user to a different page.
	localStorage.removeItem("currentuserDISTDRIVING");
	document.location.href = "login.html";
}

function logIn(username) {
	//logs the user with username in. Does NOT check password validity.
	localStorage.setItem("currentuserDISTDRIVING", JSON.stringify(userdict[username], null, 2));
	return 1;
}

function checkUsernamePassword(username, password) {
	//returns 1 if the password matches the username. Returns 0 if username not in use or password does not match.
	if(userdict[username])
		if(userdict[username].password == password)
			return 1;

	return 0;
}

function getCurrentUser() {
	//returns the user object containing the current user's data. Will error if there is no current user.
	//if you call this and modify the object you get back, don't expect any changes you make to be persistent.
	if(currentuser == null)
		console.error("called getCurrentUser and there was no current user");

	return currentuser;
}

function userdictClear() {
	localStorage.removeItem("userdictDISTDRIVING");
	localStorage.removeItem("currentuserDISTDRIVING");
}

function checkUsernameInUse(username) {
	//returns 1 if the specified username is in use already, 0 otherwise
	if(userdict[username])
		return 1;

	return 0;
}

