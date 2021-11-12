Locations.OutsideInn = [];

/* The Rooms of Outside Inn */
Locations.OutsideInn.roomLobby = function() {
	player.location = "outside_inn_foyer";
	clearOutput();
	showMenus();
	setHeader("The Outside Inn, Foyer");
	outputText("This is a placeholder text for the Outside Inn.<br><br>");
	outputText("You see a burly-looking, naked bartender by the name of Drusk Vaurn who serves the drinks. You could have a seat.<br><br>");
	outputText("The doorway at the left just before the bar gate leads to the rooms. The door at the far right leads to the restroom. Behind the gate is a door leading to the kitchen although the sign next to the door reads 'Employees Only'<br><br>");
	menu();
	genericPlayerButtons();
	addButton(0, "Bar", Locations.OutsideInn.approachBar, null, null, null, "See what the bar has to offer.");
	addButton(1, "Tables", Locations.OutsideInn.approachTables, null, null, null, "Visit the tables and strike up a conversation with patrons.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/outside-inn", null, null, "Experience the Outside Inn Noddule for yourself!");
	addButton(10, "West (Hallway)", moveToLocation, Locations.OutsideInn.roomHallwayF1, 1);
	addButton(12, "East (Restroom)", moveToLocation, Locations.OutsideInn.roomRestroom, 1);
	addButton(11, "South (Exit)", moveToLocation, Locations.DarklingRow.enter, 2);
}

Locations.OutsideInn.roomRestroom = function() {
	player.location = "outside_inn_restroom";
	clearOutput();
	showMenus();
	setHeader("The Outside Inn, Restroom");
	outputText("Peering through the doorway curtains, you make out what appears to be a trough-like toilet and there are no stall doors. And the restroom smells terrible, the toilet has no flushing mechanism just to speak of, just four holes at the bottom of the toilet basin.<br><br>");
	outputText("The only saving grace is that there is a working sink by the door. Although there is only one sink to wash your hands at.<br><br>");
	outputText("The only door leads back to the foyer.<br><br>");
	menu();
	addButton(0, "Use Toilet", Locations.OutsideInn.useRestroomToilet); hint(0, "Try to use the toilet.<br><br>CW: Urine " + (scatEnabled ? "and potential scat" : ""));
	addButton(14, "Leave", moveToLocation, Locations.OutsideInn.roomLobby, 1);
}

Locations.OutsideInn.roomHallwayF1 = function() {
	player.location = "outside_inn_hallway";
	clearOutput();
	showMenus();
	setHeader("The Outside Inn, Hallway F1");
	outputText("To your immediate north, there is a set of stairs leading up to the second floor. There are two doors to the south which you assume lead to the corresponding rooms. (Placeholdery)<br><br>");
	outputText("The door to the east leads back to the foyer.<br><br>");
	menu();
	genericPlayerButtons();
	addButton(5, "Up", moveToLocation, Locations.OutsideInn.roomHallwayF2, 1);
	addButtonDisabled(10, "West", "The western door is locked.");
	addButtonDisabled(11, "South", "The southern door is locked.");
	addButton(12, "East", moveToLocation, Locations.OutsideInn.roomLobby, 1);
}

Locations.OutsideInn.roomHallwayF2 = function() {
	player.location = "outside_inn_hallway2";
	clearOutput();
	showMenus();
	setHeader("The Outside Inn, Hallway F2");
	outputText("The hallway contains more doors along the wall and unfortunately, all of them appear to be locked.<br><br>");
	outputText("The stairs lead back down to the first floor.<br><br>");
	menu();
	genericPlayerButtons();
	addButton(7, "Down", moveToLocation, Locations.OutsideInn.roomHallwayF1, 1);
	addButton(1, "Room 6", moveToLocation, Locations.OutsideInn.roomRoom6, 1);
}

Locations.OutsideInn.roomRoom6 = function() {
	player.location = "outside_inn_room6";
	clearOutput();
	showMenus();
	setHeader("The Outside Inn, Room #6");
	outputText("This is the room that you've currently rented for the night. At the far end of the room is a comfortable-looking bed that appears to resemble an insect on its back.<br><br>");
	outputText("To your left, a squat egg-shaped fridge hangs over the counter, the green glass door revealing shelves where the food sits on. It doesn't look like there's much inside the fridge however...<br><br>");
	outputText("To your right is a bathroom that you can use for your personal needs.<br><br>");
	menu();
	genericPlayerButtons();
	addButton(3, "Take a Shower", Locations.OutsideInn.takeAShower); hint(3, "Take a refreshing shower to clean yourself.");
	addButton(4, "Use Toilet", Locations.OutsideInn.useRoomToilet); hint(4, "Use the toilet to relieve yourself.<br><br>CW: Toilet Use, Urine " + (scatEnabled ? "and potential scat" : ""));
	addButton(8, "Masturbate", Masturbations.masturbateMenu); hint(8, "Relieve yourself of arousal buildup.");
	if (time.hours >= 20 || time.hours < 6 || player.energy < 50) {
		addButton(9, "Sleep", Locations.OutsideInn.sleepInBed); hint(9, "Go to sleep and advance to the next day.");
	}
	else if (player.HPRatio() < 0.6) {
		addButton(9, "Rest", Locations.OutsideInn.sleepInBed); hint(9, "Take a rest to recover some health and energy.");
	}
	else {
		addButtonDisabled(9, "Sleep", "You do not need to use the bed at the moment.");
	}
	addButton(11, "South", moveToLocation, Locations.OutsideInn.roomHallwayF2, 1);
}

