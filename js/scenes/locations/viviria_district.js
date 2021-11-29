Locations.ViviriaDistrict = [];

Locations.ViviriaDistrict.enter = function() {
	player.location = "viviria_district";
	clearOutput();
	showMenus();
	setHeader("Viviria District, Street");
	outputText("You are currently standing in the streets of Viviria District. With lots and lots of bizarre life around! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head south to Morphoria district, northeast to Vorn district or southeast to the Spire. To the west leads to the Gate of Discordia.");
	menu();
	genericPlayerButtons();
	addButton(0, "Darkling Row", moveToLocation, Locations.DarklingRow.enter, 60);
	if (questFlags.druskQuestProgress > 1) addButton(1, "Search", Locations.ViviriaDistrict.searchViviriaDistrict);
	addButton(9, "Visit Noddule", window.open, "https://www.cityofnodd.com/viviria-district", null, null, "Experience the Viviria District Noddule for yourself!");
	addButton(7, "Northeast", moveToLocation, Locations.VornDistrict.enter, 60);
	addButton(11, "South", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	addButton(12, "Southeast", moveToLocation, Locations.Spire.spireOutside, 60);
}

Locations.ViviriaDistrict.searchViviriaDistrict = function() {
	clearOutput();
	if (player.energy < 5) {
		outputText("You are too exhausted to search. Find a bed to sleep in to replenish your energy.");
		doNext(resumeFromMenu);
		return;
	}
	outputText("(Placeholder) You spend a good while searching for some fruits. ");
	var chooser = rand(20);
	// Adjust probability weight while on quest, fruits have extra chance
	if (questFlags.druskQuestProgress == 2) { //Requested to find Sagberries.
		if (chooser >= 5) chooser--;
		if (chooser >= 6) chooser--;
	}
	if (questFlags.druskQuestProgress == 3) { //Requested to find Hornsquats.
		if (chooser < 5) chooser++;
		if (chooser >= 10) chooser--;
	}
	if (questFlags.druskQuestProgress == 4) { //Requested to find Cinderbeans.
		if (chooser < 10) chooser++;
		if (chooser >= 15) chooser--;
	}
	// Now roll for fruits!
	if (chooser < 5) {
		Inventory.takeItem(Items.Consumables.Sagberry, resumeFromMenu);
	}
	else if (chooser < 10) {
		Inventory.takeItem(Items.Consumables.Hornsquat, resumeFromMenu);
	}
	else if (chooser < 15) {
		Inventory.takeItem(Items.Consumables.Cinderbean, resumeFromMenu);
	}
	else {
		outputText("Unfortunately, you didn't find any. Keep looking!");
	}
	Time.advanceMinutes(30);
	doNext(resumeFromMenu);
}