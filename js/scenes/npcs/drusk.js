NPCs.DruskVaurn = [];

const druskDialogueColour = "#C070A0";

NPCs.DruskVaurn.affection = function(amt) {
	if (amt != undefined) npcFlags.outsideInnDruskRelationship += amt;
	if (npcFlags.outsideInnDruskRelationship < 0) npcFlags.outsideInnDruskRelationship = 0;
	if (npcFlags.outsideInnDruskRelationship > 100) npcFlags.outsideInnDruskRelationship = 100;	
	return npcFlags.outsideInnDruskRelationship;
}

NPCs.DruskVaurn.approach = function(clearText) {
	setHeader(npcFlags.outsideInnDruskLearntAboutDruskName ? "Drusk Vaurn" : "Bartender");
	if (clearText) {
		clearOutput();
		outputPic("Drusk");
		if (npcFlags.outsideInnDruskMet) {
			outputText("You look up at the bartender" + (npcFlags.outsideInnDruskLearntAboutDruskName ? ", Drusk," : "") + " who is just doing his usual duties of cleaning the counter and serving beverages to the customers.");
		}
		else {
			outputText("Now that you're seated, you get a good look at the bartender. He looks to be tall, muscular, and naked. His snout resembles a cross between a bull and a hippo. His ears are quite long, his right ear pierced with a golden earring. The only things that even adorn him are a pair of metal bracelets around his wrists. A pair of red eyes stare into your " + player.eyeColor + " eyes.<br><br>");
			outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Somethin' ya wanna ask?</i>\"</i> The gruff-looking male prompts.");
			npcFlags.outsideInnDruskMet = true;
		}
	}
	menu();
	addButton(0, "Talk", NPCs.DruskVaurn.talkMenu, true); hint(0, "Strike up conversation with Drusk. You could learn more about the City of Nodd from him, perhaps.");
	if (npcFlags.outsideInnDruskRelationship >= 10) {
		addButton(1, "Sex", NPCs.DruskVaurn.sexMenu); hint(1, "See if Drusk is up to 'serve' you.");
	}
	else addButtonDisabled(1, "Sex", "Maybe try getting to know the bartender more? Try talking to him and ordering drinks.");
	addButton(4, "Back", Locations.OutsideInn.approachBar);
}

// Talk Scenes
NPCs.DruskVaurn.talkMenu = function(clearText) {
	if (clearText) {
		clearOutput();
		outputText("What would you like to talk about?");
	}
	menu();
	addButton(0, "Outside Inn", NPCs.DruskVaurn.talkAboutOutsideInn); hint(0, "What is the Outside Inn, really?");
	if (!npcFlags.outsideInnDruskLearntAboutDruskName) {
		addButton(1, "Bartender", NPCs.DruskVaurn.talkAboutDrusk); hint(1, "Who exactly is the bartender serving the drinks around here?");
	}
	else addButtonDisabled(1, "Drusk Vaurn", "You already learnt of his name and gave him your name.");
	addButton(2, "Drinks", NPCs.DruskVaurn.talkAboutDrinks); hint(2, "Ask about the beverages that are being served here.");
	if (player.hasKeyItem(KeyItems.OutsideInnRoomKey) < 0) {
		addButton(3, "Rent a Room", NPCs.DruskVaurn.talkAboutRoom); hint(3, "Ask if you can get a room to stay for the night.");
	}
	else addButtonDisabled(3, "Rent a Room", "You already have the key to the room in your Ego Bracer.");
	if (npcFlags.outsideInnDruskLearntAboutInduction >= 1) {
		addButton(4, "Induction", NPCs.DruskVaurn.talkAboutInduction); hint(4, "What is the Induction, really?");
	}
	else addButtonDisabled(4, "Induction", "Perhaps try talking about another subject first?");
	addButton(5, "Chosen One", NPCs.DruskVaurn.talkAboutChosenOne); hint(5, "Who or what are the Chosen Ones?");
	addButton(6, "Guards", NPCs.DruskVaurn.talkAboutGuards); hint(6, "Who are the guards that you encountered outside the walls and just before the gate to the Nodd.");
	addButton(14, "Back", NPCs.DruskVaurn.approach);
}

