Codex = [];
Codex.Sapient = [];
Codex.Bestial = [];
Codex.Factions = [];
Codex.Artifacts = [];

// Text Formatting
Codex.formatHeaderText = function(txt) {
	outputText("<u><b><i><h3>" + txt + "</h3></i></b></u><br>");
}
Codex.formatSubheaderText = function(txt) {
	outputText("<i><h4>" + txt + "</h4></i><br>");
}

// Main Functionality
Codex.unlockCodexEntry = function(txt, entry) {
	if (codexFlags[entry] == undefined || codexFlags[entry] == false) {
		codexFlags[entry] = true;
		outputText("<b>New codex entry unlocked: " + txt + "!</b><br><br>");
	}
}

Codex.menu = function() {
	clearOutput();
	setHeader("Codex");
	outputText("Welcome to the Codex! Your Ego Bracer comes equipped with codex that will allow you to get more information on the species of Nodd.");
	menu();
	addButton(0, "Sapient Species", Codex.Sapient.page);
	addButton(1, "Bestial Species", Codex.Bestial.page);
	addButton(2, "Houses & Cults", Codex.Factions.page);
	addButton(3, "Artifacts", Codex.Artifacts.page);
	addButton(14, "Back", enterEgoBracerMenu);
}

// Sapient Species
Codex.Sapient.page = function() {
	menu();
	if (codexFlags.unlockedRavel) addButton(0, "Ravel", Codex.Sapient.entryRavel);
	else addButtonDisabled(0, "???", "You have not discovered this species yet.");
	if (codexFlags.unlockedPetrid) addButton(1, "Petrid", Codex.Sapient.entryPetrid);
	else addButtonDisabled(1, "NYI", "(NOT YET IMPLEMENTED) You have not discovered this species yet.");
	if (codexFlags.unlockedSlyne) addButton(2, "Slyne", Codex.Sapient.entrySlyne);
	else addButtonDisabled(2, "???", "You have not discovered this species yet.");
	if (codexFlags.unlockedKrudge) addButton(3, "Krudge", Codex.Sapient.entryKrudge);
	else addButtonDisabled(3, "NYI", "(NOT YET IMPLEMENTED) You have not discovered this species yet.");
	if (codexFlags.unlockedOggorus) addButton(4, "Oggorus", Codex.Sapient.entryOggorus);
	else addButtonDisabled(4, "NYI", "(NOT YET IMPLEMENTED) You have not discovered this species yet.");
	if (codexFlags.unlockedLehlt) addButton(5, "Lehlt", Codex.Sapient.entryLehlt);
	else addButtonDisabled(5, "NYI", "(NOT YET IMPLEMENTED) You have not discovered this species yet.");
	if (codexFlags.unlockedNurk) addButton(6, "Nurk", Codex.Sapient.entryNurk);
	else addButtonDisabled(6, "???", "You have not discovered this species yet.");
	addButton(14, "Back", Codex.menu);
}

