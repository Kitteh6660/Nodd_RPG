Spells = [];

Spells.LivingSalve = new Spell("L.Salve", "Living Salve", spellLivingSalve, 25);
Spells.LivingSalve.description = "A spell that manifests as an ooze that seeks out the target's wounds, knitting flesh and bone back together.";

Spells.Blind = new Spell("Blind", "Blind", spellBlind, 20);
Spells.Blind.description = "A spell that blinds the target temporarily. Success chance is based on your Intelligence versus your opponent's Willpower.";

Spells.Rouse = new Spell("Rouse", "Rouse", spellRouse, 30);
Spells.Rouse.description = "A spell that arouses the target. Effectiveness is based on your Intelligence and Corruption versus your Opponent's Willpower minus Libido.";