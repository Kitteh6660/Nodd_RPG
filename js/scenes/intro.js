Intro = [];
CharCreation = [];

//------------
// CREATION
//------------
CharCreation.yesToStartWhileGameInProgress = function() {
	gameStarted = false;
	CharCreation.initializeNewGame();
}

CharCreation.initializeNewGame = function() {
	setHeader("Character Creation");
	showRow(2);
	showRow(3);	
	if (gameStarted) { // Prevent from accidentally starting a new game.
		clearOutput();
		outputText("You already have a game in progress. Would you like to start a new game? All unsaved progress will be lost!");
		doYesNo(CharCreation.yesToStartWhileGameInProgress, playerMenu);
		return;
	}
    //Initialize player
    player = new Player();
	player.name = "Outsider";
	player.str = 8;
	player.dex = 8;
	player.end = 8;
	player.inte = 8;
	player.wil = 8;
	player.cha = 8;
	player.lib = 15;
	player.cor = 15;
    player.HP = player.maxHP();
	player.MP = player.maxMP();
    player.weapon = Items.NOTHING;
    player.armor = Items.NOTHING;
	player.createBreastRow();
	player.breastRows[0].breastRating = 0;
	player.createCock(5, 1, CockTypesEnum.HUMAN);
	player.genderCheck();
    Intro.inductionPartOne();
	gameStarted = true;
}

//Customization menu
CharCreation.customizeCharacterMenu = function() {
    clearOutput();
    outputText("You can customize your character here. You will be able to alter your appearance through the usage of certain items or events.<br><br>");
	outputText("<b>Name:</b> " + player.name + "<br>");
	outputText("<b>Gender:</b> " + player.maleFemaleHerm(true) + "<br>");
	outputText("<b>Species:</b> " + player.race() + "<br>");
    outputText("<b>Height:</b> " + Math.floor(player.tallness / 12) + "'" + player.tallness % 12 + "\"<br>");
	outputText("<b>Skin tone:</b> " + player.skinTone + "<br>");
	
    outputText("<b>Hair colour:</b> " + player.hairColor + "<br>");
    if (player.skinType == SKIN_TYPE_FUR) {
		outputText("<b>Fur colour:</b> " + player.furColor + "<br>");
	}
	else if (player.skinType == SKIN_TYPE_SCALES) {
		outputText("<b>Scale colour:</b> " + player.furColor + "<br>");
	}
	if (player.hasBeard()) {
		outputText("<b>Beard:</b> " + player.beardDescript() + "<br>");
	}
	else {
		outputText("<b>Beard:</b> None<br>");
	}
    if (player.hasCock()) {
		outputText("<b>Cock size:</b> " + player.cocks[0].cockLength + "\" long, " + player.cocks[0].cockThickness + "\" thick<br>");
	}
    outputText("<b>Breast size:</b> " + player.breastCup(0) + "<br>");
    menu();
	addButton(0, "Name", CharCreation.chooseName);
	addButton(1, "Gender", CharCreation.chooseGender);
	addButton(2, "Species", CharCreation.speciesSelectMenu);
    addButton(3, "Build", CharCreation.chooseBuild);
    addButton(4, "Set Height", CharCreation.chooseHeight);
    addButton(5, "Skin Complexion", CharCreation.menuSkinComplexion);
    addButton(6, "Hair Colour", CharCreation.menuHairColour);
	addButtonDisabled(7, "Fur Colour");
    if (player.skinType == SKIN_TYPE_FUR) addButton(7, "Fur Colour", CharCreation.menuFurColour);
	if (player.skinType == SKIN_TYPE_SCALES) addButton(7, "Scale Colour", CharCreation.menuFurColour);
    if (player.mf("m", "f") == "m") {
        addButton(8, "Beard Style", CharCreation.menuBeardSettings);
    }
	else addButtonDisabled(8, "Beard");
    if (player.hasCock()) addButton(10, "Cock Size", CharCreation.menuCockSize);
    addButton(11, "Breast Size", CharCreation.menuBreastSize);
    addButton(14, "Finish", CharCreation.finishCreationPrompt);
}
CharCreation.finishCreationPrompt = function() {
	clearOutput();
	outputText("Are you ready to proceed and tell the strange creature all about you?");
	doYesNo(Intro.inductionPartSeven, CharCreation.customizeCharacterMenu);
}