Codex.Sapient.entryRavel = function() {
	clearOutput();
	setHeader("Codex: Ravel");
	Codex.formatHeaderText("The Ravel");
	outputText("<b>Myth:</b> When a puzzle is left unsolved<br>");
	outputText("<b>Aspect:</b> Mind<br>");
	outputText("<b>Average Height:</b> 8'<br>");
	outputText("<b>Average Weight:</b> 550 lbs<br>");
	outputText("<b>Looks Like:</b> A bedraggled, bewattled mass of swaggering filth<br>");
	outputText("<b>Sounds Like:</b> Croaks, squawks, krrrrrs, rak-rak-raks, rustling of feathers, clicking of talons<br>");
	outputText("<b>Feels Like:</b> Greasy feathers; fleshy, bumpy wattles; smooth, scaly limbs; slimy mouths<br>");
	outputText("<b>Smells Like:</b> Wet feathers<br>");
	outputText("<b>Tastes Like:</b> Salty, rank<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Ravels are monstrous corvids. They have a crooked arrangement of sharp teeth, a long, kinked tail, and an assortment of dark and tattered feathers. Both arms and legs are featherless and scaled, and each have four digits ending in a hooked black talon. Most ravels also have fleshy, colorful wattles around their jawline and neck - each individual’s wattle is unique, and is an object of avian vanity.<br><br>");
	outputText("Ravels tend to have large, toothy beaks, which often appear scuffed or nicked. Their fangs are not a part of the beak itself but rather set into a gumline just within; only the top teeth tend to jut out. ​A ravel's beak is not flexible enough to be suitable as a means of expression - to a stranger, a ravel may appear to always be smiling, making for sometimes unsettling company. Instead, ravels express mainly with their voice, plumage, posture, and various gestures.<br><br>");
	outputText("Ravel eyes tend to be large and penetrating with thin reptilian slits, and are adorned with prominent lashes. <br><br>");
	outputText("While winged, most ravels can't fly without the aid of a spell or technology of some kind. Their wings appear small and vestigial, and are primarily used to emote. <br><br>");
	outputText("A ravel’s wings and tail fan are usually the most colorful parts of the bird’s plumage, and each coloration is unique to the individual. They tend to be a drab mix of cool colors, such as blues, teals, and purples. Most ravels have a fluffy mantle of longer feathers around their neck, and in some individuals this extends into a feathery mane that tapers down the back. Their feathers often appear a bit oily.<br><br>");
	Codex.formatSubheaderText("The Wattle");
	outputText("Ravels tend to be proud of the prominent, fleshy flaps that hang from their beak and neck; the more saggy, wrinkled, and bulbous the wattle, the more proud a bird tends to be. Many see fit to adorn these protrusions with jewelry or tattoos. Those insecure about their wattle appearance may seek arcane enhancement, or may practice various methods of wattle-stretching over a period of time to achieve the desired level of sag.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Ravels are known problem-solvers. If a ravel doesn't have a problem to solve, it's said to make one - for this reason, puzzle-making is a popular pastime among ravels. Without this or a similar constructive hobby, individuals tend to dissect their circumstances in search of problems, and often in destructive ways.<br><br>");
	outputText("Some may see ravels as overly paranoid. A ravel tends to be uncomfortable around a new person, place or object until it's been thoroughly investigated. Such investigations generally involve a lot of staring from various angles, poking, plucking, and tapping with hand-talons. A stranger entering the company of many ravels may be crowded around by the entire group, who will then proceed to mutter and croak suspiciously, gingerly touch and tug at the individual until a basic familiarity has been achieved. Noticing strange people or objects is sometimes enough to demand a ravel’s full attention, and this can notoriously interrupt conversations, sex, or anything else in which the individual may have been engaged. <br><br>");
	outputText("Many individuals of non-ravel species don’t appreciate being looked over or poked at by a bird they’ve never met; as such, ravels are expected to keep their tendencies in check. Most ravels will allow another ravel to investigate them, however. For this reason, some may instead prefer to surround themselves with those of their own kind.<br><br>");
	outputText("As a stereotype, ravels have an ambling and sometimes needlessly poetic, philosophical or magical way of speaking. Asking one for something mundane is so notoriously fruitless that there exists a phrase in Nodd to describe long-winded responses that don’t answer the question asked  - “like asking a ravel for the time”.  <br><br>");
	outputText("Some assume ravels to adore shiny trinkets, but a ravel is more likely to be startled by such things, or at least suspicious. This misconception may come from the trend of some ravels to wear shiny jewelry to intimidate others of their kind.<br><br>");
	outputText("Ravels do most of their expressing with their feathers, wings, and tail. An agitated ravel may “beak wipe” against a nearby surface, such as a bar top or the back of a chair. Ravels are also known for expressing with an impressive range of vocalizations. Anywhere with a number of excited ravels is sure to be a raucous affair. <br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Ravels are largely androgynous in build, though females may have slightly less vibrant plumage and wattles than males; a female's wattle might be slightly smaller as well. Females do not have breasts. A transgender ravel may seek a permanent spell to alter their feather color, though many do this for a variety of other reasons as well.<br><br>");
	outputText("A ravel's genitalia are mammalian and external. A ravel’s shaft is long and thick with a bulbous knot that makes up the glans. The female has long, prominent labia in a similar color and shape to their wattle.<br><br>");
	outputText("Ravels lay eggs in clutches of two or three. The eggs are around 6\" long, and the shell often denotes the color of the offspring’s wattle.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("Ravels traditionally tend to have short, simple first names paired with a last name that is somehow reminiscent of their vocalizations, or is otherwise avian in nature.<br><br>");
	outputText("Examples: Yora Grax, Sela Kroon, Pili Craw, Noli Kackle<br><br>");
	Codex.Sapient.page();
}

Codex.Sapient.entryPetrid = function() {
	clearOutput();
	setHeader("Codex: Petrid");
	outputText("<b>Myth:</b> <br>");
	outputText("<b>Aspect:</b> <br>");
	outputText("<b>Average Height:</b> <br>");
	outputText("<b>Average Weight:</b> <br>");
	outputText("<b>Looks Like:</b> <br>");
	outputText("<b>Sounds Like:</b> <br>");
	outputText("<b>Feels Like:</b> <br>");
	outputText("<b>Smells Like:</b> <br>");
	outputText("<b>Tastes Like:</b> <br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("<br><br>");
	outputText("");
	Codex.Sapient.page();
}

Codex.Sapient.entrySlyne = function() {
	clearOutput();
	setHeader("Codex: Slyne");
	Codex.formatHeaderText("The Slyne");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("<br><br>");
	outputText("");
	Codex.Sapient.page();
}

Codex.Sapient.entryKrudge = function() {
	clearOutput();
	setHeader("Codex: Krudge");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("<br><br>");
	outputText("");
	Codex.Sapient.page();
}

Codex.Sapient.entryOggorus = function() {
	clearOutput();
	setHeader("Codex: Oggorus");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("<br><br>");
	outputText("");
	Codex.Sapient.page();
}

Codex.Sapient.entryLehlt = function() {
	clearOutput();
	setHeader("Codex: Lehlt");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	outputText("<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("<br><br>");
	outputText("");
	Codex.Sapient.page();
}

Codex.Sapient.entryNurk = function() {
	clearOutput();
	setHeader("Codex: Nurk");
	Codex.formatHeaderText("The Nurk");
	outputText("<b>Myth:</b> When a sentimental trinket is lost<br>");
	outputText("<b>Aspect:</b> Control<br>");
	outputText("<b>Average Height:</b> 3'6\"<br>");
	outputText("<b>Average Weight:</b> 40 lbs<br>");
	outputText("<b>Looks Like:</b> A shifty, stuttering bundle of whiskers and fangs<br>");
	outputText("<b>Sounds Like:</b> Snuffles, squeaks, yips, chitters<br>");
	outputText("<b>Feels Like:</b> Wrinkled, greasy skin with boils; coarse fur<br>");
	outputText("<b>Smells Like:</b> Filthy rat warrens<br>");
	outputText("<b>Tastes Like:</b> Musky, earthy<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Nurks are skittish mammalian creatures. Their long toothy snout ends in a prominent leaf whose shape varies by individual. They have a furry mantle, occasionally spotted or striped, and a large, unwieldy pair of ears, often torn or dotted with holes. Some nurks have a wing-like membrane that runs from the underside of their arms to their thighs; these individuals can glide brief distances.<br><br>");
	outputText("An individual’s nose leaf is primarily what distinguishes one from another. These come in a variety of strange and complex shapes, and their sensitive snouts are said to be tuned to the particular scent of their treasured object. Their mantles also tend to have stripes or spots in semi-unique patterns, but these are less distinct. <br><br>");
	outputText("Nurk eyes are large and bulbous with small, ovular pupils. They are usually a warm, fiery color that complements their otherwise drab fur. Nurks are known to carry a number of diseases, and some may be missing fur, have welts, sores, pustules, lesions, or parasites.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Nurks may be stereotyped as shrewd, stingy, sneaky, greedy, miserly, or covetous, and are often assumed to be collectors and hoarders. A particularly prejudiced shopkeep may be wary of a nurk in their store due to an association with theft.<br><br>");
	outputText("Individuals who hoard seem to have a very particular - and often valueless - item to which they become somewhat beholden, nearly helpless to pass up the perfect addition to their collection. This sometimes means a nurk may come to prioritize these purchases over living expenses, forcing them to adapt to a more transient lifestyle. These items are usually small and attainable, most commonly keys, door knobs or handles, bottles, jewelry - but sometimes a nurk will have a more problematic obsession, such as something extremely expensive, rare, large, or unwieldy. <br><br>");
	outputText("Nurks don’t tend to snatch just any item that fits their chosen category, but only those that appear remarkable in some way - even if this way is not well understood by anyone beyond that particular nurk. For this reason, mundane items like keys and door knobs that stand out in any way aesthetically may be in danger of being swiped.<br><br>");
	outputText("Nurks are typically drawn towards occupations that deal with material possessions. As such, they are often seen as salespeople, antique appraisers, and auctioneers. <br><br>");
	outputText("Nurks may appear skittish and restless. They are known to speak quickly, and often stutter. They seem to constantly fidget and scratch at various insatiable itches. Their whiskers are always twitching, and one can nearly hear the panicked drumming of their nervous, rodentine heart.<br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Nurks are mammalian. The average male has a slender, pointed shaft, often a bit bent or gnarled. Females have six breasts, and a prominent vulva that plumps when in heat. Erogenous flesh is usually a dusky blue, purple, or gray. <br><br>");
	outputText("Males are known for their fast and bestial style of mounting, which involves clutching onto the mate’s backside and rapidly thrusting. Climax is achieved within a few seconds, and results in about a pint of watery nurk cum.<br><br>");
	outputText("Nurks are known to carry a number of diseases, most of which can be transmitted sexually. <br><br>");
	outputText("Nurks give live births in litters of six to twelve young. <br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("Nurks tend to have first names that sound skittish or snouty, and last names that are related to their treasured object. <br><br>");
	outputText("Examples: Skitchy Bottlekeep, Kip Cogfinder, Snitch Quillseeker,  Frit Knobsnatch<br><br>");
	Codex.Sapient.page();
}

// Bestial Species
Codex.Bestial.page = function() {
	menu();
	addButton(14, "Back", Codex.menu);
}

// Districts
Codex.Factions.page = function() {
	menu();
	addButton(14, "Back", Codex.menu);
}

// Districts
Codex.Artifacts.page = function() {
	menu();
	addButton(14, "Back", Codex.menu);
}