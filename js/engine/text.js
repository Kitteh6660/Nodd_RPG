/**
 * This will clear the text on screen.
 */
clearOutput = function() {
	document.getElementById("maintext").innerHTML = "";
}

/**
 * This will output a text on screen.
 */
outputText = function(text) {
	document.getElementById("maintext").innerHTML += text;
}

function setHeader(text) {
	document.getElementById("headertext").innerHTML = text;
}
function clearHeader() {
	document.getElementById("headertext").innerHTML = "";
}

function outputPic(pic, height, width) {
	document.getElementById("maintext").innerHTML += "<img src=\"assets/pics/" + pic + ".png\" " + (height != undefined ? "height=\"" + height + "\"" : "") + " " + (width != undefined ? "width=\"" + width + "\"" : "") + " style=\"float:left;margin-right:5px\">";
}