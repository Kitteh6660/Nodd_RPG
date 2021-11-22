Items.Consumables = {};

//------------
// FOOD
//------------
Items.Consumables.Tenderling = new Item("Tndrlng", "Tenderling", "a fried tenderling", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Tenderling.description = "A fried piece of meat that looks rather humanoid-shaped, how odd.";
Items.Consumables.Tenderling.consumeEffect = ConsumableEffects.FriedTenderling;
Items.Consumables.Tenderling.value = 15;

Items.Consumables.GrubBowl = new Item("GrubBwl", "Grub Bowl", "a bowl of cooked grub", ITEM_TYPE_CONSUMABLE);
Items.Consumables.GrubBowl.description = "A disposable bowl full of cooked grubs. You could probably eat it.";
Items.Consumables.GrubBowl.consumeEffect = ConsumableEffects.GrubBowl;
Items.Consumables.GrubBowl.value = 15;

Items.Consumables.SloachSkewer = new Item("SSkewer", "Sloach Skewer", "a skewered sloach", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SloachSkewer.description = "A seasoned and grilled sloach skewered on a stick.";
Items.Consumables.SloachSkewer.consumeEffect = ConsumableEffects.SloachSkewer;
Items.Consumables.SloachSkewer.value = 15;

Items.Consumables.SloachScampi = new Item("SScampi", "Sloach Skewer", "a skewered sloach", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SloachScampi.description = "Some sloach sauteed in butter and various herbs that add to the smell and taste.";
Items.Consumables.SloachScampi.consumeEffect = ConsumableEffects.SloachScampi;
Items.Consumables.SloachScampi.value = 30;

Items.Consumables.SloachPoppers = new Item("SPopper", "Sloach Poppers", "some sloach poppers", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SloachPoppers.description = "Some breaded and fried chunks of sloach. Better eaten with a spicy dipping sauce, if you even have any.";
Items.Consumables.SloachPoppers.consumeEffect = ConsumableEffects.SloachPoppers;
Items.Consumables.SloachPoppers.value = 25;

Items.Consumables.SloachSmoothie = new Item("SSmooth", "Sloach Smoothie", "a glass of sloach smoothie", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SloachSmoothie.description = "Some sloach blended with ice. Can you even call this a smoothie? It's too lumpy to be even considered a smoothie! Obviously not vegetarian-friendly.";
Items.Consumables.SloachSmoothie.consumeEffect = ConsumableEffects.SloachSmoothie;
Items.Consumables.SloachSmoothie.value = 15;

Items.Consumables.Hornsquat = new Item("Hrnsqut", "Hornsquat", "a hornsquat", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Hornsquat.description = "A black, lumpy, thorny fruit with bright green insides and purple seeds. The taste is sweet and often quite sour.";
Items.Consumables.Hornsquat.consumeEffect = ConsumableEffects.Hornsquat;
Items.Consumables.Hornsquat.value = 6;

Items.Consumables.Sagberry = new Item("Sagbrry", "Sagberry", "a sprig of sagberries", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Sagberry.description = "A pink and purple berry that grows in sagging, tumor-like clusters from blue branches. Sweet, floral, and a bit musky in taste. Used often in drinks.";
Items.Consumables.Sagberry.consumeEffect = ConsumableEffects.Sagberry;
Items.Consumables.Sagberry.value = 6;

Items.Consumables.Cinderbean = new Item("Cdrbean", "Cinderbean", "a cinderbean", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Cinderbean.description = "A sweet and spicy bean used to make drinks, or ground into a paste as a filling for pastries.";
Items.Consumables.Cinderbean.consumeEffect = ConsumableEffects.Cinderbean;
Items.Consumables.Cinderbean.value = 6;

//------------
// DRUGS
//------------

   // None yet...


//------------
// DRUG TOOLS
//------------
Items.Consumables.SmokePipe = new Item("SmkPipe", "Smoke Pipe", "a pipe for smoking", ITEM_TYPE_CONSUMABLE);
Items.Consumables.SmokePipe.description = "A pipe that you can use to inhale substance and smoke.";
Items.Consumables.SmokePipe.consumeEffect = null;
Items.Consumables.SmokePipe.value = 100;
Items.Consumables.SmokePipe.reusable = true;

Items.Consumables.Hookah = new Item("Hookah", "Hookah", "a hookah", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Hookah.description = "It's exactly what you think. A hookah that you can set down on a table and there are tubes in which to inhale from.";
Items.Consumables.Hookah.consumeEffect = null;
Items.Consumables.Hookah.value = 100;
Items.Consumables.Hookah.reusable = true;

//------------
// DISPOSABLES
//------------





//------------
// SPECIAL CONSUMABLES
//------------
Items.Consumables.Condom = new Item("Condom", "Condom", "a condom packet", ITEM_TYPE_CONSUMABLE);
Items.Consumables.Condom.description = "This wrapper contains a latex condom that can be worn over penis. It's designed to prevent pregnancy most of the time. Can be used in certain sex scenes.";
Items.Consumables.Condom.consumeEffect = createCallBackFunction(outputText, "You look at the unopened packet of condom. If applicable, you can use the condom to prevent pregnancy most of the time. And STDs too!");
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
