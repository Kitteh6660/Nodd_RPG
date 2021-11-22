//------------
// SPELLS
//------------
magicMenu = function() { //Spells are housed within combatSpecial.js file.
    menu();
	for (var i = 0; i < player.spells.length; i++) {
		var spell = lookupSpell(player.spells[i]);
		addButton(i, spell.name, castSpell, spell.func, spell.cost);
		hint(i, spell.getTooltipDescription());
	}
    addButton(14, "Back", battleMenu);
}

function castSpell(spellFunc, cost) {
	clearOutput();
	if (player.MP < spellCost(cost)) {
		outputText("You lack the mana required to cast this spell.");
		doNext(magicMenu);
		return;
	}
	player.changeMana(-cost);
	spellFunc();
	combatRoundOver();
}

function spellLivingSalve() {
	outputText("You concentrate and utter some arcane words, ooze manifesting and covering your body, seeking out whatever wounds or injuries you may have on you and the ooze gets to work mending your body. ");
	var heal = 20 + player.spellMod() + Math.floor(player.inte / 2) + rand(player.inte);
	player.changeHP(heal, true);
	spellXP();
}

function spellBlind() {
	
	outputText("You concentrate and utter some arcane words. A bright flash appears in front of your opponent!<br><br>");
	if (monster.findStatusEffect(StatusEffects.Blind) < 0) {
		//Chance
		var chance = 50 + player.spellMod() + player.inte;
		chance -= Math.floor(monster.wil * 1.5);
		//Roll for blindness
		if (rand(100) < chance) {
			outputText("<b>Your opponent is now blinded!</b>");
			monster.createStatusEffect(StatusEffects.Blind, 3 + rand(3), 0, 0, 0);
		}
		else {
			outputText("<b>Unfortunately, your opponent managed to blink in the nick of time and avoid getting blinded!</b>");
		}
	}
	else {
		outputText("Unfortunately, your opponent is already blinded! As such, you have wasted your mana.");
	}
	outputText("<br><br>");
	spellXP();
}

function spellRouse() {
	outputText("You concentrate and utter some arcane words and gestures with the intent of arousing your opponent. ");
	var lustDmg = 10 + player.spellMod() + (player.inte) + rand(Math.round(player.cor / 8));
	lustDmg -= rand(Math.floor(monster.wil * 1.5));
	lustDmg += rand(Math.floor(monster.lib / 8));
	monster.changeLust(lustDmg, true);
	outputText("<br><br>");
	spellXP();
}

//------------
// SPECIALS
//------------
specialMenu = function() {
    menu();
    addButton(14, "Back", battleMenu);
}

//------------
// SPEC UTILS
//------------
function spellCost(cost) {
    var temp = cost;
    return temp;
}
function physicalCost(cost) {
    var temp = cost;
    return temp;
}
function spellMod() {
    return player.spellMod();
}

function spellXP() {

}