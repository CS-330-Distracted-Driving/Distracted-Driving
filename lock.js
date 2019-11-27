var rewardsProgress;
var rewardsLevel;

document.addEventListener("DOMContentLoaded", function() {

	rewardsProgress = currentuser.nextRewardProgress;
	rewardsLevel = currentuser.rewardLevel;

	setInterval(incrementRewards(), 1000);

});

function incrementRewards() {
	if(rewardsLevel == 5)
		return 1;

	if(rewardsProgress == 99) {
		rewardsProgress = 0;
		rewardsLevel = rewardsLevel + 1;
		if(rewardsLevel == 5) {
			rewardsProgress = 100;
		}
	}

	currentuser.nextRewardProgress = rewardsProgress;
	currentuser.rewardLevel = rewardsLevel;

	return 1;
}