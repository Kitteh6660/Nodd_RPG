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
	if (locFlags.darklingRowFoundOutsideInn) {
		addButton(1, "Outside Inn", moveToLocation, Locations.OutsideInn.roomLobby, 2); hint(1, "Enter the Outside Inn, every Outsider's first choice.");
	}
	else addButtonDisabled(1, "???", "You don't know about this location yet. Perhaps you should try exploring the Darkling Row more?");
	addButton(2, "Shops", Locations.DarklingRow.shopMenu);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/darkling-row", null, null, "Experience the Darkling Row Noddule for yourself!");
	addButton(6, "North", moveToLocation, Locations.ViviriaDistrict.enter, 60);
	addButton(11, "South", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	//If for some reason the player is missing Ego Bracer... softlock prevention.
	if (player.hasKeyItem(KeyItems.EgoBracer) < 0) {
		Intro.inductionPartNine();
	}
	if (time.days < 2) {
		addButtonDisabled(6, "North", "You should keep exploring the Darkling Row for now.");
		addButtonDisabled(11, "South", "You should keep exploring the Darkling Row for now.");
		addButtonDisabled(9, "Wait", "You should keep exploring the Darkling Row for now.");
	}
}

Locations.DarklingRow.shopMenu = function() {
	menu();
	addButton(0, "Cart", Locations.DarklingRow.placeholderCartSell);
	if (locFlags.darklingRowFoundDarkhaze) {
		addButton(1, "Darkhaze", Locations.DarklingRow.Darkhaze.enter);
	}
	else addButtonDisabled(1, "???", "You don't know about this location yet. Perhaps you should try exploring the Darkling Row more?");
	if (locFlags.darklingRowFoundGrudsGrub) {
		addButton(2, "Grud's Grub", Locations.DarklingRow.Grud.approachGrud);
		hint(2, "Visit the food bar run by Grud.");
	}
	else addButtonDisabled(2, "???", "You don't know about this location yet. Perhaps you should try exploring the Darkling Row more?");
	if (locFlags.darklingRowFoundEggplucks) {
		addButton(3, "Eggpluck's", Locations.DarklingRow.Eggpluck.visitEggpluck); 
		hint(3, "Visit the familiars shop run by Eggpluck's.", "Eggpluck's Discount Familiars");
	}
	else addButtonDisabled(3, "???", "You don't know about this location yet. Perhaps you should try exploring the Darkling Row more?");
	addButton(4, "PHolder Spell Shop", Locations.DarklingRow.PlaceholderSpellShop); hint(4, "This shop is temporarily in place to allow you to buy spells until a more fitting home is found for the spells.", "Placeholder Spell Shop");
	addButton(14, "Back", Locations.DarklingRow.enter);
}

