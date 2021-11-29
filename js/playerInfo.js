function enterEgoBracerMenu() {
	clearOutput();
	setHeader("Your Ego Bracer");
	outputText("You bring your Ego Bracer up to your eye level and concentrate on the bracer.<br><br>A screen comes up within your vision, allowing you to access your information, track your quests, and access the codex.");
	egoBracerMenu();
}

function egoBracerMenu() {
	menu();
	addButton(0, "Appearance", appearanceScreen);
	addButton(1, "Stats", statsScreen);
	addButton(2, "Perks", perksScreen);
	addButton(3, "Spellbook", spellsScreen);
	addButton(5, "Codex", Codex.menu);
	addButton(6, "Quests", questsScreen);
	addButton(7, "Inventory", Inventory.inventoryMenu);
	addButtonDisabled(8, "Menagerie", "Coming soon... maybe.");
	if (player.XP >= player.getXPNeeded() && player.level < levelCap) {
		addButton(10, "Level Up", levelScreen);
	}
	else {
		addButtonDisabled(10, "Level Up", player.level < levelCap ? "You currently don't have enough experience points to level up." : "You are at the current maximum level as of this build.");
	}
    if (player.perkPoints > 0) {
        /*outputText("<br><b>You have " + num2Text(player.perkPoints) + " perk point");
        if (player.perkPoints > 1) outputText("s");
        outputText(" to spend.</b>");*/
        addButton(11, "Perk Up", perkBuyMenu);
    }
	addButton(14, "Back", resumeFromMenu);
}

