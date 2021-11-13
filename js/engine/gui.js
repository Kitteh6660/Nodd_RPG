// This code holds the positioning of the GUI display. The look of the display is handled through the CSS file.
// This holds some of the most important code for the engine of the game. It turns the buttons on and off, sets their labels and tool tips
// and tells the program which function to go to next.


//Events
document.onmousemove = getMousePosition;
initializeTooltipEvents();

function getMousePosition(event) {
    document.getElementById("tooltip").style.top = (event.clientY - 280) + "px";
    if (event.clientX + 20 < document.documentElement.clientWidth - 420)
        document.getElementById("tooltip").style.left = (event.clientX + 20) + "px";
    else
        document.getElementById("tooltip").style.left = (document.documentElement.clientWidth - 420) + "px";
}

//Stats Pane
function refreshStats() {
	//------------
	// NUMBERS
	//------------
	//Combat Stats
	document.getElementById("hpNum").innerHTML = Math.floor(player.HP) + " / " + player.maxHP();
    document.getElementById("hpNum").title = "HP: " + Math.floor(player.HP) + " / " + player.maxHP();
	document.getElementById("mpNum").innerHTML = Math.floor(player.MP) + " / " + player.maxMP();
    document.getElementById("mpNum").title = "MP: " + Math.floor(player.MP) + " / " + player.maxMP();
	document.getElementById("lustNum").innerHTML = Math.floor(player.lust) + " / " + player.maxLust();
    document.getElementById("lustNum").title = "Lust: " + Math.floor(player.lust) + " / " + player.maxLust() + " \nMinimum: " + player.minLust() + "\nLust Resistance: " + (Math.floor((1 - player.lustVuln) * 1000) / 10) + "%";
	
	//Personal Needs
	document.getElementById("energyNum").innerHTML = Math.floor(player.energy) + " / " + player.maxEnergy();
    document.getElementById("energyNum").title = "Energy: " + Math.floor(player.energy) + " / " + player.maxEnergy();
	document.getElementById("hungerNum").innerHTML = Math.floor(player.hunger) + " / " + player.maxHunger();
    document.getElementById("hungerNum").title = "Satiety: " + Math.floor(player.hunger) + " / " + player.maxHunger();
	document.getElementById("thirstNum").innerHTML = Math.floor(player.thirst) + " / " + player.maxThirst();
    document.getElementById("thirstNum").title = "Hydration: " + Math.floor(player.thirst) + " / " + player.maxThirst();
	document.getElementById("bladderNum").innerHTML = Math.floor(player.bladder) + " / " + player.maxBladder();
    document.getElementById("bladderNum").title = "Bladder: " + Math.floor(player.bladder) + " / " + player.maxBladder();
	
	//Core Stats
	document.getElementById("strNum").innerHTML = Math.floor(player.str);
	document.getElementById("dexNum").innerHTML = Math.floor(player.dex);
	document.getElementById("endNum").innerHTML = Math.floor(player.end);
	document.getElementById("intNum").innerHTML = Math.floor(player.inte);
	document.getElementById("wilNum").innerHTML = Math.floor(player.wil);
	document.getElementById("chaNum").innerHTML = Math.floor(player.cha);
	document.getElementById("libNum").innerHTML = Math.floor(player.lib);
	document.getElementById("corNum").innerHTML = Math.floor(player.cor);
	//Advancement
	document.getElementById("levelNum").innerHTML = player.level;
	document.getElementById("xpNum").innerHTML = player.XP + " / " + (player.getXPNeeded());
	document.getElementById("moneyNum").innerHTML = player.gloam;

	//------------
	// BARS
	//------------
	//Combat Stats
	document.getElementById("hpBar").style.width = Math.floor((player.HP / player.maxHP()) * 100) + "%";
	document.getElementById("mpBar").style.width = Math.floor((player.MP / player.maxMP()) * 100) + "%";
	document.getElementById("lustBar").style.width = Math.floor((player.lust / player.maxLust()) * 100) + "%";
	
	//Personal Needs
	document.getElementById("energyBar").style.width = Math.floor((player.energy / player.maxEnergy()) * 100) + "%";
	document.getElementById("hungerBar").style.width = Math.floor((player.hunger / player.maxHunger()) * 100) + "%";
	document.getElementById("thirstBar").style.width = Math.floor((player.thirst / player.maxThirst()) * 100) + "%";
	document.getElementById("bladderBar").style.width = Math.floor((player.bladder / player.maxBladder()) * 100) + "%";

	//Core Stats
	document.getElementById("strBar").style.width = Math.floor((player.str / player.maxAttribute("strength")) * 100) + "%";
	document.getElementById("dexBar").style.width = Math.floor((player.dex / player.maxAttribute("dexterity")) * 100) + "%";
	document.getElementById("endBar").style.width = Math.floor((player.end / player.maxAttribute("endurance")) * 100) + "%";
	document.getElementById("intBar").style.width = Math.floor((player.inte / player.maxAttribute("intelligence")) * 100) + "%";
	document.getElementById("wilBar").style.width = Math.floor((player.wil / player.maxAttribute("willpower")) * 100) + "%";
	document.getElementById("chaBar").style.width = Math.floor((player.cha / player.maxAttribute("charisma")) * 100) + "%";
	document.getElementById("libBar").style.width = Math.floor((player.lib / 100) * 100) + "%";
	document.getElementById("corBar").style.width = Math.floor((player.cor / 100) * 100) + "%";
	//Advancement
	if ((player.XP / (player.getXPNeeded())) < 1)
		document.getElementById("xpBar").style.width = Math.floor((player.XP / player.getXPNeeded()) * 100) + "%";
	else 
		document.getElementById("xpBar").style.width = "100%";
	//Name
    document.getElementById("charName").innerHTML = player.name;
	refreshTime();
}
function refreshTime() {
	//Time
	var timeText = "";
    timeText += "<b>Date:</b> " + Time.getNoddDate() + "<br><b>Time:</b> ";
    if (use12Hours) {
        if (time.hours < 12) { //am
            if (time.hours == 0)
                timeText += (time.hours + 12) + ":" + (time.minutes < 10 ? "0" : "") + time.minutes;
            else
                timeText += time.hours + ":" + (time.minutes < 10 ? "0" : "") + time.minutes;
            timeText += "am";
        }
        else { //pm
            if (time.hours == 0)
                timeText += time.hours + ":" + (time.minutes < 10 ? "0" : "") + time.minutes;
            else
                timeText += (time.hours - 12) + ":" + (time.minutes < 10 ? "0" : "") + time.minutes;
            timeText += "pm";
        }
    }
    else
        timeText += time.hours + " bells; " + (time.minutes < 10 ? "0" : "") + time.minutes + " chimes";
    document.getElementById("timeDisplay").innerHTML = timeText;
}
function showStats() {
	refreshStats();
	document.getElementById("stats").style.visibility = "visible";
	document.getElementById("timeDisplay").style.visibility = "visible";
}
function hideStats() {
	document.getElementById("stats").style.visibility = "hidden";
	document.getElementById("timeDisplay").style.visibility = "hidden";
}

