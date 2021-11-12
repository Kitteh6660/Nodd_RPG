Items.Consumables = {};

//------------
// FOOD
//------------
Items.Consumables.Tenderling = new Item("Tndrlng", "Tenderling", "a fried tenderling", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Tenderling.description = "A fried piece of meat that looks rather humanoid-shaped, how odd.";
Items.Consumables.Tenderling.consumeEffect = ConsumableEffects.FriedTenderling;
Items.Consumables.Tenderling.value = 10;

Items.Consumables.SkeweredSloach = new Item("SSloach", "Skewered Sloach", "a skewered sloach", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SkeweredSloach.description = "A cooked, slug-like creature skewered on a stick.";
Items.Consumables.SkeweredSloach.consumeEffect = ConsumableEffects.SkeweredSloach;
Items.Consumables.SkeweredSloach.value = 10;

//------------
// SPECIAL CONSUMABLES
//------------
Items.Consumables.Condom = new Item("Condom", "Condom", "a condom packet", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Condom.description = "This wrapper contains a latex condom that can be worn over penis. It's designed to prevent pregnancy most of the time. Can be used in certain sex scenes.";
Items.Consumables.Condom.consumeEffect = outputText("You look at the unopened packet of condom.  If applicable, you can use the condom to prevent pregnancy most of the time. And STDs too!");
Items.Consumables.Condom.value = 6;

//------------
// DYES/OILS/LOTIONS
//------------
Items.Consumables.HairDyeAuburn = new HairDye("AuburnD", "Auburn");
Items.Consumables.HairDyeBlack = new HairDye("Black D", "Black");
Items.Consumables.HairDyeBlond = new HairDye("Blond D", "Blond");
Items.Consumables.HairDyeBlue = new HairDye("BlueDye", "Blue");
Items.Consumables.HairDyeBrown = new HairDye("Brown D", "Brown");
Items.Consumables.HairDyeGray = new HairDye("GrayDye", "Gray");
Items.Consumables.HairDyeGreen = new HairDye("Green D", "Green");
Items.Consumables.HairDyeOrange = new HairDye("OrangeD", "Orange");
Items.Consumables.HairDyePink = new HairDye("PinkDye", "Pink");
Items.Consumables.HairDyePurple = new HairDye("PurpleD", "Purple");
Items.Consumables.HairDyeRainbow = new HairDye("RainDye", "Rainbow");
Items.Consumables.HairDyeRed = new HairDye("Red Dye", "Red");
Items.Consumables.HairDyeWhite = new HairDye("White D", "White");

Items.Consumables.SkinOilDark = new SkinOil("DarkOil", "Dark");
Items.Consumables.SkinOilEbony = new SkinOil("EbonyOl", "Ebony");
Items.Consumables.SkinOilFair = new SkinOil("FairOil", "Fair");
Items.Consumables.SkinOilLight = new SkinOil("LightOl", "Light");
Items.Consumables.SkinOilMahogany = new SkinOil("MahogOl", "Mahogany");
Items.Consumables.SkinOilOlive = new SkinOil("OliveOl", "Olive");
Items.Consumables.SkinOilRusset = new SkinOil("RussOil", "Russet");

Items.Consumables.BodyLotionClear = new BodyLotion("ClearLn", "Clear", "smooth thick creamy liquid");
Items.Consumables.BodyLotionRough = new BodyLotion("RoughLn", "Rough", "thick abrasive cream");
Items.Consumables.BodyLotionSexy = new BodyLotion("SexyLtn", "Sexy", "pretty cream like substance");
Items.Consumables.BodyLotionSmooth = new BodyLotion("SmthLtn", "Smooth", "smooth thick creamy liquid");