Locations.DarklingRow.explore = function() {
	clearOutput();
	if (player.energy < 5 && locFlags.darklingRowFoundOutsideInn) { //Additional check for softlock prevention.
		outputText("You are too exhausted to explore. Find a bed to sleep in to replenish your energy.");
		doNext(resumeFromMenu);
		return;
	}
	if (locFlags.darklingRowExploreCounter < 8) {
		Time.advanceMinutes(15);
	}
	else {
		Time.advanceMinutes(30);
	}
	locFlags.darklingRowExploreCounter++;
	if (locFlags.darklingRowExploreCounter == 1 || (locFlags.darklingRowExploreCounter > 1 && !locFlags.darklingRowFoundDarkhaze)) {
		outputText("The first thing on your mind being to explore and to get good bearings of your whereabouts, you walk down the streets, piles of garbage litter the sides. Occasional, strange goose-like creature frolicks around the trash piles as if scavenging for something to eat.<br><br>");
		outputText("While the buildings seem uninteresting, one of them catches your eyes. A building exhibiting a glowing sign next to a door declares it to be 'Darkhaze'. Pipes, hookahs, and odd devices are all display neatly on shelves behind a large, green-tinted window.<br><br>");
		outputText("Given how the city encourages the citizens to indulge, including drugs, it should come off as no surprise. You can visit the shop later if you desire.<br><br>");
		outputText("<b>You have discovered Darkhaze!</b> You can visit by accessing the shop from Shops menu.");
		locFlags.darklingRowFoundDarkhaze = true;
		doNext(Locations.DarklingRow.enter);
		return;
	}
	outputText("You decide to go off in random directions in the streets and alleys of Darkling Row to try to discover something new.<br><br>");
	if (locFlags.darklingRowExploreCounter == 2 || (locFlags.darklingRowExploreCounter > 2 && !locFlags.darklingRowFoundVendorCart)) {
		outputText("You walk down a street and the first thing you notice is the amount of carts and stalls lining the streets, run by their corresponding vendors of varying species and genders.<br><br>");
		outputText("Most of the stalls don't even catch your interest save for one. Curiosity leads you as you approach the stall.<br><br>");
		outputText("\"<i>Hey there, Outsider!</i>\" The vendor shouts. \"<i>Anything I can do for ya to make this city feel a little more like, eh... wherever it is ya come from?</i>\" He gestures with a scaly hand towards his wares.<br><br>");
		outputText("All sorts of strange products line the cart and you hear hissing sound coming from a cage. A pair of glowing orange eyes stare into your eyes. There's nothing on display that would remind you of your home world. You continue on your way.<br><br>");
		Codex.unlockCodexEntry("Ravels", "unlockedRavel");
		locFlags.darklingRowFoundVendorCart = true;
		doNext(Locations.DarklingRow.enter);
		return;
	}
	if (locFlags.darklingRowExploreCounter == 3 || (locFlags.darklingRowExploreCounter > 3 && !locFlags.darklingRowFoundGrudsGrub)) {
		outputText("You enter an alley that appears to be unremarkable at first glance, the streets twisting and turning in random directions, more posters put up on the wall reminding the citizens to indulge. You pass by various doors and unremarkable, smelling refuse piles.<br><br>");
		outputText("The monotonosity is broken only by what appears to be a food joint run by a large, bouldering male. As you approach the food bar, you make out the sign that reads 'Grud's Grub' and indeed, food is served there.<br><br>");
		outputText("<b>You have discovered Grud's Grub!</b> You can return by accessing the food joint from Shops menu.");
		locFlags.darklingRowFoundGrudsGrub = true;
		menu();
		addButton(0, "Visit Grud", Locations.DarklingRow.Grud.approachGrud);
		addButton(1, "Return", Locations.DarklingRow.enter);
		return;
	}
	if (locFlags.darklingRowExploreCounter == 4) {
		Locations.DarklingRow.greepLovers();
		doNext(Locations.DarklingRow.enter);
		return;
	}
	if (locFlags.darklingRowExploreCounter == 5 || (locFlags.darklingRowExploreCounter > 5 && !locFlags.darklingRowFoundEggplucks)) {
		outputText("You once again retrace your steps through the alley and back to the familiar food joint run by the large figure Grud.<br><br>");
		outputText("As soon as you arrive at the food joint, you make your focus on exploring deeper and it doesn't take long until you also stumble across another building with a different sign. 'Eggpluck's Discount Familiars' The sign reads. As you get within certain proximity, the strong smell assaults your nostrils, nearly overwhelming you and making you feel lightheaded.<br><br>");
		outputText("Once you get the strong smell out of the way, you peek through the door which is conveniently ajar. As you peer into the shop, you easily make out what the shop is for. It appears to be a pet shop of sorts, with caged creatures.<br><br>");
		outputText("<b>You have discovered Eggpluck's Discount Familiars!</b> You can return by accessing the shop from Shops menu.");
		locFlags.darklingRowFoundEggplucks = true;
		doNext(Locations.DarklingRow.enter);
		return;
	}
	if (locFlags.darklingRowExploreCounter == 6) {
		outputText("As you continue exploring the unfamiliar alleys of the Darkling Row for anything of interest, a short, mammaloid creature pounces out of the shadows! He snarls at you and he looks naked, not even covered in any piece of clothing. Clenched in his right hand is a pointy dagger that looks fairly rusty.<br><br>");
		outputText("\"<i>Give me your shinies!</i>\" The Nurk yells at you with an intimidating scowl but knowing the small nature, you could probably beat this guy.<br><br>");
		outputText("<b>It looks like you will have to fight him!</b><br><br>");
		monster = new NurkRogue();
		monster.end -= 2;
		monster.str -= 1;
		monster.dex -= 3;
		monster.gloam += 10;
		monster.additionalXP += 5;
		monster.clearDrops();
		monster.addDrop(Items.Weapons.Dagger, 100);
		monster.victory = Locations.DarklingRow.nurkRogueFirstVictory;
		Codex.unlockCodexEntry("Nurks", "unlockedNurk");
		startCombat(monster);
		return;
	}
	if (locFlags.darklingRowExploreCounter == 7 || (locFlags.darklingRowExploreCounter > 7 && !locFlags.darklingRowFoundOutsideInn)) {
		outputText("After your recent run-in with the hostile Nurk, you figure that a safe place to recuperate would be nice.<br><br>");
		outputText("You head back to the streets and walk down the streets more, nothing out of the ordinary happening other than the occasional noises of the Greeps that wander aimlessly.<br><br>");
		outputText("A two-storey building proudly exhibiting a large purple sign comes into sight. 'The Outside Inn' it reads. The building design is just like everything else, Noddish in design, green-tinted windows, and twisted-looking pair of doors.<br><br>");
		outputText("<b>You have discovered the Outside Inn!</b>");
		locFlags.darklingRowFoundOutsideInn = true;
		menu();
		addButton(0, "Enter Inn", Locations.OutsideInn.roomLobby);
		return;
	}
	var rng = Math.random() * 100;
	if (rng < 25) { //Nothing found.
		outputText("Despite your time spent exploring the streets of the Darkling Row, you fail to find anything new.");
	}
	else if (rng < 40) { //Random exploration flair.
		var funcs = [Locations.DarklingRow.greepLovers];
		if (silly && locFlags.darklingRowSillyModeJerryCooldown <= 0) funcs.push(Locations.DarklingRow.workersWithGlassPaneSMASH);
		if (locFlags.darklingRowPrankNurkCooldown <= 0) funcs.push(Locations.DarklingRow.pnurked);
		if (locFlags.darklingRowScarabCrashCooldown <= 0 && time.days >= 3 && rand(2) == 0) funcs.push(Locations.DarklingRow.scarabCrashWitness);
		if (time.days >= 4 && !locFlags.darklingRowCarriageDiscovered && rand(2) == 0) funcs.push(Locations.DarklingRow.miggwitchCarriage);
		funcs[rand(funcs.length)]();
	}
	else if (rng < 75) {
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
	var chooser = Math.random() * 5 * Math.min(getScaledLevel(), 3); 
	if (chooser < 5) { // Available at level 1.
		outputText("You are ambushed by a short figure wielding a dagger! The figure in particular is a Nurk.");
		Codex.unlockCodexEntry("Nurks", "unlockedNurk");
		monster = new NurkRogue();
		if (getScaledLevel() >= 2 && Math.random() >= (0.5 - (getScaledLevel() - 1) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (getScaledLevel() >= 3 && Math.random() >= (0.5 - (getScaledLevel() - 2) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (getScaledLevel() >= 4 && Math.random() >= (0.5 - (getScaledLevel() - 3) * 0.1)) {
			monster.level += 1;
			monster.wil += 1;
			monster.cha += 1;
			monster.dex += 1;
		}
		startCombat(monster);
	}
	else if (chooser < 10) { // Available at level 2.
		outputText("A Ravel wings in and ambushes you!");
		Codex.unlockCodexEntry("Ravels", "unlockedRavel");
		monster = new RavelRogue();
		if (getScaledLevel() >= 3 && Math.random() >= (0.5 - (getScaledLevel() - 2) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (getScaledLevel() >= 4 && Math.random() >= (0.5 - (getScaledLevel() - 3) * 0.1)) {
			monster.level += 1;
			monster.str += 1;
			monster.end += 1;
			monster.dex += 1;
		}
		if (getScaledLevel() >= 5 && Math.random() >= (0.5 - (getScaledLevel() - 4) * 0.1)) {
			monster.level += 1;
			monster.dex += 1;
			monster.end += 1;
			monster.wil += 1;
		}
		startCombat(monster);
	}
	else { // Available at level 3.
		outputText("A feminine-looking Slyne steps out of the corner and glares at you, grinning sadistically! \"<i>I'm going to feed on your suffering,</i>\" she taunts.<br><br>");
		Codex.unlockCodexEntry("Slynes", "unlockedSlyne");
		monster = new SlyneSorceress();
		if (getScaledLevel() >= 4 && Math.random() >= (0.5 - (player.level - 3) * 0.1)) {
			monster.level += 1;
			monster.end += 1;
			monster.inte+= 1;
			monster.cha += 1;
		}
		if (getScaledLevel() >= 5 && Math.random() >= (0.5 - (player.level - 4) * 0.1)) {
			monster.level += 1;
			monster.wil += 1;
			monster.inte+= 1;
			monster.dex += 1;
		}
		startCombat(monster);
	}
}

Locations.DarklingRow.greepLovers = function() {
	outputText("Whilst wandering the warm streets of Nodd you come across an oddly comforting sight of two lovers sharing a passionate dance. A pair of greeps are circling each other and running their bills up and down each other’s necks whilst making soft, trilling sounds at each other. You watch this dance with a smile on their face as they continue this for another minute. Then they stand with their necks fully straight and squawk again before making more noise and then waddling away down an alleyway together.<br><br>");
	Codex.unlockCodexEntry("Greeps", "unlockedGreep");
}
Locations.DarklingRow.workersWithGlassPaneSMASH = function() {
	outputText("A pair of workers are carrying a large glass pane as they make their way into a building across the street from you. You watch with a curious look on your face, this is something that often happens in movies and usually, someone would come running through. As the worker start making their way up the stairs into the building, someone does come running around the corner. It’s a female sergal with red and white fur a look of fear on her face. A pair of female nurks are chasing after her, yelling something about “Not casting random spells!” As the sergal reaches the workers she effortlessly moves around them with the nurks following suit. The workers get into the building safely.<br><br>");
	outputText("You wait for a moment then start to carry on walking before hearing a loud crash from the inside of the building and then someone yelling “<i>FOR FUCKS SAKE JERRY. THE ONE TIME WE DON’T HAVE SOMEONE RUN INTO US. YOU DROP IT!</i>”");
	locFlags.darklingRowSillyModeJerryCooldown = 36; // Locks out this scene for 36 hours.
}
Locations.DarklingRow.pnurked = function() {
	outputText("A nurk comes up to you. He’s fully naked and he smiles up at you happily. You raise a brow and look down at him.<br><br>");
	outputText("“Hello there. Can I have some clothes please?”<br><br>");
	outputText("You shake your head no. <br><br>");
	outputText("“Okay. I’ll steal them then!”<br><br>");
	outputText("Then, he snaps his fingers and runs away. Laughing manically as he does so and how he has your clothes! He’s...still naked and you’re still looking the same.<br><br>");
	locFlags.darklingRowPrankNurkCooldown = 12; // Locks out this scene for 12 hours.
}
Locations.DarklingRow.scarabCrashWitness = function() {
	outputText("A loud <b>CRASH</b> startles you. The sound comes from a nearby location and when you rush to investigate, you are horrified by what has happened.<br><br>");
	outputText("A badly-managed " + (codexFlags.unlockedLehlt ? "Lehlt" : "goat-like") + " corpse lays at the floor and a wall marking suggests that someone must have slammed into the wall at such high speeds. Near the corpse is the shattered remains of a bug-like device.<br><br>");
	outputText("\"<i>This Lehlt will make a fine vulturewear!</i>\" You hear a shouting from a female Ravel who already sauntered over to the corpse and she casted what a spell, accompanied with an orange flash. The Ravel peels the pelt off with such skills. As soon as she departs, two more citizens rush in to cut up and gather the meat of the now-skinned Lehlt.<br><br>");
	Codex.unlockCodexEntry("Lehlts", "unlockedLehlt");
	locFlags.darklingRowScarabCrashCooldown = 48 + rand(48); // Locks out this scene for 48 hours minimum.
}
Locations.DarklingRow.miggwitchCarriage = function() {
	outputText("As you're minding your own business in the shady streets of the Darkling Row, you spot what appears to be a carriage pulled by... an odd creature. Certainly not horse but something different and the way the cart is being pulled is unlike anything you've ever seen.<br><br>");
	outputText("Peering closer, your suspicions are confirmed; a metal cock ring is clasped around the base of the creature's swollen gonads and hooked to a carriage. How the creature is able to pull the carriage without his balls bursting or snapping is beyond your understanding.<br><br>");
	Codex.unlockCodexEntry("Miggwitches", "unlockedMiggwitch");
	outputText("As soon as you finish examining, the creature and the carriage have already moved on. However, you suppose that the next time the carriage comes around, you could hitch a ride to get around the City of Nodd in relative safety. At least, fairly safe, you can't be too careful.");
	locFlags.darklingRowCarriageDiscovered = true;
}
Locations.DarklingRow.randomCitizenComments = function() {
	// Not yet added.
}
Locations.DarklingRow.nurkRogueFirstVictory = function() {
	outputText("The Nurk falls before you, being too badly beaten to put up any more significant fight. It's clear that he is only a pushover. You grab the dagger from his defeated form, this could be useful for defending yourself from the dangers of the streets of Nodd.");
	cleanupAfterCombat();
}
Locations.DarklingRow.nurkRogueFirstDefeat = function() {
	outputText("You fall down, too badly beaten to continue fighting. The Nurk searches you all over and grumbles in disappointment when he cannot find anything of value and slams his foot into your groin, causing you to wince in pain. The small creature walks away in frustration.");
	cleanupAfterCombat();
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

//Temporary thing.
Locations.DarklingRow.PlaceholderSpellShop = function() {
	clearOutput();
	outputText("The shop is just for purchasing spells to test. Once a more suitable location has been found, this shop will close up and the spells will be moved to thematically-fitting shops.");
	menu();
	Locations.DarklingRow.addSpellShopButton(0, Spells.LivingSalve, 300);
	Locations.DarklingRow.addSpellShopButton(1, Spells.Blind, 300);
	Locations.DarklingRow.addSpellShopButton(2, Spells.Rouse, 300);
	addButton(14, "Leave", Locations.DarklingRow.enter);
}

Locations.DarklingRow.addSpellShopButton = function(loc, spell, cost) {
	addButton(loc, spell.name, Locations.DarklingRow.buySpellPrompt, spell, cost, null, spell.getTooltipDescription() + "<br><b>Price:</b> " + cost + " gloam", spell.name);
}

Locations.DarklingRow.buySpellPrompt = function(spell, cost) {
	clearOutput();
	if (hasSpell(spell)) {
		outputText("You already have the spell! There's no reason to buy it again.");
		doNext(Locations.DarklingRow.PlaceholderSpellShop);
		return;
	}
	if (player.gloam >= cost) {
		outputText("This will cost you " + cost + " gloam for the spell. Is this okay?");
		doYesNo(createCallBackFunction(Locations.DarklingRow.buySpell, spell, cost), Locations.DarklingRow.PlaceholderSpellShop);

	}
	else {
		outputText("You currently don't have enough gloam to purchase this spell.");
		doNext(Locations.DarklingRow.PlaceholderSpellShop);
	}
}
Locations.DarklingRow.buySpell = function(spell, cost) {
	clearOutput();
	outputText("You have purchased " + spell.name + " for " + cost + " gloam!");
	player.changeMoney(-cost);
	player.spells.push(spell.id);
	refreshStats();
	doNext(Locations.DarklingRow.PlaceholderSpellShop);
}