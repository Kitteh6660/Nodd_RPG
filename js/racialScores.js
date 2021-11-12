//RACIAL SCORE
Player.prototype.race = function() {
    //Determine race type:
    var race = "human";
    if (this.catScore() >= 4) {
        if (this.isTaur() && this.lowerBody == LOWER_BODY_TYPE_CAT) {
            race = "cat-taur";
            if (this.faceType == 0)
                race = "sphinx"; // no way to be fully feral anyway
        }
        else {
            race = "cat";
            if (this.faceType == 0)
                race = "cat-" + this.mf("boy", "girl");
        }
    }
    if (this.lizardScore() >= 4)
        race = "lizan";
    if (this.dragonScore() >= 4) {
        race = "dragon";
        if (this.faceType == 0)
            race = "dragon-" + this.mf("man", "girl");
    }
    if (this.raccoonScore() >= 4) {
        race = "raccoon";
        if (this.balls > 0 && this.ballSize > 5)
            race = "tanuki";
    }
    if (this.dogScore() >= 4) {
        if (this.isTaur() && this.lowerBody == LOWER_BODY_TYPE_DOG)
            race = "dog-taur";
        else {
            race = "dog";
            if (this.faceType == 0)
                race = "dog-" + this.mf("man", "girl");
        }
    }
    if (this.wolfScore() >= 4) {
        if (this.isTaur() && this.lowerBody == LOWER_BODY_TYPE_DOG)
            race = "wolf-taur";
        else {
            race = "wolf";
            if (this.faceType == 0)
                race = "wolf-" + this.mf("man", "girl");
        }
    }
    if (this.foxScore() >= 4) {
        if (this.isTaur() && this.lowerBody == LOWER_BODY_TYPE_FOX)
            race = "fox-taur";
        else if (this.skinType == 1)
            race = "fox";
        else
            race = "fox-" + this.mf("morph", "girl");
    }
    if (this.ferretScore() >= 4) {
        if (this.skinType == 1)
            race = "ferret";
        else
            race = "ferret-" + this.mf("morph", "girl");
    }
    if (this.kitsuneScore() >= 4) {
        race = "kitsune";
    }
    if (this.horseScore() >= 3) {
        if (this.isTaur())
            race = "centaur";
        else
        if (this.hornType == HORNS_UNICORN)
            race = "unicorn";
        else
            race = "horse";
    }
    if (this.mutantScore() >= 5 && race == "human")
        race = "corrupted mutant";
    if (this.minoScore() >= 4)
        race = "minotaur";
    if (this.cowScore() > 5) {
        race = "cow-";
        race += this.mf("morph", "girl");
    }
    if (this.beeScore() >= 5)
        race = "bee";
	if (this.humanScore() >= 6 && this.earType == EARS_ELFIN)
		race = "elf";
    if (this.goblinScore() >= 5)
        race = "goblin";
    if (this.humanScore() >= 5 && race == "corrupted mutant")
        race = "somewhat human mutant";
    if (this.demonScore() > 4)
        race = "demon";
    if (this.sharkScore() >= 3)
        race = "shark";
    if (this.bunnyScore() >= 4)
        race = "bunny-" + this.mf("boy", "girl");
    if (this.harpyScore() >= 4)
    {
        if (this.gender >= 2)
            race = "harpy";
        else
            race = "avian";
    }
    if (this.spiderScore() >= 4)
    {
        race = "spider";
        if (this.mf("no", "yes") == "yes")
            race = "spider-girl";
        if (this.isDrider())
            race = "drider";
    }
    if (this.kangaScore() >= 4)
        race = "kangaroo";
    if (this.mouseScore() >= 3) {
        if (this.faceType != 16)
            race = "mouse-" + this.mf("boy", "girl");
        else
            race = "mouse";
    }
    //<mod>
    if (this.pigScore() >= 4) {
        race = "pig";
        if (this.faceType == 0)
            race = "pig-" + this.mf("boy", "girl");
        if (this.faceType == 20)
            race = "boar";
    }
    if (this.satyrScore() >= 4) {
        race = "satyr";
    }
    if (this.rhinoScore() >= 4) {
        race = "rhino";
        if (this.faceType == 0) race = "rhino-" + this.mf("man", "girl");
    }
    if (this.echidnaScore() >= 4) {
        race = "echidna";
        if (this.faceType == 0) race = "echidna-" + this.mf("boy", "girl");
    }
    if (this.deerScore() >= 4) {
        if (this.isTaur()) race = "deer-taur";
        else {
            race = "deer";
            if (this.faceType == 0) race = "deer-" + this.mf("morph", "girl");
        }
    }
    //Special, bizarre races
    if (this.dragonneScore() >= 6) {
        if (this.isTaur()) race = "dragonne-taur";
        else {
            race  = "dragonne";
            if (this.faceType == 0)
                race = "dragonne-" + this.mf("man", "girl");
        }
    }
    if (this.manticoreScore() >= 6) {
        race = "manticore"
        if (this.faceType == 0)
            race = "manticore-" + this.mf("man", "girl");
    }
    if (this.sirenScore() >= 4) {
        race = "siren";
    }
    if (this.sergalScore() >= 4) {
        race = "sergal";
    }
    //</mod>
    if (this.lowerBody == 3)
        race = "naga";
    if (this.lowerBody == LOWER_BODY_TYPE_HOOFED && this.isTaur()) {
        if (this.wingType == WING_TYPE_FEATHERED_LARGE) race = "pegataur";
        else race = "centaur";
    }
    if (this.lowerBody == LOWER_BODY_TYPE_PONY)
        race = "pony-kin";
    if (this.gooScore() >= 3) {
        race = "goo-";
        race += this.mf("boi", "girl");
    }

    return race;
}

