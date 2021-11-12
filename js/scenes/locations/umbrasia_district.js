Locations.UmbrasiaDistrict = [];

Locations.UmbrasiaDistrict.enter = function() {
	player.location = "umbrasia_district";
	clearOutput();
	showMenus();
	setHeader("Umbrasia District, Street");
	outputText("You are currently standing in the streets of Umbrasia District. Everything seems to be gloomy and reminds you of death! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head north to Omnillian district or west to Psilysium district. To the east leads to the Styx Canal although a barrier is erected indicating the area is under construction.");
	menu();
	genericPlayerButtons();
	addButton(0, "B. D. Couture", moveToLocation, Locations.UmbrasiaDistrict.BlackDitchCouture.enter, 2, null, "Visit the shop that sells all sorts of vulturewear. The shop location isn't final and may be moved.", "Black Ditch Couture");
	addButton(5, "Northwest", moveToLocation, Locations.Spire.spireOutside, 60);
	addButton(6, "North", moveToLocation, Locations.OmnillianDistrict.enter, 60);
	addButton(10, "Southwest", moveToLocation, Locations.PsilysiumDistrict.enter, 60);
}