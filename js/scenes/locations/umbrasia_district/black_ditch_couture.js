Locations.UmbrasiaDistrict.BlackDitchCouture = [];

Locations.UmbrasiaDistrict.BlackDitchCouture.enter = function() {
	clearOutput();
	setHeader("Black Ditch Couture");
	outputText("The shop exhibits all sorts of vulturewear made from the hides of differing species, and there are also armour made of exoskeleton and bones.");
	menu();
	addButton(0, "Buy", Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu);
	addButton(14, "Leave", moveToLocation, Locations.UmbrasiaDistrict.enter, 2);
}

Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu = function() {
	clearOutput();
	outputText("What would you like to buy?<br><br>");
	menu();
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(0, Items.Armor.RavelVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(1, Items.Armor.PetridVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(2, Items.Armor.SlyneVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(3, Items.Armor.KrudgeVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(4, Items.Armor.OggorusVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(5, Items.Armor.LehltVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(6, Items.Armor.NurkVulturewear);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(7, Items.Armor.BoneArmour);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(8, Items.Armor.ExoskeletonArmour);
	Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton(9, Items.Armor.PetridArmour);
	addButton(14, "Leave", Locations.UmbrasiaDistrict.BlackDitchCouture.enter);
}

Locations.UmbrasiaDistrict.BlackDitchCouture.addBuyButton = function(slot, item) {
	outputText(capitalizeFirstLetter(item.longName) + " - <b>" + (item.value * 2) + "</b> Gloam<br>");
	addButton(slot, item.shortName, Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyItemPrompt, item);
	hint(slot, item.getTooltipDescription(), capitalizeFirstLetter(item.longName));
}

Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyItemPrompt = function(item) {
	clearOutput();
	if (player.gloam >= item.value * 2) {
		outputText("Would you like to purchase " + item.longName + " for " + (item.value * 2) + " gloam?");
		doYesNo(createCallBackFunction(Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyItem, item), Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu);
	}
	else {
		outputText("You count out the gloam stored in your Ego Bracer and realize that it's out of your price range.");
		doNext(Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu);
	}
}

Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyItem = function(item) {
	clearOutput();
	player.gloam -= (item.value * 2);
	refreshStats();
	Inventory.takeItem(item, Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu);
}