//determine demon rating
Player.prototype.demonScore = function() {
    var demonCounter = 0;
    if (this.hornType == 1 && this.horns > 0)
        demonCounter++;
    if (this.hornType == 1 && this.horns > 4)
        demonCounter++;
    if (this.tailType == 3)
        demonCounter++;
    if (this.wingType == 6 || this.wingType == 7)
        demonCounter++;
    if (this.skinType == 0 && this.cor > 50)
        demonCounter++;
    if (this.faceType == 0 && this.cor > 50)
        demonCounter++;
    if (this.lowerBody == 5 || this.lowerBody == 6)
        demonCounter++;
    if (this.countCocksOfType(CockTypesEnum.DEMON) > 0)
        demonCounter++;
    return demonCounter;
}

//Determine Human Rating
Player.prototype.humanScore = function() {
    var humanCounter = 0;
    if (this.faceType == 0)
        humanCounter++;
    if (this.skinType == 0)
        humanCounter++;
    if (this.horns == 0)
        humanCounter++;
    if (this.tailType == 0)
        humanCounter++;
    if (this.wingType == 0)
        humanCounter++;
    if (this.lowerBody == 0)
        humanCounter++;
    if (this.countCocksOfType(CockTypesEnum.HUMAN) == 1 && this.totalCocks() == 1)
        humanCounter++;
    if (this.breastRows.length == 1 && this.skinType == 0)
        humanCounter++;
    return humanCounter;
}

//Determine minotaur rating
Player.prototype.minoScore = function() {
    var minoCounter = 0;
    if (this.faceType == 3)
        minoCounter++;
    if (this.earType == 3)
        minoCounter++;
    if (this.tailType == 4)
        minoCounter++;
    if (this.hornType == 2)
        minoCounter++;
    if (this.lowerBody == 1 && minoCounter > 0)
        minoCounter++;
    if (this.tallness > 80 && minoCounter > 0)
        minoCounter++;
    if (this.cocks.length > 0 && minoCounter > 0)
    {
        if (this.countCocksOfType(CockTypesEnum.HORSE) > 0)
            minoCounter++;
    }
    if (this.vaginas.length > 0)
        minoCounter--;
    return minoCounter;
}

Player.prototype.minotaurScore = function() {
    return this.minoScore();
}

