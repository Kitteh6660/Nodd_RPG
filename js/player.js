function Player() {
	this.a = "";
	this.name = "";
	this.refName = "You";
	this.isAre = "are";
	this.heShe = "you";
	this.himHer = "you";
	this.hisHer = "your";
	this.plural = true;
	//Appearance
	this.gender = 0; //0 genderless, 1 male, 2 female, 3 hermaphrodite
	this.tallness = 60; //Height in inches
	this.skinTone = "light";
	this.skinType = SKIN_TYPE_PLAIN;
	this.skinAdj = "";
	this.hairType = HAIR_NORMAL;
	this.hairColor = "brown";
	this.hairLength = 1;
	this.beardType = BEARD_NORMAL;
	this.beardLength = 0;
	this.furColor = "none";
	this.furColor2 = "none";
	this.furPattern = FUR_PATTERN_SOLID;
	
	this.earType = EARS_HUMAN;
	this.tailType = TAIL_TYPE_NONE;
	this.tailVenom = 0;
	this.tailRecharge = 0;
	this.lowerBody = LOWER_BODY_TYPE_HUMAN;
	
	this.tone = 50;
	this.thickness = 50;
	this.hipRating = HIP_RATING_BOYISH;
	this.buttRating = BUTT_RATING_AVERAGE;

	//Sexual Characteristics
	//Cocks
	this.cocks = [];
	this.balls = 0;
	this.ballSize = 0;
	this.hoursSinceCum = 0;
	this.cumMultiplier = 0;
	//Vaginas
	this.vaginas = [];
	//Ass
	this.ass = new Ass(1, 0, true);
	//Breasts
	this.breastRows = [];
	this.lactationMultiplier = 0;

    //Equipment
	this.weapon = Items.NOTHING;
	this.armor = Items.NOTHING;
	this.upperGarment = Items.NOTHING;
	this.lowerGarment = Items.NOTHING;

    this.teaseLevel = 0;
    this.teaseXP = 0;

	this.itemSlots = [];
    //Slots 0-9 are player inventory. Slots 10-55 are for gear storage options. See inventory.js for details
    // Initializing it here makes things easier.
    for (var i = 0; i < 56; i++) {
        this.itemSlots.push(new ItemSlot());
    }
	this.sexualPrefs = [];
	this.keyItems = [];
	this.statusEffects = [];
	this.perks = [];

    //Spells
    this.spells = [];

	//Stats points
	this.statPoints = 0;
	this.perkPoints = 0;

    this.location = "darkling_row";

	//Race
	this.originalGender = 0;
	this.originalRace = "human";
	
	//Some stats
	this.orgasmCounter = 0;
	this.badEndCounter = 0;
	
	//Personal Needs
	this.isSleeping = false; //To be used with time passing. Set to true before calling the advancement of time, and false after. While sleeping, restores HP and energy.
	this.energy = 60;
	this.hunger = 80;
	this.thirst = 80;
	this.bladder = 50;
	this.bowels = 25;
}
Player.prototype = new Creature();

var tempStr = 0;
var tempDex = 0;
var tempEnd = 0;
var tempInt = 0;
var tempWil = 0;
var tempCha = 0;

/*Player.prototype.lustVuln = {
    get lustVuln() {
        var percent = 100;
        //Level-based
        if (this.level < 10)
            percent -= (this.level - 1) * 3;
        else
            percent -= 27;
        //Perk-based
        if (this.findPerk(PerkLib.Resistance) >= 0)
            percent -= 10;
        //Apply cap
        if (percent < 25)
            percent = 25;
        return percent / 100;
    }
}*/

Player.prototype.minLust = function() {
    return 0;
}

