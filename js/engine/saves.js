// This code handles saving and loading of games.

Data = [];
Data.totalSlots = 14;

//Main Data Menu
function dataScreen() {
	clearOutput();
	hideRow(2);
	hideRow(3);
	outputText("Here, you can save or load data.");
	menu();
	if (gameStarted) addButton(0, "Save", Data.saveScreen);
	else addButtonDisabled(0, "Save");
	addButton(1, "Load", Data.loadScreen);
	addButton(2, "Delete", Data.deleteScreen);
	
	addButton(4, "Back", playerMenu);
}

//Save Menu
Data.saveScreen = function() {
	clearOutput();
	showRow(2);
	showRow(3);
	outputText("Please make sure to use a modern browser capable of local storage to be able to save.<br><br>");
	menu();
	for (i = 0; i < Data.totalSlots; i++) {
        outputText("Slot " + (i + 1) + ": " + Data.loadSaveDisplay("Nodd_" + (i+1)) + "<br>");
		addButton(i, "Slot " + (i+1), Data.saveGame, "Nodd_" + (i+1));
	}
	addButton(14, "Back", dataScreen);
}

//Load Menu
Data.loadScreen = function() {
	clearOutput();
	showRow(2);
	showRow(3);
	menu();
	for (i = 0; i < Data.totalSlots; i++) {
		outputText("Slot " + (i + 1) + ": " + Data.loadSaveDisplay("Nodd_" + (i+1)) + "<br>");
		if (localStorage.getItem("Nodd_" + (i+1)) != undefined) {
			addButton(i, "Slot " + (i+1), Data.loadGame, "Nodd_" + (i+1));
		}
	}
	addButton(14, "Back", dataScreen);
}

//Delete Save Menu
Data.deleteScreen = function() {
	clearOutput();
	showRow(2);
	showRow(3);
    outputText("Once you delete a save file, it's gone forever. So please be sure if you REALLY want to do it.<br><br>");
	menu();
	for (i = 0; i < Data.totalSlots; i++) {
        outputText("Slot " + (i + 1) + ": " + Data.loadSaveDisplay("Nodd_" + (i+1)) + "<br>");
		if (localStorage.getItem("Nodd_" + (i+1)) != undefined) {
			addButton(i, "Slot " + (i+1), Data.deletePrompt, "Nodd_" + (i+1));
		}
	}
	addButton(14, "Back", dataScreen);
}

//Starts save process and shows whether it succeeded or not.
Data.saveGame = function(slot) {
	clearOutput();
	if (Data.saveGameObject(slot)) {
		outputText("Your Ego Bracer has successfully saved your progress!");
	}
	else {
		outputText("Unfortunately, your Ego Bracer suffered an error trying to save!");
	}
	doNext(resumeFromMenu);
}