//------------
// LEVEL UP
//------------
function levelScreen() {
	clearOutput();
	//Increment
	player.XP -= (player.getXPNeeded());
	player.level++;
	player.statPoints = 3;
	if (player.level % 2 == 0) {
		player.perkPoints += 1;
	}
    outputText("<b>You are now level " + num2Text(player.level) + "!</b><br><br>You have gained three attribute points" + (player.level % 2 == 0 ? "" : " and one perk point") + "!");
	doNext(attributeMenu);
}
function attributeMenu() {
	clearOutput();
	outputText("You have " + player.statPoints + " points to spend.<br><br>");
	outputText("<b></b>Strength:</b> " + player.str + " + <b>" + tempStr + "</b> → " + (player.str + tempStr) + "<br>");
	outputText("<b>Dexterity:</b> " + player.dex + " + <b>" + tempDex + "</b> → " + (player.dex + tempDex) + "<br>");
	outputText("<b>Endurance:</b> " + player.end + " + <b>" + tempEnd + "</b> → " + (player.end + tempEnd) + "<br>");
	outputText("<b>Intelligence:</b> " + player.inte + " + <b>" + tempInt + "</b> → " + (player.inte + tempInt) + "<br>");
	outputText("<b>Willpower:</b> " + player.wil + " + <b>" + tempWil + "</b> → " + (player.wil + tempWil) + "<br>");
	outputText("<b>Charisma:</b> " + player.cha + " + <b>" + tempCha + "</b> → " + (player.cha + tempCha) + "<br>");
	menu();
	//Add attributes
	if (player.statPoints > 0) {
		if (player.str < 30 && tempStr < 1) addButton(0, "STR +", addAttribute, "str");
		if (player.dex < 30 && tempDex < 1) addButton(5, "DEX +", addAttribute, "dex");
		if (player.end < 30 && tempEnd < 1) addButton(10, "END +", addAttribute, "end");
		if (player.inte< 30 && tempInt < 1) addButton(2, "INT +", addAttribute, "int");
		if (player.wil < 30 && tempWil < 1) addButton(7, "WIL +", addAttribute, "wil");
		if (player.cha < 30 && tempCha < 1) addButton(12, "CHA +", addAttribute, "cha");
	}
	//Subtract attributes
	if (tempStr > 0) addButton(1, "STR -", subtractAttribute, "str");
	if (tempDex > 0) addButton(6, "DEX -", subtractAttribute, "dex");
	if (tempEnd > 0) addButton(11, "END -", subtractAttribute, "end");
	if (tempInt > 0) addButton(3, "INT -", subtractAttribute, "int");
	if (tempWil > 0) addButton(8, "WIL -", subtractAttribute, "wil");
	if (tempCha > 0) addButton(13, "CHA -", subtractAttribute, "cha");
	//Reset & Done
	addButton(9, "Reset", resetAttributes);
	if (player.statPoints <= 0) addButton(14, "Done", finishAttributes);
	else addButtonDisabled(14, "Done", "You must assign your attribute points.");
}
function addAttribute(attribute) {
	switch(attribute) {
		case "str":
			tempStr++;
			break;
		case "dex":
			tempDex++;
			break;
		case "end":
			tempEnd++;
			break;
		case "int":
			tempInt++;
			break;
		case "wil":
			tempWil++;
			break;
		case "cha":
			tempCha++;
			break;
		default:
            player.statPoints++; //Failsafe
	}
	player.statPoints--;
	attributeMenu();
}
function subtractAttribute(attribute) {
	switch(attribute) {
		case "str":
			tempStr--;
			break;
		case "dex":
			tempDex--;
			break;
		case "end":
			tempEnd--;
			break;
		case "int":
			tempInt--;
			break;
		case "wil":
			tempWil--;
			break;
		case "cha":
			tempCha--;
			break;
		default:
            player.statPoints--; //Failsafe
	}
	player.statPoints++;
	attributeMenu();
}
function resetAttributes() {
	//Increment unspent attribute points.
	player.statPoints += tempStr;
	player.statPoints += tempDex;
	player.statPoints += tempEnd;
	player.statPoints += tempInt;
	player.statPoints += tempWil;
	player.statPoints += tempCha;
	//Reset temporary attributes to 0.
	tempStr = 0;
	tempDex = 0;
	tempEnd = 0;
	tempInt = 0;
	tempWil = 0;
	tempCha = 0;
	//DONE!
	attributeMenu();
}
function finishAttributes() {
	clearOutput();
	if (tempStr > 0) {
		outputText("Your muscles feel slightly stronger from your time adventuring.<br>");
	}
	if (tempDex > 0) {
		outputText("Your time in combat has driven you to be slightly more agile.<br>");
	}
	if (tempEnd > 0) {
		outputText("You feel slightly tougher from all the fights you have endured.<br>");
	}
	if (tempInt > 0) {
		outputText("Your time spent fighting the creatures of this realm has sharpened your wit slightly.<br>");
	}
	if (tempWil > 0) {
		outputText("Your time spent fighting the creatures of this realm has improved your overall mental willpower.<br>");
	}
	if (tempCha > 0) {
		outputText("Your time learning from the creatures have improved your charisma slightly.<br>");
	}
	player.modStats("str", tempStr);
	player.modStats("dex", tempDex);
	player.modStats("end", tempEnd);
	player.modStats("int", tempInt);
	player.modStats("wil", tempWil);
	player.modStats("cha", tempCha);
	tempStr = 0;
	tempDex = 0;
	tempEnd = 0;
	tempInt = 0;
	tempWil = 0;
	tempCha = 0;
	if (player.perkPoints > 0) doNext(perkBuyMenu);
	else doNext(playerMenu);
}
function perkBuyMenu() {
    clearOutput();
    var perksAvailable = PerkMenuBuilder.buildPerkList();
    menu();
    if (perksAvailable.length > 0) {
        outputText("Please select a perk from the drop-down list, then click 'Okay'. You can press 'Skip' to save your perk point for later.<br>");
        var perkDropdownString = ""; //Will be used to be output for dropdown.
        perkDropdownString += "<select id=\"perkselect\">";
        perkDropdownString += "<option value=\"null\"></option>";
        for (var i = 0; i < perksAvailable.length; i++) {
            perkDropdownString += "<option value=\"" + perksAvailable[i].id + "\">" + perksAvailable[i].name + "</option>";
        }
        perkDropdownString += "</select><br><br>";
        outputText(perkDropdownString);
        addButton(0, "Confirm", perkConfirmation);
        addButton(1, "Skip", playerMenu);
    }
    else {
        outputText("You do not currently qualify for any perks. You still retain your perk points.");
        doNext(playerMenu);
    }
}
function perkConfirmation() {
    if (document.getElementById("perkselect").value == "null") {
        perkBuyMenu();
        return;
    }
    var perkGet = PerkLib[document.getElementById("perkselect").value];
    clearOutput();
    outputText("<b>" + perkGet.name + "</b> gained!");
    player.createPerk(perkGet, 0, 0, 0, 0);
    player.perkPoints--;
    doNext(playerMenu);
}

