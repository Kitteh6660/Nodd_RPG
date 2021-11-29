//------------
// SETTINGS
//------------
function outputSettingsTexts() {
	clearOutput();
	//Silly Mode
    if (silly)
        outputText("Silly Mode: <b><font color=\"#00C000\">ON</font></b><br>&nbsp; Hilarious and funny scenes can occur.<br><br>");
    else
        outputText("Silly Mode: <b><font color=\"#C00000\">OFF</font></b><br>&nbsp; Silly mode is off. No sense of humour?<br><br>");
    //Time Format
    if (use12Hours)
        outputText("Time Format: <b>12 hours</b><br>&nbsp; 12-hour format will be used. Time will use AM/PM.<br><br>");
    else
        outputText("Time Format: <b>24 hours</b><br>&nbsp; 24-hour format will be used.<br><br>");
    //Measurements
    if (useMetrics)
        outputText("Units of Measurement: <b>Metric</b><br>&nbsp; Measurements will use metrics whenever possible.<br><br>");
    else
        outputText("Units of Measurement: <b>Imperial</b><br>&nbsp; Measurements will use imperial units whenever possible.<br><br>");
}

function settingsScreenMain() {
    Data.saveSettings();
    clearOutput();
	setHeader("Game Settings");
	outputSettingsTexts();
    //Set buttons
    menu();
	showRow(2);
	showRow(3);	
	addButton(0, "Gameplay", gameplaySettingsMenu);
	addButton(1, "Interface", interfaceSettingsMenu);
	addButton(2, "Weird Kinks", kinksToggleMenu);
    addButton(4, "Back", playerMenu);
}


//Gameplay Settings
function gameplaySettingsMenu() {
	setHeader("Gameplay Settings");
	outputSettingsTexts();
	menu();
	addButton(0, "Silly Mode", toggleSilly);
	addButton(14, "Back", settingsScreenMain);
}

function toggleSilly() {
    if (silly)
        silly = false;
    else
        silly = true;
    outputSettingsTexts();
}

//Interface Settings
function interfaceSettingsMenu() {
	setHeader("Interface Settings");
	outputSettingsTexts();
	menu();
	addButton(0, "Time Format", toggleTimeFormat);
	addButton(1, "Measurements", toggleMeasurements);
	addButton(4, "Font", fontSettings);
	addButton(14, "Back", settingsScreenMain);
}

function toggleTimeFormat() {
    if (use12Hours)
        use12Hours = false;
    else
        use12Hours = true;
    outputSettingsTexts();
}

function toggleMeasurements() {
    if (useMetrics)
        useMetrics = false;
    else
        useMetrics = true;
    outputSettingsTexts();
}