// Starts the actual save process
Data.saveGameObject = function(slot) {
	//Let's try to save! Beginning with initial variables.
	var success = false;
	var saveData = {};
    try {
        //Player Data
        saveData.player = {};
        for (i in player) {
            if (player[i] != undefined && (typeof player[i] == "string" || typeof player[i] == "number" || typeof player[i] == "boolean")) {
                saveData.player[i] = player[i];
            }
        }

        //Cocks
        saveData.player.cocks = [];
        if (player.cocks.length > 0) {
            for (var i = 0; i < player.cocks.length; i++) {
                saveData.player.cocks[i] = player.cocks[i];
            }
        }
        //Vaginas
        saveData.player.vaginas = [];
        if (player.vaginas.length > 0) {
            for (i = 0; i < player.vaginas.length; i++) {
                saveData.player.vaginas[i] = player.vaginas[i];
            }
        }
        //Ass
        saveData.player.ass = player.ass;
        //Breasts
        saveData.player.breastRows = [];
        for (i = 0; i < player.breastRows.length; i++) {
            saveData.player.breastRows[i] = player.breastRows[i];
        }

        // Equipped weapons and armor
        saveData.player.weapon = player.weapon;
        saveData.player.armor = player.armor;
        saveData.player.upperGarment = player.upperGarment;
        saveData.player.lowerGarment = player.lowerGarment;

        //Inventory
        saveData.player.itemSlots = [];
        for (i = 0; i < player.itemSlots.length; i++) {
            saveData.player.itemSlots.push(new ItemSlot());
            if (player.itemSlots[i].itype != undefined)
                saveData.player.itemSlots[i].id = player.itemSlots[i].itype.id;
            else
                saveData.player.itemSlots[i].id = "Nothing";
            saveData.player.itemSlots[i].quantity = player.itemSlots[i].quantity;
        }

        //Perks
        saveData.player.perks = [];
        if (player.perks.length > 0) {
            for (i = 0; i < player.perks.length; i++) {
                saveData.player.perks.push(new Perk());
                saveData.player.perks[i].id = player.perks[i].ptype.id;
                saveData.player.perks[i].value1 = player.perks[i].value1;
                saveData.player.perks[i].value2 = player.perks[i].value2;
                saveData.player.perks[i].value3 = player.perks[i].value3;
                saveData.player.perks[i].value4 = player.perks[i].value4;
            }
        }

        //Status Effects
        saveData.player.statusEffects = [];
        if (player.statusEffects.length > 0) {
            for (i = 0; i < player.statusEffects.length; i++) {
                saveData.player.statusEffects.push(new StatusEffect());
                saveData.player.statusEffects[i].id = player.statusEffects[i].stype.id;
                saveData.player.statusEffects[i].value1 = player.statusEffects[i].value1;
                saveData.player.statusEffects[i].value2 = player.statusEffects[i].value2;
                saveData.player.statusEffects[i].value3 = player.statusEffects[i].value3;
                saveData.player.statusEffects[i].value4 = player.statusEffects[i].value4;
            }
        }

        //Key Items
        saveData.player.keyItems = [];
        if (player.keyItems.length > 0) {
            for (i = 0; i < player.keyItems.length; i++) {
                saveData.player.keyItems.push(new KeyItem());
                saveData.player.keyItems[i].id = player.keyItems[i].ktype;
                saveData.player.keyItems[i].value1 = player.keyItems[i].value1;
                saveData.player.keyItems[i].value2 = player.keyItems[i].value2;
                saveData.player.keyItems[i].value3 = player.keyItems[i].value3;
                saveData.player.keyItems[i].value4 = player.keyItems[i].value4;
            }
        }

        //Player Pregnancy
        saveData.player.pregnancyIncubation = player.pregnancyIncubation;
        saveData.player.pregnancyType = player.pregnancyType;
        saveData.player.pregnancyEventArr = player.pregnancyEventArr;
        saveData.buttPregnancyIncubation = player.buttPregnancyIncubation;
        saveData.buttPregnancyType = player.buttPregnancyType;
        saveData.player.pregnancyEventNum = player.pregnancyEventNum;

		//Spells
		saveData.player.spells = [];
        for (i = 0; i < player.spells.length; i++) {
            saveData.player.spells.push(player.spells[i]);
        }

        //Other Data
        saveData.time = {};
        saveData.time.days = time.days;
        saveData.time.hours = time.hours;
        saveData.time.minutes = time.minutes;

        //Game Flags
		saveData.codexFlags = {};
        for (i in codexFlags) {
            saveData.codexFlags[i] = codexFlags[i];
        }
		saveData.questFlags = {};
        for (i in questFlags) {
            saveData.questFlags[i] = questFlags[i];
        }
        saveData.locFlags = {};
        for (i in locFlags) {
            saveData.locFlags[i] = locFlags[i];
        }
		saveData.npcFlags = {};
        for (i in npcFlags) {
            saveData.npcFlags[i] = npcFlags[i];
        }


        //Assign Save Version
        saveData.saveVersion = saveVersion;
        localStorage.setItem(slot, JSON.stringify(saveData));

        //Set to successful and return
        success = true;
    }

    catch(error) {
        //Set to failed
        outputText(error + "<br><br>");
        console.error(error);
        success = false;
    }

    return success;

}

//Attempt to load a game and show if it fails or not.
Data.loadGame = function(slot) {
	clearOutput();
	if (Data.loadGameObject(slot)) {
		outputText("Successfully loaded!");
		gameStarted = true;
		doNext(playerMenu);
	}
	else {
		outputText("Failed to load!");
		doNext(Data.loadScreen);
	}
}

