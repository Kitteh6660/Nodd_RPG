Locations = [];
NPCs = [];

moveToLocation = function(callback, time) {
	Time.advanceMinutes(time);
	refreshStats();
	hideUpDown();
	callback();
}

resumeFromMenu = function() {
	showRow(2);
	showRow(3);
	showStats();
	playerMenu = resumeFromMenu;
	switch(player.location) {
		case "spire_outside":
			Locations.Spire.spireOutside();
			break;
		case "spire_entrance":
			Locations.Spire.spireEntrance();
			break;
		case "viviria_district":
			Locations.ViviriaDistrict.enter();
			break;
		case "vorn_district":
			Locations.VornDistrict.enter();
			break;
		case "omnillian_district":
			Locations.OmnillianDistrict.enter();
			break;
		case "umbrasia_district":
			Locations.UmbrasiaDistrict.enter();
			break;
		case "psilysium_district":
			Locations.PsilysiumDistrict.enter();
			break;
		case "morphoria_district":
			Locations.MorphoriaDistrict.enter();
			break;
		case "darkling_row":
			Locations.DarklingRow.enter();
			break;
		case "outside_inn_foyer":
			Locations.OutsideInn.roomLobby();
			break;
		case "outside_inn_restroom":
			Locations.OutsideInn.roomRestroom();
			break;
		case "outside_inn_hallway":
			Locations.OutsideInn.roomHallwayF1();
			break;
		case "outside_inn_hallway2":
			Locations.OutsideInn.roomHallwayF2();
			break;
		case "outside_inn_room6":
			Locations.OutsideInn.roomRoom6();
			break;
		default:
			Locations.DarklingRow.enter();
	}
}