//Font settings
function fontSettings() {
    clearOutput();
    outputText("<b>Here, you can change the font and size.</b><br><br>");
    outputText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis nec ipsum fermentum pellentesque. Nam consectetur euismod diam. Proin vitae neque in massa tempor suscipit eget at mi. In hac habitasse platea dictumst. Morbi laoreet erat et sem hendrerit mattis. Cras in mauris vestibulum nunc fringilla condimentum. Nam sed arcu non ipsum luctus dignissim a eget ante. Curabitur dapibus neque at elit iaculis, ac aliquam libero dapibus. Sed non lorem diam. In pretium vehicula facilisis. In euismod imperdiet felis, vitae ultrices magna cursus at. Vivamus orci urna, fringilla ac elementum eu, accumsan vel nunc. Donec faucibus dictum erat convallis efficitur. Maecenas cursus suscipit magna, id dapibus augue posuere ut.<br><br>");
    outputText("Ut urna mauris, posuere a justo sit amet, elementum consequat urna. Donec mattis lorem leo, vitae lacinia velit commodo ac. Aliquam lectus purus, maximus quis dui id, pulvinar porta odio. Nullam et neque sed purus porta tincidunt ut id metus. Sed vehicula, arcu a fermentum dapibus, nisl ante tincidunt nunc, a euismod diam massa id est. Nulla rhoncus dapibus neque, ac tempor erat venenatis ut. Pellentesque ac bibendum quam, ac congue enim. Aenean ipsum nunc, ultrices tincidunt tortor ultrices, dapibus accumsan est. Donec dignissim sodales lacus nec pretium. Praesent porttitor, nisl vel cursus ornare, orci quam molestie ex, ac consequat est risus vitae enim. Suspendisse pulvinar scelerisque rutrum. Sed quis volutpat orci. Duis vulputate egestas risus ac sollicitudin. Maecenas ullamcorper lorem non lectus suscipit, varius suscipit metus mollis.<br><br>");
    outputText("Etiam commodo libero vel metus tempor consequat. Maecenas non massa ac ligula sodales aliquam id et orci. Ut convallis enim massa, eu rhoncus sem elementum id. In tincidunt turpis at tristique rhoncus. Cras vehicula aliquet elit. Nunc varius tincidunt elit, vitae laoreet libero tristique non. Cras vitae congue nisi, vitae accumsan dui. Integer sit amet congue diam. Aliquam accumsan sagittis aliquet. Sed dignissim justo sit amet tincidunt viverra. Integer at purus ut enim blandit rhoncus at id nibh. Vivamus ultricies ornare tempor. Suspendisse consectetur, dolor sit amet tincidunt semper, lorem risus mollis nisl, eu aliquet leo sem nec mauris. Curabitur libero est, varius sit amet est ut, accumsan consequat ante. Proin non nunc dignissim ipsum accumsan semper eu vel velit. Ut malesuada mauris vitae nisi convallis varius.<br><br>");
    menu();
    addButton(0, "Main Font", changeMainFont);
    if (mainFontSizeIndex > 0) addButton(1, "Main Size-", changeMainFontSize, "smaller");
    if (mainFontSizeIndex < mainFontSizeArray.length - 1) addButton(2, "Main Size+", changeMainFontSize, "bigger");
	addButton(3, "Reset Main Font", resetMainFont);
	addButton(4, "Reset Main Size", resetMainFontSize);
    addButton(14, "Back", interfaceSettingsMenu);
}
function changeMainFont() {
    mainFont = window.prompt("Choose a font to use. Note that it'll only work if you have the font installed on your device.", mainFont);
    applyFontSettings();
    fontSettings();
}
function changeMainFontSize(biggerSmaller) {
    if (mainFontSizeIndex == undefined) mainFontSizeIndex = 4; //Fix font size.
    if (biggerSmaller == "bigger") {
        mainFontSizeIndex++;
    }
    else {
        mainFontSizeIndex--;
    }
    //Constrain font size settings
    if (mainFontSizeIndex < 0) mainFontSizeIndex = 0;
    if (mainFontSizeIndex >= mainFontSizeArray.length) mainFontSizeIndex = mainFontSizeArray.length;
    applyFontSettings();
    fontSettings();
}
function resetMainFont() {
	mainFont = "";
	applyFontSettings();
	fontSettings();
}
function resetMainFontSize() {
	mainFontSizeIndex = 6;
	document.getElementById("maintext").style.fontFamily = "Times New Roman";
	applyFontSettings();
	fontSettings();
}
function applyFontSettings() {
    document.getElementById("maintext").style.fontFamily = mainFont + ", serif";
    document.getElementById("maintext").style.fontSize = mainFontSizeArray[mainFontSizeIndex];
}

function kinksToggleMenu() {
	clearOutput();
	outputText("<b>Scat:</b><b> " + (scatEnabled ? "<font color=\"#00C000\">ON</font>" : "<font color=\"#C00000\">OFF</font\">") + "<br>");
	outputText("<b>Gore:</b><b> " + (goreEnabled ? "<font color=\"#00C000\">ON</font>" : "<font color=\"#C00000\">OFF</font\">") + "<br>");
	outputText("<b>Infestation:</b><b> " + (infestEnabled ? "<font color=\"#00C000\">ON</font>" : "<font color=\"#C00000\">OFF</font\">") + "<br>");
	outputText("<b>Plushification:</b><b> " + (plushifyEnabled ? "<font color=\"#00C000\">ON</font>" : "<font color=\"#C00000\">OFF</font\">") + "<br>");
	outputText("<b>Bestiality:</b><b> " + (bestialityEnabled ? "<font color=\"#00C000\">ON</font>" : "<font color=\"#C00000\">OFF</font\">") + "<br>");
	menu();
	addButton(0, "Toggle Scat", toggleKink, "scat");
	addButton(1, "Toggle Gore", toggleKink, "gore");
	addButton(2, "Toggle Infest", toggleKink, "infest");
	addButton(3, "Toggle Plushify", toggleKink, "plushify");
	addButton(4, "Toggle Bestiality", toggleKink, "bestiality");
	addButton(14, "Back", settingsScreenMain);
}
function toggleKink(param) {
	if (param == "scat") {
		scatEnabled == true ? scatEnabled = false : scatEnabled = true;
	}
	if (param == "gore") {
		goreEnabled == true ? goreEnabled = false : goreEnabled = true;
	}
	if (param == "infest") {
		infestEnabled == true ? infestEnabled = false : infestEnabled = true;
	}
	if (param == "plushify") {
		plushifyEnabled == true ? plushifyEnabled = false : plushifyEnabled = true;
	}
	if (param == "bestiality") {
		bestialityEnabled == true ? bestialityEnabled = false : bestialityEnabled = true;
	}
	kinksToggleMenu();
}