//------------
// STATS
//------------
function statsScreen() {
	clearOutput();
	//Personal Needs
	var needsStats = "";
	needsStats += "<b>Energy:</b> " + Math.floor(player.energy) + " / " + player.maxEnergy() + " " + getEnergyText() + "<br>";
	needsStats += "<b>Satiety:</b> " + Math.floor(player.hunger) + " / " + player.maxHunger() + " " + getHungerText() + "<br>";
	needsStats += "<b>Hydration:</b> " + Math.floor(player.thirst) + " / " + player.maxThirst() + " " + getThirstText() + "<br>";
	needsStats += "<b>Bladder:</b> " + Math.floor(player.bladder) + " / " + player.maxBladder() + " " + getBladderText() + "<br>";
	if (scatEnabled) needsStats += "<b>Bowels:</b> " + Math.floor(player.bowels) + " / " + player.maxBowels() + " " + getBowelText() + "<br>";
	needsStats += "<br>";
	if (needsStats != "")
        outputText("<b><u>Personal Needs</u></b><br>" + needsStats, false);
	//Combat Stats
	var combatStats = "";

    if (player.teaseLevel < 5) combatStats += "<b>Tease Skill Level:</b> " + player.teaseLevel + " (Exp: " + player.teaseXP + " / " + (10 + (player.teaseLevel + 1) * 5 * (player.teaseLevel + 1)) +  ")<br>";
    else combatStats += "<b>Tease Skill Level:</b> " + player.teaseLevel + " (Exp: MAX)<br>";
	if (combatStats.length > 0)
		outputText("<b><u>Combat Stats</u></b><br>" + combatStats + "<br><br>");
	//Body Stats
	var bodyStats = "";
	bodyStats += "<b>Anal Capacity:</b> " + player.analCapacity() + "<br>";
	bodyStats += "<b>Anal Looseness:</b> " + player.ass.analLooseness + "<br>";
	if (player.hasCock()) {
		bodyStats += "<b>Cum Production:</b> " + player.cumQ() + "mL<br>";
	}
	if (player.hasVagina()) {
		bodyStats += "<b>Vaginal Capacity:</b> " + player.vaginalCapacity() + "<br>";
		bodyStats += "<b>Vaginal Looseness:</b> " + player.vaginas[0].vaginalLooseness + "<br>";
	}
	if (bodyStats.length > 0)
		outputText("<b><u>Body Stats</u></b><br>" + bodyStats + "<br><br>");
    
	//Interpersonal Stats
	var interpersonStats = "";
	if (npcFlags.outsideInnDruskRelationship > 0);
		interpersonStats += "<b>Drusk Vaurn Friendship:</b> " + npcFlags.outsideInnDruskRelationship + " points";
	if (interpersonStats.length > 0)
		outputText("<b><u>Interpersonal Stats</u></b><br>" + interpersonStats + "<br><br>");
    // Addiction Stats
    var addictStats = "";
		//Nothing here, but would like to add some addictions to some Orolisk slime.

    if (addictStats != "")
        outputText("<br><b><u>Addictions</u></b><br>" + addictStats, false);
    // End Addiction Stats
	egoBracerMenu();
	addButtonDisabled(1, "Stats");
}

function getEnergyText() {
	if (player.energy <= 0) {
		return "(Exhausted)";
	}
	else if (player.energy < 10) {
		return "(Very tired)";
	}
	else if (player.energy < 20) {
		return "(Tired)";
	}
	else if (player.energy < 40) {
		return "(Slighty tired)";
	}
	else if (player.energy < 60) {
		return "(Not tired)";
	}
	else if (player.energy < 80) {
		return "(Energetic)";
	}
	else {
		return "(Full of energy)";
	}
}
function getHungerText() {
	if (player.hunger <= 0) {
		return "(Dying)";
	}
	else if (player.hunger < 10) {
		return "(Starving)";
	}
	else if (player.hunger < 20) {
		return "(Very hungry)";
	}
	else if (player.hunger < 40) {
		return "(Hungry)";
	}
	else if (player.hunger < 60) {
		return "(A bit hungry)";
	}
	else if (player.hunger < 80) {
		return "(Not hungry)";
	}
	else {
		return "(Full)";
	}
}
function getThirstText() {
	if (player.hunger <= 0) {
		return "(Dying)";
	}
	else if (player.energy < 10) {
		return "(Dehydrated)";
	}
	else if (player.energy < 20) {
		return "(Very thirsty)";
	}
	else if (player.energy < 40) {
		return "(Thirsty)";
	}
	else if (player.energy < 60) {
		return "(A bit thirsty)";
	}
	else if (player.energy < 80) {
		return "(Hydrated)";
	}
	else {
		return "(Very hydrated)";
	}
}
function getBladderText() {
	if (player.bladder >= 95) {
		return "(Potty failure imminent)";
	}
	else if (player.bladder >= 85) {
		return "(Really need to pee)";
	}
	else if (player.bladder >= 70) {
		return "(Need to pee)";
	}
	else if (player.bladder >= 50) {
		return "(A bit needy)";
	}
	else if (player.bladder >= 25) {
		return "(Don't need to pee)";
	}
	else {
		return "(Relieved)";
	}
}
function getBowelText() {
	if (player.bowels >= 95) {
		return "(Potty failure imminent)";
	}
	else if (player.bowels >= 85) {
		return "(Really need to poop)";
	}
	else if (player.bowels >= 70) {
		return "(Need to poop)";
	}
	else if (player.bowels >= 50) {
		return "(A bit needy)";
	}
	else if (player.bowels >= 25) {
		return "(Don't need to poop)";
	}
	else {
		return "(Relieved)";
	}
}

//------------
// PERKS
//------------
function perksScreen() {
	clearOutput();
	for (var i = 0; i < player.perks.length; i++) {
		outputText("<b>" + player.perks[i].ptype.name + "</b> - " + player.perks[i].ptype.desc + "<br>");
	}
	egoBracerMenu();
    addButtonDisabled(2, "Perks");
}


function spellsScreen() {
	clearOutput();
	if (player.spells.length <= 0) {
		outputText("You currently don't know any spells...");
	}
	else {
		for (var i = 0; i < player.spells.length; i++) {
			var spell = lookupSpell(player.spells[i]);
			outputText("<b>" + spell.name + ":</b> " + spell.cost + " MP - " + spell.description + "<br>");
		}
	}
	egoBracerMenu();
	addButtonDisabled(3, "Spellbook");
}