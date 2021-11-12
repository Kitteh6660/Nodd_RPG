//Variables that can be set as development progresses.
var gameVersion = "0.1.0";
var saveVersion = 1; //If this value is increased, the saves will be upgraded to accommodate the new changes.
var levelCap = 5; //Determines the maximum level a player can attain. This will be raised as more content gets added over time. Planned to go up to level 50.

//Game settings
var hungerEnabled = true;
var debug = false;
var silly = false;
var hyperHappy = false;
var lowStandards = false;

//Interface settings
var use12Hours = false;
var useMetrics = false;

//Weird Kink settings
var scatEnabled = false;
var goreEnabled = false;
var infestEnabled = false;
var plushifyEnabled = false;

//Store data for fonts
var buttonFont = "Palatino Linotype";
var mainFont = "Times New Roman";
var mainFontSizeArray = ["0.9em", "0.95em", "1em", "1.05em", "1.1em", "1.15em", "1.2em", "1.25em", "1.3em", "1.35em", "1.4em", "1.45em", "1.5em"];
var mainFontSizeIndex = 6; //Goes from 0 to 8. Will be used to pick font size from array.

//Core variables
var player;// = new Player();
var playerMenu = null;
var gameStarted = false; //Determine if game has already started
var shiftKeyDown = false;

//Time
var time = [];
time.days = 0;
time.hours = 0;
time.minutes = 0;