//APPEARANCE
Player.prototype.bodyType = function() {
	var desc = "";
	//OLD STUFF
	//SUPAH THIN
	if (this.thickness < 10)
	{
		//SUPAH BUFF
		if (this.tone > 90)
			desc += "a lithe body covered in highly visible muscles";
		else if (this.tone > 75)
			desc += "an incredibly thin, well-muscled frame";
		else if (this.tone > 50)
			desc += "a very thin body that has a good bit of muscle definition";
		else if (this.tone > 25)
			desc += "a lithe body and only a little bit of muscle definition";
		else
			desc += "a waif-thin body, and soft, forgiving flesh";
	}
	//Pretty thin
	else if (this.thickness < 25)
	{
		if (this.tone > 90)
			desc += "a thin body and incredible muscle definition";
		else if (this.tone > 75)
			desc += "a narrow frame that shows off your muscles";
		else if (this.tone > 50)
			desc += "a somewhat lithe body and a fair amount of definition";
		else if (this.tone > 25)
			desc += "a narrow, soft body that still manages to show off a few muscles";
		else
			desc += "a thin, soft body";
	}
	//Somewhat thin
	else if (this.thickness < 40)
	{
		if (this.tone > 90)
			desc += "a fit, somewhat thin body and rippling muscles all over";
		else if (this.tone > 75)
			desc += "a thinner-than-average frame and great muscle definition";
		else if (this.tone > 50)
			desc += "a somewhat narrow body and a decent amount of visible muscle";
		else if (this.tone > 25)
			desc += "a moderately thin body, soft curves, and only a little bit of muscle";
		else
			desc += "a fairly thin form and soft, cuddle-able flesh";
	}
	//average
	else if (this.thickness < 60)
	{
		if (this.tone > 90)
			desc += "average thickness and a bevy of perfectly defined muscles";
		else if (this.tone > 75)
			desc += "an average-sized frame and great musculature";
		else if (this.tone > 50)
			desc += "a normal waistline and decently visible muscles";
		else if (this.tone > 25)
			desc += "an average body and soft, unremarkable flesh";
		else
			desc += "an average frame and soft, untoned flesh with a tendency for jiggle";
	}
	else if (this.thickness < 75)
	{
		if (this.tone > 90)
			desc += "a somewhat thick body that's covered in slabs of muscle";
		else if (this.tone > 75)
			desc += "a body that's a little bit wide and has some highly-visible muscles";
		else if (this.tone > 50)
			desc += "a solid build that displays a decent amount of muscle";
		else if (this.tone > 25)
			desc += "a slightly wide frame that displays your curves and has hints of muscle underneath";
		else
			desc += "a soft, plush body with plenty of jiggle";
	}
	else if (this.thickness < 90)
	{
		if (this.tone > 90)
			desc += "a thickset frame that gives you the appearance of a wall of muscle";
		else if (this.tone > 75)
			desc += "a burly form and plenty of muscle definition";
		else if (this.tone > 50)
			desc += "a solid, thick frame and a decent amount of muscles";
		else if (this.tone > 25)
			desc += "a wide-set body, some soft, forgiving flesh, and a hint of muscle underneath it";
		else
		{
			desc += "a wide, cushiony body";
			if (this.gender >= 2 || this.biggestTitSize() > 3 || this.hipRating > 7 || this.buttRating > 7)
				desc += " and plenty of jiggle on your curves";
		}
	}
	//Chunky monkey
	else
	{
		if (this.tone > 90)
			desc += "an extremely thickset frame and so much muscle others would find you harder to move than a huge boulder";
		else if (this.tone > 75)
			desc += "a very wide body and enough muscle to make you look like a tank";
		else if (this.tone > 50)
			desc += "an extremely substantial frame packing a decent amount of muscle";
		else if (this.tone > 25)
		{
			desc += "a very wide body";
			if (this.gender >= 2 || this.biggestTitSize() > 4 || this.hipRating > 10 || this.buttRating > 10)
				desc += ", lots of curvy jiggles,";
			desc += " and hints of muscle underneath";
		}
		else
		{
			desc += "a thick";
			if (this.gender >= 2 || this.biggestTitSize() > 4 || this.hipRating > 10 || this.buttRating > 10)
				desc += ", voluptuous";
			desc += " body and plush, ";
			if (this.gender >= 2 || this.biggestTitSize() > 4 || this.hipRating > 10 || this.buttRating > 10)
				desc += " jiggly curves";
			else
				desc += " soft flesh";
		}
	}
	return desc;
}

