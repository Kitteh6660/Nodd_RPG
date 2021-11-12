Locations.Spire = [];

Locations.Spire.spireOutside = function() {
	player.location = "spire_outside";
	clearOutput();
	showMenus();
	setHeader("The Spire, Outside");
	outputText("You are currently standing outside a massive tower in the heart of the City of Nodd known as the Spire, where the Council lurk.<br><br>");
	outputText("There will be establishments and shops at the Spire District. The buildings are still under construction.<br><br>");
	outputText("You could head to any district from the middle of the City.");
	menu();
	genericPlayerButtons();
	addButton(0, "Spire Entrance", moveToLocation, Locations.Spire.spireEntrance, 15);
	addButton(5, "Viviria", moveToLocation, Locations.ViviriaDistrict.enter, 60);
	addButton(6, "Vorn", moveToLocation, Locations.VornDistrict.enter, 60);
	addButton(7, "Omnillian", moveToLocation, Locations.OmnillianDistrict.enter, 60);
	addButton(10, "Morphoria", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	addButton(11, "Psilysium", moveToLocation, Locations.PsilysiumDistrict.enter, 60);
	addButton(12, "Umbrasia", moveToLocation, Locations.UmbrasiaDistrict.enter, 60);
}

Locations.Spire.spireEntrance = function() {
	player.location = "spire_entrance";
	clearOutput();
	showMenus();
	setHeader("The Spire, Entrance");
	outputText("You are currently standing outside a MASSIVE pair of doors that lead to the inside of the Spire.<br><br>");
	outputText("A pair of guards stand imposing and as you approach, one of them says, \"<i>Sorry, outsider. The Spire is currently closed as the interior is under construction.</i>\"");
	menu();
	addButton(14, "Leave", moveToLocation, Locations.Spire.spireOutside, 15);
}