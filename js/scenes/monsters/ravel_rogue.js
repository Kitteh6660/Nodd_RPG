RavelRogueScene = [];

function RavelRogue() {
    //Name and references
	this.a = "a ";
	this.name = "Ravel rogue";
	this.refName = this.name;
	this.isAre = "is";
	this.heShe = "he";
	this.himHer = "him";
	this.hisHer = "his";
	
	//Stats
	this.str = 8;
	this.dex = 11;
	this.end = 7;
	this.inte = 6;
	this.wil = 5;
	this.cha = 6;
	this.lib = 25;
	this.cor = 30;
	//Combat stats
	this.HP = this.maxHP();
	this.MP = this.maxMP();
	this.lust = 40;
	//Advancement
	this.level = 2;
	this.gloam = 8 + rand(6);
    //Drops
    this.clearDrops();
    this.randomize();
    //Battle variables
    this.lustVuln = 1;
	this.temperment = 1; //TEMPERMENT_LUSTY_GRAPPLES
    //Appearance
    this.tallness = 60 + rand(24);
    this.hipRating = HIP_RATING_BOYISH;
    this.buttRating = BUTT_RATING_TIGHT;
    this.skinTone = "red";
    this.hairColor = "black";
    this.hairLength = 5;
	this.skinType = SKIN_TYPE_FEATHERS;
	this.wingType = WING_TYPE_FEATHERED_LARGE;
	//Sexual characteristics
    this.createCock(rand(2) + 8, 2, CockTypesEnum.DOG);
    this.balls = 2;
    this.ballSize = 3;
    this.createBreastRow(0);
    this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
    this.ass.analWetness = ANAL_WETNESS_NORMAL;

	this.battleDesc = "The Ravel before you stares at you with malicious intent. ";

	//Victory/defeat
	this.victory = RavelRogue.victoryMenu;
	this.defeat = cleanupAfterCombat;
}
RavelRogue.prototype = new Creature();
RavelRogue.prototype.constructor = RavelRogue;

RavelRogue.prototype.randomize = function() {
	if (this.level >= 4 && rand(100) >= 70 - ((this.level - 4) * 5)) {
		this.weapon = Items.Weapons.NoddDagger;
		this.addDrop(Items.Weapons.NoddDagger, 10);
		this.battleDesc += "Clenched in his right hand is an organic-looking dagger of Noddish design. ";
	}
	else {
		this.weapon = Items.Weapons.Dagger;
		this.addDrop(Items.Weapons.Dagger, 30);
		this.battleDesc += "Clenched in his right hand is an ordinary-looking, metal dagger that has seen plenty of uses. ";
	}
	if (this.level >= 3 && rand(100) >= 50 - ((this.level - 3) * 2.5)) {
		var armourSelect = rand(20);
		if (armourSelect < 5) {
			this.armor = Items.Armor.NurkVulturewear;
			this.addDrop(Items.Armor.NurkVulturewear, 5);
			this.battleDesc += "The Ravel appears to be covered in an odd clothing seemingly made from the hides of some Vurk. ";
		}
		else if (armourSelect < 10) {
			this.armor = Items.Armor.RavelVulturewear;
			this.addDrop(Items.Armor.RavelVulturewear, 5);
			this.battleDesc += "The Ravel appears to be covered in an odd clothing seemingly made from the hides of his own kind. ";
		}
		else if (armourSelect < 15) {
			this.armor = Items.Armor.LehltVulturewear;
			this.addDrop(Items.Armor.LehltVulturewear, 5);
			this.battleDesc += "The Ravel appears to be covered in an odd clothing seemingly made from the hides of some goat-like creatures. ";
		}
		else {
			this.armor = Items.Armor.SlyneVulturewear;
			this.addDrop(Items.Armor.SlyneVulturewear, 5);
			this.battleDesc += "The Ravel appears to be covered in an odd clothing seemingly made from the hides of a long-snouted reptilian. "
		}
	}
}

//------------
// COMBAT
//------------
RavelRogue.prototype.doAI = function() {
	this.attack();
	combatRoundOver();
}