Player.prototype.lengthChange = function(amount, ncocks) {
    if (amount < 0 && hyperHappy)  // Early return for hyper-happy cheat if the call was *supposed* to shrink a cock.
    {
        return;
    }
    //Display the degree of length change.
    if (amount <= 1 && amount > 0) {
        if (this.cocks.length == 1) outputText("Your " + player.cockDescript(0) + " has grown slightly longer.", false);
        if (this.cocks.length > 1) {
            if (ncocks == 1) outputText("One of your " + player.multiCockDescriptLight() + " grows slightly longer.", false);
            if (ncocks > 1 && ncocks < this.cocks.length) outputText("Some of your " + player.multiCockDescriptLight() + " grow slightly longer.", false);
            if (ncocks == this.cocks.length) outputText("Your " + player.multiCockDescriptLight() + " seem to fill up... growing a little bit larger.", false);
        }
    }
    if (amount > 1 && amount < 3) {
        if (this.cocks.length == 1) outputText("A very pleasurable feeling spreads from your groin as your " + player.cockDescript(0) + " grows permanently longer - at least an inch - and leaks pre-cum from the pleasure of the change.", false);
        if (this.cocks.length > 1) {
            if (ncocks == this.cocks.length) outputText("A very pleasurable feeling spreads from your groin as your " + player.multiCockDescriptLight() + " grow permanently longer - at least an inch - and leak plenty of pre-cum from the pleasure of the change.", false);
            if (ncocks == 1) outputText("A very pleasurable feeling spreads from your groin as one of your " + player.multiCockDescriptLight() + " grows permanently longer, by at least an inch, and leaks plenty of pre-cum from the pleasure of the change.", false);
            if (ncocks > 1 && ncocks < this.cocks.length) outputText("A very pleasurable feeling spreads from your groin as " + num2Text(cocks) + " of your " + player.multiCockDescriptLight() + " grow permanently longer, by at least an inch, and leak plenty of pre-cum from the pleasure of the change.", false);
        }
    }
    if (amount >=3){
        if (this.cocks.length == 1) outputText("Your " + this.cockDescript(0) + " feels incredibly tight as a few more inches of length seem to pour out from your crotch.", false);
        if (this.cocks.length > 1) {
            if (ncocks == 1) outputText("Your " + this.multiCockDescriptLight() + " feel incredibly tight as one of their number begins to grow inch after inch of length.", false);
            if (ncocks > 1 && ncocks < this.cocks.length) outputText("Your " + this.multiCockDescriptLight() + " feel incredibly number as " + num2Text(ncocks) + " of them begin to grow inch after inch of added length.", false);
            if (ncocks == this.cocks.length) outputText("Your " + this.multiCockDescriptLight() + " feel incredibly tight as inch after inch of length pour out from your groin.", false);
        }
    }
    //Display LengthChange
    if (amount > 0) {
        if (this.cocks[0].cockLength >= 8 && this.cocks[0].cockLength-amount < 8){
            if (this.cocks.length == 1) outputText("  <b>Most men would be overly proud to have a tool as long as yours.</b>", false);
            if (this.cocks.length > 1) outputText("  <b>Most men would be overly proud to have one cock as long as yours, let alone " + this.multiCockDescript() + ".</b>", false);
        }
        if (this.cocks[0].cockLength >= 12 && this.cocks[0].cockLength-amount < 12) {
            if (this.cocks.length == 1) outputText("  <b>Your " + this.cockDescript(0) + " is so long it nearly swings to your knee at its full length.</b>", false);
            if (this.cocks.length > 1) outputText("  <b>Your " + this.multiCockDescriptLight() + " are so long they nearly reach your knees when at full length.</b>", false);
        }
        if (this.cocks[0].cockLength >= 16 && this.cocks[0].cockLength-amount < 16) {
            if (this.cocks.length == 1) outputText("  <b>Your " + this.cockDescript(0) + " would look more at home on a large horse than you.</b>", false);
            if (this.cocks.length > 1) outputText("  <b>Your " + this.multiCockDescriptLight() + " would look more at home on a large horse than on your body.</b>", false);
            if (this.biggestTitSize() >= BREAST_CUP_C) {
                if (this.cocks.length == 1) outputText("  You could easily stuff your " + this.cockDescript(0) + " between your breasts and give yourself the titty-fuck of a lifetime.", false);
                if (this.cocks.length > 1) outputText("  They reach so far up your chest it would be easy to stuff a few cocks between your breasts and give yourself the titty-fuck of a lifetime.", false);
            }
            else {
                if (this.cocks.length == 1) outputText("  Your " + this.cockDescript(0) + " is so long it easily reaches your chest.  The possibility of autofellatio is now a foregone conclusion.", false);
                if (this.cocks.length > 1) outputText("  Your " + this.multiCockDescriptLight() + " are so long they easily reach your chest.  Autofellatio would be about as hard as looking down.", false);
            }
        }
        if (this.cocks[0].cockLength >= 20 && this.cocks[0].cockLength-amount < 20) {
            if (this.cocks.length == 1) outputText("  <b>As if the pulsing heat of your " + this.cockDescript(0) + " wasn't enough, the tip of your " + this.cockDescript(0) + " keeps poking its way into your view every time you get hard.</b>", false);
            if (this.cocks.length > 1) outputText("  <b>As if the pulsing heat of your " + this.multiCockDescriptLight() + " wasn't bad enough, every time you get hard, the tips of your " + this.multiCockDescriptLight() + " wave before you, obscuring the lower portions of your vision.</b>", false);
            if (this.cor > 40 && this.cor <= 60) {
                if (this.cocks.length > 1) outputText("  You wonder if there is a demon or beast out there that could take the full length of one of your " + this.multiCockDescriptLight() + "?", false);
                if (this.cocks.length ==1) outputText("  You wonder if there is a demon or beast out there that could handle your full length.", false);
            }
            if (this.cor > 60 && this.cor <= 80) {
                if (this.cocks.length > 1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + this.multiCockDescriptLight() + " to their hilts, milking you dry.\n\nYou smile at the pleasant thought.", false);
                if (this.cocks.length ==1) outputText("  You daydream about being attacked by a massive tentacle beast, its tentacles engulfing your " + this.cockDescript(0) + " to the hilt, milking it of all your cum.\n\nYou smile at the pleasant thought.", false);
            }
            if (this.cor > 80) {
                if (this.cocks.length > 1) outputText("  You find yourself fantasizing about impaling nubile young champions on your " + this.multiCockDescriptLight() + " in a year's time.", false);
            }
        }
    }
    //Display the degree of length loss.
    if (amount < 0 && amount >= -1) {
        if (this.cocks.length == 1) outputText("Your " + this.multiCockDescriptLight() + " has shrunk to a slightly shorter length.", false);
        if (this.cocks.length > 1) {
            if (ncocks == this.cocks.length) outputText("Your " + this.multiCockDescriptLight() + " have shrunk to a slightly shorter length.", false);
            if (ncocks > 1 && ncocks < this.cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + this.multiCockDescriptLight() + " have shrunk to a slightly shorter length.", false);
            if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + this.multiCockDescriptLight() + " has shrunk to a slightly shorter length.", false);
        }
    }
    if (amount < -1 && amount > -3) {
        if (this.cocks.length == 1) outputText("Your " + this.multiCockDescriptLight() + " shrinks smaller, flesh vanishing into your groin.", false);
        if (this.cocks.length > 1) {
            if (ncocks == this.cocks.length) outputText("Your " + this.multiCockDescriptLight() + " shrink smaller, the flesh vanishing into your groin.", false);
            if (ncocks == 1) outputText("You feel " + num2Text(ncocks) + " of your " + this.multiCockDescriptLight() + " shrink smaller, the flesh vanishing into your groin.", false);
            if (ncocks > 1 && ncocks < this.cocks.length) outputText("You feel " + num2Text(ncocks) + " of your " + this.multiCockDescriptLight() + " shrink smaller, the flesh vanishing into your groin.", false);
        }
    }
    if (amount <= -3) {
        if (this.cocks.length == 1) outputText("A large portion of your " + this.multiCockDescriptLight() + "'s length shrinks and vanishes.", false);
        if (this.cocks.length > 1) {
            if (ncocks == this.cocks.length) outputText("A large portion of your " + this.multiCockDescriptLight() + " receeds towards your groin, receding rapidly in length.", false);
            if (ncocks == 1) outputText("A single member of your " + this.multiCockDescriptLight() + " vanishes into your groin, receding rapidly in length.", false);
            if (ncocks > 1 && this.cocks.length > ncocks) outputText("Your " + this.multiCockDescriptLight() + " tingles as " + num2Text(ncocks) + " of your members vanish into your groin, receding rapidly in length.", false);
        }
    }
}

