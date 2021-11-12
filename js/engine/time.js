// These functions handle changing the clock.

Time = [];

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
	for (i = 0; i < minutes; i++) {
		Time.increment();
		player.pregnancyAdvance(); // Advances the Player's pregnancy.
		if (minutes % 5 == 0) {
			if (player.hunger > 0) {
				player.hunger -= 0.05;
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
		player.thirst -= 0.05;
		if (player.isSleeping) {
			player.bladder += 0.05;
		}
		else {
			player.bladder += 0.1;
			player.energy -= 0.05;
		}
		if (player.bladder > player.maxBladder()) {
			player.bladder = player.maxBladder();
		}
		if (player.bowels > player.maxBowels()) {
			player.bowels = player.maxBowels();
		}
	}
	refreshTime();
	//pregnancyProgression.updatePregnancy(); // Outputs the results of the Player's pregnancy flags once time passes.
}

Time.advanceHours = function (hours) {
	if (player.isSleeping) {
		player.HP += player.maxHP() * 0.05 * hours;
		if (player.HP > player.maxHP()) player.HP = player.maxHP();
		player.refillEnergy(10 * hours);
	}
	player.hoursSinceCum++;
	Time.advanceMinutes(hours * 60);
}
