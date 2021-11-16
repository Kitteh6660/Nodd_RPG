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
	genericPlayerButtons(true);
	addButton(0, "Bar", Locations.OutsideInn.approachBar, null, null, null, "See what the bar has to offer.");
	addButton(1, "Tables", Locations.OutsideInn.approachTables, null, null, null, "Visit the tables and strike up a conversation with patrons.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/outside-inn", null, null, "Experience the Outside Inn Noddule for yourself!");
	addButtonDisabled(5, "Kitchen", "The kitchen is only for employees. Best not to interrupt whoever is working in the kitchens.");
	addButton(7, "Restroom", moveToLocation, Locations.OutsideInn.roomRestroom, 1);
	addButton(10, "Hallway", moveToLocation, Locations.OutsideInn.roomHallwayF1, 1);
	addButton(11, "Exit", moveToLocation, Locations.DarklingRow.enter, 2);
	if (time.days <= 1 && time.hours >= 20) addButtonDisabled(11, "Exit", "It's too dangerous to head back outside, the streets are dark now and you'd rather not run into another dangerous adversary at this time of day.");
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
	if (player.hasKeyItem(KeyItems.OutsideInnRoomKey) >= 0) addButton(0, "Room 6", moveToLocation, Locations.OutsideInn.roomRoom6, 1);
	else addButtonDisabled(0, "Room 6", "You don't have the key to this room.")
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
	addButton(0, "Get a Drink", Locations.OutsideInn.getADrinkMenu); hint(0, "Why not get a nice drink here in the Outside Inn?");
	addButton(1, "Get a Meal", Locations.OutsideInn.getAMeal); hint(1, "Why not get a nice, warm meal here in the Outside Inn?");
	addButton(2, (npcFlags.outsideInnDruskLearntAboutDruskName ? "Drusk Vaurn" : "Bartender"), NPCs.DruskVaurn.approach, true); hint(2, "The bartender seems to be friendly enough. Why not strike up a conversation with him?");
	addButton(4, "Back", Locations.OutsideInn.roomLobby);
}

Locations.OutsideInn.getADrinkMenu = function() {
	clearOutput();
	if (player.thirst >= player.maxThirst() - 10) {
		outputText("You don't feel the need to drink anything at the moment.");
		doNext(Locations.OutsideInn.approachBar);
		return;
	}
	outputText("You are handed a menu showcasing the different types of drinks, with colourful pictures and the words in plain letters associated with the drinks. Each of the listed beverages explains what the beverages will do.<br><br>");
	menu();
	addButton(0, "Hornsquat Nectar", Locations.OutsideInn.getADrink, 0); hint(0, "A glass of carbonated, mildly intoxicating green-coloured juice. This one's made with hornsquat. Recommended for the newcomers.");
	addButton(1, "Sagberry Nectar", Locations.OutsideInn.getADrink, 1); hint(1, "A glass of carbonated, mildly intoxicating purple-coloured juice. This one's made with sagberries. Recommended for the newcomers.");
	addButton(2, "Cinderbean Nectar", Locations.OutsideInn.getADrink, 2); hint(2, "A glass of carbonated, mildly intoxicating orange-coloured juice. This one's made with cinderbeans. Recommended for the newcomers.");
	addButton(3, "Devilmint Cocktail", Locations.OutsideInn.getADrink, 3); hint(3, "A minty cocktail made with an herb known to inspire mischief and destruction. Garnished with a sprig of devilmint, which can also be chewed. ");
	addButton(4, "Mindfuck", Locations.OutsideInn.getADrink, 4); hint(4, "A drink featuring sagberries that have been enchanted with a random mix of mind spells. Garnished with an addleworm.")
	addButton(5, "Blackwine", Locations.OutsideInn.getADrink, 5); hint(5, "A glass of wine made from the berries of a widow's tale vine, which induce sadness.");
	addButton(6, "Nightmare Fuel", Locations.OutsideInn.getADrink, 6); hint(6, "A cocktail made with Nightmare Fuel, a substance known to cause horrifying experiences. Not for the faint of heart!", "Nightmare Fuel Cocktail");
	addButton(14, "Nevermind", Locations.OutsideInn.approachBar);
}

