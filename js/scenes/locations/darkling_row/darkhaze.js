Locations.DarklingRow.Darkhaze = [];

Locations.DarklingRow.Darkhaze.enter = function() {
	clearOutput();
	outputText("As soon as you enter the small shop, the smell of the incense hits your nostrils, nearly making you dizzy. As you take your time to adjust, you make out the various interior features of the shop interior. Tables showcase hookahs of varying Noddish design. Pipes lay on the shelves in full display, all in pristine condition.<br><br>");
	if (time.hours == 14 || time.hours == 17) outputText("A customer wanders around the shop as if browsing for goods to purchase.<br><br>");
	menu();
	addButton(0, "Buy", Locations.DarklingRow.Darkhaze.shopMenu);
	addButton(14, "Leave", Locations.DarklingRow.enter);
}

Locations.DarklingRow.Darkhaze.shopMenu = function() {
	shopReturnFunc = Locations.DarklingRow.Darkhaze.shopMenu;
	clearOutput();
	outputText("What would you like to purchase?<br><br>");
	menu();
	addBuyButton(0, Items.Consumables.SmokePipe);
	addBuyButton(1, Items.Consumables.Hookah);
	addButton(14, "Back", Locations.DarklingRow.Darkhaze.enter);
}