//Armour Descript & Clothed or Naked!
Player.prototype.armorDescript = function(nakedText, lowerOnly) {
    //Default
    if (nakedText == undefined) nakedText = "gear";
	if (lowerOnly == undefined) lowerOnly = false;
    //Main Function
    var textArray = [];
    var text = "";
    if (this.armor.id != Items.NOTHING.id) text += this.armor.equipmentName;
    //Join text.
    if (this.armor.id != Items.NOTHING.id) textArray.push(this.armor.equipmentName);
    if (this.upperGarment.id != Items.NOTHING.id && !lowerOnly) textArray.push(this.upperGarment.equipmentName);
    if (this.lowerGarment.id != Items.NOTHING.id) textArray.push(this.lowerGarment.equipmentName);
    if (textArray.length > 0) text = formatStringArray(textArray);
    //Naked?
    if (this.isNaked()) text = nakedText;
    return text;
}

Player.prototype.clothedOrNaked = function(clothedText, nakedText) {
    if (nakedText == undefined) nakedText = "";
    return ((this.isNakedLower() && this.isNakedUpper()) ? nakedText : clothedText);
}
Player.prototype.clothedOrNakedUpper = function(clothedText, nakedText) {
    if (nakedText == undefined) nakedText = "";
    return (this.isNakedUpper() ? nakedText : clothedText);
}
Player.prototype.clothedOrNakedLower = function(clothedText, nakedText) {
    if (nakedText == undefined) nakedText = "";
    return (this.isNakedLower() ? nakedText : clothedText);
}

