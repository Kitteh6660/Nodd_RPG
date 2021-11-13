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
	this.battleDesc = "A Nurk snarls at you with the intent of robbing whatever valuables you might have. He is a rather short figure but then again, that is typical for a Nurk. ";
	
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
    //Drops
	this.clearDrops();
	this.randomize();
    //Battle variables
    this.lustVuln = 1;
	this.poisonBottles = 1 + rand(2);
    //Appearance
    this.tallness = 30 + rand(18);
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

	//Victory/defeat
	this.victory = NurkRogue.victoryMenu;
	this.defeat = cleanupAfterCombat;
}
NurkRogue.prototype = new Creature();
NurkRogue.prototype.constructor = NurkRogue;

NurkRogue.prototype.randomize = function() {
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
			this.battleDesc += "The Nurk appears to be covered in an odd clothing seemingly made from the hides of some Vurk. ";
		}
		else if (armourSelect < 10) {
			this.armor = Items.Armor.RavelVulturewear;
			this.addDrop(Items.Armor.RavelVulturewear, 5);
			this.battleDesc += "The Nurk appears to be covered in an odd clothing seemingly made from the hides of his own kind. ";
		}
		else if (armourSelect < 15) {
			this.armor = Items.Armor.LehltVulturewear;
			this.addDrop(Items.Armor.LehltVulturewear, 5);
			this.battleDesc += "The Nurk appears to be covered in an odd clothing seemingly made from the hides of some goat-like creatures. ";
		}
		else {
			this.armor = Items.Armor.SlyneVulturewear;
			this.addDrop(Items.Armor.SlyneVulturewear, 5);
			this.battleDesc += "The Nurk appears to be covered in an odd clothing seemingly made from the hides of a long-snouted reptilian. "
		}
	}
}

//------------
// COMBAT
//------------
NurkRogue.prototype.doAI = function() {
	switch(rand(3)) {
		case 0:
			if (this.poisonBottles > 0 && player.findStatusEffect(StatusEffects.Poison) < 0) {
				NurkRogue.poisonBottleThrow();
			}
			else {
				this.attack();
			}
			break;
		default:
			this.attack();
	}
	combatRoundOver();
}

NurkRogue.poisonBottleThrow = function() {
	var hitChance = 40 + (monster.dex * 3);
	var evadeChance = 30 + (player.dex * 2);
	if (player.findPerk(PerkLib.Evasion)) evadeChance += 10;
	outputText("The Nurk pulls out a glass bottle filled with sloshing, noxious green liquid from his belt and " + (silly ? "yeets" : "throws") + " it at you! ");
	if (rand(100) < hitChance) {
		if (rand(100) < evadeChance) {
			outputText("You manage to avoid the poison-filled bottle in time as the bottle flies past you and shatters harmlessly!");
		}
		else if (player.armor.hasFlag(ITEM_FLAG_WATERPROOF)) {
			outputText("The bottle directly hits you right in the chest and the glass shatters but the nature of your shiny rubber suit makes the liquid slide off you harmlessly and pooling at your " + player.feet() + ".");
		}
		else {
			outputText("The bottle hits your exposed area and the glass shatters, the contents of the poison rapidly seeping into you!");
			player.createStatusEffect(StatusEffects.Poison, 3 + rand(3), 5, 0, 0);
		}
	}
	else {
		outputText("The bottle goes wide and flies past you, the bottle shattering harmlessly and the contents spill.");
	}
	monster.poisonBottles--;
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
	monster.additionalXP += monster.level + 3;
	cleanupAfterCombat();
}

NurkRogue.buttStuffNurk = function() {
	clearOutput();
	outputText("You give Nurk a good fucking with your dick. This scene is just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

NurkRogue.makeNurkSuck = function() {
	clearOutput();
	outputText("You make Nurk suck you off and cum into his maw. Sadly, just a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

NurkRogue.rideNurkVaginally = function() {
	clearOutput();
	outputText("In this scene, you will ride Nurk's penis vaginally. Alas, this is only a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}

NurkRogue.rideNurkAnally = function() {
	clearOutput();
	outputText("In this scene, you will ride Nurk's penis anally. Alas, this is only a placeholder.");
	player.orgasm();
	bonusGloam();
	cleanupAfterCombat();
}