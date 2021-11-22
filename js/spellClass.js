SpellLib = [];

function Spell(spellId, spellName, spellFunc, manaCost) {
	//Required values
	this.id = spellId;
	this.name = spellName;
	this.func = spellFunc;
	this.cost = manaCost;
	
	//Optional
	this.description = ""; //This will appear on tooltip.
	this.targetType;
	
	SpellLib[this.id] = this;
}

Spell.prototype.getTooltipDescription = function() {
    var text = this.description;
    text += "<br><br><b>Mana Cost:</b> " + this.cost;
    return text;
}