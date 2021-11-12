var perksAvailable = [];
PerkMenuBuilder = [];

PerkMenuBuilder.buildPerkList = function() {
    perksAvailable = [];
    //Strength Perks
    if (player.str >= 10)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.StrongBack);
    if (player.str >= 16 && player.findPerk(PerkLib.StrongBack) >= 0)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.StrongBack2);
    //Dexterity Perks
    if (player.dex >= 10)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Evade);
    if (player.dex >= 16)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Runner);
    //Endurance Perks
    if (player.end >= 10)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Tank);
    if (player.end >= 16 && player.findPerk(PerkLib.Tank) >= 0)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Tank2);
    //Intelligence Perks
    if (player.inte >= 10)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Precision);
    if (player.inte >= 16)
        PerkMenuBuilder.addPerkToDropdown(PerkLib.Spellpower);
    //Libido Perks

    //Corruption Perks

    return perksAvailable;
};

PerkMenuBuilder.addPerkToDropdown = function(perk) {
    if (player.findPerk(perk) >= 0) return; //Already have perk? Don't add.
    perksAvailable.push(perk);
};