function hideUpDown() {
    var arrows = ["strArrow", "dexArrow", "endArrow", "intArrow", "wilArrow", "chaArrow", "libArrow", "corArrow", "hpArrow", "mpArrow", "lustArrow", "energyArrow", "hungerArrow", "thirstArrow", "bladderArrow"];
    for (var i = 0; i < arrows.length; i++) {
        document.getElementById(arrows[i]).style.visibility = "hidden";
    }
}
function showUpDown(arrowToDisplay, upDown) {
	var invertedArrows = false;
	if (arrowToDisplay == "lustArrow" || arrowToDisplay == "bladderArrow" || arrowToDisplay == "bowelArrow") invertedArrows = true;
    //Auto-route parameter
    if (arrowToDisplay == "inteArrow") arrowToDisplay = "intArrow";
    //Display arrow
    if (upDown == "up")
        document.getElementById(arrowToDisplay).style.backgroundImage = "url(assets/interface/arrow_" + (invertedArrows == true ? "red" : "green") + ".png)";
    else if (upDown == "down")
        document.getElementById(arrowToDisplay).style.backgroundImage = "url(assets/interface/arrow_" + (invertedArrows == true ? "green" : "red") + ".png)";
    document.getElementById(arrowToDisplay).style.visibility = "visible";
}
function displaySprite(spriteId) {
    if (spriteId == undefined) {
        document.getElementById("spriteDisplay").innerHTML = "";
    }
    else {
        var image = new Image();
        image.src = "assets/sprites/" + spriteId + ".png";

        document.getElementById("spriteDisplay").innerHTML = "<img src=\"assets/sprites/" + spriteId + ".png\">"
    }
}

//Bottom menu buttons
function showButtons() {
	for (var i = 0; i < 15; i++) {
		document.getElementById("button" + pos).style.visibility = "visible";
	}
}
function hideButtons() {
	for (var i = 0; i < 15; i++) {
		document.getElementById("button" + pos).style.visibility = "hidden";
	}
}

function showRow(row) {
	document.getElementById("row" + row).style.visibility = "visible";
}
function hideRow(row) {
	document.getElementById("row" + row).style.visibility = "hidden";
}

function menu() {
	for (var i = 0; i < 15; i++) {
		disableButton(i);
	}
}