/* Outside Inn Events */
Locations.OutsideInn.approachBar = function() {
	clearOutput();
	hideMenus();
	setHeader("The Outside Inn, Bar");
	outputText("You are at the bar. What would you like to do?<br><br>");
	menu();
	addButton(0, "Get a Drink", Locations.OutsideInn.getADrink, null, null, null, "Why not get a nice drink here in the Outside Inn?");
	addButton(1, "Get a Meal", Locations.OutsideInn.getAMeal, null, null, null, "Why not get a nice, warm meal here in the Outside Inn?");
	addButton(14, "Back", Locations.OutsideInn.roomLobby);
}

Locations.OutsideInn.getADrink = function() {
	clearOutput();
	outputText("You get a drink at the bar. This is just a placeholder text of placeholderiness! Drink choices will be added!<br><br>");
	player.refillThirst(25);
	Time.advanceMinutes(5);
	doNext(Locations.OutsideInn.approachBar);
}

Locations.OutsideInn.getAMeal = function() {
	clearOutput();
	outputText("You get a meal at the bar. This is just a placeholder text of placeholderiness! Meal choices will be added!<br><br>");
	player.refillHunger(25);
	Time.advanceMinutes(10);
	doNext(Locations.OutsideInn.approachBar);
}

Locations.OutsideInn.approachTables = function() {
	clearOutput();
	hideMenus();
	setHeader("The Outside Inn, Tables");
	outputText("You are at the tables. What would you like to do?<br><br>");
	outputText("There will be patrons who will show up at different times of day.");
	menu();
	addButton(14, "Back", Locations.OutsideInn.roomLobby);
}

Locations.OutsideInn.useRestroomToilet = function() {
	clearOutput();
	if (player.bladder < 50 && player.bowels < 50) {
		outputText("You do not feel the need to use the toilet at the moment.");
		doNext(Locations.OutsideInn.roomRestroom);
		return;
	}
	if (player.bowels >= 50 && scatEnabled) {
		outputText("(Placeholder) You squat over one of the holes and grunt, doing your business. You feel much better after your business.");
		if (player.bladder >= 25) {
			outputText("<br><br>You also empty the contents of your bladder into the trough-like toilet.");
			player.emptyBladder();
		}
		outputText("<br><br>");
		Time.advanceMinutes(Math.ceil(player.bowels / 10));
		player.emptyBowels();
	}
	if (player.bladder >= 50) {
		outputText("(Placeholder) You urinate into the trough-like toilet as if it's a urinal, your bladder now empty. You feel much better! (There will be variants depending on gender.)<br><br>");
		Time.advanceMinutes(Math.ceil(player.bladder / 40));
		player.emptyBladder();
	}
	outputText("You wash your hands at the sink afterwards.");
	refreshStats();
	doNext(Locations.OutsideInn.roomRestroom);
}

Locations.OutsideInn.useRoomToilet = function() {
	clearOutput();
	if (player.bladder < 50 && player.bowels < 50) {
		outputText("You do not feel the need to use the toilet at the moment.");
		doNext(Locations.OutsideInn.roomRoom6);
		return;
	}
	if (player.bowels >= 50 && scatEnabled) {
		outputText("(Placeholder) You sit on the toilet and grunt, doing your business. You feel much better after your business.");
		if (player.bladder >= 25) {
			outputText("<br><br>You also empty the contents of your bladder into the toilet.");
			player.emptyBladder();
		}
		outputText(" You also flush the toilet. Down they go!<br><br>");
		Time.advanceMinutes(Math.ceil(player.bowels / 10));
		player.emptyBowels();
	}
	if (player.bladder >= 50) {
		outputText("(Placeholder) You urinate into the toilet, your bladder now empty. You feel much better and you flush the toilet. (There will be variants depending on gender.)<br><br>");
		Time.advanceMinutes(Math.ceil(player.bladder / 40));
		player.emptyBladder();
	}
	outputText("You wash your hands at the sink afterwards.");
	refreshStats();
	doNext(Locations.OutsideInn.roomRoom6);
}

Locations.OutsideInn.takeAShower = function() {
	clearOutput();
	outputText("(Placeholder) You take a nice, warm shower to get yourself cleaned off. The water seems to leave a residue but it's nothing of your concern.");
	Time.advanceMinutes(15);
	doNext(Locations.OutsideInn.roomRoom6);
}

Locations.OutsideInn.sleepInBed = function() {
	var hoursToSleep = 0;
	clearOutput();
	if ((time.hours >= 6 && time.hours < 20) && player.energy > 50) {
		if (player.HPRatio() < 0.7) {
			hoursToSleep = 4;
			outputText("You lay on the insect-like bed and rest for a few hours, you don't feel as exhausted as before now.");
			player.HP += player.maxHP() * hoursToSleep * 0.05;
			player.refillEnergy(hoursToSleep * 5);
			Time.advanceHours(hoursToSleep);
			refreshStats();
			doNext(Locations.OutsideInn.roomRoom6);
		}
		else {
			outputText("You do not need to use the bed at this time.");
			return;
		}
	}
	else {
		player.isSleeping = true;
		hoursToSleep = 8;
		if (time.hours == 20) hoursToSleep += 3;
		if (time.hours == 21) hoursToSleep += 2;
		if (time.hours == 22) hoursToSleep += 1;
		outputText("You lay on the insect-like bed and sleep for " + num2Text(hoursToSleep) + " hour" + (hoursToSleep == 1 ? "" : "s") + ". You wake up now feeling rejuvenated.<br><br>");
		outputText("The eerie, greenish 'sunlight' pours through the window and filling the room with light, signalling the beginning of another morning in Nodd.");
		Time.advanceHours(hoursToSleep);
		refreshStats();
		doNext(Locations.OutsideInn.roomRoom6);
		player.isSleeping = false;
	}
}