//Determine cow rating
Player.prototype.cowScore = function() {
    var minoCounter = 0;
    if (this.faceType == 0)
        minoCounter++;
    if (this.faceType == 3)
        minoCounter--;
    if (this.earType == 3)
        minoCounter++;
    if (this.tailType == 4)
        minoCounter++;
    if (this.hornType == 2)
        minoCounter++;
    if (this.lowerBody == 1 && minoCounter > 0)
        minoCounter++;
    if (this.tallness >= 73 && minoCounter > 0)
        minoCounter++;
    if (this.vaginas.length > 0)
        minoCounter++;
    if (this.biggestTitSize() > 4 && minoCounter > 0)
        minoCounter++;
    if (this.biggestLactation() > 2 && minoCounter > 0)
        minoCounter++;
    return minoCounter;
}

Player.prototype.sandTrapScore = function() {
    var counter = 0;
    if (this.findStatusEffect(StatusEffects.BlackNipples) >= 0)
        counter++;
    if (this.findStatusEffect(StatusEffects.Uniball) >= 0)
        counter++;
    if (this.hasVagina() && this.vaginaType() == 5)
        counter++;
    if (this.eyeType == EYES_BLACK_EYES_SAND_TRAP)
        counter++;
    if (this.wingType == WING_TYPE_GIANT_DRAGONFLY)
        counter++;
    if (this.findStatusEffect(StatusEffects.Uniball) >= 0)
        counter++;
    return counter;
}

//Determine Bee Rating
Player.prototype.beeScore = function() {
    var beeCounter = 0;
    if (this.hairColor == "shiny black")
        beeCounter++;
    if (this.hairColor == "black and yellow")
        beeCounter += 2;
    if (this.antennae > 0)
    {
        beeCounter++;
        if (this.faceType == 0)
            beeCounter++;
    }
    if (this.lowerBody == 7)
    {
        beeCounter++;
        if (this.vaginas.length == 1)
            beeCounter++;
    }
    if (this.tailType == 6)
        beeCounter++;
    if (this.wingType == 1)
        beeCounter++;
    if (this.wingType == 2)
        beeCounter++;
    return beeCounter;
}
//Determine Ferret Rating!
Player.prototype.ferretScore = function() {
    var counter = 0;
    if (this.faceType == FACE_FERRET_MASK) counter++;
    if (this.faceType == FACE_FERRET) counter+=2;
    if (this.earType == EARS_FERRET) counter++;
    if (this.tailType == TAIL_TYPE_FERRET) counter++;
    if (this.lowerBody == LOWER_BODY_TYPE_FERRET) counter++;
    if (this.skinType == SKIN_TYPE_FUR && counter > 0) counter++;
    return counter;
}
//Determine Dog Rating
Player.prototype.dogScore = function() {
    var dogCounter = 0;
    if (this.faceType == 2)
        dogCounter++;
    if (this.earType == 2)
        dogCounter++;
    if (this.tailType == 2)
        dogCounter++;
    if (this.lowerBody == 2)
        dogCounter++;
    if (this.countCocksOfType(CockTypesEnum.DOG) > 0)
        dogCounter++;
    if (this.breastRows.length > 1)
        dogCounter++;
    if (this.breastRows.length == 3)
        dogCounter++;
    if (this.breastRows.length > 3)
        dogCounter--;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && dogCounter > 0)
        dogCounter++;
    return dogCounter;
}

Player.prototype.wolfScore = function() {
    var dogCounter = 0;
    if (this.faceType == FACE_WOLF)
        dogCounter++;
    if (this.earType == EARS_WOLF)
        dogCounter++;
    if (this.tailType == TAIL_TYPE_WOLF)
        dogCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_DOG)
        dogCounter++;
    if (this.countCocksOfType(CockTypesEnum.DOG) > 0)
        dogCounter++;
    if (this.breastRows.length > 1)
        dogCounter++;
    if (this.breastRows.length == 3)
        dogCounter++;
    if (this.breastRows.length > 3)
        dogCounter--;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && dogCounter > 0)
        dogCounter++;
    return dogCounter;
}

Player.prototype.mouseScore = function() {
    var coonCounter = 0;
    if (this.earType == 12)
        coonCounter++;
    if (this.tailType == 16)
        coonCounter++;
    if (this.faceType == 15)
        coonCounter++;
    if (this.faceType == 16)
        coonCounter += 2;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && coonCounter > 0)
        coonCounter++;
    if (this.tallness < 55 && coonCounter > 0)
        coonCounter++;
    if (this.tallness < 45 && coonCounter > 0)
        coonCounter++;
    return coonCounter;
}

