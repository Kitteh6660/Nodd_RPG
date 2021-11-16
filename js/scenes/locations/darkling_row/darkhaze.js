Locations.DarklingRow.Darkhaze = [];

Locations.DarklingRow.Darkhaze.enter = function() {
	clearOutput();
	outputText("(Placeholder) The shop contains all sorts of pipes and hookahs.");
	menu();
	addButton(14, "Leave", Locations.DarklingRow.enter);
}