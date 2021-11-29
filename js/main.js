function mainMenu() {
    // Check to see if the user has a bad browser
    if (GetIEVersion() > 0) {
        errorInternetExplorerEwwww();
        return;
    }
	if (typeof(Storage) !== "undefined") {
		// All good to go!
	}
    else {
		errorOldBrowser();
        return;
	}
    Data.loadSettings();
    clearOutput();
	setHeader("Welcome to Nodd!");
    // Load the start screen
    outputText("<center><img src=\"assets/interface/nodd_logo.png\" height=\"300\" width=\"400\"></center><br>");
	outputText("<center>City of Nodd, the RPG (" + gameVersion + ")</center><br>");
	outputText("<center>This game is in very early development and it is recommended that you check out the Noddules first before you play!</center><br>");
	outputText("<center>Please note that this game contains many weird and unusual fetishes! Certain content will be toggleable in the game settings.</center><br>");
	outputText("<center><a href=\"https://www.cityofnodd.com/home\" target=\"_blank\">Visit the City of Nodd website!</a><br><br>");
	outputText("<center><b><u>Suggested Noddules</u></b></center>");
	outputText("<center><a href=\"https://www.cityofnodd.com/induction\" target=\"_blank\">The Induction</a></center>");
	outputText("<center><a href=\"https://www.cityofnodd.com/darkling-row\" target=\"_blank\">Darkling Row</a></center>");
	outputText("<center><a href=\"https://www.cityofnodd.com/outside-inn\" target=\"_blank\">Outside Inn</a></center>");
	menu();
	hideStats();
	hideUpDown();
	hideMenus();
	hideRow(2);
	hideRow(3);	
	playerMenu = mainMenu;
	addButton(0, "New Game", CharCreation.initializeNewGame);
	addButton(1, "Load Game", dataScreen);
    if (gameStarted) addButton(2, "Resume", resumeFromMenu);
    else addButtonDisabled(2, "Resume", "Please load a game or start a new game first.");
	addButton(3, "Settings", settingsScreenMain);
    addButton(4, "Credits", creditsScreen);
}
//---------
// GetIEVersion(), errorOldBrowser(), and errorOldInternetExplorereEwwww()
// Used for browser compatibility checks
//---------


function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    //Check if on Edge
    if (Idx == -1) {
        Idx = sAgent.indexOf("Edge");
    }
    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else 
        return 0; //It is not IE
}

function errorOldBrowser() {
	clearOutput();
	setHeader("Old Browser Detected");
	outputText("<b><u>ERROR</u></b><br>Sorry, your browser is too old to be able to use local storage. Please use a modern browser.");
    hideMenus();
	hideStats();
	hideRow(2);
	hideRow(3);	
	menu();
	addButton(0, "Firefox", window.open, "https://www.mozilla.org/en-CA/firefox/");
	addButton(1, "Chrome", window.open, "https://www.google.com/intl/en_ca/chrome/");
	addButton(2, "MS Edge", window.open, "https://www.microsoft.com/en-us/edge");
	addButton(3, "Opera", window.open, "https://www.opera.com/");
}
function errorInternetExplorerEwwww() {
    clearOutput();
	setHeader("Please Don't Use IE!");
    outputText("<font size=\"64\"><b>:(</b></font><br>By City's eyes! Really? Your Ego Bracer doesn't approve of the browser you're currently using. Internet Explorer? Like, come on, it's a shitty browser! Do the Council a favour and please switch to a better browser like Firefox, Chrome or the new Edge.");
    hideMenus();
	hideStats();
	hideRow(2);
	hideRow(3);	
	menu();
	addButton(0, "Firefox", window.open, "https://www.mozilla.org/en-CA/firefox/");
	addButton(1, "Chrome", window.open, "https://www.google.com/intl/en_ca/chrome/");
	addButton(2, "MS Edge", window.open, "https://www.microsoft.com/en-us/edge");
	addButton(3, "Opera", window.open, "https://www.opera.com/");
}

//------------
// CREDITS
//------------
function creditsScreen() {
    clearOutput();
    setHeader("Game Credits");
    var creditsContents = "";

    creditsContents += "<b><u>Game Creator:</u></b>";
    creditsContents += "<ul>";
    creditsContents += "<li> Kitteh6660</li>";
    creditsContents += "</ul>";

    creditsContents += "<b><u>Game Programming:</u></b>";
    creditsContents += "<ul>";
    creditsContents += "<li> Kitteh6660 (Main coder)</li>";
    creditsContents += "</ul>";
	
    creditsContents += "<b><u>Graphics:</u></b>";
    creditsContents += "<ul>";
    creditsContents += "<li> Kitteh6660 (Interface design)</li>";
    creditsContents += "<li> Slugboner (City of Nodd logo)</li>";
    creditsContents += "</ul>";
	
	creditsContents += "<b><u>Noddules Creator:</u></b>";
    creditsContents += "<ul>";
    creditsContents += "<li> Slugboner</li>";
    creditsContents += "<li> Losian</li>";
    creditsContents += "<li> Salrith</li>";
    creditsContents += "</ul>";
	
	creditsContents += "<b><u>Special Thanks:</u></b>";
    creditsContents += "<ul>";
	creditsContents += "<li> Slugboner, for making the City of Nodd! Thank you!</li>";
    creditsContents += "<li> Fenoxo, the creator of Corruption of Champions & Trials in Tainted Space, for the inspiration!</li>";
    creditsContents += "</ul>";
	
    outputText(creditsContents);
    doNext(mainMenu);
}