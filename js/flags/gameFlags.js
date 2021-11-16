var codexFlags = [];
var questFlags = [];
var locFlags = [];
var npcFlags = [];

function initializeFlags() {
	//Codex variables
	codexFlags.unlockedRavel = false;
	codexFlags.unlockedPetrid = false;
	codexFlags.unlockedSlyne = false;
	codexFlags.unlockedKrudge = false;
	codexFlags.unlockedOggorus = false;
	codexFlags.unlockedLehlt = false;
	codexFlags.unlockedNurk = false;
	
	codexFlags.unlockedGreep = false;

	//Quest variables
	questFlags.inductionProgress = 0; // 0 = not started, 10 = completed.

	//Location variables
	locFlags.darklingRowExploreCounter = 0;
	locFlags.darklingRowFoundVendorCart = false;
	locFlags.darklingRowFoundDarkhaze = false;
	locFlags.darklingRowFoundGrudsGrub = false;
	locFlags.darklingRowFoundEggplucks = false;
	locFlags.darklingRowFoundOutsideInn = false;
	locFlags.outsideInnRestroomUseCounter = 0;
	locFlags.outsideInnNightmareFuelDrankCounter = 0;

	//NPC variables
	npcFlags.darklingRowGrudMet = false;
	npcFlags.darklingRowGrudSuckedOff = 0;
	npcFlags.outsideInnDruskMet = false;
	npcFlags.outsideInnDruskBottomedFor = 0;
	npcFlags.outsideInnDruskTopped = 0;
	npcFlags.outsideInnDruskLearntAboutDruskName = false;
	npcFlags.outsideInnDruskGivenYourName = false;
	npcFlags.outsideInnDruskLearntAboutInduction = 0; // 0 = not learnt, 1 = heard about it, 2 = discussed
	npcFlags.outsideInnRestroomBargedInByNPC = false;
	npcFlags.outsideInnRestroomKilledNPC = false;
	npcFlags.outsideInnRestroomNPCCooldown = 36; // Timeout to ensure the NPC doesn't barge in too often.

	npcFlags.darklingRowKillCount = 0; //If there are too many kills in a zone, there will be no more encounters.
}