CharCreation.speciesSelectMenu = function() {
	clearOutput();
	outputText("What are your species?<br><br>");
	outputText("More species will be added over time as the game development progresses!");
	menu();
	addButton(0, "Humanoid", CharCreation.speciesSelectSubmenu, "humanoid");
	addButton(1, "Canine", CharCreation.speciesSelectSubmenu, "canine");
	addButton(2, "Feline", CharCreation.speciesSelectSubmenu, "feline");
	addButton(3, "Equine", CharCreation.speciesSelectSubmenu, "equine");
	addButton(4, "Other Mammals", CharCreation.speciesSelectSubmenu, "mammals");
	addButtonDisabled(5, "Avian", "Not yet added!"); //addButton(5, "Avian", CharCreation.speciesSelectSubmenu, "avian");
	addButton(6, "Scalie", CharCreation.speciesSelectSubmenu, "scalie");
	addButtonDisabled(7, "Insectoid", "Not yet added!"); //addButton(7, "Insectoid", CharCreation.speciesSelectSubmenu, "insectoid");
	addButton(8, "Aquatic", CharCreation.speciesSelectSubmenu, "aquatic");
	addButton(9, "Exotic", CharCreation.speciesSelectSubmenu, "exotic");
	addButton(14, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.speciesSelectSubmenu = function(category) {
	menu();
	if (category == "humanoid") {
		addButton(0, "Human", CharCreation.speciesSelection, "human"); hint(0, "Your typical human, originally native to Earth.");
		addButton(1, "Elf", CharCreation.speciesSelection, "elf"); hint(1, "Cute humanoid with pointy ears! They live much longer than humans and they tend to have affinity for nature.");
		//addButton(2, "Dwarf", CharCreation.speciesSelection, "dwarf"); hint(2, "A short, stout humanoid with obsession for mining, and also technologically advanced.");
		//addButton(3, "Drow", CharCreation.speciesSelection, "drow"); hint(3, "A dark-skinned humanoid with silver hair, originally lived in subterranean cities.");
		addButton(5, "Goblin", CharCreation.speciesSelection, "goblin"); hint(5, "A short, green-skinned humanoid. Cunning and filled with greed.");
		//addButton(6, "Orc", CharCreation.speciesSelection, "orc"); hint(6, "A brutal-looking green-skinned humanoid. Orcs tend to fight for glory, and they pride themselves in being great warriors.");
	}
	else if (category == "canine") {
		addButton(0, "Dog", CharCreation.speciesSelection, "dog");
		addButton(1, "Wolf", CharCreation.speciesSelection, "wolf");
		//addButton(2, "Coyote", CharCreation.speciesSelection, "coyote");
		addButton(3, "Fox", CharCreation.speciesSelection, "fox");
	}
	else if (category == "feline") {
		addButton(0, "Cat", CharCreation.speciesSelection, "cat");
		//addButton(1, "Lion", CharCreation.speciesSelection, "lion");
		//addButton(2, "Tiger", CharCreation.speciesSelection, "tiger");
		//addButton(3, "Jaguar", CharCreation.speciesSelection, "jaguar");
		//addButton(4, "Leopard", CharCreation.speciesSelection, "leopard");
		//addButton(5, "Snow Leopard", CharCreation.speciesSelection, "snep");
		//addButton(6, "Cheetah", CharCreation.speciesSelection, "cheetah");
		//addButton(7, "Caracal", CharCreation.speciesSelection, "caracal");
		//addButton(8, "Lynx", CharCreation.speciesSelection, "lynx");
		//addButton(9, "Cougar", CharCreation.speciesSelection, "cougar");
	}
	else if (category == "equine") {
		addButton(0, "Horse", CharCreation.speciesSelection, "horse");
		//addButton(1, "Donkey", CharCreation.speciesSelection, "donkey");
		//addButton(2, "Zebra", CharCreation.speciesSelection, "zebra");
	}
	else if (category == "mammals") {
		//addButton(0, "Bear", CharCreation.speciesSelection, "bear");
		//addButton(1, "Wolverine", CharCreation.speciesSelection, "wolverine");
		addButton(2, "Raccoon", CharCreation.speciesSelection, "raccoon");
		//addButton(3, "Badger", CharCreation.speciesSelection, "badger");
		//addButton(4, "Skunk", CharCreation.speciesSelection, "skunk");
		//addButton(5, "Deer", CharCreation.speciesSelection, "deer");
		addButton(6, "Pig", CharCreation.speciesSelection, "pig");
		addButton(7, "Boar", CharCreation.speciesSelection, "boar");
		//addButton(8, "Goat", CharCreation.speciesSelection, "goat");
		//addButton(9, "Rhinoceros", CharCreation.speciesSelection, "rhino");
	}
	else if (category == "avian") {
		//addButton(0, "Bird", CharCreation.speciesSelection, "bird");
		//addButton(1, "Eagle", CharCreation.speciesSelection, "eagle");
		//addButton(2, "Owl", CharCreation.speciesSelection, "owl");
	}
	else if (category == "scalie") {
		addButton(0, "Lizard", CharCreation.speciesSelection, "lizard");
		//addButton(1, "Drake", CharCreation.speciesSelection, "drake");
		addButton(2, "Dragon", CharCreation.speciesSelection, "dragon");
		//addButton(3, "Kobold", CharCreation.speciesSelection, "kobold");
		//addButton(4, "Naga", CharCreation.speciesSelection, "naga");
		//addButton(5, "Raptor", CharCreation.speciesSelection, "raptor");
	}
	else if (category == "insectoid") {
		//addButton(0, "Dragonfly", CharCreation.speciesSelection, "dragonfly");
		//addButton(1, "Bee", CharCreation.speciesSelection, "bee");
		//addButton(2, "Mantis", CharCreation.speciesSelection, "mantis");
		//addButton(3, "Moth", CharCreation.speciesSelection, "moth");
	}
	else if (category == "aquatic") {
		addButton(0, "Shark", CharCreation.speciesSelection, "shark");
	}
	else if (category == "exotic") {
		addButton(0, "Sergal", CharCreation.speciesSelection, "sergal");
		//addButton(1, "Minotaur", CharCreation.speciesSelection, "minotaur");
	}
	addButton(14, "Back", CharCreation.speciesSelectMenu);
}

CharCreation.speciesSelection = function(species) {
	// Reset things back.
	player.furPattern = FUR_PATTERN_SOLID;
	// Humanoid species
	if (species == "human") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "fair";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_HUMAN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "human";
	}
	if (species == "elf") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "fair";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_ELFIN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "elf";
	}
	if (species == "dwarf") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "fair";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_HUMAN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		player.tallness = 42;
		if (player.gender == GENDER_MALE) {
			player.beardType = BEARD_NORMAL;
		}
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "dwarf";
	}
	if (species == "drow") {
		player.hairColor = "silver";
		player.hairLength = 6;
		if (player.gender == GENDER_FEMALE) player.hairLength += 6;
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "dark gray";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_ELFIN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "drow";
	}
	if (species == "goblin") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "green";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_ELFIN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		player.tallness = 42;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "goblin";
	}
	if (species == "orc") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.skinTone = "green";
		player.faceType = FACE_HUMAN;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_HUMAN;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_NONE;
		player.wingType = WING_TYPE_NONE;
		player.tallness = 72;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "orc";
	}
	// Canine species
	if (species == "dog") {
		player.skinType = SKIN_TYPE_FUR;
		player.skinTone = "fair";
		player.faceType = FACE_DOG;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_DOG;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_DOG;
		player.lowerBody = LOWER_BODY_TYPE_DOG;
		player.tailType = TAIL_TYPE_DOG;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.DOG;
		}
		player.originalRace = "dog";
	}
	if (species == "wolf") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_DOG;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_DOG;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_DOG;
		player.lowerBody = LOWER_BODY_TYPE_DOG;
		player.tailType = TAIL_TYPE_WOLF;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.DOG;
		}
		player.originalRace = "wolf";
	}
	if (species == "fox") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_FOX;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_FOX;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_DOG;
		player.lowerBody = LOWER_BODY_TYPE_DOG;
		player.tailType = TAIL_TYPE_FOX;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.FOX;
		}
		player.originalRace = "fox";
	}
	// Feline species
	if (species == "cat") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_CAT;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_CAT;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_CAT;
		player.lowerBody = LOWER_BODY_TYPE_CAT;
		player.tailType = TAIL_TYPE_CAT;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.CAT;
		}
		player.originalRace = "cat";
	}
	// Equine species
	if (species == "horse") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_HORSE;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_HORSE;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HOOFED;
		player.tailType = TAIL_TYPE_HORSE;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HORSE;
		}
		player.originalRace = "horse";
	}
	// Mammal species
	if (species == "raccoon") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_RACCOON_MASK;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_RACCOON;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_RACCOON;
		player.tailType = TAIL_TYPE_RACCOON;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.furColor = "gray";
		player.furColor = "black";
		player.furPattern = FUR_PATTERN_SOLID_UNDERSIDE;
		player.originalRace = "raccoon";
	}
	if (species == "pig") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_PIG;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_PIG;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HOOFED;
		player.tailType = TAIL_TYPE_PIG;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.PIG;
		}
		player.originalRace = "pig";
	}
	if (species == "boar") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_BOAR;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_PIG;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HOOFED;
		player.tailType = TAIL_TYPE_PIG;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.PIG;
		}
		player.originalRace = "boar";
	}
	// Avian Species
	   //Not yet added...
	   
	// Scalie Species
	if (species == "lizard") {
		player.skinType = SKIN_TYPE_SCALES;
		player.faceType = FACE_LIZARD;
		player.eyeType = EYES_SLIT;
		player.earType = EARS_DRAGON;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_LIZARD;
		player.lowerBody = LOWER_BODY_TYPE_DRAGON;
		player.tailType = TAIL_TYPE_LIZARD;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.LIZARD;
		}
		player.originalRace = "lizard";
	}
	if (species == "dragon") {
		player.skinType = SKIN_TYPE_SCALES;
		player.faceType = FACE_DRAGON;
		player.eyeType = EYES_SLIT;
		player.earType = EARS_DRAGON;
		player.hornsType = HORNS_DRACONIC_X2;
		player.horns = 6;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_DRAGON;
		player.lowerBody = LOWER_BODY_TYPE_DRAGON;
		player.tailType = TAIL_TYPE_DRACONIC;
		player.wingType = WING_TYPE_DRACONIC_LARGE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.DRAGON;
		}
		player.originalRace = "dragon";
	}
	// Aquatic Species
	if (species == "shark") {
		player.skinType = SKIN_TYPE_PLAIN;
		player.faceType = FACE_SHARK_TEETH;
		player.eyeType = EYES_HUMAN;
		player.earType = EARS_SHARK;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = true;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_HUMAN;
		player.tailType = TAIL_TYPE_SHARK;
		player.wingType = WING_TYPE_SHARK_FIN;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.HUMAN;
		}
		player.originalRace = "shark";
	}
	// Exotic Species
	if (species == "sergal") {
		player.skinType = SKIN_TYPE_FUR;
		player.faceType = FACE_SERGAL;
		player.eyeType = EYES_SLIT;
		player.earType = EARS_SERGAL;
		player.hornsType = HORNS_NONE;
		player.horns = 0;
		player.gills = false;
		player.antennae = ANTENNAE_NONE;
		player.armType = ARM_TYPE_HUMAN;
		player.clawType = CLAW_TYPE_NORMAL;
		player.lowerBody = LOWER_BODY_TYPE_SERGAL;
		player.tailType = TAIL_TYPE_SERGAL;
		player.wingType = WING_TYPE_NONE;
		if (player.hasCock()) {
			player.cocks[0].cockType = CockTypesEnum.DOG;
		}
		player.originalRace = "sergal";
	}
	//Default some shit!
	if (player.skinType == SKIN_TYPE_FUR) {
		if (player.furColor == "none") player.furColor = "gray";
	}
	clearOutput();
	outputText("You have set your species to " + player.race() + ".");
	doNext(CharCreation.speciesSelectMenu);
}

