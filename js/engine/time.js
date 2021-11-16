// These functions handle changing the clock.

Time = [];

const MONTHS = ["Longsleep", "Last Dream", "The Awakening", "Skymourn", "The Kindling", "Everlight", "Devilsky", "Fever's End", "The Surrendering", "Grimlight", "The Darkening", "Neverlight"];

Time.increment = function() {
	time.minutes++;
	if (time.minutes >= 60) {
		time.minutes -= 60;
		time.hours++;
	}
	if (time.hours >= 24) {
		time.hours -= 24;
		time.days++;
	}
}

Time.advanceMinutes = function(minutes) {
	var needNext = false;
	for (i = 0; i < minutes; i++) {
		Time.increment();
		player.pregnancyAdvance(); // Advances the Player's pregnancy.
		// Slowly deplete hunger and thirst meter
		if (time.minutes % 5 == 0) {
			if (player.hunger > 0) {
				player.hunger -= 0.05;
				if (player.hunger < 0) player.hunger = 0;
			}
			if (player.hunger > 25) {
				player.hunger -= 0.05;
				if (scatEnabled) player.bowels += 0.01;
			}
			if (player.hunger > 80) {
				player.hunger -= 0.1;
				if (scatEnabled) player.bowels += 0.02;
			}
		}
		if (player.thirst > 0) {
			player.thirst -= 0.05;
			if (player.thirst < 0) player.thirst = 0;
		}
		// Gradual HP & MP regen
		if (time.minutes % 10 == 0 && player.hunger > 40 && player.thirst > 40 && player.hunger + player.thirst >= 120 && player.HP < player.maxHP()) {
			player.HP += 1;
		}
		if (player.MP < player.maxMP() && player.gloam > 0) {
			player.MP += Math.ceil(player.maxMP() * 0.1);
			player.gloam -= 1;
		}
		// Gradual lust gain based on libido
		if (player.lib > 0 && player.lust < player.maxLust() * 0.5 + (player.lib * 0.5)) {
			player.lust += player.lib * 0.002;
		}
		// Bladder fills over time!
		if (player.isSleeping) {
			player.bladder += (player.bladder < 90 ? 0.05 : 0.02);
		}
		else {
			player.bladder += (player.bladder < 90 ? 0.1 : 0.02);
			player.energy -= 0.05;
		}
		if (player.bladder > player.maxBladder()) {
			player.bladder = player.maxBladder();
		}
		if (player.bowels > player.maxBowels()) {
			player.bowels = player.maxBowels();
		}
		// Increment amount of hours since cum
		if (minutes == 0) {
			player.hoursSinceCum++;
		}
		// Re-check status
		if (player.isNakedLower() && player.findPerk(PerkLib.Gymnophobia) >= 0 && player.findStatusEffect(StatusEffects.Gymnophobia) < 0) {
			outputText("Uh-oh, you're not clothed down there! How embarrassing of you to be naked! <b>Gained Status Effect: Gymnophobia Penalty!</b> While naked, your Libido is decreased by 25 points, and you suffer a penalty to -2 to your attributes except for Endurance and Intelligence.<br><br>");
			player.createStatusEffect(StatusEffects.Gymnophobia, 0, 0, 0, 0);
			player.modStats("lib", -25, "str", -2, "dex", -2, "wil", -2, "cha", -2);
		}
		else if (!player.isNakedLower() && player.findStatusEffect(StatusEffects.Gymnophobia) >= 0) {
			outputText("You breathe a sigh of relief as you are no longer naked. <b>Lost Status Effect: Gymnophobia!</b> Your affected stats have been restored.<br><br>");
			player.removeStatusEffect(StatusEffects.Gymnophobia);
			player.modStats("lib", 25, "str", 2, "dex", 2, "wil", 2, "cha", 2);
		}
	}
	refreshTime();
	//pregnancyProgression.updatePregnancy(); // Outputs the results of the Player's pregnancy flags once time passes.
}

Time.advanceHours = function(hours) {
	if (player.isSleeping) {
		player.HP += player.maxHP() * 0.05 * hours;
		if (player.HP > player.maxHP()) player.HP = player.maxHP();
		player.refillEnergy(10 * hours);
	}
	Time.advanceMinutes(hours * 60);
}

Time.getNoddDate = function(day) {
	var year = 301 + Math.floor(time.days / 360);
	var month = (Math.floor(time.days / 30) % 12);
	var day = time.days % 30;
	return MONTHS[month] + ", Day " + day + ", Turn " + year;
}

Time.waitMenu = function() {
	menu();
	addButton(0, "5 minutes", Time.wait, 5, false);
	addButton(1, "10 minutes", Time.wait, 10, false);
	addButton(2, "15 minutes", Time.wait, 15, false);
	addButton(3, "20 minutes", Time.wait, 20, false);
	addButton(4, "30 minutes", Time.wait, 30, false);
	addButton(5, "1 hour", Time.wait, 1, true);
	addButton(6, "2 hours", Time.wait, 2, true);
	addButton(7, "3 hours", Time.wait, 3, true);
	addButton(8, "4 hours", Time.wait, 4, true);
	addButton(9, "5 hours", Time.wait, 5, true);
	addButton(14, "Back", playerMenu);
}
Time.wait = function(timeLength, isHour) {
	clearOutput();
	outputText("You wait " + num2Text(timeLength) + " " + (isHour == true ? "hour" : "minute") + (timeLength == 1 ? "" : "s") + ".<br><br>");
	if (isHour) {
		Time.advanceHours(timeLength);
	}
	else {
		Time.advanceMinutes(timeLength);
	}
	doNext(resumeFromMenu);
}