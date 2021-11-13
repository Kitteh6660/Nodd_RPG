Locations.DarklingRow.DarkHaze = [];

Locations.Darkling.DarkHaze.enter = function() {
	clearOutput();
	outputText("(Placeholder) The shop contains all sorts of pipes and hookahs.");
	menu();
	addButton(14, "Leave", Locations.DarklingRow.enter);
}