function genericPlayerButtons() {
	hideUpDown();
	refreshStats();
	addButtonDisabled(5, "Up");
	addButtonDisabled(6, "North");
	addButtonDisabled(7, "Down");
	addButtonDisabled(10, "West");
	addButtonDisabled(11, "South");
	addButtonDisabled(12, "East");
	addButtonDisabled(8, "Masturbate", "Not yet implemented anywhere. For now, please visit Room 6 in the upstairs of Outside Inn.");
	addButton(9, "Wait", Time.waitMenu);
	addButton(13, "Inventory", Inventory.inventoryMenu);
	addButtonDisabled(14, "Map", "Not yet implemented.");
}

function addButton(pos, txt, func, arg1, arg2, arg3, tooltipText, tooltipHeader) {
    if (tooltipHeader == undefined) tooltipHeader = txt;
    var callback = createCallBackFunction(func, arg1, arg2, arg3);
	document.getElementById("button" + pos).innerHTML = txt;
    document.getElementById("button" + pos).enabled = true;
	document.getElementById("button" + pos).onclick = callback;
	document.getElementById("button" + pos).style.opacity = "";
    document.getElementById("button" + pos).tooltipHeader = tooltipHeader;
    document.getElementById("button" + pos).tooltipText = tooltipText;
    return document.getElementById("button" + pos);
}
function addButtonDisabled(pos, txt, tooltipText, tooltipHeader) {
	disableButton(pos);
    if (tooltipHeader == undefined) tooltipHeader = txt;
    document.getElementById("button" + pos).innerHTML = txt;
    document.getElementById("button" + pos).tooltipHeader = tooltipHeader;
    document.getElementById("button" + pos).tooltipText = tooltipText;
}
function disableButton(pos) {
	document.getElementById("button" + pos).innerHTML = "";
	document.getElementById("button" + pos).enabled = false;
	document.getElementById("button" + pos).onclick = null;
	document.getElementById("button" + pos).style.opacity = 0.4;
	document.getElementById("button" + pos).tooltipHeader = undefined;
    document.getElementById("button" + pos).tooltipText = undefined;
}

function isButtonEnabled(pos) {
	return document.getElementById("button" + pos).enabled == true;
}

function doNext(func) {
	menu();
	addButton(0, "Next", func);
}
function doYesNo(yesFunc, noFunc) {
	menu();
	addButton(0, "Yes", yesFunc);
	addButton(1, "No", noFunc);
}

//Bottom left menu buttons
function showMenus() {
	document.getElementById("buttonMain").style.visibility = "visible";
	document.getElementById("buttonSettings").style.visibility = "visible";
	document.getElementById("buttonData").style.visibility = "visible";
	document.getElementById("buttonChar").style.visibility = "visible";
}
function hideMenus() {
	document.getElementById("buttonMain").style.visibility = "hidden";
	document.getElementById("buttonSettings").style.visibility = "hidden";
	document.getElementById("buttonData").style.visibility = "hidden";
	document.getElementById("buttonChar").style.visibility = "hidden";
}
function hideMenuButton(menuButton) {
	document.getElementById(menuButton).style.visibility = "hidden";
}
function showMenuButton(menuButton) {
	document.getElementById(menuButton).style.visibility = "visible";
}
function setMenuButton(menuButton, text, func) {
	document.getElementById(menuButton).innerHTML = text;
	document.getElementById(menuButton).onclick = func;
}

function setHeader(text) {
	document.getElementById("headertext").innerHTML = text;
}
function clearHeader() {
	document.getElementById("headertext").innerHTML = "";
}

//Hook function too
function hint(pos, txt, hdr) {
	if (hdr != undefined) {
		document.getElementById("button" + pos).tooltipHeader = hdr;
	}
	else {
		document.getElementById("button" + pos).tooltipHeader = document.getElementById("button" + pos).textContent;
	}
	document.getElementById("button" + pos).tooltipText = txt;
}

//Tooltip
function initializeTooltipEvents() {
    for (var i = 0; i < 15; i++) {
		var btn = document.getElementById("button" + i);
        //Create blank variable
        btn.tooltipHeader = undefined;
        btn.tooltipText = undefined;
        //Hook events
        btn.onmouseover = (function(event) {
            if (event.currentTarget.tooltipText != undefined) {
                document.getElementById("tooltip").style.visibility = "visible";
                document.getElementById("tooltip").innerHTML = "<h5>" + event.currentTarget.tooltipHeader + "</h5><p>" + event.currentTarget.tooltipText + "</p>";
            }
        });
        btn.onmouseout = function() {
            document.getElementById("tooltip").style.visibility = "hidden";
        }
    }
}