Player.prototype.raccoonScore = function() {
    var coonCounter = 0;
    if (this.faceType == 13)
        coonCounter++;
    if (this.faceType == 14)
        coonCounter += 2;
    if (this.earType == 11)
        coonCounter++;
    if (this.tailType == 15)
        coonCounter++;
    if (this.lowerBody == 19)
        coonCounter++;
    if (coonCounter > 0 && this.balls > 0)
        coonCounter++;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && coonCounter > 0)
        coonCounter++;
    return coonCounter;
}

//Determine Fox Rating
Player.prototype.foxScore = function() {
    var foxCounter = 0;
    if (this.faceType == 11)
        foxCounter++;
    if (this.earType == 9)
        foxCounter++;
    if (this.tailType == 13)
        foxCounter++;
    if (this.lowerBody == 17)
        foxCounter++;
    if (this.countCocksOfType(CockTypesEnum.DOG) && foxCounter > 0)
        foxCounter++;
    if (this.breastRows.length > 1 && foxCounter > 0)
        foxCounter++;
    if (this.breastRows.length == 3 && foxCounter > 0)
        foxCounter++;
    if (this.breastRows.length == 4 && foxCounter > 0)
        foxCounter++;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && foxCounter > 0)
        foxCounter++;
    return foxCounter;
}

//Determine cat Rating
Player.prototype.catScore = function() {
    var catCounter = 0;
    if (this.faceType == 6)
        catCounter++;
    if (this.earType == 5)
        catCounter++;
    if (this.tailType == 8)
        catCounter++;
    if (this.lowerBody == 9)
        catCounter++;
    if (this.countCocksOfType(CockTypesEnum.CAT) > 0)
        catCounter++;
    if (this.breastRows.length > 1 && catCounter > 0)
        catCounter++;
    if (this.breastRows.length == 3 && catCounter > 0)
        catCounter++;
    if (this.breastRows.length > 3)
        catCounter -= 2;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && catCounter > 0)
        catCounter++;
    return catCounter;
}

//Determine lizard rating
Player.prototype.lizardScore = function() {
    var lizardCounter = 0;
    if (this.faceType == 7)
        lizardCounter++;
    if (this.earType == 6)
        lizardCounter++;
    if (this.tailType == 9)
        lizardCounter++;
    if (this.lowerBody == 10)
        lizardCounter++;
    if (this.countCocksOfType(CockTypesEnum.LIZARD) > 0)
        lizardCounter++;
    if (this.horns > 0 && (this.hornType == 3 || this.hornType == 4))
        lizardCounter++;
    if (this.skinType == 2)
        lizardCounter++;
    return lizardCounter;
}

Player.prototype.spiderScore = function() {
    var score = 0;
    if (this.eyeType == 1)
        score += 2;
    if (this.faceType == 10)
        score++;
    if (this.armType == 2)
        score++;
    if (this.lowerBody == 15 || this.lowerBody == 16)
        score += 2;
    else if (score > 0)
        score--;
    if (this.tailType == 5)
        score += 2;
    if (this.skinType > 0 && score > 0)
        score--;
    return score;
}

//Determine Horse Rating
Player.prototype.horseScore = function() {
    var horseCounter = 0;
    if (this.faceType == 1)
        horseCounter++;
    if (this.earType == 1)
        horseCounter++;
    if (this.tailType == 1)
        horseCounter++;
    if (this.countCocksOfType(CockTypesEnum.HORSE) > 0)
        horseCounter++;
    if (this.lowerBody == 1 || this.lowerBody == 4)
        horseCounter++;
    //Fur only counts if some equine features are present
    if (this.skinType == 1 && horseCounter > 0)
        horseCounter++;
    return horseCounter;
}

