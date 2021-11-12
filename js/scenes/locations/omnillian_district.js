Locations.OmnillianDistrict = [];

Locations.OmnillianDistrict.enter = function() {
	player.location = "omnillian_district";
	clearOutput();
	showMenus();
	setHeader("Omnillian District, Street");
	outputText("You are currently standing in the streets of Omnillian District. Everything seems to be cleaner and more technologically advanced! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head northwest to Vorn district, south to Umbrasia district or southwest to the Spire. To the north leads to the Styx Canal although a barrier is erected indicating the area is under construction.");
	menu();
	genericPlayerButtons();
	addButton(5, "Northwest", moveToLocation, Locations.VornDistrict.enter, 60);
	addButton(10, "Southwest", moveToLocation, Locations.Spire.spireOutside, 60);
	addButton(11, "South", moveToLocation, Locations.UmbrasiaDistrict.enter, 60);
}