Player.prototype.isNaked = function() {
	return this.isNakedUpper() && this.isNakedLower();
}
Player.prototype.isNakedUpper = function() {
	return this.armor.id == Items.NOTHING.id && this.upperGarment.id == Items.NOTHING.id;
}
Player.prototype.isNakedLower = function() {
	return this.armor.id == Items.NOTHING.id && this.lowerGarment.id == Items.NOTHING.id;
}
Player.prototype.isExposedLower = function() {
	return (this.armor == Items.NOTHING || this.armor.hasFlag(ITEM_FLAG_NO_STRIP_NEEDED)) && this.lowerGarment == Items.NOTHING;
}

//CLEAR STATUSES
Player.prototype.clearStatuses = function() {
	for (var i = 0; i < player.statusEffects.length; i++) {
		if (player.statusEffects[i].stype.isCombat) {
			player.removeStatusEffect(player.statusEffects[i].stype);
		}
	}
}

Player.prototype.setFurColor = function(colorArray) {
    if (this.skinType == SKIN_TYPE_FUR) {
        this.furColor = colorArray[rand(colorArray.length)];
    }
}

//RUT/HEAT (NYI)
Player.prototype.goIntoRut = function() {
    return false;
}

Player.prototype.goIntoHeat = function() {
    return false;
}

//NUTRIENTS (NYI)
Player.prototype.slimeFeed = function() {

}

Player.prototype.refillEnergy = function(amount) {
    this.energy += amount;
    if (this.energy > this.maxEnergy()) this.energy = this.maxEnergy();
	showUpDown("energyArrow", "up");
	refreshStats();
}
Player.prototype.damageEnergy = function(amount) {
    outputText("You are exhausted for <b><font color='#daa520'>" + amount + "</font></b> damage to energy.");
    this.energy -= amount;
    if (this.energy < 0) this.energy = 0;
	showUpDown("energyArrow", "down");
	refreshStats();
}

Player.prototype.refillHunger = function(amount) {
    this.hunger += amount;
    if (this.hunger > this.maxHunger()) this.hunger = this.maxHunger();
	showUpDown("hungerArrow", "up");
	refreshStats();
}
Player.prototype.damageHunger = function(amount) {
    outputText("You take <b><font color='#daa520'>" + amount + "</font></b> hunger damage.");
    this.hunger -= amount;
    if (this.hunger < 0) this.hunger = 0;
	showUpDown("hungerArrow", "down");
	refreshStats();
}