//Determine kitsune Rating
Player.prototype.kitsuneScore = function() {
    var kitsuneCounter = 0;
    //If the character has fox ears, +1
    if (this.earType == EARS_FOX)
        kitsuneCounter++;
    //If the character has a fox tail, +1
    if (this.tailType == TAIL_TYPE_FOX)
        kitsuneCounter++;
    //If the character has two or more fox tails, +2
    if (this.tailType == TAIL_TYPE_FOX && this.tailVenom >= 2)
        kitsuneCounter += 2;
    //If the character has tattooed skin, +1
    //9999
    //If the character has a 'vag of holding', +1
    if (this.vaginalCapacity() >= 8000)
        kitsuneCounter++;
    //If the character's kitsune score is greater than 0 and:
    //If the character has a normal face, +1
    if (kitsuneCounter > 0 && (this.faceType == FACE_HUMAN || this.faceType == FACE_FOX))
        kitsuneCounter++;
    //If the character's kitsune score is greater than 1 and:
    //If the character has "blonde","black","red","white", or "silver" hair, +1
    //if (kitsuneCounter > 0 && (InCollection(furColor, KitsuneScene.basicKitsuneHair) || InCollection(furColor, KitsuneScene.elderKitsuneColors)))
    //    kitsuneCounter++;
    //If the character's femininity is 40 or higher, +1
    if (kitsuneCounter > 0 && this.femininity >= 40)
        kitsuneCounter++;
    //If the character has fur, scales, or gooey skin, -1
    //if (this.skinType == SKIN_TYPE_FUR && !InCollection(furColor, KitsuneScene.basicKitsuneFur) && !InCollection(furColor, KitsuneScene.elderKitsuneColors))
    //    kitsuneCounter--;
    if (this.skinType > SKIN_TYPE_FUR)
        kitsuneCounter -= this.skinType; // -2 sor scales, -3 for goo
    //If the character has abnormal legs, -1
    if (this.lowerBody != LOWER_BODY_TYPE_HUMAN && this.lowerBody != LOWER_BODY_TYPE_FOX)
        kitsuneCounter--;
    //If the character has a nonhuman face, -1
    if (this.faceType != FACE_HUMAN && this.faceType != FACE_FOX)
        kitsuneCounter--;
    //If the character has ears other than fox ears, -1
    if (this.earType != EARS_FOX)
        kitsuneCounter--;
    //If the character has tail(s) other than fox tails, -1
    if (this.tailType != TAIL_TYPE_FOX)
        kitsuneCounter--;

    return kitsuneCounter;

}

//Determine Dragon Rating
Player.prototype.dragonScore = function() {
    var dragonCounter = 0;
    if (this.faceType == FACE_DRAGON)
        dragonCounter++;
    if (this.earType == EARS_DRAGON)
        dragonCounter++;
    if (this.tailType == TAIL_TYPE_DRACONIC)
        dragonCounter++;
    if (this.tongueType == TONGUE_DRACONIC)
        dragonCounter++;
    if (this.countCocksOfType(CockTypesEnum.DRAGON) > 0)
        dragonCounter++;
    if (this.wingType == WING_TYPE_DRACONIC_SMALL || this.wingType == WING_TYPE_DRACONIC_LARGE)
        dragonCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_DRAGON)
        dragonCounter++;
    if (this.horns > 0 && (this.hornType == HORNS_DRACONIC_X2 || this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG))
        dragonCounter++;
    if (this.skinType == SKIN_TYPE_SCALES && dragonCounter > 0)
        dragonCounter++;
    if (this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG || this.hornType == HORNS_DRACONIC_X2)
        dragonCounter++;
    if (this.findPerk(PerkLib.Dragonfire) >= 0)
        dragonCounter++;
    return dragonCounter;
}

//Goblinscore
Player.prototype.goblinScore = function() {
    var horseCounter = 0;
    if (this.earType == EARS_ELFIN)
        horseCounter++;
    if (this.skinTone == "pale yellow" || this.skinTone == "grayish-blue" || this.skinTone == "green" || this.skinTone == "dark green")
        horseCounter++;
    if (horseCounter > 0)
    {
        if (this.faceType == FACE_HUMAN || this.facetype == FACE_GOBLIN)
            horseCounter++;
        if (this.tallness < 48)
            horseCounter++;
        if (this.hasVagina())
            horseCounter++;
        if (this.lowerBody == LOWER_BODY_TYPE_HUMAN)
            horseCounter++;
    }
    return horseCounter;
}

