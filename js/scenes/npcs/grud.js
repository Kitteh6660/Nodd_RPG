NPCs.Grud = [];

const grudDialogueColour = "#50A090";

// Talk Scenes
NPCs.Grud.talkMenu = function(clearText) {
	if (clearText) {
		clearOutput();
		outputPic("Grud");
		outputText("<font color=\"" + grudDialogueColour + "\">\"<i>Wut you wanna talk bout, Outsider?</i>\"</font> Grud asks with a brutish tone, looking at you.");
	}
	menu();
	addButton(0, "Grud", NPCs.Grud.talkAboutGrud);
	addButton(1, "Grud's Grub", NPCs.Grud.talkAboutGrudsGrub);
	addButton(2, "Food", NPCs.Grud.talkAboutFood);
	addButton(3, "Penis", NPCs.Grud.talkAboutPenis);
	addButton(14, "Back", Locations.DarklingRow.Grud.approachGrud, true);
}

NPCs.Grud.talkAboutGrud = function() {
	clearOutput();
	outputText("PLACEHOLDER talk scene 1: Grud");
	NPCs.Grud.talkMenu();
	addButtonDisabled(0, "Grud", "You just already had this discussion.");
}

NPCs.Grud.talkAboutGrudsGrub = function() {
	clearOutput();
	outputText("PLACEHOLDER talk scene 2: Grud's Grub");
	NPCs.Grud.talkMenu();
	addButtonDisabled(1, "Grud's Grub", "You just already had this discussion.");
}

NPCs.Grud.talkAboutFood = function() {
	clearOutput();
	outputText("PLACEHOLDER talk scene 3: Food");
	NPCs.Grud.talkMenu();
	addButtonDisabled(2, "Food", "You just already had this discussion.");
}

NPCs.Grud.talkAboutPenis = function() {
	clearOutput();
	outputText("PLACEHOLDER talk scene 4: Penis");
	doYesNo(NPCs.Grud.sexMenu, NPCs.Grud.talkMenu);
}

// Sex Scenes
NPCs.Grud.sexMenu = function() {
	clearOutput();
	outputText("Grud grins at you wickedly as if only more than too happy to 'serve' you.");
	menu();
	addButton(0, "Suck Him Off", NPCs.Grud.suckGrudOff);
	addButton(1, "Take His Dick", NPCs.Grud.takeHisDick);
	addButton(14, "Back", Locations.DarklingRow.Grud.approachGrud, true);
}

NPCs.Grud.suckGrudOff = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You suck Grud's penis off and get a filling.");
	Time.advanceMinutes(15);
	player.refillHunger(30);
	doNext(resumeFromMenu);
}

NPCs.Grud.takeHisDick = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You take Grud's penis in either of your holes and get a filling. You also have an orgasm.");
	Time.advanceMinutes(30);
	player.orgasm();
	doNext(resumeFromMenu);
}