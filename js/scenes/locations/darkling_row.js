Locations.DarklingRow = [];

Locations.DarklingRow.enter = function() {
	player.location = "darkling_row";
	clearOutput();
	showMenus();
	setHeader("The Darkling Row");
	outputText("You are currently standing in the maze-like streets of the Darkling Row, the notorious place where the newly Inducted arrive. The street practically reeks of the mixed smell from various sources, whether it be the piles of rotting garbage heap against the buildings or some musky Insiders who look curiously at your direction.<br><br>");
	outputText("While there are many unremarkable buildings of Noddish design, one of them stands out among the rest. A purple text at the upper wall proudly declares the building to be the Outside Inn, and the windows look to be well-lit.<br><br>");
	outputText("A shop not too far away emanates some sort of intoxicating smell under the door. Next to the door, the shop exhibits an arcanogram sign that would read 'Darkhaze' when concentrated on.<br><br>");
	outputText("There are propaganda posters written in plain text that are put up all over walls at random intervals, encouraging the citizens to 'indulge' or whatever it is.<br><br>");
	if (locFlags.darklingRowFoundAlley) {
		outputText("You know that down an alley, you'll find Grud's Grub and Eggpluck's Discount Familiars if you would like to visit.<br><br>");
	}
	outputText("You could head north or south to explore deeper into the City of Nodd, or head west to the gate leading outside to the Doldrums although you suspect that it's not a good idea to venture outside the city walls.<br><br>");
	menu();
	genericPlayerButtons();
	addButton(0, "Explore", Locations.DarklingRow.explore); hint(0, "Explore the Darkling Row to discover new locations.", "Explore Darkling Row");
	addButton(1, "Outside Inn", moveToLocation, Locations.OutsideInn.roomLobby, 2); hint(1, "Enter the Outside Inn, every Outsider's first choice.");
	addButton(2, "Shops", Locations.DarklingRow.shopMenu);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/darkling-row", null, null, "Experience the Darkling Row Noddule for yourself!");
	addButton(6, "North", moveToLocation, Locations.ViviriaDistrict.enter, 60);
	addButton(11, "South", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	//If for some reason the player is missing Ego Bracer... softlock prevention.
	if (player.hasKeyItem(KeyItems.EgoBracer) < 0) {
		Intro.inductionPartNine();
	}
}

Locations.DarklingRow.shopMenu = function() {
	menu();
	addButton(0, "Cart", Locations.DarklingRow.placeholderCartSell);
	addButtonDisabled(1, "Darkhaze", "Not yet added.");
	if (locFlags.darklingRowFoundAlley) {
		addButton(2, "Grud's Grub", Locations.DarklingRow.Grud.approachGrud);
		hint(2, "Visit the food bar run by Grud.");
	}
	else addButtonDisabled(2, "???", "You don't know about this location. Perhaps you should try exploring the Darkling Row more?");
	if (locFlags.darklingRowFoundAlley) {
		addButton(3, "Eggpluck's", Locations.DarklingRow.Eggpluck.visitEggpluck); 
		hint(3, "Visit the familiars shop run by Eggpluck's.", "Eggpluck's Discount Familiars");
	}
	else addButtonDisabled(3, "???", "You don't know about this location. Perhaps you should try exploring the Darkling Row more?");
	addButton(14, "Back", Locations.DarklingRow.enter);
}

Locations.DarklingRow.explore = function() {
	clearOutput();
	Time.advanceMinutes(30);
	locFlags.darklingRowExploreCounter++;
	outputText("You decide to go off in random directions in the alley of Darkling Row to try to discover something new.<br><br>");
	var rng = Math.random() * 100;
	if (rng < 30) {
		if (!locFlags.darklingRowFoundAlley) {
			Locations.DarklingRow.discoverAlley();
		}
		else {
			outputText("Despite your time spent exploring, you fail to find anything new.");
		}
	}
	else if (rng < 70) {
		Locations.DarklingRow.rollRandomEncounter();
		return;
	}
	else {
		var amt = 5 + Math.floor(Math.random() * 7);
		outputText("Your exploration is uneventful but you did find a loose congealed gloam somewhere. As you reach out to touch it, it seemingly gets absorbed by your Ego Bracer. You have gained " + amt + " Gloam!");
		player.changeMoney(amt);
	}
	doNext(Locations.DarklingRow.enter);
}

Locations.DarklingRow.rollRandomEncounter = function() {
	var chooser = Math.random() * (5 + (5 * Math.min(player.level, 3)));
	if (chooser < 5) {
		outputText("You are ambushed by a short figure wielding a dagger! The figure in particular is a Nurk.");
		if (!codexFlags.unlockedNurk) {
			outputText("<br><br><b>New codex entry unlocked: Nurks!</b>");
			codexFlags.unlockedNurk = true;
		}
		monster = new NurkRogue();
		if (player.level >= 2 && Math.random() >= (0.5 - (player.level - 1) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (player.level >= 3 && Math.random() >= (0.5 - (player.level - 2) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		startCombat(monster);
	}
	else {
		outputText("A Ravel wings in and ambushes you!");
		if (!codexFlags.unlockedRavel) {
			outputText("<br><br><b>New codex entry unlocked: Ravels!</b>");
			codexFlags.unlockedRavel = true;
		}
		monster = new RavelRogue();
		if (player.level >= 3 && Math.random() >= (0.5 - (player.level - 2) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (player.level >= 4 && Math.random() >= (0.5 - (player.level - 3) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		startCombat(monster);
	}
}

Locations.DarklingRow.discoverAlley = function() {
	outputText("(Placeholder) You find Grud's Grub and Eggpluck in the alley.");
	locFlags.darklingRowFoundAlley = true;
}

Locations.DarklingRow.placeholderCartSell = function() {
	clearOutput();
	outputText("This is a placeholder location to sell items until there is a better location to sell your unwanted items.");
	menu();
	for (var i = 0; i < 10; i++) {
		if (player.itemSlots[i].itype != Items.NOTHING && player.itemSlots[i].itype.value > 0) {
			addButton(i, player.itemSlots[i].itype.shortName + " x" + player.itemSlots[i].quantity, Locations.DarklingRow.sellItem, i); hint(i, player.itemSlots[i].itype.description, capitalizeFirstLetter(player.itemSlots[i].itype.longName));
		}
	}
	addButton(14, "Back", Locations.DarklingRow.enter);
}

Locations.DarklingRow.sellItem = function(slot) {
	clearOutput();
	var item = player.itemSlots[slot].itype;
	var val = Math.floor(item.value / 2);
	outputText("You sell " + item.longName + " for " + val + " gloam.");
	player.destroyItems(item, 1);
	player.changeMoney(val);
	doNext(Locations.DarklingRow.placeholderCartSell);
}