// Loads a game
Data.loadGameObject = function(slot) {
	//Let's try to load!
	var success = false;
	var saveData = JSON.parse(localStorage.getItem(slot));
    var i;
	try {
        player = new Player();
		//Iterate through player data
		for (i in saveData.player) {
            player[i] = saveData.player[i];
		}
        //Manually set equipment
        if (saveData.player.weapon != undefined)
            player.weapon = lookupItem(saveData.player.weapon.id);
        if (saveData.player.armor != undefined)
            player.armor = lookupItem(saveData.player.armor.id);

        //Set items
        player.itemSlots = [];
        for (i = 0; i < 56; i++) {
            player.itemSlots.push(new ItemSlot());
        }
        for (i = 0; i < saveData.player.itemSlots.length; i++) {
            player.itemSlots[i].setItemAndQty(lookupItem(saveData.player.itemSlots[i].id), saveData.player.itemSlots[i].quantity);
        }
		
        //Perks
        player.perks = [];
        for (i = 0; i < saveData.player.perks.length; i++) {
            if (lookupPerk(saveData.player.perks[i].id) == undefined) continue;
            player.createPerk(lookupPerk(saveData.player.perks[i].id), saveData.player.perks[i].value1, saveData.player.perks[i].value2, saveData.player.perks[i].value3, saveData.player.perks[i].value4);
        }

        //Status Effects
        player.statusEffects = [];
        for (i = 0; i < saveData.player.statusEffects.length; i++) {
            player.createStatusEffect(lookupStatusEffects(saveData.player.statusEffects[i].id), saveData.player.statusEffects[i].value1, saveData.player.statusEffects[i].value2, saveData.player.statusEffects[i].value3, saveData.player.statusEffects[i].value4);
        }

        //Key Items
        player.keyItems = [];
        for (i = 0; i < saveData.player.keyItems.length; i++) {
            player.createKeyItem(saveData.player.keyItems[i].id, saveData.player.keyItems[i].value1, saveData.player.keyItems[i].value2, saveData.player.keyItems[i].value3, saveData.player.keyItems[i].value4);
            //player.createKeyItem(lookupKeyItem(saveData.player.keyItems[i].id), saveData.player.keyItems[i].value1, saveData.player.keyItems[i].value2, saveData.player.keyItems[i].value3, saveData.player.keyItems[i].value4);
        }

        //Player Pregnancy Load
        player.pregnancyIncubation = saveData.player.pregnancyIncubation;
        player.pregnancyType = saveData.player.pregnancyType;
        player.pregnancyEventArr = saveData.player.pregnancyEventArr;
        player.buttPregnancyIncubation = saveData.player.buttPregnancyIncubation;
        player.buttPregnancyType = saveData.player.buttPregnancyType;
        player.pregnancyEventNum = saveData.player.pregnancyEventNum;

        //Spells
        if (saveData.player.spells != undefined) {
            player.spells = [];
			for (var i = 0; i < saveData.player.spells.length; i++) {
				player.spells.push(saveData.player.spells[i]);
			}
        }

        //Exploration
        if (saveData.exploration != undefined) {
            exploration = [];
        }

        //Other data
		playerMenu = resumeFromMenu;
		if (saveData.time != undefined) {
			time.days = saveData.time.days;
			time.hours = saveData.time.hours;
			time.minutes = saveData.time.minutes;
		}
		
		//Flags
		initializeFlags();
        if (saveData.codexFlags != undefined) {
            for (i in saveData.codexFlags) {
                if (saveData.codexFlags[i] == undefined || saveData.codexFlags[i] == null)
                    codexFlags[i] = 0;
                else
                    codexFlags[i] = saveData.codexFlags[i];
            }
        }
        if (saveData.questFlags != undefined) {
            for (i in saveData.questFlags) {
                if (saveData.questFlags[i] == undefined || saveData.questFlags[i] == null)
                    questFlags[i] = 0;
                else
                    questFlags[i] = saveData.questFlags[i];
            }
        }
        if (saveData.locFlags != undefined) {
            for (i in saveData.locFlags) {
                if (saveData.locFlags[i] == undefined || saveData.locFlags[i] == null)
                    locFlags[i] = 0;
                else
                    locFlags[i] = saveData.locFlags[i];
            }
        }
        if (saveData.npcFlags != undefined) {
            for (i in saveData.npcFlags) {
                if (saveData.npcFlags[i] == undefined || saveData.npcFlags[i] == null)
                    npcFlags[i] = 0;
                else
                    npcFlags[i] = saveData.npcFlags[i];
            }
        }

        Data.fixSave();

        //Set to successful and return
		success = true;
	}
	catch(error) {
		//If something's wrong, tell failure.
        outputText(error + "<br><br>");
        console.error(error);
		success = false;
	}
	return success;
}

Data.loadSaveDisplay = function(slot) {
	if (localStorage[slot] == undefined) {
		return "EMPTY<br>";
	}
	var saveData = JSON.parse(localStorage[slot]);
	var holding = "";
	holding += saveData.player.name + ", Level " + saveData.player.level + "<br>"; //Get player name and level
    holding += "&nbsp;Day: " + saveData.time.days + ", Gender: "; //Get day and gender
    if (saveData.player.gender == 0)
        holding += "U";
    if (saveData.player.gender == 1)
        holding += "M";
    if (saveData.player.gender == 2)
        holding += "F";
    if (saveData.player.gender == 3)
        holding += "H";
	return holding;
}

