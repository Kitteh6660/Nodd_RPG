Locations.PsilysiumDistrict = [];

Locations.PsilysiumDistrict.enter = function() {
	player.location = "psilysium_district";
	clearOutput();
	showMenus();
	setHeader("Psilysium District, Street");
	outputText("You are currently standing in the streets of Psilysium District. Everything seems to be purple and the smell is kinda intoxicating, you could swear the district is messing with your mind, somehow! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head west to Morphoria district,  east to Umbrasia district or north to the Spire. To the south leads to the Styx Canal although a barrier is erected indicating the area is under construction.");
	menu();
	genericPlayerButtons();
	addButton(6, "North", moveToLocation, Locations.Spire.spireOutside, 60);
	addButton(10, "West", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	addButton(12, "East", moveToLocation, Locations.UmbrasiaDistrict.enter, 60);
}