//Gooscore
Player.prototype.gooScore = function() {
    var gooCounter = 0;
    if (this.hairType == HAIR_GOO)
        gooCounter++;
    if (this.skinAdj == "slimy")
        gooCounter++;
    if (this.lowerBody == 8)
        gooCounter++;
    if (this.vaginalCapacity() > 9000)
        gooCounter++;
    if (this.findStatusEffect(StatusEffects.SlimeCraving) >= 0)
        gooCounter++;
    return gooCounter;
}

//Nagascore
Player.prototype.nagaScore = function() {
    var nagaCounter = 0;
    if (this.faceType == FACE_SNAKE_FANGS)
        nagaCounter++;
    if (this.tongueType == TONGUE_SNAKE)
        nagaCounter++;
    if (nagaCounter > 0 && this.antennae == 0)
        nagaCounter++;
    if (nagaCounter > 0 && this.wingType == 0)
        nagaCounter++;
    return nagaCounter;
}

//Bunnyscore
Player.prototype.bunnyScore = function() {
    var bunnyCounter = 0;
    if (this.faceType == FACE_BUNNY)
        bunnyCounter++;
    if (this.tailType == TAIL_TYPE_RABBIT)
        bunnyCounter++;
    if (this.earType == EARS_BUNNY)
        bunnyCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_BUNNY)
        bunnyCounter++;
    //More than 2 balls reduces bunny score
    if (this.balls > 2 && bunnyCounter > 0)
        bunnyCounter--;
    //Human skin on bunmorph adds
    if (this.skinType == SKIN_TYPE_PLAIN && bunnyCounter > 1)
        bunnyCounter++;
    //No wings and antennae a plus
    if (bunnyCounter > 0 && this.antennae == 0)
        bunnyCounter++;
    if (bunnyCounter > 0 && this.wingType == 0)
        bunnyCounter++;
    return bunnyCounter;
}

//Harpyscore
Player.prototype.harpyScore = function() {
    var harpy = 0;
    if (this.armType == ARM_TYPE_HARPY)
        harpy++;
    if (this.hairType == HAIR_FEATHER)
        harpy++;
    if (this.wingType == WING_TYPE_FEATHERED_LARGE)
        harpy++;
    if (this.tailType == TAIL_TYPE_HARPY)
        harpy++;
    if (this.lowerBody == LOWER_BODY_TYPE_HARPY)
        harpy++;
    if (harpy >= 2 && this.faceType == FACE_HUMAN)
        harpy++;
    if (harpy >= 2 && (this.earType == EARS_HUMAN || this.earType == EARS_ELFIN))
        harpy++;
    return harpy;
}

//Kangascore
Player.prototype.kangaScore = function() {
    var kanga = 0;
    if (this.countCocksOfType(CockTypesEnum.KANGAROO) > 0)
        kanga++;
    if (this.earType == EARS_KANGAROO)
        kanga++;
    if (this.tailType == TAIL_TYPE_KANGAROO)
        kanga++;
    if (this.lowerBody == LOWER_BODY_TYPE_KANGAROO)
        kanga++;
    if (this.faceType == FACE_KANGAROO)
        kanga++;
    if (kanga >= 2 && this.skinType == SKIN_TYPE_FUR)
        kanga++;
    return kanga;
}

//sharkscore
Player.prototype.sharkScore = function() {
    var sharkCounter = 0;
    if (this.faceType == FACE_SHARK_TEETH)
        sharkCounter++;
    if (this.wingType == WING_TYPE_SHARK_FIN)
        sharkCounter++;
    if (this.tailType == TAIL_TYPE_SHARK)
        sharkCounter++;
    if (this.skinType == SKIN_TYPE_PLAIN && (this.skinTone == "rough gray" || player.skinTone == "orange and black striped"))
        sharkCounter++;
    return sharkCounter;
}

