ItemLib = []; //Hold item IDs for purpose of looking up or for save data.
Items = [];

//Item Types
ITEM_TYPE_WEAPON = "Weapon";
ITEM_TYPE_ARMOUR = "Armour";
ITEM_TYPE_UNDERGARMENT = "Undergarment";
ITEM_TYPE_CONSUMABLE = "Consumable";
ITEM_TYPE_MATERIAL = "Material";
ITEM_TYPE_SHIELD = "Shield";

//Item Flags
ITEM_FLAG_LIFE_LEECH = "life_leech";

ITEM_FLAG_SKINTIGHT = "skintight";
ITEM_FLAG_CROTCHLESS = "crotchless";
ITEM_FLAG_TRANSPARENT = "transparent";
ITEM_FLAG_BLOCKS_UNDERWEAR = "no_underwear"
ITEM_FLAG_NO_STRIP_NEEDED = "no_strip";
ITEM_FLAG_WATERPROOF = "waterproof";
ITEM_FLAG_MACABRE = "macabre";

//Resistances
RESISTANCE_STAB = "stab_res";
RESISTANCE_SLASH = "slash_res";
RESISTANCE_CRUSH = "crush_res";
RESISTANCE_LUST = "lust_res";
RESISTANCE_ARCANE = "arcane_res";
RESISTANCE_ACID = "acid_res";
RESISTANCE_POISON = "poison_res";
RESISTANCE_FIRE = "fire_res";
RESISTANCE_ICE = "ice_res";
RESISTANCE_LIGHTNING = "lightning_res";

//Item Constructor!
function Item(itemId, itemShortName, itemLongName, itemType) {
	//Required values, will be declared by parameters
	this.id = itemId;
	this.shortName = itemShortName;
	this.longName = itemLongName;
	this.type = itemType;
	
	//Optional
	this.description = ""; //This will appear on tooltip.
	this.value = 6; //The value in gloam. Defaults at 6.
	
	//Consumable values that can be set
	this.consumeEffect = null;
	
	//Equipment values that can be set
	this.equipmentName = "";
	this.attack = 0;
	this.accuracy = 0;
	this.defense = 0;
	this.evasion = 0;
	this.sexiness = 0;
	this.verb = "";
	this.maxStackSize = 10;
	this.itemFlags = [];
	this.resistances = [];
	//Add to library for lookup.
	ItemLib[this.id] = this;
}

Item.prototype.getTooltipDescription = function() {
    var text = this.description;
    text += "<br><br><b>Type:</b> " + this.type;
    text += "<br><b>Base value:</b> " + this.value;
    if (this.type == ITEM_TYPE_WEAPON) {
        text += "<br><b>Attack:</b> " + this.attack;
        text += "<br><b>Accuracy:</b> " + this.accuracy;
    }
    if (this.type == ITEM_TYPE_ARMOUR || this.type == ITEM_TYPE_UNDERGARMENT) {
        text += "<br><b>Defense:</b> " + this.defense;
        text += "<br><b>Evasion:</b> " + this.evasion;
        text += "<br><b>Sexiness:</b> " + this.sexiness;
    }
    return text;
}

Item.prototype.canUse = function() {
    if (this.type == ITEM_TYPE_MATERIAL)
        return false;
	else
        return true;
}

Item.prototype.useItem = function() {
	if (this.type == ITEM_TYPE_CONSUMABLE) {
		if (this.consumeEffect != null) {
			this.consumeEffect();
		}
		return false;
	}
    if (this.type == ITEM_TYPE_WEAPON || this.type == ITEM_TYPE_ARMOUR) {
        this.equipItem();
        return false;
    }
	return true;
}

Item.prototype.useText = function() {};

Item.prototype.equipItem = function() {
    clearOutput();
    outputText("You equip your " + this.equipmentName + ".");
    var oldItem = null;
    //Determine if it's weapon or armour.
    if (this.type == ITEM_TYPE_WEAPON) {
        if (player.weapon.id != Items.NOTHING.id) oldItem = lookupItem(player.weapon.id);
        player.weapon = this;
    }
    if (this.type == ITEM_TYPE_ARMOUR) {
        if (player.armor.id != Items.NOTHING.id) oldItem = lookupItem(player.armor.id);
        player.armor = this;
    }
    if (this.type == ITEM_TYPE_UNDERGARMENT) {
		if (this.slot = "upper") {
			if (player.upperGarment.id != Items.NOTHING.id) oldItem = lookupItem(player.upperGarment.id);
			player.armor = this;
		}
		else {
			if (player.lowerGarment.id != Items.NOTHING.id) oldItem = lookupItem(player.lowerGarment.id);
			player.armor = this;
		}
    }
    //Check if you aren't previously using fists or naked.
    if (oldItem != null) {
        outputText(" You still have your old " + oldItem.equipmentName + " left over. ");
        Inventory.takeItem(oldItem, Inventory.inventoryMenu);
    }
    else
        doNext(Inventory.inventoryMenu);
}

Item.prototype.unequipItem = function() { //TODO

}

Item.prototype.getMaxStackSize = function() {
	if (this.type == ITEM_TYPE_WEAPON || this.type == ITEM_TYPE_ARMOUR || this.type == ITEM_TYPE_UNDERGARMENT) {
		return 1;
	}
	else {
		return 10;
	}
}

Item.prototype.hasFlag = function(flag) {
	var found = false;
	for (var i = 0; i < this.itemFlags.length; i++) {
		if (this.itemFlags[i] == flag) {
			found = true;
			break;
		}
	}
	return found;
}

Item.prototype.getResistance = function(res) {
	var amt = 0;
	for (var i = 0; i < this.resistances.length; i += 2) {
		if (this.resistances[i] == res) {
			res = this.resistances[i+1];
			break;
		}
	}
	return found;
}

Items.NOTHING = new Item("Nothing", "NOTHING!", "nothing", ITEM_TYPE_MATERIAL);
Items.NOTHING.description = "You know, you are not supposed to see this tooltip. Please let Kitteh6660 know so he can fix it.";
Items.NOTHING.equipmentName = "nothing";
Items.NOTHING.verb = "punch";
Items.NOTHING.value = -1;
Items.NOTHING.defense = 0;
Items.NOTHING.evasion = 10;
Items.NOTHING.attack = 0;
Items.NOTHING.accuracy = 5;