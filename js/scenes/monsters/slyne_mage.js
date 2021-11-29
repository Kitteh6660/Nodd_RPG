SlyneSorceressScene = [];

function SlyneSorceress() {
    //Name and references
	this.a = "a ";
	this.name = "Slyne Sorceress";
	this.refName = this.name;
	this.isAre = "is";
	this.heShe = "she";
	this.himHer = "her";
	this.hisHer = "her";
	
	//Stats
	this.str = 7;
	this.dex = 8;
	this.end = 8;
	this.inte = 11;
	this.wil = 10;
	this.cha = 10;
	this.lib = 35;
	this.cor = 50;
	//Combat stats
	this.HP = this.maxHP();
	this.MP = this.maxMP();
	this.lust = 40;
	//Advancement
	this.level = 3;
	this.gloam = 10 + rand(7);
    //Drops
    this.clearDrops();
    this.addDrop(Items.Weapons.HornedWand, 5);
    //Battle variables
    this.lustVuln = 1;
	this.temperment = 1;
    //Appearance
    this.tallness = rand(50) + 6;
    this.hipRating = HIP_RATING_BOYISH;
    this.buttRating = BUTT_RATING_TIGHT;
    this.skinTone = "red";
    this.hairColor = "black";
    this.hairLength = 5;
	this.skinType = SKIN_TYPE_SCALES;
	this.wingType = WING_TYPE_NONE;
	//Equipment
	this.weapon = Items.Weapons.HornedWand;
	this.armor = Items.Armor.RibbedDuster;
	//Sexual characteristics
    this.createCock(rand(2) + 8, 2, CockTypesEnum.LIZARD);
	this.createVagina(1, 1);
    this.balls = 2;
    this.ballSize = 3;
    this.createBreastRow(0);
    this.ass.analLooseness = ANAL_LOOSENESS_TIGHT;
    this.ass.analWetness = ANAL_WETNESS_NORMAL;

	this.battleDesc = "The Slyne before you looks with sadistic intent, clearly showing she is up to no good as emphasized by her grinning, long and toothy snout.";

	//Victory/defeat
	this.victory = SlyneSorceress.victoryMenu;
	this.defeat = cleanupAfterCombat;
}
SlyneSorceress.prototype = new Creature();
SlyneSorceress.prototype.constructor = SlyneSorceress;

//------------
// COMBAT
//------------
SlyneSorceress.prototype.doAI = function() {
	switch(rand(3)) {
		case 0:
			if (this.MP >= 20) {
				SlyneSorceress.lustMagicAttack();
			}
			break;
		default:
			this.attack();
	}
	combatRoundOver();
}

SlyneSorceress.lustMagicAttack = function() {
    outputText("You see " + monster.a + monster.refName + " make sudden arcane gestures at you! ");
    player.changeLust(player.lib / 10 + player.cor / 10 + 10, true);
    //Lust check
    if (player.lust < 30) outputText("You feel strangely warm. ");
    if (player.lust >= 30 && player.lust < 60) outputText("Blood rushes to your groin as a surge of arousal hits you, making your knees weak. ");
    if (player.lust >= 60) outputText("Images of yourself fellating and fucking the Slyne assault your mind, unnaturally arousing you. ");
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
	monster.MP -= 20;
    outputText("<br>");
}

SlyneSorceress.victoryMenu = function() {
	clearOutput();
	if (monster.HP <= 0) {
		outputText("The Slyne collapses, too badly beaten to put up any further fight.<br><br>");
	}
	else {
		outputText("The Slyne feverishly attempts to masturbate herself, being overwhelmed by such levels of arousal.<br><br>");
	}
	menu();
	if (player.lust >= 33) {
		if (player.hasCock()) {
			addButton(0, "Fuck Her", SlyneSorceress.buttStuffSlyne); hint(0, "Give the Slyne a good butt-stuffing.");
			addButton(1, "Make Her Suck", SlyneSorceress.makeSlyneSuck); hint(1, "Make the Slyne suck you off with her long snout.");
		}
		else {
			addButtonDisabled(0, "Fuck Her", "You need to have a penis for that.");
			addButtonDisabled(1, "Make Her Suck", "You need to have a penis for that.");
		}
		if (player.hasVagina()) {
			addButton(2, "Scissor", SlyneSorceress.scissorWithSlyne); hint(2, "Give the Slyne a good scissoring using girl-bits.");
		}
		else addButtonDisabled(2, "Scissor", "You need to have a vagina for that.");
	}
	else {
		addButtonDisabled(0, "Fuck Her", "You are not aroused enough to consider using her.");
		addButtonDisabled(1, "Make Her Suck", "You are not aroused enough to consider using her.");
		addButtonDisabled(2, "Ride Her (Vag)", "You are not aroused enough to consider using her.");
		addButtonDisabled(3, "Ride Her (Anal)", "You are not aroused enough to consider usingherhim.");
	}
	if (monster.HP <= 0) {
		addButton(10, "Kill Her", SlyneSorceress.killSlyne);
	}
	else {
		addButtonDisabled(10, "Kill Her", "You can only do that when you've beaten the Slyne up considerably.");
	}
	addButton(14, "Leave", cleanupAfterCombat);
}

SlyneSorceress.killSlyne = function() {
	clearOutput();
	outputText("You make quick work of the Slyne and the now-lifeless corpse lays on the ground. You check for any loot.");
	monster.additionalXP += monster.level + 3;
	if (player.location == "darkling_row") locFlags.darklingRowKillCount++;
	cleanupAfterCombat();
}

SlyneSorceress.buttStuffSlyne = function() {
	clearOutput();
	outputText("You give Slyne a good fucking with your dick. This scene is just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

SlyneSorceress.makeSlyneSuck = function() {
	clearOutput();
	outputText("You make Slyne suck you off and cum into her maw. Sadly, just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

SlyneSorceress.scissorWithSlyne = function() {
	clearOutput();
	outputText("In this scene, you will rub the Slyne vaginally using your pussy. Alas, this is only a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}