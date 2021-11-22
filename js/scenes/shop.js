//Abstract shop code
var shopReturnFunc = playerMenu;

addBuyButton = function(pos, item, costMult) {
	if (costMult == undefined) costMult = 1;
	price = Math.ceil(item.value * costMult);
	outputText("<b>" + capitalize(item.longName) + ":</b> " + (price) + " gloam<br>");
	addButton(pos, item.shortName, purchaseItemPrompt, item, price, null, item.getTooltipDescription(), capitalize(item.longName));
}

purchaseItemPrompt = function(item, price) {
	clearOutput();
	if (player.gloam < price && price > 0) {
		outputText("You count out the gloam stored in your Ego Bracer and realize that it's beyond your current price range.");
		doNext(shopReturnFunc);
		return;
	}
	outputText("Would you like to buy " + item.longName + " for " + price + " gloam?");
	doYesNo(createCallBackFunction(purchaseItemConfirm, item, price), shopReturnFunc);
}

purchaseItemConfirm = function(item, price) {
	clearOutput();
	player.changeMoney(-price);
	refreshStats();
	Inventory.takeItem(item, shopReturnFunc);
}