Data.fixSave = function() {
    var i;
    //Fix data
    if (player.race != undefined)
        delete player.race; //Reset variable
	if (player.weapon == undefined)
		player.weapon = Items.NOTHING;
    if (player.weapon != undefined && player.weapon.getTooltipDescription == undefined)
        delete player.weapon.getTooltipDescription;
	if (player.armor == undefined)
		player.armor = Items.NOTHING;
    if (player.armor != undefined && player.armor.getTooltipDescription == undefined)
        delete player.armor.getTooltipDescription;
	if (player.upperGarment == undefined)
		player.upperGarment = Items.NOTHING;
    if (player.upperGarment != undefined && player.upperGarment.getTooltipDescription == undefined)
        delete player.upperGarment.getTooltipDescription;
	if (player.upperGarment.equipmentName == undefined || player.upperGarment.equipmentName == "leathery skin") {
		player.upperGarment.equipmentName = lookupItem(player.upperGarment.id).equipmentName;
	}
	if (player.lowerGarment == undefined)
		player.lowerGarment = Items.NOTHING;
    if (player.lowerGarment != undefined && player.lowerGarment.getTooltipDescription == undefined)
        delete player.lowerGarment.getTooltipDescription;
	if (player.lowerGarment.equipmentName == undefined || player.lowerGarment.equipmentName == "leathery skin") {
		player.lowerGarment.equipmentName = lookupItem(player.lowerGarment.id).equipmentName;
	}
		
	//Fix body parts
    for (i in player.cocks) {
        fixCock(player.cocks[i]);
    }
    for (i in player.vaginas) {
        fixVagina(player.vaginas[i]);
    }
    for (i in player.breastRows) {
        unfuckBreastRow(player.breastRows[i]);
    }
	//Favoured attributes
	if (player.favouredAttribute == "") {
		playerMenu = CharCreation.attributeSelectMenuP1;
		showStats();
	}
}

//DELETE SAVE
Data.deletePrompt = function(slot) {
	clearOutput();
	outputText("Are you sure you want to delete this save file from your Ego Bracer? You won't be able to retrieve it!");
    menu();
    addButton(0, "Yes, I'm sure!", Data.deleteSave, slot);
	addButton(1, "No, wait!", Data.deleteScreen);
}
Data.deleteSave = function(slot) {
	clearOutput();
	outputText(slot + " has been deleted.");
	localStorage.removeItem(slot);
	doNext(Data.deleteScreen);
}
//SETTINGS DATA SAVE/LOAD
Data.saveSettings = function() {
    var success = false;
    var saveData = {};
    try {
        saveData.silly = silly;
        saveData.use12Hours = use12Hours;
		saveData.useMetrics = useMetrics;

        //saveData.buttonFont = buttonFont;
        saveData.mainFont = mainFont;
        saveData.mainFontSizeIndex = mainFontSizeIndex;

        saveData.scatEnabled = scatEnabled;
        saveData.goreEnabled = goreEnabled;
        saveData.infestEnabled = infestEnabled;
        saveData.plushifyEnabled = plushifyEnabled;
		saveData.bestialityEnabled = bestialityEnabled;

        //Set save to successful
        localStorage.setItem("Nodd_Main", JSON.stringify(saveData));
        success = true;
    }
    catch(error) {
        //If errors occur, set save to failed
        console.error(error);
        success = false;
    }
    return success;
}
Data.loadSettings = function() {
    var success = false;
	var file = localStorage.getItem("Nodd_Main");
        if (file == undefined || file == null)
            return success;
    var saveData = JSON.parse(file);
    try {
        silly = saveData.silly;
        use12Hours = saveData.use12Hours;
		useMetrics = saveData.useMetrics;

		scatEnabled = saveData.scatEnabled != undefined ? saveData.scatEnabled : false;
		goreEnabled = saveData.goreEnabled != undefined ? saveData.goreEnabled : false;
		infestEnabled = saveData.infestEnabled != undefined ? saveData.infestEnabled : false;
		plushifyEnabled = saveData.plushifyEnabled != undefined ? saveData.plushifyEnabled : false;
		bestialityEnabled = saveData.bestialityEnabled != undefined ? saveData.bestialityEnabled : false;

        mainFont = saveData.mainFont;
        mainFontSizeIndex = saveData.mainFontSizeIndex;
        applyFontSettings();
        //Set load to successful	
        success = true;
    }
    catch(error) {
        console.error(error);
        success = false;
    }
    return success;
}

//Add to Data Flags
function addToGameFlags() {
    for (var i in arguments) {
        npcFlags[arguments[i]] = 0;
    }
}