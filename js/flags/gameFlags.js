//Codex variables
var codexFlags = [];
codexFlags.unlockedRavel = false;
codexFlags.unlockedPetrid = false;
codexFlags.unlockedSlyne = false;
codexFlags.unlockedKrudge = false;
codexFlags.unlockedOggorus = false;
codexFlags.unlockedLehlt = false;
codexFlags.unlockedNurk = false;

//Quest variables
var questFlags = [];
questFlags.inductionProgress = 0; // 0 = not started, 1 = completed.

//Location variables
var locFlags = [];
locFlags.darklingRowExploreCounter = 0;
locFlags.darklingRowFoundAlley = false;
locFlags.outsideInnRestroomUseCounter = 0;

//NPC variables
var npcFlags = [];
npcFlags.darklingRowGrudMet = false;
npcFlags.darklingRowGrudSuckedOff = 0;
npcFlags.outsideInnDruskMet = false;
npcFlags.outsideInnDruskBottomedFor = 0;
npcFlags.outsideInnDruskTopped = 0;
npcFlags.outsideInnRestroomBargedInByNPC = false;
npcFlags.outsideInnRestroomKilledNPC = false;

npcFlags.darklingRowKillCount = 0; //If there are too many kills in a zone, there will be no more encounters.