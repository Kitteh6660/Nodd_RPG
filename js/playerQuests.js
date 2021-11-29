function questsScreen() {
	clearOutput();
	outputText("This is where quest info will be tracked!<br><br>");
	if (questFlags.inductionProgress > 0) {
		questEntryInduction();
	}
	if (questFlags.druskQuestProgress > 0) {
		questEntryDruskFavour();
	}
	egoBracerMenu();
	addButtonDisabled(6, "Quests");
}

function questEntryInduction() {
	outputText("<b><u>The Induction</u></b><br>");
	outputText("I was guided through the guards at the gates and I was instructed to use the strange machine as the the unfamiliar creatures questioned me. It was humiliating to say the least, but at least I got a snazzy new 'Ego Bracer' that I can use. I was informed about the simple laws of the city, which is to say, 'Indulge' or something. Strange. But now my new adventures in the City of Nodd can begin.");
	if (questFlags.inductionProgress >= 1) {
		outputText(" <b>(COMPLETED!)</b>");
	}
	outputText("<br><br>");
}

function questEntryDruskFavour() {
	outputText("<b><u>Drusk's Favour</u></b><br>");
	outputText("The bartender of the Outside Inn, Drusk Vaurn, has asked me a favour. Sounds like a nice prospect. If I have the time, I can help him out with such errand.<br>");
	if (questFlags.druskQuestProgress == 1) {
		outputText("I should talk to Drusk in the Outside Inn to see what he needs.<br>");
	}
	else if (questFlags.druskQuestProgress == 2) {
		outputText("I should bring ten sprigs of Sagberry to Drusk in the Outside Inn. I can find the fruits in Viviria District or Doldrums.<br>");
	}
	else if (questFlags.druskQuestProgress == 3) {
		outputText("I should bring ten Hornsquats to Drusk in the Outside Inn. I can find them in the same location where I found Sagberries.<br>");
	}
	else if (questFlags.druskQuestProgress == 4) {
		outputText("I should bring ten Cinderbeans to Drusk in the Outside Inn. I can find them in the same location where I found Sagberries and Hornsquats.<br>");
	}
	if (questFlags.druskQuestProgress >= 5) {
		outputText("I have brought everything Drusk has asked from me and he is very grateful for the fruits I delivered. I can get the five free drinks! <b>(COMPLETED!)</b><br>");
		if (questFlags.druskQuestProgress < 10)
			outputText("I have " + num2Text(5 - (questFlags.druskQuestProgress - 5)) + " free drink" + ((5 - (questFlags.druskQuestProgress - 5)) == 1 ? "" : "s") + " remaining.");
		else
			outputText("I have used up all my free drinks. I will have to pay for any subsequent drinks.");
	}
	outputText("<br><br>");
}