NPCs.DruskVaurn.talkAboutOutsideInn = function() {
	clearOutput();
	outputText("You ask what is the story behind this establishment.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>This establishment? Actually fairly new, been 'round for a few turns actually. I'm sure you get why it's called that. Always 'been the first place to stay where the Chosen Ones visit after the Induction.</i>\"</font> Drusk explains and chuckles.<br><br>");
	outputText("");
	if (npcFlags.outsideInnDruskLearntAboutInduction < 1) {
		npcFlags.outsideInnDruskLearntAboutInduction = 1;
		NPCs.DruskVaurn.affection(2);
	}
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(0, "The Outside Inn", "You just already had this discussion.");
}

NPCs.DruskVaurn.talkAboutDrusk = function() {
	clearOutput();
	setHeader("Drusk Vaurn");
	outputText("You inquire who or what the bartender is, really.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Me? Established this fine place. Servin' fine drinks for couples of turns. " + Num2Text(3 + Math.floor(time.days / 360)) + ", actually. Name is Drusk Vaurn. My species? Truth be told, I do not know the exact species, but I suppose... chimera... or hybrid? You, outsider?</i>\"</font><br><br>");
	outputText("\"<i>" + player.name + ".</i>\" You answer.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Will be calling you that from now on. Thank you, " + player.name + ".</i>\"</font> Drusk says, smiling sheepishly.<br><br>");
	npcFlags.outsideInnDruskGivenYourName = true;
	npcFlags.outsideInnDruskLearntAboutDruskName = true;
	NPCs.DruskVaurn.affection(2);
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(1, "Drusk Vaurn", "You just already had this discussion.");
}

NPCs.DruskVaurn.talkAboutDrinks = function() {
	clearOutput();
	outputText("You ask about the drinks offered in this bar.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>We have nectars, cocktails, blackwine, and the Nightmare Fuel. If you're new to Nodd, I suggest you try the nectars first. Nightmare Fuel is what it's all about, heh.</i>\"</font><br><br>");
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(2, "Drinks", "You just already had this discussion.");
}

NPCs.DruskVaurn.talkAboutRoom = function() {
	clearOutput();
	outputText("You inquire if there are rooms you can stay for the night.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>I have a couple of rooms available you would like to rent. Your first night is free. Afterwards, it's 5 gloam per night. What do you say?</i>\"</font> Drusk asks, his red eyes stares deeply into your eyes as if awaiting an answer.<br><br>");
	outputText("<b>Would you like to rent the room?</b>");
	doYesNo(NPCs.DruskVaurn.talkAboutRoomYes, NPCs.DruskVaurn.talkAboutRoomNo);
}

NPCs.DruskVaurn.talkAboutRoomYes = function() {
	clearOutput();
	outputText("\"<i>I'll take the room, please.</i>\" You answer.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Excellent. Y'er room number is six. Your key is on your wrist thing that we call 'Ego Bracer' and ya raise your ego bracer against the door. Should unlock for ye.</i>\"</font> Drusk explains with a gruff tone and he nods in acknowledgement.<br><br>");
	outputText("<b>Gained Key Item: Outside Inn Room Key</b> - You can now access Room 6 upstairs.");
	player.createKeyItem(KeyItems.OutsideInnRoomKey, 0, 0, 0, 0);
	doNext(NPCs.DruskVaurn.talkMenu);
}
NPCs.DruskVaurn.talkAboutRoomNo = function() {
	clearOutput();
	outputText("You politely decline the offer.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Suit yourself. Do let me know if 'ya change yer mind.</i>\"</font> Drusk bellows lowly as he acknowledges your decision.");
	doNext(NPCs.DruskVaurn.talkMenu);
}

