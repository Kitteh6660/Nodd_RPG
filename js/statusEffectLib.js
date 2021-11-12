StatusEffectIDs = []; //Hold status effect IDs for purpose of looking up.
StatusEffects = [];

BIND_TYPE_GOO = 0;
BIND_TYPE_NAGA = 1;
BIND_TYPE_TENTACLE = 2;

VENOM_TYPE_BEE = 0;
VENOM_TYPE_NAGA = 1;

//------------
// NON-COMBAT
//------------
//Bonus
StatusEffects.BonusAssCapacity = new StatusEffectType("Bonus assCapacity");
StatusEffects.BonusVagCapacity = new StatusEffectType("Bonus vagCapacity");
StatusEffects.Heat = new StatusEffectType("Heat");
StatusEffects.CuntStretched = new StatusEffectType("Cunt Stretched");

//Penalties
StatusEffects.Infested = new StatusEffectType("Infested");
StatusEffects.WormPlugged = new StatusEffectType("Worm Plugged");
StatusEffects.Dysfunction = new StatusEffectType("Dysfunction");
StatusEffects.SlimeCraving = new StatusEffectType("Slime Craving");

//Neutral
StatusEffects.Feeder = new StatusEffectType("Feeder");
StatusEffects.Contraceptives = new StatusEffectType("Contraceptives");
StatusEffects.Eggs = new StatusEffectType("Eggs");

//------------
// COMBAT
//------------
//Debuffs
StatusEffects.Acid = new StatusEffectType("Acid");
StatusEffects.Blind = new StatusEffectType("Blind");
StatusEffects.Bind = new StatusEffectType("Bind"); //Value determines the type.
StatusEffects.Confusion = new StatusEffectType("Confusion");
StatusEffects.NoFlee = new StatusEffectType("NoFlee");
StatusEffects.Poison = new StatusEffectType("Poison");
StatusEffects.Silence = new StatusEffectType("Silence");
StatusEffects.StoneLust = new StatusEffectType("StoneLust");
StatusEffects.Stunned = new StatusEffectType("Stunned");
StatusEffects.TemporaryHeat = new StatusEffectType("TempHeat");
StatusEffects.Venom = new StatusEffectType("Venom");
StatusEffects.ParalyzeVenom = new StatusEffectType("ParalyzeVenom");
StatusEffects.LustVenom = new StatusEffectType("LustVenom");

StatusEffects.Fertilized = new StatusEffectType("Fertilized"); // Used in SandTrap battles.