RavelRogue.lustMagicAttack = function() {
    outputText("You see " + monster.a + monster.refName + " make sudden arcane gestures at you! ");
    player.changeLust(player.lib / 10 + player.cor / 10 + 10, true);
    //Lust check
    if (player.lust < 30) outputText("You feel strangely warm. ");
    if (player.lust >= 30 && player.lust < 60) outputText("Blood rushes to your groin as a surge of arousal hits you, making your knees weak. ");
    if (player.lust >= 60) outputText("Images of yourself fellating and fucking the Ravel assault your mind, unnaturally arousing you. ");
    //Genitals check
    if (player.cocks.length > 0) {
        if (player.lust >= 60)
            outputText("You feel your " + player.multiCockDescriptLight() + " dribble pre-cum.");
        else if (player.lust >= 30 && player.cocks.length == 1)
            outputText("Your " + player.cockDescript(0) + " hardens, distracting you further.");
        else if (player.lust >= 30 && player.cocks.length > 1)
            outputText("Your " + player.multiCockDescriptLight() + " harden uncomfortably.");
        if (player.hasVagina()) outputText(" ");
    }
    if (player.lust >= 60 && player.hasVagina()) {
        switch (player.vaginas[0].vaginalWetness) {
            case VAGINA_WETNESS_NORMAL:
                outputText("Your " + player.allVaginaDescript() + " dampen" + (player.vaginas.length > 1 ? "" : "s") + " perceptibly.");
                break;
            case VAGINA_WETNESS_WET:
                outputText("Your crotch becomes sticky with girl-lust.");
                break;
            case VAGINA_WETNESS_SLICK:
                outputText("Your " + player.allVaginaDescript() + " become" + (player.vaginas.length > 1 ? "" : "s") + " sloppy and wet.");
                break;
            case VAGINA_WETNESS_DROOLING:
                outputText("Thick runners of girl-lube stream down the insides of your thighs.");
                break;
            case VAGINA_WETNESS_SLAVERING:
                outputText("Your " + player.allVaginaDescript() + " instantly soak" + (player.vaginas.length > 1 ? "" : "s") + " your groin.");
            default: //Dry vaginas are unaffected

        }
    }
    outputText("<br>");
}

RavelRogue.victoryMenu = function() {
	clearOutput();
	if (monster.HP <= 0) {
		outputText("The Ravel collapses, too badly beaten to put up any further fight.<br><br>");
	}
	else {
		outputText("The Ravel feverishly attempts to masturbate himself, being overwhelmed by such levels of arousal.<br><br>");
	}
	menu();
	if (player.lust >= 33) {
		if (player.hasCock()) {
			addButton(0, "Fuck Him", RavelRogue.buttStuffRavel); hint(0, "Give the Ravel a good butt-stuffing.");
			addButton(1, "Make Him Suck", RavelRogue.makeRavelSuck); hint(1, "Make the Ravel suck you off with his beak.");
		}
		else {
			addButtonDisabled(0, "Fuck Him", "You need to have a penis for that.");
			addButtonDisabled(1, "Make Him Suck", "You need to have a penis for that.");
		}
		if (player.hasVagina()) {
			addButton(2, "Ride Him (Vag)", RavelRogue.rideRavelVaginally); hint(2, "Give the Ravel a good butt-stuffing.");
		}
		else addButtonDisabled(2, "Ride Him (Vag)", "You need to have a vagina for that.");
		addButton(3, "Ride Him (Anal)", RavelRogue.rideRavelAnally); hint(3, "Have the Ravel stuff you anally.");
	}
	else {
		addButtonDisabled(0, "Fuck Him", "You are not aroused enough to consider using him.");
		addButtonDisabled(1, "Make Him Suck", "You are not aroused enough to consider using him.");
		addButtonDisabled(2, "Ride Him (Vag)", "You are not aroused enough to consider using him.");
		addButtonDisabled(3, "Ride Him (Anal)", "You are not aroused enough to consider using him.");
	}
	if (monster.HP <= 0) {
		addButton(10, "Kill Him", RavelRogue.killRavel);
	}
	else {
		addButtonDisabled(10, "Kill Him", "You can only do that when you've beaten the Ravel up considerably.");
	}
	addButton(14, "Leave", cleanupAfterCombat);
}

RavelRogue.killRavel = function() {
	clearOutput();
	outputText("You make quick work of the Ravel and the now-lifeless corpse lays on the ground. You check for any loot.");
	if (player.location == "darkling_row") locFlags.darklingRowKillCount++;
	monster.additionalXP += monster.level + 3;
	cleanupAfterCombat();
}

RavelRogue.buttStuffRavel = function() {
	clearOutput();
	outputText("You give Ravel a good fucking with your dick. This scene is just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

RavelRogue.makeRavelSuck = function() {
	clearOutput();
	outputText("You make Ravel suck you off and cum into his maw. Sadly, just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

RavelRogue.rideRavelVaginally = function() {
	clearOutput();
	outputText("In this scene, you will ride Ravel's penis vaginally. Alas, this is only a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

RavelRogue.rideRavelAnally = function() {
	clearOutput();
	outputText("In this scene, you will ride Ravel's penis anally. Alas, this is only a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}