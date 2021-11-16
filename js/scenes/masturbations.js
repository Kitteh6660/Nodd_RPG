Masturbations = [];

Masturbations.masturbateMenu = function() {
	clearOutput();
	menu();
	if (player.hasCock()) {
		addButton(0, "Penis", Masturbations.masturbatePenis);
	}
	else {
		addButtonDisabled(1, "Penis", "You don't have a penis for that!");
	}
	if (player.hasVagina()) {
		addButton(1, "Vagina", Masturbations.masturbateVagina);
	}
	else {
		addButtonDisabled(1, "Vagina", "You don't have a pussy for that!");
	}
	addButton(14, "Nevermind", playerMenu);
}

Masturbations.masturbatePenis = function() {
	clearOutput();
	outputText("No longer able to ignore your lust, " + (player.isExposedLower ? "you look down to see" : "you strip naked revealing") + " the hard, aching need between your legs. Sitting down on the ground you prop yourself against a nearby wall and reach for that hard, throbbing cock. Grabbing it with your dominant hand in a firm, careful grip you stifle a moan by quickly biting your bottom lip. You stay there for a moment, letting your member throb in your hand, enjoying the gentle pleasure it brings. You let out a low, happy sigh of pleasure as you lean back, just that bit more to angle your arm better.<br><br>");
	outputText("After staying like that for a moment you let thoughts of your sexual experiences rise and let your hand slowly start pumping to the juicy, tasteful thoughts in your head. Your grip stays steady around your juicy member as you slowly move your hand up and down. There’s no need to rush this moment after all~ It’s just you isn’t it~? You continue enjoying your body, letting thoughts come and go as they please, you grip your shaft a bit firmer as you start to pick up the pace.<br><br>");
	outputText("A heavy drop of precum forms at the tip of your " + player.multiCockDescriptLight() + " as you continue relieving your body of the heavy burden firing up your loins. You look down and this time are unable to stifle your moan as the drop of precum grows larger and a shiver of pleasure runs through your body leaving you gasping in delight. Grabbing at the ground with your other hand you quickly start to grow more feverish with your movements.<br><br>");
	outputText("Taking care to not hurt yourself you rhythmically pump your hand up and down your shaft. Your cum ladened balls bouncing freely as they prepare the oncoming load. The air becomes filled with the sound of you taking care of your need, your breath sharp and quick from the perverse actions, your balls slapping against your taint and occasional rope of precum spurting out of your cock and splatting onto the floor.<br><br>");
	outputText("You let out a loud moan as your orgasm finally his. Erupting out of your cock are ropes of your potent baby batter that shoot up into the air before landing back down onto and around you creating a sticky mess that clearly shows just how pent up you were and how much you needed to cum. The orgasm leaves you breathing heavily and you slowly let go of your " + player.cockDescript() + ", cum drooling out of it as it slowly starts to go limp. Still throbbing, but far, far less needy.<br><br>");
	Time.advanceMinutes(10 + rand(15));
	player.orgasm();
	doNext(playerMenu);
}

Masturbations.masturbateVagina = function() {
	clearOutput();
	outputText("You have a good self-pleasuring session with your pussy. Lust relieved! (Placeholder)");
	Time.advanceMinutes(10 + rand(15));
	player.orgasm();
	doNext(playerMenu);
}