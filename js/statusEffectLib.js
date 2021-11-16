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
StatusEffects.Gymnophobia = new StatusEffectType("Gymnophobia");

//Neutral
StatusEffects.Feeder = new StatusEffectType("Feeder");
StatusEffects.Contraceptives = new StatusEffectType("Contraceptives");
StatusEffects.Eggs = new StatusEffectType("Eggs");
StatusEffects.Fertilized = new StatusEffectType("Fertilized");

//------------
// COMBAT
//------------
//Debuffs
StatusEffects.Acid = new StatusEffectType("Acid", true);
StatusEffects.Blind = new StatusEffectType("Blind", true);
StatusEffects.Bind = new StatusEffectType("Bind", true); //Value determines the type.
StatusEffects.Cloyed = new StatusEffectType("Cloyed", true);
StatusEffects.Confusion = new StatusEffectType("Confusion", true);
StatusEffects.NoFlee = new StatusEffectType("NoFlee", true);
StatusEffects.Poison = new StatusEffectType("Poison", true); //Value 1 is poison duration, value 2 is poison strength.
StatusEffects.Silence = new StatusEffectType("Silence", true);
StatusEffects.StoneLust = new StatusEffectType("StoneLust", true);
StatusEffects.Stunned = new StatusEffectType("Stunned", true);
StatusEffects.TemporaryHeat = new StatusEffectType("TempHeat", true);
StatusEffects.Venom = new StatusEffectType("Venom", true);
StatusEffects.ParalyzeVenom = new StatusEffectType("ParalyzeVenom", true);
StatusEffects.LustVenom = new StatusEffectType("LustVenom", true);