//Determine Mutant Rating
Player.prototype.mutantScore = function() {
    var mutantCounter = 0;
    if (this.faceType > FACE_HUMAN)
        mutantCounter++;
    if (this.skinType > SKIN_TYPE_PLAIN)
        mutantCounter++;
    if (this.tailType > TAIL_TYPE_NONE)
        mutantCounter++;
    if (this.cockTotal() > 1)
        mutantCounter++;
    if (this.hasCock() && this.hasVagina())
        mutantCounter++;
    if (this.hasFuckableNipples())
        mutantCounter++;
    if (this.breastRows.length > 1)
        mutantCounter++;
    if (this.faceType == FACE_HORSE)
    {
        if (this.skinType == SKIN_TYPE_FUR)
            mutantCounter--;
        if (this.tailType == TAIL_TYPE_HORSE)
            mutantCounter--;
    }
    if (this.faceType == FACE_DOG)
    {
        if (this.skinType == SKIN_TYPE_FUR)
            mutantCounter--;
        if (this.tailType == TAIL_TYPE_DOG)
            mutantCounter--;
    }
    if (this.faceType == FACE_CAT)
    {
        if (this.skinType == SKIN_TYPE_FUR)
            mutantCounter--;
        if (this.tailType == TAIL_TYPE_CAT)
            mutantCounter--;
    }
    return mutantCounter--;
}

//Mod-added
Player.prototype.sirenScore = function()
{
    var sirenCounter = 0;
    if (this.faceType == FACE_SHARK_TEETH && this.tailType == TAIL_TYPE_SHARK && this.wingType == WING_TYPE_FEATHERED_LARGE && this.armType == ARM_TYPE_HARPY)
        sirenCounter+= 4;
    if (this.hasVagina() && sirenCounter > 0)
        sirenCounter++;
    if (this.hasCock() && this.countCocksOfType(CockTypesEnum.ANEMONE) > 0 && sirenCounter > 0)
    	sirenCounter++;
    return sirenCounter++;
}

Player.prototype.pigScore = function() {
    var pigCounter = 0;
    if (this.earType == EARS_PIG)
        pigCounter++;
    if (this.tailType == TAIL_TYPE_PIG)
        pigCounter++;
    if (this.faceType == FACE_PIG || FACE_BOAR)
        pigCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED)
        pigCounter += 2;
    if (this.countCocksOfType(CockTypesEnum.PIG) > 0)
        pigCounter++;
    return pigCounter;
}

Player.prototype.satyrScore = function() {
    var satyrCounter = 0;
    if (this.lowerBody == LOWER_BODY_TYPE_HOOFED)
        satyrCounter++;
    if (this.tailType == TAIL_TYPE_GOAT)
        satyrCounter++;
    if (satyrCounter >= 2) {
        if (this.earType == EARS_ELFIN)
            satyrCounter++;
        if (this.faceType == FACE_HUMAN)
            satyrCounter++;
        if (this.countCocksOfType(CockTypesEnum.HUMAN) > 0)
            satyrCounter++;
        if (this.balls > 0 && this.ballSize >= 3)
            satyrCounter++;
    }
    return satyrCounter;
}

Player.prototype.rhinoScore = function() {
    var rhinoCounter = 0;
    if (this.earType == EARS_RHINO)
        rhinoCounter++;
    if (this.tailType == TAIL_TYPE_RHINO)
        rhinoCounter++;
    if (this.faceType == FACE_RHINO)
        rhinoCounter++;
    if (this.hornType == HORNS_RHINO)
        rhinoCounter++;
    if (rhinoCounter >= 2 && this.skinTone == "gray")
        rhinoCounter++;
    if (rhinoCounter >= 2 && this.hasCock() && this.countCocksOfType(CockTypesEnum.RHINO) > 0)
        rhinoCounter++;
    return rhinoCounter;
}

Player.prototype.echidnaScore = function() {
    var echidnaCounter = 0;
    if (this.earType == EARS_ECHIDNA)
        echidnaCounter++;
    if (this.tailType == TAIL_TYPE_ECHIDNA)
        echidnaCounter++;
    if (this.faceType == FACE_ECHIDNA)
        echidnaCounter++;
    if (this.tongueType == TONGUE_ECHIDNA)
        echidnaCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_ECHIDNA)
        echidnaCounter++;
    if (echidnaCounter >= 2 && this.skinType == SKIN_TYPE_FUR)
        echidnaCounter++;
    if (echidnaCounter >= 2 && this.hasCock() && this.countCocksOfType(CockTypesEnum.ECHIDNA) > 0)
        echidnaCounter++;
    return echidnaCounter;
}