CharCreation.chooseName = function() {
	clearOutput();
	outputText("You try your best to remember your name...<br><br>");
    outputText("<input type=\"text\" name=\"inputname\" id=\"inputname\">");
	menu();
	addButton(0, "Confirm", CharCreation.chooseNameConfirm);
	addButton(4, "Cancel", CharCreation.customizeCharacterMenu);
}
CharCreation.chooseNameConfirm = function() {
    if (document.getElementById("inputname").value.length < 1) {
        clearOutput();
        outputText("You must input a name. Off you go!");
        doNext(CharCreation.chooseName);
        return;
    }
	else {
		player.name = document.getElementById("inputname").value; //Apply name
		clearOutput();
		outputText("Your name is set to " + player.name + ".");
		refreshStats();
	}
	doNext(CharCreation.customizeCharacterMenu);
}

CharCreation.chooseGender = function() {
    clearOutput();
    outputText("You are " + player.name + ". You look down and inspect your now-naked form; how embarrassing of you to be devoid of any form of clothing!! But you want to be sure of your gender... what do you have down there?");
    menu();
    addButton(0, "Male", CharCreation.setGender, GENDER_MALE);
    addButton(1, "Female", CharCreation.setGender, GENDER_FEMALE);
    addButton(2, "Hermaphrodite", CharCreation.setGender, GENDER_HERM);
}
CharCreation.setGender = function(gender) {
	if (player.cockTotal() > 0) {
		player.removeCock();
	}
	if (player.vaginaTotal() > 0) {
		player.removeCock();
	}
    switch(gender) {
        case GENDER_NONE:
            break;
        case GENDER_MALE: //Male
            //Body changes
            player.fertility = 5;
            player.hairLength = 1;
            player.tone = 60;
            //Genetalia
            player.balls = 2;
            player.ballSize = 1;
            player.clitLength = 0;
            player.createCock(5.5, 1, CockTypesEnum.HUMAN);
            player.cocks[0].knotMultiplier = 1;
            break;
        case GENDER_FEMALE: //Female
            //Body changes
            player.fertility = 10;
            player.hairLength = 10;
            player.tone = 30;
            //Genetalia
            player.balls = 0;
            player.ballSize = 0;
            player.createVagina(true, 0, 0);
            player.clitLength = 0.5;
            break;
        case GENDER_HERM: //Hermaphrodite
            //Body changes
            player.fertility = 10;
            player.hairLength = 10;
            player.tone = 45;
            //Genetalia
            player.createVagina();
            player.clitLength = .5;
            player.createCock(5.5, 1, CockTypesEnum.HUMAN);
            player.cocks[0].knotMultiplier = 1;
            break;
        default:
    }
    CharCreation.customizeCharacterMenu();
}
CharCreation.chooseBuild = function() {
    clearOutput();
    menu();
    switch(player.gender) {
        case GENDER_NONE:
            outputText("This isn't supposed to happen. Off you go!");
            doNext(CharCreation.chooseGender);
            break;
        case GENDER_MALE:
            outputText("You confirm yourself to be a male.");
            addButton(0, "Lean", CharCreation.setBuild, "MaleLean");
            addButton(1, "Average", CharCreation.setBuild, "MaleAverage");
            addButton(2, "Thick", CharCreation.setBuild, "MaleThick");
            addButton(3, "Girly", CharCreation.setBuild, "MaleGirly");
            break;
        case GENDER_FEMALE:
            outputText("You confirm yourself to be a female.");
            addButton(0, "Slender", CharCreation.setBuild, "FemaleSlender");
            addButton(1, "Average", CharCreation.setBuild, "FemaleAverage");
            addButton(2, "Curvy", CharCreation.setBuild, "FemaleCurvy");
            addButton(3, "Tomboyish", CharCreation.setBuild, "FemaleTomboyish");
            break;
        case GENDER_HERM:
            outputText("You confirm yourself to be a hermaphrodite.");
            addButton(0, "Mas. Lean", CharCreation.setBuild, "MaleLean");
            addButton(1, "Mas. Average", CharCreation.setBuild, "MaleAverage");
            addButton(2, "Mas. Thick", CharCreation.setBuild, "MaleThick");
            addButton(5, "Fem. Slender", CharCreation.setBuild, "FemaleSlender");
            addButton(6, "Fem. Average", CharCreation.setBuild, "FemaleAverage");
            addButton(7, "Fem. Curvy", CharCreation.setBuild, "FemaleCurvy");
            break;
        default:
            //This line shouldn't be reached.
    }
    outputText("<br><br>What type of build do you have?");
}
CharCreation.setBuild = function(build) {
    switch(build) {
        //Male builds (Hermaphrodites choosing these builds will be a maleherm)
        case "MaleLean":
            player.femininity = 34;
            player.thickness = 30;
			player.tone = 65;

            player.breastRows[0].breastRating = BREAST_CUP_FLAT;
            player.buttRating = BUTT_RATING_TIGHT;
            player.hipRating = HIP_RATING_SLENDER;
            break;
        case "MaleAverage":
            player.femininity = 30;
            player.thickness = 50;

            player.breastRows[0].breastRating = BREAST_CUP_FLAT;
            player.buttRating = BUTT_RATING_AVERAGE;
            player.hipRating = HIP_RATING_AVERAGE;
            break;
        case "MaleThick":
            player.femininity = 29;
            player.thickness = 70;
            player.tone = 55

            player.breastRows[0].breastRating = BREAST_CUP_FLAT;
            player.buttRating = BUTT_RATING_NOTICEABLE;
            player.hipRating = HIP_RATING_AVERAGE;
            break;
        case "MaleGirly":
            player.femininity = 50;
            player.thickness = 50;
            player.tone = 26;

            player.breastRows[0].breastRating = BREAST_CUP_A;
            player.buttRating = BUTT_RATING_NOTICEABLE;
            player.hipRating = HIP_RATING_SLENDER;
            break;
        //Female builds (Hermaphrodites choosing these builds will be a futanari)
        case "FemaleSlender":
            player.femininity = 66;
            player.thickness = 30;
            player.tone = 35;

            player.breastRows[0].breastRating = BREAST_CUP_B;
            player.buttRating = BUTT_RATING_TIGHT;
            player.hipRating = HIP_RATING_AMPLE;
            break;
        case "FemaleAverage":
            player.femininity = 70;
            player.thickness = 50;

            player.breastRows[0].breastRating = BREAST_CUP_C;
            player.buttRating = BUTT_RATING_NOTICEABLE;
            player.hipRating = HIP_RATING_AMPLE;
            break;
        case "FemaleCurvy":
            player.femininity = 71;
            player.thickness = 70;

            player.breastRows[0].breastRating = BREAST_CUP_D;
            player.buttRating = BUTT_RATING_LARGE;
            player.hipRating = HIP_RATING_CURVY;
            break;
        case "FemaleTomboyish":
            player.femininity = 56;
            player.thickness = 50;
            player.tone = 50;

            player.breastRows[0].breastRating = BREAST_CUP_A;
            player.buttRating = BUTT_RATING_TIGHT;
            player.hipRating = HIP_RATING_SLENDER;
            break;
        default:
    }
    CharCreation.customizeCharacterMenu();
}

