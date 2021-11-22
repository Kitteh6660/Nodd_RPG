Locations.DarklingRow.Grud = [];

Locations.DarklingRow.Grud.approachGrud = function(noClear) {
	if (!noClear) {
		clearOutput();
		setHeader("Grud's Grub");
		outputText("You approach what appears to be a 'food' bar, if you could even call the contents food. Some worms wriggle about in one of the basins, and a pile of eggs make up the contents of another basin. You doubt any of them seem so palatable...<br><br>");
		outputText("Your vision draws towards something that seems off, it looks like a penis. You look up and... oh. You see a large, thick figure who appears to be just shy of six feet tall but very wide. A name tag proclaims his name to be Grud.");
	}
	menu();
	addButton(0, "Get Food", Locations.DarklingRow.Grud.grubMenu);
	addButton(1, "Talk", NPCs.Grud.talkMenu, true);
	addButton(2, "Service Him", NPCs.Grud.sexMenu);
	addButton(14, "Leave", Locations.DarklingRow.enter);
}

Locations.DarklingRow.Grud.grubMenu = function() {
	clearOutput();
	outputText("\"<i>Grud scoop! What will it be?</i>\" The large figure perks up.");
	menu();
	addButton(0, "Grub Bowl", Inventory.takeItem, Items.Consumables.GrubBowl, Locations.DarklingRow.Grud.approachGrud, undefined, Items.Consumables.GrubBowl.description, capitalizeFirstLetter(Items.Consumables.GrubBowl.longName)); 
	addButton(14, "Back", Locations.DarklingRow.Grud.approachGrud, true);
}