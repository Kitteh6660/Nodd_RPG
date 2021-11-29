Locations.DarklingRow.Eggpluck = [];

Locations.DarklingRow.Eggpluck.visitEggpluck = function(returnFrom) {
	clearOutput();
	setHeader("Eggpluck's Discount Familiars");
	if (returnFrom) {
		outputText("What else would you like to check in the shop?");
	}
	else {
		outputText("As you approach the door leading into the shop, the intense scent of musk hits your nostril, making you nearly retch, the smells of the streets of Darkling Row pale in comparison to what emanates from the shop. The door was deliberately set ajar as if to let the excess stench out.<br><br>");
		outputText("Braving the smell, you push the door open and step inside. You are greeted by cages of varying sizes housing creatures of differing species. If you like, you can examine the contents of the cages and check out the odd creatures.<br><br>");
		outputText("A note on the counter reads \"<i>Sorry. I am currently not available to help you with purchasing the beasts. I am still busy organizing the shop. Please come back in later builds.</i>\"");
	}
	menu();
	addButton(0, "Examine Creatures", Locations.DarklingRow.Eggpluck.examineCreatureMenu);
	addButton(14, "Leave", Locations.DarklingRow.enter);
}

Locations.DarklingRow.Eggpluck.examineCreatureMenu = function(returnFrom) {
	clearOutput();
	outputText("You browse the cages for any creatures that may catch your attention.<br><br>");
	if (returnFrom) {
		outputText("What other creatures would you like to examine?");
	}
	else {
		outputText("Inside a large cage, you make out what appears to be a strange, four-eyed, floppy-eared slug-like creature. However, this specimen is an unusual one in that it has two heads.<br><br>");
		outputText("Inside a bird cage, you spot an odd bird-like creature that seems to be missing its feathers.<br><br>");
		outputText("Occasionally, you spot what appears to be an ottoman standing there innocently.<br><br>");
	}
	menu();
	addButton(0, codexFlags.unlockedMephitoad ? "2-Headed Mephitoad" : "Two-Headed Slug", Locations.DarklingRow.Eggpluck.examineCreature, 0);
	addButton(1, codexFlags.unlockedQueril ? "Featherless Queril" : "Featherless Bird", Locations.DarklingRow.Eggpluck.examineCreature, 1);
	addButton(2, "Living Ottoman", Locations.DarklingRow.Eggpluck.examineCreature, 2);
	addButton(14, "Back", Locations.DarklingRow.Eggpluck.visitEggpluck);
}

Locations.DarklingRow.Eggpluck.examineCreature = function(selection) {
	clearOutput();
	switch (selection) {
		case 0:
			outputText("You approach a large cage and you make out the details of the slug-like creature. The creature slithers around, leaving behind some slime and it smells kind of bad. Its four limbs flail about uselessly, the legs not even able to reach the floor. The two heads turn toward you, purple snouts sniffing at your presence and bark excitedly at the sight of you.<br><br>");
			outputText("Each of the heads exhibits a pair of floppy, long ears and two pairs of eyes. Rows of sharp teeth glisten menacingly.<br><br>");
			outputText("A label affixed to the cage reads \"<i>For sale: Two-headed Mephitoad. 500 gloam.</i>\"<br><br>");
			Codex.unlockCodexEntry("Mephitoads", "unlockedMephitoad");
			break;
		case 1:
			outputText("You approach the bird cage that stands out from the rest. The bird... or at least that's what you think, is it even a bird? It perches on a stick, its bright orange eyes looking past you.<br><br>");
			outputText("A label affixed to the cage reads \"<i>For sale: Featherless Queril. 200 gloam.</i>\"<br><br>");
			Codex.unlockCodexEntry("Querils", "unlockedQueril");
			break;
		case 2:
			outputText("You approach what appears to be a furniture. An ottoman to be exact, with purple cushion on its top. Not even a moment later, the ottoman strides closer to you on its own, clearly alive.<br><br>");
			outputText("Peering underneath the ottoman, you spot what appears to be a throbbing penis and a sizable pair of balls. The ottoman seems to be excited.<br><br>");
			outputText("A tag tied to one of the ottoman's legs reads \"<i>For sale: Horny Ottoman. 500 gloam.</i>\"<br><br>");
			break;
		default:
			outputText("This text should not appear at all!");
	}
	doNext(createCallBackFunction(Locations.DarklingRow.Eggpluck.examineCreatureMenu, true));
}