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
	codexFlags.unlockedMephitoad = false;
	codexFlags.unlockedMiggwitch = false;
	codexFlags.unlockedQueril = false;
	
	codexFlags.unlockedViviria = false;
	codexFlags.unlockedVorn = false;
	codexFlags.unlockedOmnillian = false;
	codexFlags.unlockedUmbrasia = false;
	codexFlags.unlockedPsilysium = false;
	codexFlags.unlockedMorphoria = false;

	//Quest variables
	questFlags.inductionProgress = 0; // 0 = not started, 10 = completed.
	questFlags.druskQuestProgress = 0; // 0 = not started, 5 = completed. Numbers 5-10 for tracking free drinks.
	
	//Location variables
	locFlags.darklingRowExploreCounter = 0;
	locFlags.darklingRowFoundVendorCart = false;
	locFlags.darklingRowFoundDarkhaze = false;
	locFlags.darklingRowFoundGrudsGrub = false;
	locFlags.darklingRowFoundEggplucks = false;
	locFlags.darklingRowFoundOutsideInn = false;
	locFlags.darklingRowSillyModeJerryCooldown = 0;
	locFlags.darklingRowPrankNurkCooldown = 0;
	locFlags.darklingRowScarabCrashCooldown = 0;
	locFlags.darklingRowCarriageDiscovered = false;
	locFlags.outsideInnRestroomUseCounter = 0;
	locFlags.outsideInnNightmareFuelDrankCounter = 0;

	//NPC variables
	npcFlags.darklingRowGrudMet = false;
	npcFlags.darklingRowGrudSuckedOff = 0;
	npcFlags.outsideInnDruskRelationship = 0; // 0 = not started. Have some chat and drink to raise relationship. 10 unlocks sex menu.
	npcFlags.outsideInnDruskMet = false;
	npcFlags.outsideInnDruskBottomedFor = 0;
	npcFlags.outsideInnDruskTopped = 0;
	npcFlags.outsideInnDruskLearntAboutDruskName = false;
	npcFlags.outsideInnDruskGivenYourName = false;
	npcFlags.outsideInnDruskLearntAboutInduction = 0; // 0 = not learnt, 1 = heard about it, 2 = discussed
	npcFlags.outsideInnRestroomBargedInByNPC = false;
	npcFlags.outsideInnRestroomKilledNPC = false;
	npcFlags.outsideInnRestroomNPCCooldown = 36; // Timeout to ensure the NPC doesn't barge in too often.

	//Kill Count variables (possibly genocide?)
	npcFlags.darklingRowKillCount = 0; 
	npcFlags.viviriaDistrictKillCount = 0;
}