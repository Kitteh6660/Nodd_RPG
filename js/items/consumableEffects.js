ConsumableEffects = [];

ConsumableEffects.FriedTenderling = function() {
	clearOutput();
	outputText("(Placeholder) You put what appears to be a fried humanoid in your mouth and chew, and swallow. Tastes kinda meaty.");
	player.refillHunger(25);
	player.fillBowels(5);
}

ConsumableEffects.SkeweredSloach = function() {
	clearOutput();
	outputText("(Placeholder) You put a sloach in your mouth, chew and swallow. It's quite filling. You discard the empty stick.");
	player.refillHunger(30);
	player.fillBowels(10);
}