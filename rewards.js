
var rewardsLevel;
var baby;
var amateur;
var expert;
var elite;
var nascar;

document.addEventListener("DOMContentLoaded", function() {

	rewardsLevel = currentuser.rewardLevel;
	baby = document.getElementById("baby");
	amateur = document.getElementById("amateur");
	expert = document.getElementById("expert");
	elite = document.getElementById("elite");
	nascar = document.getElementById("nascar");

	setRewards();

});

function setRewards() {
	baby.style.backgroundColor = "green";
	amateur.style.backgroundColor = "green";
	expert.style.backgroundColor = "green";
	elite.style.backgroundColor = "green";
	nascar.style.backgroundColor = "green";

	if(rewardsLevel < 1) {
		baby.style.backgroundColor = "red";
	}
	if(rewardsLevel < 2) {
		amateur.style.backgroundColor = "red";
	}
	if(rewardsLevel < 3) {
		expert.style.backgroundColor = "red";
	}
	if(rewardsLevel < 4) {
		elite.style.backgroundColor = "red";
	}
	if(rewardsLevel < 5) {
		nascar.style.backgroundColor = "red";
	}

	if(rewardsLevel == 0) {
		baby.style.backgroundColor = "gold";
	}
	if(rewardsLevel == 1) {
		amateur.style.backgroundColor = "gold";
	}
	if(rewardsLevel == 2) {
		expert.style.backgroundColor = "gold";
	}
	if(rewardsLevel == 3) {
		elite.style.backgroundColor = "gold";
	}
	if(rewardsLevel == 4) {
		nascar.style.backgroundColor = "gold";
	}
}