Player.prototype.deerScore = function() {
    var deerCounter = 0;
    if (this.earType == EARS_DEER)
        deerCounter++;
    if (this.tailType == TAIL_TYPE_DEER)
        deerCounter++;
    if (this.faceType == FACE_DEER)
        deerCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_CLOVEN_HOOFED || this.lowerBody == LOWER_BODY_TYPE_DEERTAUR)
        deerCounter++;
    if (this.hornType == HORNS_ANTLERS && this.horns >= 4)
        deerCounter++;
    if (deerCounter >= 2 && this.skinType == SKIN_TYPE_FUR)
        deerCounter++;
    if (deerCounter >= 3 && this.countCocksOfType(CockTypesEnum.HORSE) > 0)
        deerCounter++;
    return deerCounter;
}

//Dragonne
Player.prototype.dragonneScore = function() {
    var dragonneCounter = 0;
    if (this.faceType == FACE_CAT)
        dragonneCounter++;
    if (this.earType == EARS_CAT)
        dragonneCounter++;
    if (this.tailType == TAIL_TYPE_CAT)
        dragonneCounter++;
    if (this.tongueType == TONGUE_DRACONIC)
        dragonneCounter++;
    if (this.wingType == WING_TYPE_DRACONIC_LARGE || this.wingType == WING_TYPE_DRACONIC_SMALL)
        dragonneCounter++;
    if (this.lowerBody == LOWER_BODY_TYPE_CAT)
        dragonneCounter++;
    if (this.skinType == 2 && dragonneCounter > 0)
        dragonneCounter++;
    return dragonneCounter;
}

//Manticore
Player.prototype.manticoreScore = function() {
    var catCounter = 0;
    if (this.faceType == FACE_CAT)
        catCounter++;
    if (this.earType == EARS_CAT)
        catCounter++;
    if (this.tailType == TAIL_TYPE_SCORPION)
        catCounter += 2;
    if (this.lowerBody == LOWER_BODY_TYPE_CAT)
        catCounter++;
    if (catCounter >= 4) {
        if (this.hornType == HORNS_DEMON || this.hornType == HORNS_DRACONIC_X2 || this.hornType == HORNS_DRACONIC_X4_12_INCH_LONG)
            catCounter++;
        if (this.wingType == WING_TYPE_BAT_LIKE_TINY || this.wingType == WING_TYPE_DRACONIC_SMALL)
            catCounter++;
        if (this.wingType == WING_TYPE_BAT_LIKE_LARGE || this.wingType == WING_TYPE_DRACONIC_LARGE)
            catCounter += 2;
    }
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && catCounter >= 6)
        catCounter++;
    return catCounter;
}

//Manticore
Player.prototype.sergalScore = function() {
    var score = 0;
    if (this.faceType == FACE_SERGAL)
        score++;
    if (this.earType == EARS_SERGAL)
        score++;
    if (this.tailType == TAIL_TYPE_SERGAL)
        score += 2;
    if (this.lowerBody == LOWER_BODY_TYPE_SERGAL)
        score++;
    //Fur only counts if some canine features are present
    if (this.skinType == 1 && score >= 4)
        score++;
    return score;
}

// Group
Player.prototype.isCanine = function() {
	var race = this.race();
	return race == "dog" || race == "wolf" || race == "coyote" || race == "fox";
}

Player.prototype.isFeline = function() {
	var race = this.race();
	return race == "cat" || race == "lion" || race == "tiger" || race == "jaguar" || race == "leopard" || race == "snow leopard" || race == "snep" || race == "cheetah" || race == "caracal" || race == "lynx" || race == "cougar";
}

Player.prototype.isEquine = function() {
	var race = this.race();
	return race == "horse" || race == "donkey" || race == "zebra";
}