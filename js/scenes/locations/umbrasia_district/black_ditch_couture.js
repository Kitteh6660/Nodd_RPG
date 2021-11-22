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
	shopReturnFunc = Locations.UmbrasiaDistrict.BlackDitchCouture.shopBuyMenu;
	clearOutput();
	outputText("What would you like to buy?<br><br>");
	menu();
	addBuyButton(0, Items.Armor.RavelVulturewear, 2);
	addBuyButton(1, Items.Armor.PetridVulturewear, 2);
	addBuyButton(2, Items.Armor.SlyneVulturewear, 2);
	addBuyButton(3, Items.Armor.KrudgeVulturewear, 2);
	addBuyButton(4, Items.Armor.OggorusVulturewear, 2);
	addBuyButton(5, Items.Armor.LehltVulturewear, 2);
	addBuyButton(6, Items.Armor.NurkVulturewear, 2);
	addBuyButton(7, Items.Armor.BoneArmour, 2);
	addBuyButton(8, Items.Armor.ExoskeletonArmour, 2);
	addBuyButton(9, Items.Armor.PetridArmour, 2);
	addButton(14, "Leave", Locations.UmbrasiaDistrict.BlackDitchCouture.enter);
}
