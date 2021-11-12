function questsScreen() {
	clearOutput();
	outputText("This is where quest info will be tracked!<br><br>");
	if (questFlags.inductionProgress > 0) {
		questEntryInduction();
	}
	egoBracerMenu();
	addButtonDisabled(3, "Quests");
}

function questEntryInduction() {
	outputText("<b><u>The Induction</u></b><br>");
	outputText("I was guided through the guards at the gates and I was instructed to use the strange machine as the the unfamiliar creatures questioned me. It was humiliating to say the least, but at least I got a snazzy new 'Ego Bracer' that I can use. I was informed about the simple laws of the city, which is to say, 'Indulge' or something. Strange. But now my new adventures in the City of Nodd can begin.");
	if (questFlags.inductionProgress >= 1) {
		outputText(" <b>(COMPLETED!)</b>");
	}
	outputText("<br><br>");
}