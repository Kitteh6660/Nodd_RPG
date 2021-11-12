Locations.MorphoriaDistrict = [];

Locations.MorphoriaDistrict.enter = function() {
	player.location = "morphoria_district";
	clearOutput();
	showMenus();
	setHeader("Morphoria District, Street");
	outputText("You are currently standing in the streets of Morphoria District. You think the district seems to be constantly changing, somehow! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head north to Viviria district, south-east to Psilysium district or north-east to the Spire. To the south leads to the Styx Canal although a barrier is erected indicating the area is under construction.");
	menu();
	genericPlayerButtons();
	addButton(0, "Darkling Row", moveToLocation, Locations.DarklingRow.enter, 60);
	addButton(6, "North", moveToLocation, Locations.ViviriaDistrict.enter, 60);
	addButton(7, "Northeast", moveToLocation, Locations.Spire.spireOutside, 60);
	addButton(12, "Southeast", moveToLocation, Locations.PsilysiumDistrict.enter, 60);
}