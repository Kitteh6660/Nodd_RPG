Items.Materials = {};

Items.Materials.NurkPelt = new Item("NurkPlt", "Nurk Pelt", "a sheet of Nurk pelt", ITEM_TYPE_MATERIAL);
Items.Materials.NurkPelt.Description = "A sheet of intact pelt taken from a Nurk. It looks drab in colours.";
Items.Materials.NurkPelt.consumeEffect = createCallBackFunction(outputText, "The pelt feels rather soft to the touch and it's a bit smelly. Perhaps this will be of use in crafting?");
Items.Materials.NurkPelt.Value = 15;

Items.Materials.SlyneScales = new Item("SlynScl", "Slyne Scales", "a sheet of Slyne scales", ITEM_TYPE_MATERIAL);
Items.Materials.SlyneScales.Description = "A sheet of scales taken from a Slyne.";
Items.Materials.SlyneScales.consumeEffect = createCallBackFunction(outputText, "It feels rather scaly to the touch. Perhaps this will be of use in crafting?");
Items.Materials.SlyneScales.Value = 15;