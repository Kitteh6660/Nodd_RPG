Locations.ViviriaDistrict = [];

Locations.ViviriaDistrict.enter = function() {
	player.location = "viviria_district";
	clearOutput();
	showMenus();
	setHeader("Viviria District, Street");
	outputText("You are currently standing in the streets of Viviria District. With lots and lots of bizarre life around! Placeholder text of placeholderiness.<br><br>");
	outputText("You could head south to Morphoria district, northeast to Vorn district or southeast to the Spire. To the west leads to the Gate of Discordia.");
	menu();
	genericPlayerButtons();
	addButton(0, "Darkling Row", moveToLocation, Locations.DarklingRow.enter, 60);
	addButton(9, "Visit Noddule", window.open, "https://www.cityofnodd.com/viviria-district", null, null, "Experience the Viviria District Noddule for yourself!");
	addButton(7, "Northeast", moveToLocation, Locations.VornDistrict.enter, 60);
	addButton(11, "South", moveToLocation, Locations.MorphoriaDistrict.enter, 60);
	addButton(12, "Southeast", moveToLocation, Locations.Spire.spireOutside, 60);
}