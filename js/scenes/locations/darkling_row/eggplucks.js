Locations.DarklingRow.Eggpluck = [];

Locations.DarklingRow.Eggpluck.visitEggpluck = function() {
	clearOutput();
	setHeader("Eggpluck's Discount Familiars");
	outputText("You enter Eggpluck's Discount Familiars. This content will be filled out.");
	menu();
	addButton(14, "Leave", Locations.DarklingRow.enter);
}