ConsumableEffects = [];

ConsumableEffects.FriedTenderling = function() {
	clearOutput();
	outputText("(Placeholder) You put what appears to be a fried humanoid in your mouth and chew, and swallow. Tastes kinda meaty.");
	player.refillHunger(25);
	player.fillBowels(5);
}

ConsumableEffects.GrubBowl = function() {
	clearOutput();
	outputText("(Placeholder) You devour the thankfully non-living grubs one at a time from a bowl, using an utensil. You discard the now-empty bowl.");
	player.refillHunger(25);
	player.fillBowels(5);
}

ConsumableEffects.SloachSkewer = function() {
	clearOutput();
	outputText("(Placeholder) You take some sloach from the stick and consume it.");
	player.refillHunger(15);
	player.fillBowels(5);
}

ConsumableEffects.SloachScampi = function() {
	clearOutput();
	outputText("(Placeholder) You eat the sauteed sloach one by one.");
	player.refillHunger(30);
	player.fillBowels(10);
}

ConsumableEffects.SloachPoppers = function() {
	clearOutput();
	outputText("(Placeholder) You eat the fried sloach one by one. Filling!");
	player.refillHunger(40);
	player.fillBowels(15);
}

ConsumableEffects.SloachSmoothie = function() {
	clearOutput();
	outputText("(Placeholder) You drink the lumpy smoothie made of some sloach.");
	player.refillHunger(10);
	player.refillThirst(15)
	player.fillBowels(5);
	player.fillBladder(10);
}

ConsumableEffects.Hornsquat = function() {
	clearOutput();
	outputText("(Placeholder) You eat the hornsquat.");
	player.refillHunger(15);
	player.fillBowels(5);
}

ConsumableEffects.Sagberry = function() {
	clearOutput();
	outputText("(Placeholder) You eat the sagberries.");
	player.refillHunger(10);
	player.fillBowels(5);
}

ConsumableEffects.Cinderbean = function() {
	clearOutput();
	outputText("(Placeholder) You eat the cinderbean.");
	player.refillHunger(10);
	player.fillBowels(5);
}