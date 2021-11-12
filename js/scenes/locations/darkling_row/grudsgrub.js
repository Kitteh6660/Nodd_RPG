Locations.DarklingRow.Grud = [];

Locations.DarklingRow.Grud.approachGrud = function() {
	clearOutput();
	setHeader("Grud's Grub");
	outputText("You approach what appears to be a 'food' bar, if you could even call the contents food. Some worms wriggle about in one of the basins, and a pile of eggs make up the contents of another basin. You doubt any of them seem so palatable...<br><br>");
	outputText("Your vision draws towards something that seems off, it looks like a penis. You look up and... oh. You see a large, thick figure. A name tag proclaims his name to be Grud.");
	menu();
	addButton(0, "Get Food", Locations.DarklingRow.Grud.grubMenu);
	addButtonDisabled(1, "Talk", "Not yet added.");
	addButton(14, "Leave", Locations.DarklingRow.enter);
}

Locations.DarklingRow.Grud.grubMenu = function() {
	clearOutput();
	outputText("All on the house for now.");
	menu();
	addButton(0, "Tenderling", Inventory.takeItem, Items.Consumables.Tenderling, Locations.DarklingRow.Grud.approachGrud, undefined, Items.Consumables.Tenderling.description, capitalizeFirstLetter(Items.Consumables.Tenderling.longName)); 
	addButton(1, "Skewered Sloach", Inventory.takeItem, Items.Consumables.SkeweredSloach, Locations.DarklingRow.Grud.approachGrud, undefined, Items.Consumables.SkeweredSloach.description, capitalizeFirstLetter(Items.Consumables.SkeweredSloach.longName));
	addButton(14, "Back", Locations.DarklingRow.Grud.approachGrud);
}