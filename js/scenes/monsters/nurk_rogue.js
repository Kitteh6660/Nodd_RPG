NurkRogueScene = [];

function NurkRogue() {
    //Name and references
	this.a = "a ";
	this.name = "Nurk rogue";
	this.refName = this.name;
	this.isAre = "is";
	this.heShe = "he";
	this.himHer = "him";
	this.hisHer = "his";
	this.battleDesc = "A Nurk stares daggers at you, with a dagger in his right hand as if intent to mug you. He is a rather short figure but then again, that is typical for a Nurk. (Description will be filled out later, okay?)";
	
	//Stats
	this.str = 6;
	this.dex = 10;
	this.end = 6;
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
	this.level = 1;
	this.gloam = 5 + rand(5);
    //Battle variables
    this.weapon.equipmentName = Items.Weapons.Dagger.equipmentName;
    this.weapon.verb = "stab";
    this.armor.equipmentName = "leathery skin";
    this.lustVuln = 1;
	this.temperment = 1; //TEMPERMENT_LUSTY_GRAPPLES
    //Appearance
    this.tallness = rand(36) + 6;
    this.hipRating = HIP_RATING_BOYISH;
    this.buttRating = BUTT_RATING_TIGHT;
    this.skinTone = "grey";
    this.hairColor = "light grey";
    this.hairLength = 5;
	this.wingType = WING_TYPE_NONE;
	//Sexual characteristics
    this.createCock(rand(2) + 8, 2, CockTypesEnum.DOG);
    this.balls = 2;
    this.ballSize = 3;
    this.createBreastRow(0);
    this.ass.analLooseness = ANAL_LOOSENESS_STRETCHED;
    this.ass.analWetness = ANAL_WETNESS_NORMAL;

    //Drops
    this.clearDrops();
    this.addDrop(Items.Weapons.Dagger, 30);
    this.addDrop(Items.Weapons.NoddDagger, 1);

	//Victory/defeat
	this.victory = NurkRogue.victoryMenu;
	this.defeat = cleanupAfterCombat;
}
NurkRogue.prototype = new Creature();
NurkRogue.prototype.constructor = NurkRogue;

//------------
// COMBAT
//------------
NurkRogue.prototype.doAI = function() {
	switch(rand(4)) {
		case 0:
			NurkRogue.lustMagicAttack();
			break;
		default:
			this.attack();
	}
	combatRoundOver();
}

NurkRogue.lustMagicAttack = function() {
    outputText("You see " + monster.a + monster.refName + " make sudden arcane gestures at you! ");
    player.changeLust(player.lib / 10 + player.cor / 10 + 10, true);
    //Lust check
    if (player.lust < 30) outputText("You feel strangely warm. ");
    if (player.lust >= 30 && player.lust < 60) outputText("Blood rushes to your groin as a surge of arousal hits you, making your knees weak. ");
    if (player.lust >= 60) outputText("Images of yourself fellating and fucking the nurk assault your mind, unnaturally arousing you. ");
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

NurkRogue.victoryMenu = function() {
	clearOutput();
	if (monster.HP <= 0) {
		outputText("The Nurk collapses, too badly beaten to put up any further fight.<br><br>");
	}
	else {
		outputText("The Nurk feverishly attempts to masturbate himself, being overwhelmed by such levels of arousal.<br><br>");
	}
	menu();
	if (player.lust >= 33) {
		if (player.hasCock()) {
			addButton(0, "Fuck Him", NurkRogue.buttStuffNurk); hint(0, "Give the Nurk a good butt-stuffing.");
			addButton(1, "Make Him Suck", NurkRogue.makeNurkSuck); hint(1, "Make the Nurk suck you off.");
		}
		else {
			addButtonDisabled(0, "Fuck Him", "You need to have a penis for that.");
			addButtonDisabled(1, "Make Him Suck", "You need to have a penis for that.");
		}
		if (player.hasVagina()) {
			addButton(2, "Ride Him (Vag)", NurkRogue.rideNurkVaginally); hint(2, "Give the Nurk a good butt-stuffing.");
		}
		else addButtonDisabled(2, "Ride Him (Vag)", "You need to have a vagina for that.");
		addButton(3, "Ride Him (Anal)", NurkRogue.rideNurkAnally); hint(3, "Have the Nurk stuff you anally.");
	}
	else {
		addButtonDisabled(0, "Fuck Him", "You are not aroused enough to consider using him.");
		addButtonDisabled(1, "Make Him Suck", "You are not aroused enough to consider using him.");
		addButtonDisabled(2, "Ride Him (Vag)", "You are not aroused enough to consider using him.");
		addButtonDisabled(3, "Ride Him (Anal)", "You are not aroused enough to consider using him.");
	}
	if (monster.HP <= 0) {
		addButton(10, "Kill Him", NurkRogue.killNurk);
	}
	else {
		addButtonDisabled(10, "Kill Him", "You can only do that when you've beaten the Nurk up considerably.");
	}
	addButton(14, "Leave", cleanupAfterCombat);
}

NurkRogue.killNurk = function() {
	clearOutput();
	outputText("You make quick work of the Nurk and the now-lifeless corpse lays on the ground. You check for any loot.");
	if (player.location == "darkling_row") locFlags.darklingRowKillCount++;
	cleanupAfterCombat();
}

NurkRogue.buttStuffNurk = function() {
	clearOutput();
	outputText("You give Nurk a good fucking with your dick. This scene is just a placeholder.");
	player.orgasm();
	cleanupAfterCombat();
}

NurkRogue.makeNurkSuck = function() {
	clearOutput();
	outputText("You make Nurk suck you off and cum into his maw. Sadly, just a placeholder.");
	player.orgasm();
	cleanupAfterCombat();
}

NurkRogue.rideNurkVaginally = function() {
	clearOutput();
	outputText("In this scene, you will ride Nurk's penis vaginally. Alas, this is only a placeholder.");
	player.orgasm();
	cleanupAfterCombat();
}

NurkRogue.rideNurkAnally = function() {
	clearOutput();
	outputText("In this scene, you will ride Nurk's penis anally. Alas, this is only a placeholder.");
	player.orgasm();
	cleanupAfterCombat();
}