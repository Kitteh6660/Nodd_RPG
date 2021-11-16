Codex = [];
Codex.NoddWorld = [];
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

Codex.addCodexButton = function(pos, entryName, entryFunc, entryCondition) {
	if (entryCondition == undefined || entryCondition == true) {
		addButton(pos, entryName, entryFunc);
	}
	else {
		addButtonDisabled(pos, "???", "You have not discovered this entry yet.");
	}
}

Codex.menu = function() {
	clearOutput();
	setHeader("Codex");
	outputText("Welcome to the Codex! Your Ego Bracer comes equipped with codex that will allow you to get more information on the species of Nodd.");
	menu();
	addButton(0, "World of Nodd", Codex.NoddWorld.page)
	addButton(1, "Sapient Species", Codex.Sapient.page);
	addButton(2, "Bestial Species", Codex.Bestial.page);
	addButton(3, "Houses & Cults", Codex.Factions.page);
	addButton(4, "Artifacts", Codex.Artifacts.page);
	addButton(14, "Back", enterEgoBracerMenu);
}

Codex.NoddWorld.page = function() {
	menu();
	addButton(14, "Back", Codex.menu);
}

// Sapient Species
Codex.Sapient.page = function() {
	var btn = 0;
	menu();
	Codex.addCodexButton(btn++, "Ravel", Codex.Sapient.entryRavel, codexFlags.unlockedRavel);
	Codex.addCodexButton(btn++, "Petrid", Codex.Sapient.entryPetrid, codexFlags.unlockedPetrid);
	Codex.addCodexButton(btn++, "Slyne", Codex.Sapient.entrySlyne, codexFlags.unlockedSlyne);
	Codex.addCodexButton(btn++, "Krudge", Codex.Sapient.entryKrudge, codexFlags.unlockedKrudge);
	Codex.addCodexButton(btn++, "Oggorus", Codex.Sapient.entryOggorus, codexFlags.unlockedOggorus);
	Codex.addCodexButton(btn++, "Lehlt", Codex.Sapient.entryLehlt, codexFlags.unlockedLehlt);
	Codex.addCodexButton(btn++, "Nurk", Codex.Sapient.entryNurk, codexFlags.unlockedNurk);
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
	outputText("<b>Myth:</b> When an injustice goes unseen<br>");
	outputText("<b>Aspect:</b> Control<br>");
	outputText("<b>Average Height:</b> 8'<br>");
	outputText("<b>Average Weight:</b> 350 lbs<br>");
	outputText("<b>Looks Like:</b> A living monument of despair<br>");
	outputText("<b>Sounds Like:</b> Growls, hisses, screeches<br>");
	outputText("<b>Feels Like:</b> Leathery hide; cold stone when in stasis<br>");
	outputText("<b>Smells Like:</b> Cold wet stones, petrichor<br>");
	outputText("<b>Tastes Like:</b> Earthy, metallic<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Petrids are gargoyle-like creatures. Some have wings, and most have a pair of segmented tentacles atop their heads, as well as ornate filigree protrusions or other sculpturesque details. Most have various crack-like scars that run across their rugged, stone-colored hide. Everything on a petrid, including their eyes, tongue, and teeth, has the appearance of stone. In flesh form, their skin feels warm and leathery to the touch regardless of this appearance - or wet and smooth, depending on what part you're touching. <br><br>");
	outputText("Petrids possess the ability to self-petrify at will. The stony material is heavy and nearly indestructible, and the creatures can maintain this armored stasis from seconds to months at a time. If an individual is vandalized during stasis, this damage will appear as healed wounds once they return to flesh.<br><br>");
	outputText("Upon initially becoming conscious, petrids require surgery to sever various parts of themselves from the building from which they were formed. Depending on the skill of the mage, there may be no clear or ideal way to separate the creature's anatomy from the surrounding building, so it's not uncommon to see petrids that appear as partial amputees - missing parts of their tail or feet, often lacking digits, or even having excess bits of architecture. Any missing full limbs may be seen using illusive prosthetics.<br><br>");
	outputText("Petrids will sometimes spawn with cuffs, rings, and lanterns - if physically attached, the item may be surgically removed and given to the individual. Most petrids keep the items they spawn with and consider them meaningful.<br><br>");
	outputText("Some petrids grow patches of green or purple moss in the pattern of manes or facial hair.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Stereotypes surrounding petrids tend to portray brooding, sullen, and stubborn personalities - although they are also seen as protectors. \"Gargoyle\" is considered a pejorative by some individuals, but others embrace the term.<br><br>");
	outputText("Many petrids feel psychologically bound to the building from which they were severed, experiencing phantom sensations and feeling as though a part of their body and consciousness was left behind. Often all petrids from the same building will have very similar personalities and motives, though these become more distinct with separation and time. Sometimes their primary interest is to guard or otherwise occupy their parent building, and if such a position is available it’s generally offered to the building’s petrids upon spawning.<br><br>");
	outputText("Petrids that appeared originally as fountains are said to be prone to drinking problems; sconces or torch-holders may be pyromaniacs. Those that flank entryways may be overly protective or paranoid. <br><br>");
	outputText("A lazy petrid is said to be \"mossy\", and to relax is to \"moss out\"; moss tends to grow on any that remain in stone form for too long.<br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Petrid anatomy is, for the most part, mammalian, but influenced by architecture. Female petrids tend to have a single pair of breasts and a vagina, while males have a sheath and external testicles. <br><br>");
	outputText("Petrids are unique in that they are usually formed as a byproduct of architecture, often as an adult. Females have live births of one to two.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("First names vary, but petrids traditionally take the surname of the building’s owner. They occasionally incorporate words relating to architecture or stone.");
	Codex.Sapient.page();
}

Codex.Sapient.entrySlyne = function() {
	clearOutput();
	setHeader("Codex: Slyne");
	Codex.formatHeaderText("The Slyne");
	outputText("<b>Myth:</b> When one denies their own cruelty<br>");
	outputText("<b>Aspect:</b> Death<br>");
	outputText("<b>Average Height:</b> 8'<br>");
	outputText("<b>Average Weight:</b> 170 lbs<br>");
	outputText("<b>Looks Like:</b> A withered husk of sins and sorrow<br>");
	outputText("<b>Sounds Like:</b> Hisses, rattles<br>");
	outputText("<b>Feels Like:</b> Thorny hide, sharp teeth, bony frame<br>");
	outputText("<b>Smells Like:</b> Almost nothing<br>");
	outputText("<b>Tastes Like:</b> Nearly tasteless<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Slyne are tall, slender, reptilian creatures. Their head is covered in kinked quills or protofeathers, and they have a long, whip-like tail that's broken up into vertebra-like segments. They tend to have very slight if not skeletal frames, and their hide is usually covered in various spines and barbs. They are almost never fat or muscled - at least not without arcane enhancements.<br><br>");
	outputText("A slyne’s snout is long and thin, and lined with dozens of sharp, evenly-spaced teeth. Their quills are long and flexible, and are sometimes banded or striped. Males have pointed \"pauldrons\" on their shoulders, whereas females lack this feature; this is usually the only way to tell the two sexes apart, as their genitalia is seamlessly hidden in a cloaca until erect.<br><br>");
	outputText("Slyne tend to have pale, drab skin. Their eyes tend to be bold and vibrant, and sunken into dark sockets beneath flared brow crests. Their inner flesh is usually black, as is their blood.<br><br>");
	outputText("Slyne are unique in that they must sustain themselves from inflicting suffering on others; slynes do not benefit from consuming food. A slyne \"meal\" may be a bowlful of live creatures - sometimes microcitizens - with a torture implement in place of an eating utensil.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Slyne are stereotyped as solitary creatures, and are thought to be more in tune with their own darkness than others. They are often associated with things of a macabre nature, and are often seen as executioners and torturers. Through these occupations an individual may be able to routinely sustain their need to inflict suffering, thus allowing them to avoid the practice during social events.<br><br>");
	outputText("As most social events include some form of dining, slyne who wish to socialize occasionally run into issues due to their peculiar and offputting diet. While slyne can ingest food, it is tasteless and not nourishing. Many restaurants have at least one menu item marked \"suffertarian\", denoting that the meal is composed of living things and includes a means of torturing them.<br><br>");
	outputText("Slyne cope with this reality in a variety of ways, but many struggle with the regular practice of causing such pain; some willingly starve to death, or inflict pain on themselves in ritual, or simply out of anguish. This is not usually recognized by non-slynes, who tend to see the species as sadistic and cold. Some even blame the slyne for the cruel and heartless city Nodd has become; there are those who would hurt or kill a slyne with no remorse - they may even feel as though they've done the city a service in doing so.<br><br>");
	outputText("Slyne tend to have soft, raspy voices, and many have sheepish mannerisms.<br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Slyne lack any manner of external genitalia or breasts, but males have a pair of flanged \"pauldrons\" on their shoulders. A transgender slyne may seek to have these removed or added, via surgery or permanent illusion.<br><br>");
	outputText("Both sexes have a cloaca. Males have a pair of hemipenes studded with barbs near the base.<br><br>");
	outputText("Females lay leathery black eggs in clutches of five to seven.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("Slyne tend to have harsh, serpentine names full of rasping consonants.<br><br>");
	outputText("Examples: Kaspi Spisk, Husp Slinder, Kaspus Sile, Iski Lisk");
	Codex.Sapient.page();
}

Codex.Sapient.entryKrudge = function() {
	clearOutput();
	setHeader("Codex: Krudge");
	outputText("<b>Myth:</b> When an obligation is neglected<br>");
	outputText("<b>Aspect:</b> Control<br>");
	outputText("<b>Average Height:</b> 6'6\" at shoulders<br>");
	outputText("<b>Average Weight:</b> 700 lbs<br>");
	outputText("<b>Looks Like:</b> A shuffling pile of guilt<br>");
	outputText("<b>Sounds Like:</b> Grumbles, snorts, chuffs, groans, growls, snarls<br>");
	outputText("<b>Feels Like:</b> Leathery skin, coarse mane<br>");
	outputText("<b>Smells Like:</b> Earthy, musky, metallic<br>");
	outputText("<b>Tastes Like:</b> Salty, musky<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Krudges are large, beastly mammals that walk on either two or four legs. They're usually fairly bulky and muscled. Their hide is tough and mostly hairless other than their mane and facial fur, as well as a patch on their ears, elbows, and tails. Their tail is short or nonexistent, and occasionally their mane runs the full length of their spine. Their skin is usually drab, earthen colors, often with mottling or patches. It may appear rough, dusty, or greasy.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("The krudge is well-known for its relationship with obligations.<br><br>");
	outputText("Once a krudge agrees to a task, it becomes increasingly unstable until the task is completed. If the task is not something the krudge is able to complete, the individual is likely to be driven mad, and will become increasingly desperate, irrational, and violent as they struggle with their burden, and may eventually show signs of corruption. If the task is utterly impossible, the result is an increasingly corrupted krudge, often ending in a kaiju situation that then requires Council intervention.<br><br>");
	outputText("For this reason, Krudges are stereotyped as being brutish, uncouth, or uneducated. This isn’t necessarily true, and some see them as sensitive, sincere, and gentle beasts. <br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Krudges tend to appear fairly masculine regardless of sex, and both sexes are well-muscled.<br><br>");
	outputText("Their genitalia is mammalian in nature. Males usually have large testicles and a prominent pouch-like sheath, and their shaft tends to be fairly nondescript, but generally thick and blunt. Female krudges tend to have four small breasts and a vaguely equine vulva with a large clitoris.<br><br>");
	outputText("Krudges are notorious for their inability to orgasm quickly. Most individuals require several minutes of physical attention to become fully erect, and over an hour of stimulation in order to achieve climax - which may then last another ten minutes.<br><br>");
	outputText("Krudges have live births of two to four.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("The naming convention of this species has not been discovered yet. When the naming convention has been established, this will become available.");
	Codex.Sapient.page();
}

Codex.Sapient.entryOggorus = function() {
	clearOutput();
	setHeader("Codex: Oggorus");
	outputText("<b>Myth:</b> When one feels lonely<br>");
	outputText("<b>Aspect:</b> Mind<br>");
	outputText("<b>Average Height:</b> 10'<br>");
	outputText("<b>Average Weight:</b> 1,800 lbs<br>");
	outputText("<b>Looks Like:</b> An intoxicating mound of oozing blubber<br>");
	outputText("<b>Sounds Like:</b> Gurgles, burps, belches, bellows, slurping of saliva, squelching of slime<br>");
	outputText("<b>Feels Like:</b> Soft, slimy, slippery, rubbery, cool<br>");
	outputText("<b>Smells Like:</b> Varies by individual<br>");
	outputText("<b>Tastes Like:</b> Varies by individual<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Oggori (often shortened to “oggs”) are massive serpentine monsters.Their hide is moist and slick, and some have hardened nodules jut up in patterns along their blubbery bodies. Some individuals have bioluminescent markings.<br><br>");
	outputText("Their fluids contain a psychoactive toxin that causes sedation, feelings of euphoria, hallucinations, and other effects. However, this only seems to affect non-ogg species. Each individual’s potency and effects are a bit different, as is the color, scent and taste. This substance is often highly addictive. It also tends to glow, further mesmerizing the enthralled.<br><br>");
	outputText("While oggori appear to have breasts and nipples, these are actually poison glands. They habitually knead these glands and rub the secretions over their hide to give it an oily and toxic coat. More productive individuals may appear to have breasts, regardless of sex. Particularly full venom glands may faintly glow through the creature’s skin.<br><br>");
	outputText("The oggorus has a large, retractable stinger at the end of its tail to deliver its toxins as a venom. In this form, it's much more potent and the onset is immediate.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Ogg stereotypes tend to portray them as lazy, hedonistic, demanding, or slovenly. Their booming voices, round guts, and constantly-drooling body may be to blame for most of these presumptions.<br><br>");
	outputText("In spite of their intimidating or revolting appearance, these creatures are rarely lonely. It’s not uncommon for an individual to find themselves with a small, enraptured harem of non-oggs addicted to their particular brand of venom. This attention is welcomed by many, but less hedonistic oggs may face difficulty in finding meaningful connections or even solitude. <br><br>");
	outputText("An oggorus that enters a bar is often sized up by a room curious to know their unique effects. While one might assume it would be a taboo to simply lick a stranger, it’s not uncommon for this to happen. Some non-oggs assume that all oggs welcome the attention; many simply don’t care. This can be a nightmare for any with a desire for personal space and basic courtesy, and particularly those who see their toxin's effects as a personal, private, sexual, or spiritual part of themselves. <br><br>");
	outputText("For others, this assumption yields an unending source of bliss, as they tend to feel lavished with attention wherever they go - given the effects of their secretions have sufficient appeal. These vary wildly in nature and potency, and some oggs are regarded as celebrities for their effects alone.<br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Oggori have a superficially mammalian anatomy despite their amphibious appearance. <br><br>");
	outputText("Males have a stout sheath and a streamlined sac that resembles a scrotum; this is actually another pair of poison glands which secrete through the sheath and urethra. The testes are instead internal. Females are nearly indistinguishable - they have a sheath-like vulva along with a similar pair of glands, the product from which they secrete alongside lubricating fluids, and secrete in large volumes upon orgasm.<br><br>");
	outputText("A ogg’s shaft is slimy and prehensile, and the tip is crowned with flexible nodules that swell prior to climax. The female's labia are lined with these nodules as well, which swell and interlock post-coitus, retaining fluids. Their genitalia is lubricated in the same toxic secretions that coat the rest of their body, and some is secreted along with semen.<br><br>");
	outputText("Oggori lay around thirty round, transparent eggs roughly the size of a baseball. Most of these will be eaten by the parents, but one or two may survive.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("Oggori have names reminiscent of gurgling bogs and groaning guts.<br><br>");
	outputText("Examples: Borgarth Grug, Gorply Brogg, Orpus Byle, Uggrut Erp");
	Codex.Sapient.page();
}

Codex.Sapient.entryLehlt = function() {
	clearOutput();
	setHeader("Codex: Lehlt");
	outputText("<b>Myth:</b> When one's greatness is overlooked<br>");
	outputText("<b>Aspect:</b> Flesh<br>");
	outputText("<b>Average Height:</b> 7'<br>");
	outputText("<b>Average Weight:</b> 160 lbs<br>");
	outputText("<b>Looks Like:</b> A scintillating tribute to emptiness / a wretched, boil-riddled cretin<br>");
	outputText("<b>Sounds Like:</b> Braying, bleating, swishing of tail, clopping of hooves<br>");
	outputText("<b>Feels Like:</b> Soft fur, supple skin / oily, sparsly-furred hide, boils, lumps<br>");
	outputText("<b>Smells Like:</b> Pleasant, varies by individual / piercingly foul<br>");
	outputText("<b>Tastes Like:</b> Faintly sweet, floral or spicy / sour, retch-inducingly vile<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Lehlts are mammalian creatures with a chimeric assortment of attributes, but most prominently resemble goats and deer. Lehlts are notable because their appearance is affected by the envy of others. A well-envied lehlt is a graceful, adonis-like creature with a mesmerizing voice and captivating presence; a lehlt with no one to envy them eventually becomes a hunched, drooling, mannerless cretin.<br><br>");
	outputText("Most lehlts are beautiful to begin with, and have no trouble securing enough adoring eyes to avoid the unsightly consequences of not being fawned over. These may include losing fur, growing hunchbacked or wall-eyed, or taking on an awkward gait or speech impediment. As they grow more hideous, they may become more crass and crude in their speech, or may adopt undesirable habits.<br><br>");
	outputText("This transformation is usually gradual, but in the case of mass disapproval may occur acutely. A lehlt having an embarrassing accident at an upscale gathering may be enough to render them hideous.<br><br>");
	outputText("It should be noted that this process is distinct from corruption; lehlts don't necessarily grow extra limbs, eyes, or tentacles, but instead become a much less attractive version of themselves.<br><br>");
	Codex.formatSubheaderText("Behaviour & Speech");
	outputText("Lehlts are - at their best - stereotyped as being socially competent, charismatic charmers. They take great pride in their appearance, and many structure their life around this priority. For many, this is a spiritual practice. Most lehlts - regardless of sex - make use of makeup, jewelry, and ostentatious fashion.<br><br>");
	outputText("A lehlt's vanity is not usually limited to their physical body, but includes voice, speaking style, mannerisms, posture, stride, fashion, home, material possessions, pets, slaves, or accomplishments.<br><br>");
	outputText("While most lehlts make for exceptional company, it may be hard for a stranger to trust that a lehlt's friendliness is sincere. Most lehlts maintain numerous shallow relationships, and some struggle to make meaningful connections. While some lehlts are disdainful to lower-class citizens, some maintain an air of benevolence, however shallow this may truly be.<br><br>");
	outputText("Lehlts may avoid the company of other lehlts in fear of not being the center of attention. Any pairing or group of lehlts tends to have a strict heirarchy, and often abuse is involved.<br><br>");
	Codex.formatSubheaderText("Sex & Reproduction");
	outputText("Lehlts are fairly average in their sexual differences, although bigenital individuals are common in this species. Their genitalia tends to be sleek, slender, and attractive - unless they’re in their wretched form, where it instead looks gnarled and warty.<br><br>");
	Codex.formatSubheaderText("Naming Conventions");
	outputText("Lehlts have no consistent naming conventions, as individuals tend to desire something memorable and uniquely them.");
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
	var btn = 0;
	menu();
	Codex.addCodexButton(btn++, "Greep", Codex.Bestial.entryGreep, codexFlags.unlockedGreep);
	addButton(14, "Back", Codex.menu);
}

Codex.Bestial.entryGreep = function() {
	clearOutput();
	setHeader("Codex: Greep");
	Codex.formatHeaderText("The Greep");
	outputText("<b>Myth:</b> When one denies their own filth<br>");
	outputText("<b>Aspect:</b> Life<br>");
	outputText("<b>Height:</b> 2.5’<br>");
	outputText("<b>Length:</b> 2’<br>");
	outputText("<b>Weight:</b> 6 lbs<br>");
	outputText("<b>Notable Traits:</b> Pest species<br><br>");
	Codex.formatSubheaderText("Physiology");
	outputText("Greeps are small, superficially bird-like creatures. They have a four-part mouth and wingless, fleshy body. They walk on two legs, and have no eyes or ears to speak of.<br><br>");
	Codex.formatSubheaderText("Behaviour");
	outputText("Greeps are nearly mindless creatures that waddle aimlessly through the streets of Nodd. They nest in the piles of garbage that end up heaped against the sides of buildings and walls.<br><br>");
	outputText("Greeps are not aggressive, and will simply flail and honk if antagonized. They seem to forget about the incident seconds later.<br><br>");
	Codex.formatSubheaderText("Reproduction");
	outputText("Both sexes have a cloaca; the male lacks a penis, and mates via cloacal kiss.<br><br>");
	outputText("Greeps reproduce rapidly, and are culled regularly. Females lay a clutch of around twelve small, round slimy eggs.<br><br>");
	Codex.formatSubheaderText("Diet");
	outputText("Greeps eat mostly insects and garbage, along with any food scraps thrown to them by citizens. It's not uncommon to see a flock of greeps gathered outside restaurants.<br><br>");
	Codex.formatSubheaderText("Habitat");
	outputText("Greeps are mostly present within the city itself, and congregate in particularly filthy areas. It's rare to find them outside the city, where they'd likely be immediately snatched up by a roving predator.<br><br>");
	Codex.formatSubheaderText("Usage");
	outputText("Greeps are considered pests, but are also used as food. As a food item, greep may be colloquially referred to as “chicken”.<br><br>");
	Codex.Bestial.page();
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