NPCs.DruskVaurn.talkAboutInduction = function() {
	clearOutput();
	outputText("You heard about the Induction. What is it, really?<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Ah, that is the process where the Outsiders go through and they tell about their details and the Council learn of the Outsiders. You know that thing? The thing that puts all those implements into you and probe you.</i>\"</font> Drusk lectures.<br><br>");
	outputText("Oh, that machine. The unusual 'exam table' that you've seen.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Outsiders say it's unpleasant. Yer a brave one for that.</i>\"</font> The burly-looking, red-eyed bartender remarks.<br><br>");
	outputText("You sheepishly smile at the positive comments.");
	if (npcFlags.outsideInnDruskLearntAboutInduction < 2) {
		npcFlags.outsideInnDruskLearntAboutInduction = 2;
		NPCs.DruskVaurn.affection(2);
	}
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(4, "Induction", "You just already had this discussion.");
}

NPCs.DruskVaurn.talkAboutChosenOne = function() {
	clearOutput();
	outputText("Did he recently call you the Chosen One? Really? What are the Chosen Ones, really?<br><br>");
	outputText("Drusk snickers and speaks, <font color=\"" + druskDialogueColour + "\">\"<i>Somethin' the Council's been calling you. Why they're chosen, I don't know. All I know is that they are outsiders, heh.</i>\"</font><br><br>");
	outputText("A short, yellow-eyed, rat-like patron seated next to you chimes in, \"<i>Means yer funny and strange,</i>\" he says with a stern and reaffirming nod, \"<i>And that's <b>all</b> it really means.</i>\" Next, he turns his attention back to his beverage.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>At least you're a nice sight for my sore eyes, I suppose.</i>\"</font> The bartender reassures and lets out a shrug.");
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(5, "Chosen One", "You just already had this discussion.");
}

NPCs.DruskVaurn.talkAboutGuards = function() {
	clearOutput();
	outputText("You ask what the figures were. The figures that stood in front of the gates like a pair of statues.<br><br>");
	outputText("Drusk looks at you sternly and explains, <font color=\"" + druskDialogueColour + "\">\"<i>Those are the Council Pawns. Wouldn't mess with 'em if I were you. They enforce the City laws and the wills of the Council. Most of them are Petrids. Not always, but most of them.</i>\"</font><br><br>");
	Codex.unlockCodexEntry("Petrids", codexFlags.unlockedPetrid);
	NPCs.DruskVaurn.talkMenu();
	addButtonDisabled(6, "Guards", "You just already had this discussion.");
}

// Sex Scenes
NPCs.DruskVaurn.sexMenu = function() {
	clearOutput();
	outputText("Drusk smiles at the prospect.<br><br>");
	outputText("<font color=\"" + druskDialogueColour + "\">\"<i>Follow me into the kitchen when 'ya ready for your special serving.</i>\"</font>");
	menu();
	addButton(0, "Suck Him Off", NPCs.DruskVaurn.suckDruskOff);
	addButton(1, "Drink Piss", NPCs.DruskVaurn.drinkDruskPiss);
	addButton(2, "Take His Dick", NPCs.DruskVaurn.takeHisDick);
	addButton(3, "Use Him Anally", NPCs.DruskVaurn.tapDatAss);
	addButton(14, "Back", Locations.DarklingRow.Grud.approachGrud, true);
}

NPCs.DruskVaurn.suckDruskOff = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You suck Drusk's penis off and get a filling.");
	NPCs.DruskVaurn.affection(2);
	Time.advanceMinutes(15);
	player.refillHunger(30);
	doNext(resumeFromMenu);
}

NPCs.DruskVaurn.drinkDruskPiss = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You'd get to drink Drusk's piss. Thirsty!");
	NPCs.DruskVaurn.affection(2);
	Time.advanceMinutes(5);
	player.refillThirst(25);
	doNext(resumeFromMenu);
}

NPCs.DruskVaurn.takeHisDick = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You get a good dicking from Drusk.");
	NPCs.DruskVaurn.affection(2);
	Time.advanceMinutes(30);
	player.orgasm();
	doNext(resumeFromMenu);
}

NPCs.DruskVaurn.tapDatAss = function() {
	clearOutput();
	outputText("PLACEHOLDER sex scene: You'd get to use your dick to fill Drusk anally.");
	NPCs.DruskVaurn.affection(2);
	Time.advanceMinutes(30);
	player.orgasm();
	doNext(resumeFromMenu);
}