Player.prototype.refillThirst = function(amount) {
	this.slimeFeed();
    this.thirst += amount;
    if (this.thirst > this.maxThirst()) this.thirst = this.maxThirst();
	showUpDown("thirstArrow", "up");
	refreshStats();
}
Player.prototype.damageThirst = function(amount) {
    outputText("You take <b><font color='#daa520'>" + amount + "</font></b> thirst damage.");
    this.thirst -= amount;
    if (this.thirst < 0) this.thirst = 0;
	showUpDown("thirstArrow", "down");
	refreshStats();
}

Player.prototype.fillBladder = function(amt) {
	this.bladder += amt;
	if (this.bladder > this.maxBladder()) this.bladder = this.maxBladder();
	showUpDown("bladderArrow", "up");
	refreshStats();
}
Player.prototype.emptyBladder = function() {
	this.bladder = 0;
	showUpDown("bladderArrow", "down");
}

Player.prototype.fillBowels = function(amt) {
	if (scatEnabled) return;
	this.bowels += amt;
	if (this.bowels > this.maxBowels()) this.bowels = this.maxBowels();
	//showUpDown("bowelArrow", "up");
	refreshStats();
}
Player.prototype.emptyBowels = function() {
	this.bowels = 0;
	//showUpDown("bowelArrow", "down");
}

//ITEMS
Player.prototype.getMaxSlots = function() {
	var slots = 5;
	if (this.findPerk(PerkLib.StrongBack) >= 0)
        slots++;
	if (this.findPerk(PerkLib.StrongBack2) >= 0)
        slots++;
	if (this.hasKeyItem(KeyItems.Scuttlebag) >= 0)
		slots += 3;
	return slots;
}

Player.prototype.hasItem = function(itype, minQuantity) {
	if (minQuantity == undefined) minQuantity = 1;
	return this.itemCount(itype) >= minQuantity;
}

Player.prototype.itemCount = function(itype) {
	var count = 0;
	for (var i = 0; i < this.itemSlots.length; i++) {
		if (this.itemSlots[i].itype == itype) count += this.itemSlots[i].quantity;
	}
	return count;
}

Player.prototype.roomInExistingStack = function(itype) {
	for (var i = 0; i < 10; i++) {
		if (this.itemSlots[i].itype == itype && this.itemSlots[i].quantity != 0 && player.itemSlots[i].itype.getMaxStackSize())
			return i;
	}
	return -1;
}

Player.prototype.emptySlot = function() {
	for (var i = 0; i < this.itemSlots.length; i++) {
		if ((this.itemSlots[i].itype == undefined || this.itemSlots[i].itype == Items.NOTHING) && i < this.getMaxSlots()) return i;
	}
	return -1;
}

Player.prototype.destroyItems = function(itype, numOfItemToRemove) {
	for (var slotNum = 0; slotNum < this.itemSlots.length; slotNum += 1) {
		if (this.itemSlots[slotNum].itype == itype) {
			while (this.itemSlots[slotNum].quantity > 0 && numOfItemToRemove > 0) {
				this.itemSlots[slotNum].removeOneItem();
				numOfItemToRemove--;
			}
		}
	}
	return numOfItemToRemove <= 0;
}

//OTHERS
Player.prototype.corruptionTolerance = function() {
    return 0; //Currently returns 0.
}

Player.prototype.countCockSocks = function(colour) {
    return 0; //Currently returns 0.
}

Player.prototype.getXPNeeded = function() {
	var temp = 0;
	for (var i = 0; i <= player.level; i++) {
		temp += i * 10;
	}
	if (player.level < 4) {
		temp += 10;
	}
	if (player.level >= 45) {
		temp = 9999;
	}
	return temp;
}

Player.prototype.changeXP = function(amount) {
    this.XP += amount;
    if (this.XP < 0) this.XP = 0; //Keep from going into negative.
    if (this.XP > 9999) this.XP = 9999;
    refreshStats();
}

Player.prototype.changeMoney = function(amount) {
    this.gloam += amount;
    if (this.gloam < 0) this.gloam = 0; //Keep from going into negative.
	if (this.gloam > 2147483647) this.gloam = 2147483647;
    refreshStats();
}

// For level scaling, enemies either scale with player level or scale up as the days go by.
function getScaledLevel() {
	var lvl = 1;
	lvl = Math.floor(time.days / 10);
	if (lvl < player.level) lvl = player.level;
	if (lvl > Math.ceil(levelCap * 1.2)) lvl = Math.ceil(levelCap * 1.2);
	return lvl;
}