Locations.OutsideInn.getADrink = function(selection) {
	clearOutput();
	switch(selection) {
		case 0:
			outputText("You are handed a glass filled with sparkling green liquid, with the glass rim cutting halfway into a slice of odd fruit.<br><br>");
			outputText("You bring the glass up to your lips and savour every moment of tasting the liquid. Sweet and sour. Not quite bad!");
			break;
		case 1:
			outputText("You are handed a glass filled with sparkling purple liquid, with a sprig of grape-like fruits hanging onto the glass rim.<br><br>");
			outputText("You bring the glass up to your lips and enjoy every moment of tasting the liquid. Sweet, floral, and what's that? A bit musky. Still, not quite bad. Good-tasting in fact.");
			break;
		case 2:
			outputText("You are handed a glass filled with sparkling orange liquid, with two long, orange fruit inside the drink that extends even past the rim of the glass.<br><br>");
			outputText("You bring the glass up to your lips and appreciate every moment of tasting the liquid. Sweet and spicy in just the right sense, not too spicy. A pleasant buzz.");
			break;
		case 3:
			outputText("You are handed a glass filled with reddish-pink liquid, garnished with a sprig of what appears to be herbs that resemble the tip of a devil's tail.<br><br>");
			outputText("You bring the glass up to your lips and take every careful moment of tasting the liquid. A sense of mischief fills your mind and you grin involuntarily but you quickly shake your head and snap out of mischievous trance.");
			break;
		case 4:
			outputText("You are handed a glass filled with vivid purple liquid, garnished with what appears to be an odd worm curled around a stick, the head ending in an arrow shape.<br><br>");
			outputText("You bring the glass up to your lips and take every careful moment of tasting the unusual liquid. A sense of pain forms in your forehead and you give your forehead a rub as if trying to get rid of the headache. It thankfully passes quickly.");
			break;
		case 5:
			outputText("You are handed a wine glass filled with what appears to be an odd, black liquid.<br><br>");
			outputText("You bring the glass up to your lips and drink the contents. It tastes bitter and sweet to say the least. Once you've finished, a slight sense of sadness and sorrow washes over you.<br><br>");
			break;
		case 6:
			outputText("You are handed a glass filled with odd-looking greenish liquid with a gradient towards purple at the bottom. It's garnished with some sort of worms and some sprigs of strange herbs.<br><br>");
			outputText("You reluctantly bring the glass up to your lips and down the contents. Everything seems to go dark and all sorts of horrifying figures appear in your vision. The figure is replaced by another, even more horrifying figures, and you scream out loudly. Thankfully the images go away as you do and everything appears to be normal again.<br><br>");
			outputText("<b>(No jumpscares here at the moment, thankfully.)</b><br><br>");
			if (locFlags.outsideInnNightmareFuelDrankCounter <= 0) {
				outputText("<font color=\"" + druskDialogueColour + "\">\"<i>First time drinking Nightmare Fuel? Didn't say I didn't warn ya. Don't be afraid to try drinking again, if you dare, heh~</i>\"</font> The burly male chuckles at your reaction to the strange drink.<br><br>");
			}
			outputText("Your Ego Bracer gently kneads against your left wrist and when you check your bracer, it informs you that five units of gloam have been generated from your terrifying experience.");
			locFlags.outsideInnNightmareFuelDrankCounter++;
			player.changeMoney(5);
			break;
		default:
			outputText("Derp! This text should not appear at all.");
	}
	player.refillThirst(35);
	player.fillBladder(5);
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
	//First interaction
	if (locFlags.outsideInnRestroomUseCounter <= 0) {
		outputText("The toilet isn't like anything you've experienced before and you spend time contemplating how to use the toilet. You can't make out any flushing mechanisms, and a further examination reveals that there really isn't one. ");
		if (player.hasCock()) {
			outputText("You already figure out the obvious method; you could stand and urinate into one of the holes. If you have another type of business to take care of, squatting over the holes can also work. ");
		}
		else {
			outputText("It doesn't take long until you figure everything out. It's a bit tricky but you could squat over one of the holes and it would certainly work for either method of business. ");
		}
		locFlags.outsideInnRestroomUseCounter = 0.5;
		menu();
		addButton(0, "Use Toilet", Locations.OutsideInn.useRestroomToilet);
		addButton(1, "Nevermind", Locations.OutsideInn.roomRestroom);
		return;
	}
	//Don't feel the need!
	if (player.bladder < 50 && (player.bowels < 50 || !scatEnabled)) {
		outputText("You do not feel the need to use the toilet at the moment.");
		doNext(Locations.OutsideInn.roomRestroom);
		return;
	}
	//Getting to business!
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
		if (player.hasCock()) {
			//Clothes or armour check
			if (player.armor.hasFlag(ITEM_FLAG_NO_STRIP_NEEDED)) {
				if (player.armor.id == Items.Armor.RubberSheathSuit.id) outputText("You grab your rubber-sheathed " + player.multiCockDescriptLight() + " ");
			}
			else if (!player.isExposedLower()) {
				outputText("You fish your " + player.multiCockDescriptLight() + " out of your " + player.armorDescript(undefined, true) + " ");
			}
			else {
				outputText("You grab your " + player.multiCockDescriptLight() + " ");
			}
			outputText("and aim at the trough-like toilet. The floodgates open as your piss stream gushes out of your " + player.cockHead() + (player.armor.id == Items.Armor.RubberSheathSuit.id ? ", through the tip of your form-fitting latex sheath" : "") + " and splash into the bottom, your urine flowing towards one of the holes. ");
		}
		else {
			if (!player.isExposedLower) {
				outputText("You grab your " + player.armorDescript() + " and move it out of the way. ");
			}
			outputText("You squat over one of the holes and release your pressure, your golden stream gushing out of your " + player.vaginaDescript() + " and splashing into the bottom of the toilet basin. Your urine flow into one of the holes. ");
			
		}
		outputText("You let out a happy sigh as you empty the contents of your bladder. ");
		if (player.bladder >= 85) {
			if (player.bladder >= 95) outputText("Phew, you really needed that! Any longer and it could have been embarrassing for sure. ");
		}
		outputText("<br><br>");
		Time.advanceMinutes(Math.ceil(player.bladder / 40));
		player.emptyBladder();
	}
	outputText("Satisfied and no longer feeling the need, you wash your hands at the sink afterwards.");
	refreshStats();
	if (locFlags.outsideInnRestroomUseCounter < 1) locFlags.outsideInnRestroomUseCounter = 1;
	else locFlags.outsideestroomUseCounter++;
	doNext(Locations.OutsideInn.roomRestroom);
}

Locations.OutsideInn.useRoomToilInnRet = function() {
	clearOutput();
	if (player.bladder < 50 && (player.bowels < 50 && scatEnabled)) {
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