//Skin Colours
CharCreation.menuSkinComplexion = function() {
    clearOutput();
    outputText("What is your complexion?");
    menu();
	if (player.race() == "goblin" || player.race() == "orc") {
		addButton(0, "Pale Yellow", CharCreation.confirmComplexion, "pale yellow");
		addButton(1, "Grayish Blue", CharCreation.confirmComplexion, "grayish-blue");
		addButton(2, "Green", CharCreation.confirmComplexion, "green");
		addButton(3, "Dark Green", CharCreation.confirmComplexion, "dark green");
	}
	else if (player.race() == "drow") {
		addButton(0, "Dark Gray", CharCreation.confirmComplexion, "dark gray");
		addButton(1, "Dark Purple", CharCreation.confirmComplexion, "dark purple");
	}
	else if (player.race() == "shark") {
		addButton(0, "Gray", CharCreation.confirmComplexion, "gray");
		addButton(1, "Blue", CharCreation.confirmComplexion, "blue");
		addButton(2, "Light Blue", CharCreation.confirmComplexion, "light blue");
	}
	else {
		addButton(0, "Light", CharCreation.confirmComplexion, "light");
		addButton(1, "Fair", CharCreation.confirmComplexion, "fair");
		addButton(2, "Olive", CharCreation.confirmComplexion, "olive");
		addButton(3, "Dark", CharCreation.confirmComplexion, "dark");
		addButton(4, "Ebony", CharCreation.confirmComplexion, "ebony");
		addButton(5, "Mahogany", CharCreation.confirmComplexion, "mahogany");
		addButton(6, "Russet", CharCreation.confirmComplexion, "russet");
	}
	addButton(14, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.confirmComplexion = function(complexion) {
    player.skinTone = complexion;
    CharCreation.customizeCharacterMenu();
}
//Hair Colours
CharCreation.menuHairColour = function() {
    clearOutput();
    outputText("What is your hair colour?");
    menu();
	if (player.race() == "drow") {
		addButton(0, "Silver", CharCreation.confirmHairColour, "silver");
		addButton(1, "White", CharCreation.confirmHairColour, "white");
	}
	else {
		addButton(0, "Blonde", CharCreation.confirmHairColour, "blonde");
		addButton(1, "Brown", CharCreation.confirmHairColour, "brown");
		addButton(2, "Black", CharCreation.confirmHairColour, "black");
		addButton(3, "Red", CharCreation.confirmHairColour, "red");
		addButton(4, "Gray", CharCreation.confirmHairColour, "gray");
		addButton(5, "White", CharCreation.confirmHairColour, "white");
		addButton(6, "Auburn", CharCreation.confirmHairColour, "auburn");
	}
    addButton(14, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.confirmHairColour = function(colour) {
    player.hairColor = colour;
    CharCreation.customizeCharacterMenu();
}
//Fur Colours
CharCreation.menuFurColour = function() {
    clearOutput();
    outputText("What is your " + (player.skinType == SKIN_TYPE_FUR ? "fur" : "scale") + " colour?");
    menu();
	if (player.race() == "cat" || player.race() == "dog" || player.race() == "rabbit" || player.race() == "horse") {
		addButton(0, "Cream", CharCreation.confirmFurColour, "cream");
		addButton(1, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(2, "Black", CharCreation.confirmFurColour, "black");
		addButton(3, "Gray", CharCreation.confirmFurColour, "gray");
		addButton(4, "White", CharCreation.confirmFurColour, "white");
		addButton(5, "Auburn", CharCreation.confirmFurColour, "auburn");
		addButton(6, "Orange", CharCreation.confirmFurColour, "orange");
	}
	if (player.race() == "wolf") {
		addButton(0, "Black", CharCreation.confirmFurColour, "black");
		addButton(1, "Gray", CharCreation.confirmFurColour, "gray");
		addButton(2, "White", CharCreation.confirmFurColour, "white");
	}
	if (player.race() == "pig") {
		addButton(0, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(1, "Black", CharCreation.confirmFurColour, "black");
		addButton(2, "Pink", CharCreation.confirmFurColour, "pink");
	}
	if (player.race() == "boar") {
		addButton(0, "Brown", CharCreation.confirmFurColour, "brown");
	}
	if (player.race() == "rabbit") {
		addButton(0, "Black", CharCreation.confirmFurColour, "black");
		addButton(1, "Gray", CharCreation.confirmFurColour, "white");
		addButton(2, "White", CharCreation.confirmFurColour, "white");
		addButton(3, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(4, "Cream", CharCreation.confirmFurColour, "cream");
	}
	if (player.race() == "sergal") {
		addButton(0, "Cream", CharCreation.confirmFurColour, "cream");
		addButton(1, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(2, "Black", CharCreation.confirmFurColour, "black");
		addButton(3, "Gray", CharCreation.confirmFurColour, "gray");
		addButton(4, "White", CharCreation.confirmFurColour, "white");
		addButton(5, "Auburn", CharCreation.confirmFurColour, "auburn");
		addButton(5, "Red", CharCreation.confirmFurColour, "red");
		addButton(6, "Orange", CharCreation.confirmFurColour, "orange");
		addButton(7, "Yellow", CharCreation.confirmFurColour, "yellow");
		addButton(8, "Green", CharCreation.confirmFurColour, "green");
		addButton(9, "Cyan", CharCreation.confirmFurColour, "cyan");
		addButton(10, "Blue", CharCreation.confirmFurColour, "blue");
		addButton(11, "Indigo", CharCreation.confirmFurColour, "indigo");
		addButton(12, "Purple", CharCreation.confirmFurColour, "purple");
	}
	if (player.race() == "dragon" || player.race() == "lizan") {
		addButton(0, "Bronze", CharCreation.confirmFurColour, "bronze");
		addButton(1, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(2, "Black", CharCreation.confirmFurColour, "black");
		addButton(3, "Gray", CharCreation.confirmFurColour, "gray");
		addButton(4, "White", CharCreation.confirmFurColour, "white");
		addButton(5, "Auburn", CharCreation.confirmFurColour, "auburn");
		addButton(5, "Red", CharCreation.confirmFurColour, "red");
		addButton(6, "Orange", CharCreation.confirmFurColour, "orange");
		addButton(7, "Yellow", CharCreation.confirmFurColour, "yellow");
		addButton(8, "Green", CharCreation.confirmFurColour, "green");
		addButton(9, "Cyan", CharCreation.confirmFurColour, "cyan");
		addButton(10, "Blue", CharCreation.confirmFurColour, "blue");
		addButton(11, "Indigo", CharCreation.confirmFurColour, "indigo");
		addButton(12, "Purple", CharCreation.confirmFurColour, "purple");
	}
	else {
		addButton(0, "Blonde", CharCreation.confirmFurColour, "blonde");
		addButton(1, "Brown", CharCreation.confirmFurColour, "brown");
		addButton(2, "Black", CharCreation.confirmFurColour, "black");
		addButton(3, "Red", CharCreation.confirmFurColour, "red");
		addButton(4, "Gray", CharCreation.confirmFurColour, "gray");
		addButton(5, "White", CharCreation.confirmFurColour, "white");
		addButton(6, "Auburn", CharCreation.confirmFurColour, "auburn");
	}
    addButton(14, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.confirmFurColour = function(colour) {
    player.furColor = colour;
    CharCreation.customizeCharacterMenu();
}

CharCreation.menuBeardSettings = function() {
	clearOutput();
	outputText("<b>Beard:</b> " + player.beardDescript());
	menu();
	addButton(0, "Style", CharCreation.beardStyleChoices);
	addButton(1, "Length", CharCreation.beardLengthChoices);
	addButton(4, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.beardStyleChoices = function() {
	menu();
	addButton(0, "No Beard", CharCreation.beardStyleSet, "none");
	addButton(1, "Normal", CharCreation.beardStyleSet, "normal");
	addButton(2, "Goatee", CharCreation.beardStyleSet, "goatee");
	addButton(14, "Back", CharCreation.menuBeardSettings);
}
CharCreation.beardStyleSet = function(choice) {
	if (choice == "none") {
		player.beardLength = 0;
	}
	if (choice == "normal") {
		player.beardType = BEARD_NORMAL;
		if (player.beardLength < 1) player.beardLength = 1;
	}
	if (choice == "goatee") {
		player.beardType = BEARD_GOATEE;
		if (player.beardLength < 1) player.beardLength = 1;
	}
	CharCreation.menuBeardSettings();
}
CharCreation.beardLengthChoices = function() {
	menu();
	addButton(0, "0.1 inch", CharCreation.beardLengthSet, 0.1);
	addButton(1, "0.3 inch", CharCreation.beardLengthSet, 0.3);
	addButton(2, "0.5 inch", CharCreation.beardLengthSet, 0.5);
	addButton(3, "1 inch", CharCreation.beardLengthSet, 1);
	addButton(4, "1.5 inch", CharCreation.beardLengthSet, 1.5);
	addButton(5, "2 inch", CharCreation.beardLengthSet, 2);
	addButton(6, "2.5 inch", CharCreation.beardLengthSet, 2.5);
	addButton(7, "3 inch", CharCreation.beardLengthSet, 3);
	addButton(8, "4 inch", CharCreation.beardLengthSet, 4);
	addButton(9, "5 inch", CharCreation.beardLengthSet, 5);
	addButton(10, "6 inch", CharCreation.beardLengthSet, 6);
	addButton(11, "8 inch", CharCreation.beardLengthSet, 8);
	addButton(12, "10 inch", CharCreation.beardLengthSet, 10);
	addButton(13, "12 inch", CharCreation.beardLengthSet, 12);
	addButton(14, "Back", CharCreation.menuBeardSettings);
}
CharCreation.beardLengthSet = function(length) {
	player.beardLength = length;
	CharCreation.menuBeardSettings();
}

//Height selection
CharCreation.chooseHeight = function() {
	clearOutput();
	var minHeight = 48;
	var maxHeight = 84;
	if (player.race() == "goblin") {
		minHeight = 24;
		maxHeight = 48;
	}
	if (player.race() == "dwarf") {
		minHeight = 30;
		maxHeight = 48;
	}
	if (player.race() == "kobold") {
		minHeight = 24;
		maxHeight = 48;
	}
	if (player.race() == "orc") {
		minHeight = 60;
		maxHeight = 96;
	}
	outputText("Choose your height in inches.<br><br>");
    outputText("<input type=\"number\" min=\"" + minHeight + "\" max=\"" + maxHeight + "\" value=\"" + player.tallness + "\" name=\"inputheight\" id=\"inputheight\">");
	menu();
	addButton(0, "Set Height", CharCreation.chooseHeightPrompt);
	addButton(4, "Cancel", CharCreation.customizeCharacterMenu);
}

CharCreation.chooseHeightPrompt = function() {
	var temp = document.getElementById("inputheight").value;
	if (document.getElementById("inputheight").value.length < 1) {
		outputText("You must choose a height. Off you go!");
		doNext(CharCreation.chooseHeight);
		return;
	}
	clearOutput();
	outputText("You will be " + Math.floor(temp / 12) + " feet and " + (temp % 12) + " inches tall. Is that okay with you?");
	doYesNo(createCallBackFunction(CharCreation.chooseHeightConfirm, temp), CharCreation.chooseHeight)
}
CharCreation.chooseHeightConfirm = function(height) {
	player.tallness = height;
	CharCreation.customizeCharacterMenu();
}

CharCreation.menuBreastSize = function() {
	clearOutput();
	outputText("<b>Breast Size</b>: " + player.breastCup(0));
	menu();
	addButton(0, "Flat", CharCreation.setBreastSize, BREAST_CUP_FLAT);
	addButton(1, "A-cup", CharCreation.setBreastSize, BREAST_CUP_A);
	if (player.gender == GENDER_FEMALE || (player.gender == GENDER_HERM && player.feminity >= 60)) {
		addButton(2, "B-cup", CharCreation.setBreastSize, BREAST_CUP_B);
		addButton(3, "C-cup", CharCreation.setBreastSize, BREAST_CUP_C);
		addButton(4, "D-cup", CharCreation.setBreastSize, BREAST_CUP_D);
		addButton(5, "DD-cup", CharCreation.setBreastSize, BREAST_CUP_DD);
		addButton(6, "E-cup", CharCreation.setBreastSize, BREAST_CUP_E);
		addButton(7, "EE-cup", CharCreation.setBreastSize, BREAST_CUP_EE);
		addButton(8, "F-cup", CharCreation.setBreastSize, BREAST_CUP_F);
		addButton(9, "FF-cup", CharCreation.setBreastSize, BREAST_CUP_FF);
		addButton(10, "G-cup", CharCreation.setBreastSize, BREAST_CUP_G);
		addButton(11, "GG-cup", CharCreation.setBreastSize, BREAST_CUP_GG);
		addButton(12, "H-cup", CharCreation.setBreastSize, BREAST_CUP_H);
		addButton(13, "HH-cup", CharCreation.setBreastSize, BREAST_CUP_HH);
	}
	addButton(14, "Back", CharCreation.customizeCharacterMenu);
}
CharCreation.setBreastSize = function(cupSize) {
	player.breastRows[0].breastRating = cupSize;
	CharCreation.menuBreastSize();
}

CharCreation.menuCockSize = function(selectedCategory) {
	clearOutput();
	outputText("<b>Cock Size</b>: " + player.biggestCockLength() + " inches long, " + player.thickestCockThickness() + " inches thick");
	menu();
	if (selectedCategory == undefined) {
		addButton(0, "Length", CharCreation.menuCockSize, 0);
		addButton(1, "Girth", CharCreation.menuCockSize, 1);
		addButton(4, "Back", CharCreation.customizeCharacterMenu);
	}
	else if (selectedCategory == 0) {
		addButton(0, "4 inches long", CharCreation.setCockSize, 4, true);
		addButton(1, "4.5 inches long", CharCreation.setCockSize, 4.5, true);
		addButton(2, "5 inches long", CharCreation.setCockSize, 5, true);
		addButton(3, "5.5 inches long", CharCreation.setCockSize, 5.5, true);
		addButton(4, "6 inches long", CharCreation.setCockSize, 6, true);
		addButton(5, "6.5 inches long", CharCreation.setCockSize, 6.5, true);
		addButton(6, "7 inches long", CharCreation.setCockSize, 7, true);
		addButton(7, "7.5 inches long", CharCreation.setCockSize, 7.5, true);
		addButton(8, "8 inches long", CharCreation.setCockSize, 8, true);
		addButton(9, "8.5 inches long", CharCreation.setCockSize, 8.5, true);
		addButton(14, "Back", CharCreation.menuCockSize);
	}
	else if (selectedCategory == 1) {
		addButton(0, "0.6 inches thick", CharCreation.setCockSize, 0.6, false);
		addButton(1, "0.7 inches thick", CharCreation.setCockSize, 0.7, false);
		addButton(2, "0.8 inches thick", CharCreation.setCockSize, 0.8, false);
		addButton(3, "0.9 inches thick", CharCreation.setCockSize, 0.9, false);
		addButton(4, "1.0 inches thick", CharCreation.setCockSize, 1.0, false);
		addButton(5, "1.1 inches thick", CharCreation.setCockSize, 1.1, false);
		addButton(6, "1.2 inches thick", CharCreation.setCockSize, 1.2, false);
		addButton(7, "1.3 inches thick", CharCreation.setCockSize, 1.3, false);
		addButton(8, "1.4 inches thick", CharCreation.setCockSize, 1.4, false);
		addButton(9, "1.5 inches thick", CharCreation.setCockSize, 1.5, false);
		addButton(14, "Back", CharCreation.menuCockSize);
	}
}
CharCreation.setCockSize = function(size, isLength) {
	if (isLength) {
		player.cocks[0].cockLength = size;
	}
	else {
		player.cocks[0].cockThickness = size;
	}
	CharCreation.menuCockSize();
}

//------------
// IN(TRO)DUCTION
//------------
Intro.inductionPartOne = function() {
	clearOutput();
	hideUpDown();
	setHeader("Outside the City");
	time.days = 0;
	time.hours = 18;
	time.minutes = 0;
	questFlags.inductionProgress = 0;
	outputText("You wake up after what seemed like an eternity of being blacked out and as the blurry surroundings become more clearly visible, and your vision becoming normal again, you realize that you appear to be in a wide open, dimly-lit plains.<br><br>");
	outputText("As you finish re-assessing your appearance, you take your time to reassess your surroundings. Every direction you see appears to be mostly barren and desolate save for the occasional rocks and strange plant life, and the darkness in the far distance. Except for one, and it easily catches your attention. It's what appears to be a city.<br><br>");
	showStats();
	menu();
	addButton(0, "Approach City", Intro.inductionPartTwo); hint(0, "You should make your trek to the city. Perhaps the city will be safer in a completely unfamiliar location?");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartTwo = function() {
	clearOutput();
	setHeader("City Outskirts");
	outputText("You walk in the direction of the city in the hope that the city will offer protection from whatever might be lurking out in the open fields. As you get closer, the city gives off an extremely ominous vibe with the strange glowing green lights emitting from the windows, the buildings appearing twisted and fanged. As you reach the city perimeter, a massive pair of gates tower before you. In front of the gate, two statues (guards?) stare at you unmoving in their constant vigil.<br><br>");
	outputText("It looks like you have no choice.");
	Time.advanceMinutes(30);
	menu();
	addButton(0, "Approach Gate", Intro.inductionPartThree); hint(0, "You should make your trek to the city. Perhaps the city will be safer in a completely unfamiliar location?");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartThree = function() {
	clearOutput();
	setHeader("City Gate");
	outputText("Curiosity gets the best of you as you walk towards the guards. The guards turn their gaze toward you. One of them speaks some words you can understand in your language to your surprise.<br><br>");
	outputText("\"<i>Welcome to the City of Nodd, Chosen One.</i>\"<br><br>");
	outputText("Chosen One, eh? Did the guard call you the Chosen One? You're not even sure why.<br><br>");
	outputText("\"This way to Induction, please.\" The guard commands as the large gates creak open to reveal a dimly-lit passage.");
	outputText("");
	Time.advanceMinutes(30);
	menu();
	addButton(0, "Follow Passage", Intro.inductionPartFour); hint(0, "There is ony one way to go from there and it's down that passage.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartFour = function() {
	clearOutput();
	setHeader("Gate Passageway");
	outputText("You step into the passage and you hear the thud of the gate closing behind you. Looks like there is no turning back now. You press forward, the passageway thankfully linear and after a while of walking, you reach a glass doorway that leads to a room of dark, chitinous metal, illuminated by eerie green lighting.<br><br>");
	outputText("A plaque at the top of the doorframe declares it to be 'Probing Assessment'");
	Time.advanceMinutes(10);
	menu();
	addButton(0, "Open Door", Intro.inductionPartFive); hint(0, "Open the glass door and proceed into the next room.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartFive = function() {
	clearOutput();
	setHeader("Probing Assessment Chamber");
	outputText("The door opens with surprising ease on your part and you step into the room. It still is as dark as the outside, only the strange green light fills the interior, enough for you to see the the room just fine.<br><br>");
	outputText("Several tall creatures of varying species and genders appear in the room, similarly clad to those outside the gates except less naked and more covered. Some of them keep watch while some of them appear to be communicating and working in some way.<br><br>");
	outputText("They turn to you, obviously interested in your presence. A male, gaunt reptile-looking creature speaks in a soft yet compelling tone.<br><br>");
	outputText("\"<i>Welcome, Outsider. Please step forward for your assessment probing.</i>\"<br><br>");
	Time.advanceMinutes(10);
	menu();
	addButton(0, "Step Forward", Intro.inductionPartSix); hint(0, "You have a slightly bad feeling about this but you have no choice.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartSix = function() {
	clearOutput();
	setHeader("Probing Assessment Chamber");
	outputText("\"Now tell me about your name, species name, your gender, everything...\" The male asks, voice sounding fairly raspy.");
	Time.advanceMinutes(10);
	doNext(CharCreation.customizeCharacterMenu);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartSeven = function() {
	clearOutput();
	outputText("\"<i>Very well. Thank you for providing me with your details. Now, you need to head over to that pod, seat yourself and we will see to the rest.</i>\"");
	outputText("A long-snouted, toothed being points to a strange, cradle-like device with all sorts of tools, implements, and appendages that you are not familiar with. It looks like an examination table but a sense of dread washes over you.");
	menu();
	addButton(0, "Approach 'Exam Table'", Intro.inductionPartEight); hint(0, "You have a very bad feeling about this... " + (silly ? "Like, OH MY FUCKING GOD, THEY ARE GOING TO ANALLY PROBE ME!" : ""));
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionPartEight = function() {
	clearOutput();
	outputText("A female, horned and long-tailed stone-like figure guides you to the strange pod and instructs you to sit down, get yourself comfortable.<br><br>");
	outputText("What will you do?");
	menu();
	addButton(0, "Take a Seat", Intro.inductionChoiceTakeASeatDear, false);
	addButton(1, "Will it Hurt?", Intro.inductionChoiceTakeASeatDear, true);
	addButton(2, "Try to Escape", Intro.inductionChoiceTryToEscape);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}

Intro.inductionChoiceTakeASeatDear = function(askedQuestion) {
	clearOutput();
	if (askedQuestion) {
		outputText("\"<i>Will it hurt?</i>\" You ask in concern and doubt.<br><br>");
		outputText("\"<i>Quite possibly.</i>\" She responds, and adds. \"<i>If you wish to avoid experiencing what we will put you through, I can cast Somnolesce on you, it should temporarily put you to sleep.</i>\"<br><br>");
		outputText("Would you like the female to cast the sleep-inducing spell on you? This will allow you to avoid experiencing such traumatizing ordeal.");
		doYesNo(Intro.inductionSkipTableViolation, Intro.inductionGetViolatedByExamTable);
	}
	else {
		outputText("You climb into the strange pod and lay there, it feels comfortable. Somehow.<br><br>");
		doNext(Intro.inductionGetViolatedByExamTable);
	}
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}
Intro.inductionChoiceTryToEscape = function() {
	clearOutput();
	outputText("Placeholder: You try to escape only to fail and get captured, strapped to the examination table to be violated.");
	doNext(Intro.inductionGetViolatedByExamTable);
}

Intro.inductionGetViolatedByExamTable = function() {
	clearOutput();
	outputText("Placeholder: You get violated by the exam table. There will be variants based on your genitals and features. After the ordeal, you are ushered to a small theatre room.<br><br>");
	doNext(Intro.inductionPartNine);
}
Intro.inductionSkipTableViolation = function() {
	clearOutput();
	outputText("You " + (silly ? "Nodd" : "nod") + " at the request and the female brings up what appears to be a wand of some sort and it glows. As the wand makes contact with you which feels oddly soothing and calming, you quickly black out.<br><br>");
	outputText("<b>Some time passes...</b><br><br>");
	outputText("You open your eyes once again, everything blurry for a bit and slowly clearing up. You're in the same room and the masked, stone-like figure speaks coldly but reassuring, \"<i>Your assessment probing complete. Please proceed down the hall.</i>\"");
	outputText("You try to get up only to find out that you feel a bit sore all over and it takes a while for you to climb out and once you do stand upright, you walk down the metallic, dim hall to the next room.<br><br>");
	doNext(Intro.inductionPartNine);
}

Intro.inductionPartNine = function() {
	clearOutput();
	setHeader("'Theatre'");
	outputText("You arrive at a room, it appears to be a small theatre of sorts, there aren't a lot of seats. Once you sit down, the screen begins to come on...<br><br>");
	outputText("A strange crest, likely the symbol of Nodd, reveals itself on the screen and the texts reveal one letter at a time and when fully revealed, the text reads <font color=\"#00F080\">\"THE COUNCIL OF NODD WELCOMES YOU\"</color><br><br>");
	outputText("The screen fades to black and another slide reveals itself.<br><br>");
	outputText("<font color=\"#00F080\">\"<i>COMPLIANCE IS MANDATORY. Citizens must obey all Council orders, immediately and without question. Resistance will be dealt with accordingly.</i>\"</color><br><br>");
	outputText("Seems simple enough. After all, it's a city with laws. What do you expect? The screen fades and yet another slide reveals itself.<br><br>");
	outputText("<font color=\"#00F080\">\"<i>INDULGE, INDULGE, INDULGE. The Council encourages citizens to partake of the city's cornucopia of food, drugs, sex, and entertainment.</i></color>\"<br><br>");
	outputText("Sounds like a paradise, isn't it? A city that encourages those activities, this could be your ultimate getaway. The screen fades and an ominous slide reveals itself.<br><br>");
	outputText("<font color=\"#00F080\">\"<i>REPORT INACTIVITY. Any citizens who avoids indulging and avoids Council detection - however unlikely - must be reported immediately. Harboring an inactive citizen is grounds for severe punishment.</i>\"</color><br><br>");
	outputText("Gulp. What do they mean, you can be punished for not indulging in the pleasures of the City? Seems silly. The screen, once again, fades and a seemingly-helpful slide reveals itself.<br><br>");
	outputText("<font color=\"#00F080\">\"<i>JOIN AN ARCANE HOUSE. Citizens curious about magic use are encouraged to join one of the six official Arcane Houses. Here one will be granted access to powerful spells, useful amenities, and ancient rituals.</i>\"</color><br><br>");
	outputText("You suppose this could be useful if the spells available within the City could aid you in your survival. The screen, once again, fades and a hope-inducing slide reveals itself.<br><br>");
	outputText("<font color=\"#00F080\">\"<i>IMMORTALITY IS POSSIBLE. Citizens of utmost excellence will receive the blessing of immortality, and will be resurrected an infinite number of times.</i>\"</color><br><br>");
	outputText("Okay, that probably sounds too good to be true but... perhaps. Immortality? It could probably aid you greatly. The screen finally fades to black with no more slides. You stand up and you're led to another room.<br><br>");
	doNext(Intro.egoBracerGET);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}

Intro.egoBracerGET = function() {
	clearOutput();
	outputText("As soon as you enter the room, a door closes behind you with a gentle thud and you are presented with a strange device you are not familiar with.<br><br>");
	outputText("\"<i>This is an Ego Bracer. It will help you get your bearings in Nodd. Everything you need to know is in the User's Manual.</i>\"<br><br>");
	outputText("You take the Ego Bracer and attempt to put it on your left wrist and after some perseverance, the bracer seemingly squirms and moves about a bit as if alive, and it fits nicely against your wrist without any signs of discomfort.<br><br>");
	outputText("\"<i>Your Ego Bracer will create an Ego File based on your identity and preferences, and will update with your time spent in Nodd. Make sure it looks right before doing much exploration.</i>\"");
	outputText("<b>Key Item Acquired: 800 Series Omnillian Ego Bracer</b><br><br>");
	player.createKeyItem(KeyItems.EgoBracer, 0, 0, 0, 0);
	outputText("The final door opens to reveal the City itself in its full glory.");
	menu();
	addButton(0, "Proceed", Intro.advanceToGame);
	addButton(1, "Read Manual", window.open, "https://docs.google.com/document/d/1ow7uoGJqfiBYQmHPzyNy0y6loJM6rSlhbLTzqzMVGMI/"); hint(1, "Read the User's Manual for your newly-acquired Ego Bracer. This should give you an good idea on how to use your new acqusition.");
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}

Intro.advanceToGame = function() {
	showMenus();
	questFlags.inductionProgress = 10; // Quest is now marked as complete.
	clearOutput();
	outputText("<b>Quest Completed: Induction</b><br><br>");
	outputText("Your new adventures await in the City of Nodd, now go forth and indulge!");
	doNext(Locations.DarklingRow.enter);
	addButton(4, "Visit Noddule", window.open, "https://www.cityofnodd.com/induction", null, null, "Experience the Induction Noddule for yourself!");
}