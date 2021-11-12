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
	outputText("You have a good fapping session with your dick. Lust relieved! (Placeholder)");
	player.orgasm();
	doNext(playerMenu);
}

Masturbations.masturbateVagina = function() {
	clearOutput();
	outputText("You have a good self-pleasuring session with your pussy. Lust relieved! (Placeholder)");
	player.orgasm();
	doNext(playerMenu);
}