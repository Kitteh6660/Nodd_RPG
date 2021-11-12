Locations.VornDistrict = [];

Locations.VornDistrict.enter = function() {
	player.location = "vorn_district";
	clearOutput();
	showMenus();
	setHeader("Vorn District, Street");
	outputText("You are currently standing in the streets of Vorn District. Everything seems to be red! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head west to Viviria district, east to Omnillian district or south to the Spire. To the north leads to the Styx Canal although a barrier is erected indicating the area is under construction.");
	menu();
	genericPlayerButtons();
	addButton(10, "West", moveToLocation, Locations.ViviriaDistrict.enter, 60);
	addButton(11, "South", moveToLocation, Locations.Spire.spireOutside, 60);
	addButton(12, "East", moveToLocation, Locations.OmnillianDistrict.enter, 60);
}